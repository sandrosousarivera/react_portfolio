import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({ region: "us-east-1" });

// TUS KEYS CORRECTAS
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "6Le7g80rAAAAAKMZX_KVEgPmSDspFpDpNoyyVtrR";

// Rate limiting en memoria
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora
const MAX_REQUESTS = 1;

// Función para verificar reCAPTCHA con debugging
async function verifyRecaptcha(token) {
  console.log('=== VERIFICANDO RECAPTCHA ===');
  console.log('Token recibido:', token ? 'Presente' : 'Ausente');

  if (!token) {
    console.log('❌ No hay token reCAPTCHA');
    return false;
  }

  try {
    const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    });

    const data = await response.json();
    console.log('Respuesta de Google reCAPTCHA:', {
      success: data.success,
      hostname: data.hostname,
      challenge_ts: data.challenge_ts,
      errors: data['error-codes']
    });

    if (!data.success) {
      console.log('❌ reCAPTCHA falló. Errores:', data['error-codes']);
    } else {
      console.log('✅ reCAPTCHA verificado correctamente');
    }

    return data.success;
  } catch (error) {
    console.error('❌ Error verificando reCAPTCHA:', error.message);
    return false;
  }
}

// Función para verificar rate limiting
function checkRateLimit(clientIP) {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData) {
    rateLimitStore.set(clientIP, { count: 1, timestamp: now });
    return true;
  }

  if (now - clientData.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(clientIP, { count: 1, timestamp: now });
    return true;
  }

  if (clientData.count >= MAX_REQUESTS) {
    return false;
  }

  clientData.count++;
  return true;
}

// Función para sanitizar input
function sanitizeInput(input) {
  if (!input || typeof input !== 'string') return '';

  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/[\r\n\t]/g, ' ')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/(%0A|%0D|%0a|%0d)/gi, '')
    .replace(/(\r\n|\r|\n)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 2000);
}

// Función para validar email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para detectar contenido sospechoso
function containsSuspiciousContent(text) {
  const suspiciousPatterns = [
    /to:\s*[^\s@]+@[^\s@]+/i,
    /cc:\s*[^\s@]+@[^\s@]+/i,
    /bcc:\s*[^\s@]+@[^\s@]+/i,
    /content-type:/i,
    /mime-version:/i,
    /\bmultipart\/mixed\b/i,
    /<script[^>]*>/i,
    /javascript:/i,
    /vbscript:/i,
    /onclick|onload|onerror/i
  ];

  return suspiciousPatterns.some(pattern => pattern.test(text));
}

export const handler = async (event) => {
  console.log('=== EMAIL SERVICE INICIADO ===');
  console.log('Timestamp:', new Date().toISOString());

  const clientIP = event.requestContext?.identity?.sourceIp || 'unknown';
  console.log(`IP del cliente: ${clientIP.substring(0, 8)}***`);

  // CORS con tus dominios
  const allowedOrigins = [
    'https://sandrosousaweb.com',
    'https://www.sandrosousaweb.com',
    'http://localhost:3000',
    'http://localhost:3001'
  ];

  const origin = event.headers?.origin || event.headers?.Origin;
  console.log('Origen de la request:', origin);

  const isOriginAllowed = allowedOrigins.includes(origin);
  console.log('Origen permitido:', isOriginAllowed);

  const corsHeaders = {
    'Access-Control-Allow-Origin': isOriginAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Credentials': 'true'
  };

  if (event.httpMethod === 'OPTIONS') {
    console.log('✅ CORS preflight exitoso');
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  if (event.httpMethod !== 'POST') {
    console.log('❌ Método no permitido:', event.httpMethod);
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  if (!isOriginAllowed) {
    console.log('❌ Origen bloqueado:', origin);
    return {
      statusCode: 403,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Forbidden - unauthorized origin' })
    };
  }

  try {
    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      console.log('❌ Rate limit excedido para IP:', clientIP.substring(0, 8));
      return {
        statusCode: 429,
        headers: corsHeaders,
        body: JSON.stringify({
          error: 'Rate limit exceeded. You can only send 1 email per hour.'
        })
      };
    }

    // Parsear body
    let body;
    try {
      body = JSON.parse(event.body);
      console.log('✅ Body parseado correctamente');
      console.log('Campos recibidos:', Object.keys(body));
    } catch (parseError) {
      console.log('❌ Error parseando JSON:', parseError.message);
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    const { name, email, subject, bodyText, message, recaptchaToken } = body;
    const messageText = bodyText || message;

    console.log('=== DATOS RECIBIDOS ===');
    console.log('Name:', name ? 'Presente' : 'Ausente');
    console.log('Email:', email ? 'Presente' : 'Ausente');
    console.log('Subject:', subject ? 'Presente' : 'Ausente');
    console.log('Message:', messageText ? 'Presente' : 'Ausente');
    console.log('reCAPTCHA Token:', recaptchaToken ? 'Presente' : 'Ausente');

    // VERIFICAR RECAPTCHA PRIMERO
    if (!recaptchaToken) {
      console.log('❌ Token reCAPTCHA faltante');
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'reCAPTCHA token is required' })
      };
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      console.log('❌ Verificación reCAPTCHA falló');
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'reCAPTCHA verification failed' })
      };
    }

    // Validar campos requeridos
    if (!name || !email || !subject || !messageText) {
      console.log('❌ Campos requeridos faltantes');
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing required fields: name, email, subject, message' })
      };
    }

    // Sanitizar inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(messageText);

    // Validaciones
    if (!validateEmail(sanitizedEmail)) {
      console.log('❌ Email inválido');
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    if (containsSuspiciousContent(sanitizedName) ||
        containsSuspiciousContent(sanitizedSubject) ||
        containsSuspiciousContent(sanitizedMessage)) {
      console.log('❌ Contenido sospechoso detectado');
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid content detected' })
      };
    }

    // Validar longitudes
    if (sanitizedName.length > 100 || sanitizedSubject.length > 200 ||
        sanitizedMessage.length < 10 || sanitizedMessage.length > 2000) {
      console.log('❌ Longitudes inválidas');
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid field lengths' })
      };
    }

    // Preparar email
    const emailParams = {
      Destination: {
        ToAddresses: ["sandrosousarivera@gmail.com"]
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Contact Form: ${sanitizedSubject}`
        }
      },
      Source: "sandrosousarivera@gmail.com"
    };

    // Enviar email
    console.log('📧 Enviando email...');
    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    console.log('✅ Email enviado exitosamente');

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        message: "Email sent successfully!",
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('❌ Error general:', error.message);
    console.error('Stack trace:', error.stack);

    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: 'Internal server error',
        timestamp: new Date().toISOString()
      })
    };
  }
};
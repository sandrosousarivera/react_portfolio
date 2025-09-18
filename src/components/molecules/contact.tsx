import React, { useState, useRef } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import Button from "../atoms/Button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateLimitMessage, setRateLimitMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // reCAPTCHA site key - preferably from environment variable
  const RECAPTCHA_SITE_KEY =
    process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
    "6Le7g80rAAAAAEFq3p12UNydkj0eqjEqDxqsK9SO";

  // API Configuration from environment variable
  const API_URL = 
    process.env.REACT_APP_API_URL ||
    "https://s9bvm7zo92.execute-api.us-east-1.amazonaws.com/prod/sendEmail";

  // Debug: Verificar que las variables de entorno estén funcionando
  console.log('Environment variables status:', {
    recaptchaSiteKey: process.env.REACT_APP_RECAPTCHA_SITE_KEY ? 'LOADED' : 'FALLBACK',
    apiUrl: process.env.REACT_APP_API_URL ? 'LOADED' : 'FALLBACK'
  });

  // Rate limiter - 1 envío por hora
  const checkRateLimit = (): boolean => {
    const lastSubmissionTime = localStorage.getItem("lastContactSubmission");
    const currentTime = Date.now();
    const oneHour = 60 * 60 * 1000; // 1 hora en millisegundos

    if (lastSubmissionTime) {
      const timeSinceLastSubmission =
        currentTime - parseInt(lastSubmissionTime);
      if (timeSinceLastSubmission < oneHour) {
        const remainingTime = Math.ceil(
          (oneHour - timeSinceLastSubmission) / (60 * 1000)
        );
        setRateLimitMessage(
          `Please wait ${remainingTime} minutes before sending another message.`
        );
        return false;
      }
    }

    setRateLimitMessage("");
    return true;
  };

  // Validación robusta contra inyecciones e header injection
  const sanitizeInput = (input: string): string => {
    if (!input || typeof input !== "string") return "";

    return (
      input
        .replace(/[<>]/g, "") // Remover < y >
        .replace(/javascript:/gi, "") // Remover javascript:
        .replace(/on\w+=/gi, "") // Remover event handlers
        .replace(/[\r\n\t]/g, " ") // Convertir saltos de línea en espacios
        // eslint-disable-next-line no-control-regex
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remover caracteres de control
        .replace(/(%0A|%0D|%0a|%0d)/gi, "") // Remover CRLF encoded
        .replace(/(\r\n|\r|\n)/g, " ") // Remover line breaks
        .replace(/\s+/g, " ") // Normalizar espacios
        .trim()
        .substring(0, 2000) // Aumentar límite pero mantener control
    );
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (
      emailRegex.test(email) && !email.includes(" ") && email.length <= 254
    );
  };

  const containsSuspiciousContent = (text: string): boolean => {
    const suspiciousPatterns = [
      /script/gi,
      /javascript/gi,
      /vbscript/gi,
      /onload/gi,
      /onclick/gi,
      /href\s*=/gi,
      /src\s*=/gi,
      /<.*>/g,
      /\bexec\b/gi,
      /\beval\b/gi,
      /data:/gi,
      /base64/gi,
      // Email header injection patterns
      /bcc:/gi,
      /cc:/gi,
      /to:/gi,
      /from:/gi,
      /subject:/gi,
      /content-type:/gi,
      /mime-version:/gi,
      /x-mailer:/gi,
      /return-path:/gi,
      /reply-to:/gi,
      // Protocol patterns
      /ftp:/gi,
      /file:/gi,
      /mailto:/gi,
      // Additional injection patterns
      /\bselect\b.*\bfrom\b/gi,
      /\bunion\b.*\bselect\b/gi,
      /\binsert\b.*\binto\b/gi,
      /\bdrop\b.*\btable\b/gi,
      /\balter\b.*\btable\b/gi,
    ];

    return suspiciousPatterns.some((pattern) => pattern.test(text));
  };

  const onRecaptchaChange = (token: string | null) => {
    console.log(
      "reCAPTCHA onChange:",
      token ? "Token received" : "Token cleared"
    );
    setRecaptchaToken(token);
  };

  const onRecaptchaError = () => {
    console.error("reCAPTCHA error occurred");
    toast.error("reCAPTCHA error. Please refresh the page and try again.");
  };

  const onRecaptchaExpired = () => {
    console.log("reCAPTCHA expired");
    setRecaptchaToken(null);
    toast.warning("reCAPTCHA expired. Please verify again.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Verificar rate limit primero
    if (!checkRateLimit()) {
      return false;
    }

    // Verificar reCAPTCHA con validaciones adicionales
    console.log(
      "Validating reCAPTCHA token:",
      recaptchaToken ? "Present" : "Missing"
    );
    if (!recaptchaToken || recaptchaToken.length < 20) {
      toast.error("Please complete the reCAPTCHA verification.");
      return false;
    }

    // Sanitizar inputs
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedSubject = sanitizeInput(formData.subject);
    const sanitizedMessage = sanitizeInput(formData.message);

    // Validaciones básicas con longitudes mínimas
    if (!sanitizedName.trim() || sanitizedName.length < 2) {
      newErrors.name = "Please enter a valid name (minimum 2 characters).";
    }

    if (!sanitizedMessage.trim() || sanitizedMessage.length < 10) {
      newErrors.message = "Please enter a message (minimum 10 characters).";
    }

    if (!sanitizedEmail.trim()) {
      newErrors.email = "Please enter an email.";
    }

    if (!sanitizedSubject.trim() || sanitizedSubject.length < 3) {
      newErrors.subject = "Please enter a subject (minimum 3 characters).";
    }

    // Validación de email
    if (sanitizedEmail && !validateEmail(sanitizedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Verificar contenido sospechoso
    if (containsSuspiciousContent(sanitizedName)) {
      newErrors.name =
        "Name contains invalid characters or potential security risks.";
    }

    if (containsSuspiciousContent(sanitizedSubject)) {
      newErrors.subject =
        "Subject contains invalid characters or potential security risks.";
    }

    if (containsSuspiciousContent(sanitizedMessage)) {
      newErrors.message =
        "Message contains invalid characters or potential security risks.";
    }

    // Validar longitudes mínimas y máximas
    if (sanitizedName.length > 100) {
      newErrors.name = "Name is too long (maximum 100 characters).";
    }

    if (sanitizedSubject.length > 200) {
      newErrors.subject = "Subject is too long (maximum 200 characters).";
    }

    if (sanitizedMessage.length < 10) {
      newErrors.message = "Message is too short (minimum 10 characters).";
    }

    if (sanitizedMessage.length > 2000) {
      newErrors.message = "Message is too long (maximum 2000 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar datos con debugging
      const requestData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        bodyText: sanitizeInput(formData.message),
        recaptchaToken: recaptchaToken,
      };

      console.log(
        "Sending request with reCAPTCHA token:",
        recaptchaToken ? "Valid token" : "No token"
      );
      console.log("Request data keys:", Object.keys(requestData));

      const response = await axios.post(API_URL, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Guardar timestamp para rate limiting
        localStorage.setItem("lastContactSubmission", Date.now().toString());

        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "top-right",
          autoClose: 5000,
        });

        // Limpiar formulario
        setFormData({
          name: "",
          subject: "",
          email: "",
          message: "",
        });

        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setRecaptchaToken(null);
      }
    } catch (error: any) {
      console.error("Error sending email:", error);

      // Debugging detallado del error
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);

        if (
          error.response.status === 400 &&
          error.response.data?.error?.includes("reCAPTCHA")
        ) {
          toast.error("reCAPTCHA verification failed. Please try again.");
        } else {
          toast.error(
            `Server error: ${error.response.data?.error || "Unknown error"}`
          );
        }
      } else if (error.request) {
        console.error("Network error:", error.request);
        toast.error("Network error. Please check your connection.");
      } else {
        console.error("Request setup error:", error.message);
        toast.error("Request failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it! I'm always
            available for new opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-silver mb-8">
                You can contact me through any of these means. I respond to all
                messages within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden dark:bg-dark-golden rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue dark:text-white">Email</h4>
                  <a
                    href="mailto:sandropolixe@gmail.com"
                    className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                  >
                    sandropolixe@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-bottle dark:bg-dark-bottle rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue dark:text-white">
                    Location
                  </h4>
                  <p className="text-silver dark:text-dark-silver">
                    Copenhagen, Denmark.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-blue dark:text-white mb-4">
                Follow me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sandrosousarivera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue dark:bg-dark-blue text-white rounded-xl flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue dark:text-white mb-6">
              Send me a message
            </h3>

            {rateLimitMessage && (
              <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-xl">
                <p className="text-sm">{rateLimitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  Full name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Your name / Company name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Contact E-mail"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Subject"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* reCAPTCHA con debugging completo */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={onRecaptchaChange}
                  onErrored={onRecaptchaError}
                  onExpired={onRecaptchaExpired}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;

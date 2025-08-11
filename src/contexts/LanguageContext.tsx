import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Sandro",
    "hero.subtitle": "Web Developer",
    "hero.description":
      "Creating exceptional digital experiences with modern web technologies. Specialized in React, JavaScript, and frontend development.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact",
    "hero.experience": "Years Experience",
    "hero.projects": "Projects Completed",
    "hero.technologies": "Technologies Mastered",

    // About Section
    "about.title": "About",
    "about.me": "Me",
    "about.description1":
      "Developer passionate about creating exceptional digital experiences.",
    "about.description2":
      '<ul class="space-y-2 text-left list-disc list-inside">' +
      "<li>Deep expertise in React, Tailwind CSS, Node.js, and CMS development.</li>" +
      "<li>Experience with cloud serverless technologies and cloud pipelines.</li>" +
      "<li>Currently pursuing AWS certification to expand cloud expertise.</li>" +
      "<li>Proficient in WordPress, SEO, and copywriting.</li>" +
      "<li>Background in blockchain technology and AI integration.</li>" +
      "<li><strong>Strong focus on user experience and interface design.</strong></li>" +
      "<li><strong>Experienced in leading small teams and managing resources effectively.</strong></li>" +
      "<li>AI enthusiast, using it as a core tool in my workflow - I believe AI hasn't just changed the world, it already has.</li>" +
      "<li>Retail industry background, providing a unique perspective on user and business needs.</li>" +
      "</ul>",
    "about.description3": "",
    "about.focus": "Focus",
    "about.focus.desc": "Modern and responsive frontend development",
    "about.performance": "Performance",
    "about.performance.desc": "Optimization and best practices",
    "about.design": "Design",
    "about.design.desc": "Intuitive and attractive UX/UI",
    "about.maintenance": "Maintenance",
    "about.maintenance.desc": "Clean and scalable code",

    // Projects Section
    "projects.title": "My",
    "projects.subtitle": "Projects",
    "projects.description":
      "A selection of my most recent projects, showcasing my experience in modern web development.",
    "projects.viewDemo": "View Demo",
    "projects.viewCode": "Code",
    "projects.viewMore": "View more on GitHub",

    // Skills Section
    "skills.title": "My",
    "skills.subtitle": "Skills",
    "skills.description":
      "Technologies and tools I master to create modern and scalable web applications.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "skills.collaborate": "Interested in working together?",
    "skills.collaborate.desc":
      "I am always open to new challenges and collaboration opportunities. If you have a project in mind, let's talk!",
    "skills.contact": "Contact",
    "skills.technologies": "Technologies",
    "skills.skills": "Skills",
    "skills.softSkills": "Soft Skills",
    "skills.aiPrompting": "AI Prompting / AI Tools",
    "skills.figma": "Figma",
    "skills.cursor": "Cursor",
    "skills.devEnvs": "Development environments (VSCode, etc.)",
    "skills.designTools": "Design tools: Freeform, Canva, Photoshop",
    "skills.leadership": "Leadership and team management",
    "skills.criticalThinking": "Critical thinking and problem solving",
    "skills.communication": "Effective communication",
    "skills.customerFocus": "100% customer focus and user experience",
    "skills.adaptability": "Adaptability and continuous learning",
    "skills.organization": "Organization and time management",

    // Contact Section
    "contact.title": "Contact",
    "contact.description":
      "Have a project in mind? I'd love to hear about it! I'm always available for new opportunities and collaborations.",
    "contact.info.title": "Contact Information",
    "contact.info.desc":
      "You can contact me through any of these means. I respond to all messages within 24 hours.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.location.value": "Madrid, Spain",
    "contact.follow": "Follow me",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Full name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "How can I help you?",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell me about your project...",
    "contact.form.send": "Send Message",

    // Footer
    "footer.description":
      "Web developer passionate about creating exceptional digital experiences and innovative solutions for the digital world.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.using": "using React & TypeScript",

    // Project titles and descriptions
    "project.ecommerce.title": "E-commerce Platform",
    "project.ecommerce.desc":
      "Complete e-commerce platform with shopping cart, payment system, and admin panel.",
    "project.task.title": "Task Management App",
    "project.task.desc":
      "Task management application with drag & drop, notifications, and real-time synchronization.",
    "project.weather.title": "Weather Dashboard",
    "project.weather.desc":
      "Weather dashboard with interactive maps, detailed forecasts, and geolocation.",
    "project.portfolio.title": "Portfolio Website",
    "project.portfolio.desc":
      "Responsive personal website with dark/light theme and smooth animations.",
    "project.social.title": "Social Media Dashboard",
    "project.social.desc":
      "Social media control panel with metrics analysis and content scheduling.",
    "project.recipe.title": "Recipe Finder",
    "project.recipe.desc":
      "Application to find recipes with advanced filters, favorites, and shopping list.",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "Sandro",
    "hero.subtitle": "Desarrollador Web",
    "hero.description":
      "Creando experiencias digitales excepcionales con tecnologías web modernas. Especializado en React, JavaScript y desarrollo frontend.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contact": "Contactar",
    "hero.experience": "Años de Experiencia",
    "hero.projects": "Proyectos Completados",
    "hero.technologies": "Tecnologías Dominadas",

    // About Section
    "about.title": "Sobre",
    "about.me": "Mí",
    "about.description1":
      "Desarrollador apasionado por crear experiencias digitales excepcionales.",
    "about.description2":
      '<ul class="space-y-2 text-left list-disc list-inside">' +
      "<li>Amplia experiencia en React, Tailwind CSS, Node.js y desarrollo de CMS.</li>" +
      "<li>Experiencia con tecnologías cloud serverless y pipelines cloud.</li>" +
      "<li>Actualmente cursando certificación AWS para expandir conocimientos en cloud.</li>" +
      "<li>Sólido dominio de WordPress, SEO y copywriting.</li>" +
      "<li>Trayectoria en tecnología blockchain e integración de IA.</li>" +
      "<li><strong>Fuerte enfoque en experiencia de usuario y diseño de interfaces.</strong></li>" +
      "<li><strong>Experiencia liderando equipos pequeños y gestionando recursos de forma efectiva.</strong></li>" +
      "<li>Apasionado de la IA, la uso como herramienta central en mi flujo de trabajo - creo que la IA no va a cambiar el mundo, ya lo ha cambiado.</li>" +
      "<li>Trayectoria en retail, lo que me da una perspectiva única sobre las necesidades de usuario y negocio.</li>" +
      "</ul>",
    "about.description3": "",
    "about.focus": "Enfoque",
    "about.focus.desc": "Desarrollo frontend moderno y responsive",
    "about.performance": "Rendimiento",
    "about.performance.desc": "Optimización y mejores prácticas",
    "about.design": "Diseño",
    "about.design.desc": "UX/UI intuitivo y atractivo",
    "about.maintenance": "Mantenimiento",
    "about.maintenance.desc": "Código limpio y escalable",

    // Projects Section
    "projects.title": "Mis",
    "projects.subtitle": "Proyectos",
    "projects.description":
      "Una selección de mis proyectos más recientes, mostrando mi experiencia en desarrollo web moderno.",
    "projects.viewDemo": "Ver Demo",
    "projects.viewCode": "Código",
    "projects.viewMore": "Ver más en GitHub",

    // Skills Section
    "skills.title": "Mis",
    "skills.subtitle": "Habilidades",
    "skills.description":
      "Tecnologías y herramientas que domino para crear aplicaciones web modernas y escalables.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "skills.collaborate": "¿Interesado en trabajar juntos?",
    "skills.collaborate.desc":
      "Siempre estoy abierto a nuevos desafíos y oportunidades de colaboración. Si tienes un proyecto en mente, ¡hablemos!",
    "skills.contact": "Contactar",
    "skills.technologies": "Tecnologías",
    "skills.skills": "Habilidades",
    "skills.softSkills": "Habilidades blandas",
    "skills.aiPrompting": "AI Prompting / Herramientas de IA",
    "skills.figma": "Figma",
    "skills.cursor": "Cursor",
    "skills.devEnvs": "Entornos de desarrollo (VSCode, etc.)",
    "skills.designTools": "Herramientas de diseño: Freeform, Canva, Photoshop",
    "skills.leadership": "Liderazgo y gestión de equipos",
    "skills.criticalThinking": "Pensamiento crítico y resolución de problemas",
    "skills.communication": "Comunicación efectiva",
    "skills.customerFocus": "Enfoque 100% al cliente y experiencia de usuario",
    "skills.adaptability": "Adaptabilidad y aprendizaje continuo",
    "skills.organization": "Organización y gestión del tiempo",

    // Contact Section
    "contact.title": "Contacto",
    "contact.description":
      "¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él! Estoy siempre disponible para nuevas oportunidades y colaboraciones.",
    "contact.info.title": "Información de Contacto",
    "contact.info.desc":
      "Puedes contactarme a través de cualquiera de estos medios. Respondo a todos los mensajes en menos de 24 horas.",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.location.value": "Madrid, España",
    "contact.follow": "Sígueme",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.name": "Nombre completo",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "¿En qué puedo ayudarte?",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Cuéntame sobre tu proyecto...",
    "contact.form.send": "Enviar Mensaje",

    // Footer
    "footer.description":
      "Desarrollador web apasionado por crear experiencias digitales excepcionales y soluciones innovadoras para el mundo digital.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.madeWith": "Hecho con",
    "footer.using": "usando React & TypeScript",

    // Project titles and descriptions
    "project.ecommerce.title": "Plataforma E-commerce",
    "project.ecommerce.desc":
      "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.",
    "project.task.title": "App de Gestión de Tareas",
    "project.task.desc":
      "Aplicación de gestión de tareas con drag & drop, notificaciones y sincronización en tiempo real.",
    "project.weather.title": "Dashboard Meteorológico",
    "project.weather.desc":
      "Dashboard meteorológico con mapas interactivos, pronósticos detallados y geolocalización.",
    "project.portfolio.title": "Sitio Web Portfolio",
    "project.portfolio.desc":
      "Sitio web personal responsive con tema oscuro/claro y animaciones suaves.",
    "project.social.title": "Dashboard de Redes Sociales",
    "project.social.desc":
      "Panel de control para redes sociales con análisis de métricas y programación de contenido.",
    "project.recipe.title": "Buscador de Recetas",
    "project.recipe.desc":
      "Aplicación para encontrar recetas con filtros avanzados, favoritos y lista de compras.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    if (lang === language) return;

    setIsTransitioning(true);

    // Fade out effect
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem("language", lang);

      // Fade in effect
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        isTransitioning,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

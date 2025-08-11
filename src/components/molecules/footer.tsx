import React from "react";
import { Heart, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import TranslatedText from "../atoms/TranslatedText";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue dark:bg-dark-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-golden to-carmin dark:from-dark-golden dark:to-dark-carmin rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">
                <TranslatedText translationKey="hero.title" />
              </span>
            </div>
            <p className="text-silver dark:text-dark-silver mb-6 max-w-md">
              <TranslatedText translationKey="footer.description" />
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bottle dark:bg-dark-bottle text-white rounded-lg flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bottle dark:bg-dark-bottle text-white rounded-lg flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bottle dark:bg-dark-bottle text-white rounded-lg flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <TranslatedText translationKey="footer.quickLinks" />
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  <TranslatedText translationKey="nav.home" />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  <TranslatedText translationKey="nav.about" />
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  <TranslatedText translationKey="nav.projects" />
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  <TranslatedText translationKey="nav.skills" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <TranslatedText translationKey="footer.contact" />
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:sandro@example.com"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  sandro@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-silver dark:text-dark-silver">
                <TranslatedText translationKey="contact.location.value" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-silver dark:border-dark-silver pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver dark:text-dark-silver text-sm">
              © 2024 <TranslatedText translationKey="hero.title" />.{" "}
              <TranslatedText translationKey="footer.rights" />
            </p>
            <p className="text-silver dark:text-dark-silver text-sm flex items-center mt-4 md:mt-0">
              <TranslatedText translationKey="footer.madeWith" />{" "}
              <Heart className="w-4 h-4 mx-1 text-carmin dark:text-dark-carmin" />{" "}
              <TranslatedText translationKey="footer.using" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

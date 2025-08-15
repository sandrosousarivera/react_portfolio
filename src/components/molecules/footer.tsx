import React from "react";
import { Heart, Github, Linkedin, Twitter } from "lucide-react";
// translations removed — static English

const Footer: React.FC = () => {
  // language removed

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
              <span className="text-xl font-bold">Sandro</span>
            </div>
            <p className="text-silver dark:text-dark-silver mb-6 max-w-md">
              Web developer passionate about creating exceptional digital
              experiences and innovative solutions for the digital world.
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
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
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
                Madrid, Spain
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-silver dark:border-dark-silver pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver dark:text-dark-silver text-sm">
              © 2024 Sandro. All rights reserved.
            </p>
            <p className="text-silver dark:text-dark-silver text-sm flex items-center mt-4 md:mt-0">
              Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-carmin dark:text-dark-carmin" />{" "}
              using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import TranslatedText from "../atoms/TranslatedText";
import Button from "../atoms/Button";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            <TranslatedText translationKey="contact.title" />
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto">
            <TranslatedText translationKey="contact.description" />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue dark:text-white mb-6">
                <TranslatedText translationKey="contact.info.title" />
              </h3>
              <p className="text-gray-600 dark:text-silver mb-8">
                <TranslatedText translationKey="contact.info.desc" />
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden dark:bg-dark-golden rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue dark:text-white">
                    <TranslatedText translationKey="contact.email" />
                  </h4>
                  <a
                    href="mailto:sandro@example.com"
                    className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                  >
                    sandro@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-carmin dark:bg-dark-carmin rounded-xl flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue dark:text-white">
                    <TranslatedText translationKey="contact.phone" />
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-bottle dark:bg-dark-bottle rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue dark:text-white">
                    <TranslatedText translationKey="contact.location" />
                  </h4>
                  <p className="text-silver dark:text-dark-silver">
                    <TranslatedText translationKey="contact.location.value" />
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-blue dark:text-white mb-4">
                <TranslatedText translationKey="contact.follow" />
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue dark:bg-dark-blue text-white rounded-xl flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue dark:bg-dark-blue text-white rounded-xl flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue dark:bg-dark-blue text-white rounded-xl flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue dark:text-white mb-6">
              <TranslatedText translationKey="contact.form.title" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  <TranslatedText translationKey="contact.form.name" />
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white"
                  placeholder={t("contact.form.name.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  <TranslatedText translationKey="contact.form.email" />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white"
                  placeholder={t("contact.form.email.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  <TranslatedText translationKey="contact.form.subject" />
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white"
                  placeholder={t("contact.form.subject.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
                >
                  <TranslatedText translationKey="contact.form.message" />
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white resize-none"
                  placeholder={t("contact.form.message.placeholder")}
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                <TranslatedText translationKey="contact.form.send" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

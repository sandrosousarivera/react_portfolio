import React, { useState } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import Button from "../atoms/Button";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your/your company name.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter an email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please, enter a valid Email.";
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
      const apiUrl =
        "https://s9bvm7zo92.execute-api.us-east-1.amazonaws.com/prod/sendEmail";

      // Usar axios exactamente como en vanilla JS
      const requestData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        bodyText: formData.message,
      };

      const response = await axios.post(apiUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Message successfully sent!!");

        // Limpiar formulario
        setFormData({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Message not sent, try Emailing me manually.");
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
    </section>
  );
};

export default Contact;

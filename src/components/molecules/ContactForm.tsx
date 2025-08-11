import React, { useState } from "react";
import Button from "../atoms/Button";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = "",
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
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
    onSubmit(formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg ${className}`}
    >
      <h3 className="text-2xl font-bold text-blue dark:text-white mb-6">
        Send me a message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
          >
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white"
            placeholder="How can I help you?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-silver mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden focus:border-transparent bg-white dark:bg-gray-700 text-blue dark:text-white resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

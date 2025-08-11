import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  phone,
  location,
  className = "",
}) => {
  const contactItems = [
    {
      icon: <Mail className="text-white" size={24} />,
      bgColor: "bg-golden dark:bg-dark-golden",
      title: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: <Phone className="text-white" size={24} />,
      bgColor: "bg-carmin dark:bg-dark-carmin",
      title: "Phone",
      value: phone,
      href: `tel:${phone}`,
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      bgColor: "bg-bottle dark:bg-dark-bottle",
      title: "Location",
      value: location,
      href: undefined,
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center`}
          >
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-blue dark:text-white">
              {item.title}
            </h4>
            {item.href ? (
              <a
                href={item.href}
                className="text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-silver dark:text-dark-silver">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

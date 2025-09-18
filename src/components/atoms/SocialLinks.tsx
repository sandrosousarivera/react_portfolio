import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface SocialLink {
  platform: "github" | "linkedin" | "twitter";
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  variant?: "default" | "footer";
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  variant = "default",
  className = "",
}) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github size={20} />;
      case "linkedin":
        return <Linkedin size={20} />;
      case "twitter":
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  const getVariantClasses = () => {
    if (variant === "footer") {
      return "text-silver dark:text-dark-silver hover:text-golden dark:hover:text-dark-golden transition-colors duration-300";
    }
    return "w-12 h-12 bg-blue dark:bg-dark-blue text-white rounded-xl flex items-center justify-center hover:bg-golden dark:hover:bg-dark-golden transition-colors duration-300";
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={getVariantClasses()}
        >
          {getIcon(link.platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  className = "",
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
        {title}{" "}
        {subtitle && (
          <span className="text-golden dark:text-dark-golden">{subtitle}</span>
        )}
      </h2>
      <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto mb-8"></div>
      {description && (
        <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

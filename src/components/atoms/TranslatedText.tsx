import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

interface TranslatedTextProps {
  translationKey: string;
  className?: string;
  as?: React.ElementType;
  dangerouslySetInnerHTML?: boolean;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({
  translationKey,
  className = "",
  as: Component = "span",
  dangerouslySetInnerHTML = false,
}) => {
  const { t, isTransitioning } = useLanguage();

  const transitionClasses = `language-transition ${
    isTransitioning ? "fade-out" : "fade-in"
  }`;

  if (dangerouslySetInnerHTML) {
    return React.createElement(Component, {
      className: `${transitionClasses} ${className}`,
      dangerouslySetInnerHTML: { __html: t(translationKey) },
    });
  }

  return React.createElement(Component, {
    className: `${transitionClasses} ${className}`,
    children: t(translationKey),
  });
};

export default TranslatedText;

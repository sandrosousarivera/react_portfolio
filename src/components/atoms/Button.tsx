import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const baseClasses =
    "font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden dark:focus:ring-dark-golden";

  const variantClasses = {
    primary:
      "bg-golden text-white dark:text-blue hover:bg-carmin dark:hover:bg-dark-carmin shadow-lg",
    secondary:
      "border-2 border-silver dark:border-dark-silver text-silver dark:text-dark-silver hover:bg-silver dark:hover:bg-dark-silver hover:text-blue dark:hover:text-dark-blue",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

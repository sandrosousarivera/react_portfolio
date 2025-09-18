import React from "react";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

const Chip: React.FC<ChipProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const baseClasses =
    "px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300";

  const variantClasses = {
    default: "bg-bottle dark:bg-dark-bottle text-white",
    outline:
      "border border-bottle dark:border-dark-bottle text-bottle dark:text-dark-bottle hover:bg-bottle dark:hover:bg-dark-bottle hover:text-white",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <span className={classes}>{children}</span>;
};

export default Chip;

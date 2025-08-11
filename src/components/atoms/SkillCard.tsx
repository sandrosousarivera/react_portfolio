import React from "react";

interface SkillCardProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  level,
  icon,
  className = "",
}) => {
  const getLevelColor = (level: number) => {
    if (level >= 90) return "bg-golden dark:bg-dark-golden";
    if (level >= 80) return "bg-carmin dark:bg-dark-carmin";
    if (level >= 70) return "bg-bottle dark:bg-dark-bottle";
    return "bg-silver dark:bg-dark-silver";
  };

  return (
    <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          {icon && (
            <span
              className="text-golden dark:text-dark-golden"
              style={{ width: "24px", height: "24px", display: "inline-block" }}
            >
              {icon}
            </span>
          )}
          <span className="font-medium text-blue dark:text-white">{name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-silver">{level}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getLevelColor(
            level
          )}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Button from "../atoms/Button";
import Chip from "../atoms/Chip";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  icon,
  liveUrl,
  githubUrl,
  className = "",
}) => {
  return (
    <div
      className={`bg-white dark:bg-dark-blue rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 flex flex-col h-full ${className}`}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-golden dark:text-dark-golden mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-blue dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-silver mb-4 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Chip key={index}>{tech}</Chip>
          ))}
        </div>

        <div className="flex space-x-4 mt-auto">
          {liveUrl && (
            <Button
              href={liveUrl}
              variant="primary"
              size="sm"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              View Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              href={githubUrl}
              variant="secondary"
              size="sm"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <Github size={16} />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

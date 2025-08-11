import React from "react";
import {
  ShoppingCart,
  CheckSquare,
  Cloud,
  Briefcase,
  BarChart3,
  ChefHat,
  ExternalLink,
  Github,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import TranslatedText from "../atoms/TranslatedText";
import Button from "../atoms/Button";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  icon: React.ReactNode;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: "project.ecommerce.title",
    descriptionKey: "project.ecommerce.desc",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"],
    icon: <ShoppingCart size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    titleKey: "project.task.title",
    descriptionKey: "project.task.desc",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    icon: <CheckSquare size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    titleKey: "project.weather.title",
    descriptionKey: "project.weather.desc",
    technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js"],
    icon: <Cloud size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    titleKey: "project.portfolio.title",
    descriptionKey: "project.portfolio.desc",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    icon: <Briefcase size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    titleKey: "project.social.title",
    descriptionKey: "project.social.desc",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    icon: <BarChart3 size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    titleKey: "project.recipe.title",
    descriptionKey: "project.recipe.desc",
    technologies: ["React", "JavaScript", "Spoonacular API", "PWA"],
    icon: <ChefHat size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            Impact Stories
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto mt-8">
            Case-study style descriptions of contributions and results in real
            projects, showcasing problem-solving and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              technologies={project.technologies}
              icon={project.icon}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

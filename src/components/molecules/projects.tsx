import React from "react";
import {
  ShoppingCart,
  CheckSquare,
  Cloud,
  Briefcase,
  BarChart3,
  ChefHat,
} from "lucide-react";
import ImpactStoryCard from "./ImpactStoryCard";

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
    titleKey: "E-commerce Platform",
    descriptionKey:
      "Built a scalable e-commerce platform featuring shopping cart, secure payments, and an admin dashboard. Optimized checkout flow and improved load times, resulting in a measurable increase in conversion rates.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"],
    icon: <ShoppingCart size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    titleKey: "Task Management App",
    descriptionKey:
      "Developed a task management application with real-time collaboration, drag-and-drop functionality, and seamless integration with popular calendar apps. Enhanced team productivity by providing a clear overview of tasks and deadlines.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    icon: <CheckSquare size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    titleKey: "Weather Dashboard",
    descriptionKey:
      "Created a weather dashboard that provides real-time weather updates, forecasts, and severe weather alerts. Integrated with the OpenWeather API and utilized Chart.js for visualizing weather patterns.",
    technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js"],
    icon: <Cloud size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    titleKey: "Portfolio Website",
    descriptionKey:
      "Designed and developed a personal portfolio website to showcase my projects, skills, and experience. Implemented a blog section for sharing insights and tutorials. Focused on performance optimization and SEO best practices.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    icon: <Briefcase size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    titleKey: "Social Media Dashboard",
    descriptionKey:
      "Built a social media dashboard for tracking engagement, follower growth, and post performance across multiple platforms. Enabled data-driven decision-making for social media strategies.",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    icon: <BarChart3 size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    titleKey: "Recipe Finder App",
    descriptionKey:
      "Developed a recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and cooking time. Integrated the Spoonacular API and implemented PWA features for offline access.",
    technologies: ["React", "JavaScript", "Spoonacular API", "PWA"],
    icon: <ChefHat size={32} />,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <ImpactStoryCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;

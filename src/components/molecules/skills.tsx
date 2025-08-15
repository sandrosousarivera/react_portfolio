import React from "react";
// translations removed — content is static English
import SkillCard from "../atoms/SkillCard";

interface Technology {
  name: string;
  level: number;
}

const technologies: Technology[] = [
  // Frontend Development
  { name: "React", level: 90 },
  { name: "WordPress Development", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "UI/UX Design", level: 80 },
  { name: "Responsive Design & Accessibility", level: 80 },
  { name: "Figma Prototyping & UI Design", level: 80 },
  { name: "SEO Strategy & Optimization", level: 80 },
  { name: "REST API Design & Integration", level: 75 },
  { name: "Performance Optimization", level: 65 },

  // Backend & Infrastructure
  { name: "Serverless Architectures", level: 70 },
  { name: "Node.js", level: 40 },
  { name: "Containerization (Docker)", level: 40 },
  { name: "Python", level: 30 },

  // Cloud & DevOps
  { name: "AWS (Certified Cloud Practitioner)", level: 80 },
  { name: "Google Cloud Platform", level: 75 },
  { name: "CI/CD Pipelines", level: 65 },
  { name: "Elastic Stack (Certified)", level: 60 },

  // AI & Emerging Tech
  { name: "Prompt Engineering for AI Tools", level: 90 },
  { name: "AI Integration in Products", level: 70 },
  { name: "Blockchain Fundamentals", level: 65 },

  // Business & Strategy
  { name: "Small Team Leadership", level: 80 },
  { name: "Strategic Product Planning", level: 80 },
  { name: "Stakeholder Communication", level: 80 },
  { name: "Feature Conceptualization & Roadmapping", level: 80 },
  { name: "Agile / Scrum Practices", level: 75 },
  { name: "Macroeconomics & International Trading", level: 70 },
  { name: "Copywriting", level: 65 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            Key Skills & Certifications
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto mt-8">
            Highlighting expertise across Frontend, Backend, Cloud, AI, and
            Business domains.
          </p>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold text-blue dark:text-white mb-4">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.slice(0, 10).map((tech) => (
                <SkillCard
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue dark:text-white mb-4">
              Backend & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.slice(10, 14).map((tech) => (
                <SkillCard
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue dark:text-white mb-4">
              Cloud & DevOps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.slice(14, 18).map((tech) => (
                <SkillCard
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue dark:text-white mb-4">
              AI & Emerging Tech
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.slice(18, 21).map((tech) => (
                <SkillCard
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue dark:text-white mb-4">
              Business & Strategy
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.slice(21).map((tech) => (
                <SkillCard
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

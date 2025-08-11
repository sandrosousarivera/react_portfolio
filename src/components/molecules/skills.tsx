import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import TranslatedText from "../atoms/TranslatedText";
import SkillCard from "../atoms/SkillCard";

interface Technology {
  name: string;
  level: number;
}

const technologies: Technology[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git", level: 90 },
  { name: "AWS", level: 70 },
  { name: "WordPress", level: 100 },
  { name: "Node.js", level: 85 },
];

const skills = [
  "skills.aiPrompting",
  "skills.figma",
  "skills.cursor",
  "skills.devEnvs",
  "skills.designTools",
];

const softSkills = [
  "skills.leadership",
  "skills.criticalThinking",
  "skills.communication",
  "skills.customerFocus",
  "skills.adaptability",
  "skills.organization",
];

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            Key Skills & Certifications
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto mt-8">
            Highlighting expertise in React, Tailwind CSS, Git, Figma, AI
            tooling, Google Cloud, AWS Certified Cloud Practitioner, and Elastic
            Certified Engineer.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} level={tech.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import ImpactStoryCard from "./ImpactStoryCard";
import protogenImage from "../../assets/protogen.png";
import sysreviewImage from "../../assets/sysreview.jpeg";

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
            Here you can see in what I've been involved professionally in the
            last 2 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <ImpactStoryCard
            title="ProtoGen — Erudita (Private)"
            image={protogenImage}
            imageAlt="ProtoGen — Interface (anonymous)"
            role="Co-frontend developer (secondary)"
            year="2023"
            problem="Need for a complete SaaS platform to meet the needs of the targeted demographic."
            contribution="Co-conceptualized the product with the CTO and CEO, designed the full UI and user flows, and implemented part of the frontend as one of two frontend developers."
            outcome="Delivered a robust, usable solution that improved researchers processes' efficiency, allowing them to quickly create protocol drafts; technical details and code are available under NDA."
            technologies={["React", "Tailwind", "Design", "UX"]}
            requestInfoEmail="your-email@example.com"
            requestNDAEmail="your-email@example.com"
            note="Note: The code is property of Erudita and cannot be shared publicly. A technical summary can be provided under NDA."
          />
          <ImpactStoryCard
            title="SysReviewPRO — Erudita (Private)"
            image={sysreviewImage}
            imageAlt="SysReviewPRO — Interface (anonymous)"
            role="Frontend developer, project owner."
            year="2025"
            problem="Need for a complete SaaS platform to meet the needs of the targeted demographic."
            contribution="Co-conceptualized the product with the CTO and CEO, designed the full UI and user flows, and fully implemented the frontend as the only frontend developer."
            outcome="Delivered a robust, usable solution that improved researchers processes' efficiency, allowing them to quickly create Systematic Reviews; technical details and code are available under NDA."
            technologies={["React", "Tailwind", "Design", "UX"]}
            requestInfoEmail="your-email@example.com"
            requestNDAEmail="your-email@example.com"
            note="Note: The code is property of Erudita and cannot be shared publicly. A technical summary can be provided under NDA."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

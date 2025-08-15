import React from "react";
import screenshot from "../../assets/profile1.jpeg";

const ImpactStoryCard: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto bg-white dark:bg-dark-blue rounded-xl shadow-md overflow-hidden">
      <img
        src={screenshot}
        alt="ProtoGen — Interface (anonymous)"
        className="w-full h-44 object-cover"
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-blue dark:text-white">
            ProtoGen — Erudita (Private)
          </h3>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            Private
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-600 dark:text-silver">
          Role: Co-frontend developer (secondary) · 2023
        </p>

        <div className="mt-4 text-sm text-gray-700 dark:text-silver space-y-2">
          <p>
            <strong>Problem:</strong> Need for an internal prototyping and
            management tool with strict privacy and performance requirements.
          </p>
          <p>
            <strong>My contribution:</strong> Co-conceptualized the product with
            the CTO and CEO, designed the full UI and user flows, and
            implemented part of the frontend as one of two frontend developers.
          </p>
          <p>
            <strong>Outcome:</strong> Delivered a robust, usable solution that
            improved product teams' efficiency; technical details and code are
            available under NDA.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs bg-golden text-white px-2 py-1 rounded">
            React
          </span>
          <span className="text-xs bg-carmin text-white px-2 py-1 rounded">
            Tailwind
          </span>
          <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
            Design
          </span>
          <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
            UX
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="mailto:your-email@example.com?subject=Interest in ProtoGen - Erudita"
            className="inline-block px-4 py-2 bg-blue text-white rounded hover:opacity-90"
          >
            Request more info
          </a>

          <a
            href="mailto:your-email@example.com?subject=Request NDA - ProtoGen"
            className="px-4 py-2 border border-golden text-golden rounded hover:bg-golden/10 dark:border-dark-golden dark:text-dark-golden"
          >
            Request NDA
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Note: The code is property of Erudita and cannot be shared publicly. A
          technical summary can be provided under NDA.
        </p>
      </div>
    </article>
  );
};

export default ImpactStoryCard;

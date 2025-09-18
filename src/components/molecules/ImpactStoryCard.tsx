import React from "react";

interface ImpactStoryCardProps {
  title: string;
  image: string;
  imageAlt: string;
  role: string;
  year: string;
  problem: string;
  contribution: string;
  outcome: string;
  technologies: string[];
  requestInfoEmail: string;
  requestNDAEmail: string;
  note: string;
}

const ImpactStoryCard: React.FC<ImpactStoryCardProps> = ({
  title,
  image,
  imageAlt,
  role,
  year,
  problem,
  contribution,
  outcome,
  technologies,
  requestInfoEmail,
  requestNDAEmail,
  note,
}) => {
  return (
    <article className="max-w-3xl mx-auto bg-white dark:bg-dark-blue rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-44 object-cover object-top"
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-blue dark:text-white">
            {title}
          </h3>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            Private
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-600 dark:text-silver">
          Role: {role} · {year}
        </p>

        <div className="mt-4 text-sm text-gray-700 dark:text-silver space-y-2">
          <p>
            <strong>Problem:</strong> {problem}
          </p>
          <p>
            <strong>My contribution:</strong> {contribution}
          </p>
          <p>
            <strong>Outcome:</strong> {outcome}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded ${
                index < 2
                  ? index === 0
                    ? "bg-golden text-white"
                    : "bg-carmin text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={`mailto:${requestInfoEmail}?subject=Interest in ${title}`}
            className="inline-block px-4 py-2 bg-blue text-white rounded hover:opacity-90"
          >
            Request more info
          </a>

          <a
            href={`mailto:${requestNDAEmail}?subject=Request NDA - ${title}`}
            className="px-4 py-2 border border-golden text-golden rounded hover:bg-golden/10 dark:border-dark-golden dark:text-dark-golden"
          >
            Request NDA
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">{note}</p>
      </div>
    </article>
  );
};

export default ImpactStoryCard;

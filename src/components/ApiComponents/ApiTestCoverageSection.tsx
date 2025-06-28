import React from "react";
import { ApiTestCoverageProps } from "../../data/projectsData";

const ApiTestCoverageSection: React.FC<ApiTestCoverageProps> = ({
  testing,
}) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-dark-accent mb-6">
        API Testing & Documentation Tools
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-lg text-subtle-text leading-relaxed space-y-4">
        <p>{testing.description}</p>
        <ul className="list-disc pl-6 space-y-2">
          {testing.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        {testing.docsLink && (
          <a
            href={testing.docsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium block mt-4"
          >
            📖 View API Docs
          </a>
        )}
      </div>
    </section>
  );
};

export default ApiTestCoverageSection;

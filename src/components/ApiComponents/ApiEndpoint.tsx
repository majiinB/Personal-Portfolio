import React from "react";
import { ApiEndpointsSectionProps } from "../data/projectsData";

const ApiEndpointsSection: React.FC<ApiEndpointsSectionProps> = ({
  endpoints,
}) => {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-dark-accent mb-6">
        API Endpoints Documentation
      </h2>

      <div className="space-y-4">
        {endpoints.map((endpoint, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl bg-white overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleOpen(index)}
              className="flex justify-between w-full px-6 py-4 text-left text-dark-accent font-semibold hover:bg-primary/10 transition"
            >
              <span>
                <span className="font-mono text-primary mr-2">
                  {endpoint.method}
                </span>
                {endpoint.route}
              </span>
              <span
                className={`transition-transform duration-300 ${
                  openIndexes.includes(index) ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Content */}
            {openIndexes.includes(index) && (
              <div className="px-6 pb-6 pt-2 space-y-4 text-subtle-text">
                <p>{endpoint.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-dark-accent mb-2">
                    📩 Sample Request
                  </h4>
                  <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{endpoint.sampleRequest}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-dark-accent mb-2">
                    📨 Sample Response
                  </h4>
                  <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{endpoint.sampleResponse}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApiEndpointsSection;

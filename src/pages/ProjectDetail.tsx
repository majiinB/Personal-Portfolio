/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentType, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Database,
  Server,
} from "lucide-react";
import { projects } from "../data/projectsData";

const ProjectDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  type DynamicIconProps = {
    icon: ComponentType<{ className?: string }>;
    className?: string;
  };

  const DynamicIcon: React.FC<DynamicIconProps> = ({
    icon: IconBase,
    className,
  }) => {
    return <IconBase className={className} />;
  };

  const { id } = useParams<{ id: string }>();

  const project = projects[id || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-accent mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-bg">
      {/* Header */}
      <header className="bg-dark-accent text-white py-6">
        <div className="container mx-auto px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center space-x-2 text-primary hover:text-soft-highlight transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-mono">Back to Portfolio</span>
          </Link>
          <h1 className="text-4xl font-bold">{project.title}</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Project Overview
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-subtle-text leading-relaxed text-lg">
              {project.overview}
            </p>
            <div className="mt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-dark-accent text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Project Screenshots
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image: string, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-[#FFB703]"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.technologies.map((tech: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
              >
                <h3 className="text-xl font-semibold text-dark-accent mb-3 flex items-center space-x-2">
                  <DynamicIcon
                    icon={tech.icon as ComponentType<{ className?: string }>}
                    className="text-primary text-3xl"
                  />
                  <span> | {tech.name}</span>
                </h3>

                <p className="text-subtle-text leading-relaxed">
                  {tech.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            System Architecture
          </h2>

          {/* Architecture Overview */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-dark-accent mb-4">
              Architecture Overview
            </h3>
            <p className="text-subtle-text leading-relaxed text-lg">
              {project.architecture.description}
            </p>
          </div>

          {/* Components */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {project.architecture.components.map(
              (component: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-accent mb-2">
                        {component.name}
                      </h4>
                      <p className="text-subtle-text leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Database Schema */}
          <div className="bg-dark-accent rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Database className="h-6 w-6 text-primary" />
              <span>ERD Diagram</span>
            </h3>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <img
                src={project.architecture.database.schemaImage}
                alt={`${project.title} ERD diagram`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;

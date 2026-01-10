/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentType, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Database,
  BookOpen,
  Target,
  Lightbulb,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { projects } from "../data/projectsData";
import ApiEndpointsSection from "../components/ApiComponents/ApiEndpoint";
import AuthenticationSecuritySection from "../components/ApiComponents/AuthenticationSecuritySection";
import ApiTestCoverageSection from "../components/ApiComponents/ApiTestCoverageSection";

const ProjectDetail: React.FC = () => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

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
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-soft-highlight">{project.tagline}</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6 flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span>My Journey with This Project</span>
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-subtle-text leading-relaxed text-lg mb-6">
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-4">
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
              {project.documentation && (
                <a
                  href={project.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white border-2 border-dark-accent text-dark-accent px-6 py-3 rounded-lg hover:bg-dark-accent hover:text-white transition-colors duration-300"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Documentation</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6 flex items-center space-x-2">
            <Target className="h-8 w-8 text-primary" />
            <span>The Problem & Motivation</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-dark-accent mb-3">
                Problem I Solved
              </h3>
              <p className="text-subtle-text leading-relaxed">
                {project.context.problem}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-soft-highlight">
              <h3 className="text-xl font-semibold text-dark-accent mb-3">
                Why I Built This
              </h3>
              <p className="text-subtle-text leading-relaxed">
                {project.context.motivation}
              </p>
            </div>
          </div>
          {project.context.targetUsers && (
            <div className="mt-6 bg-gradient-to-r from-primary/10 to-soft-highlight/10 p-6 rounded-xl">
              <p className="text-subtle-text">
                <strong className="text-dark-accent">Target Users:</strong>{" "}
                {project.context.targetUsers}
              </p>
            </div>
          )}
        </section>

        {/* Learning Outcomes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6 flex items-center space-x-2">
            <Lightbulb className="h-8 w-8 text-primary" />
            <span>What I Learned</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.learningOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary"
              >
                <h3 className="text-xl font-semibold text-dark-accent mb-3">
                  {outcome.title}
                </h3>
                <p className="text-subtle-text leading-relaxed mb-4">
                  {outcome.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {outcome.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-dark-accent mb-4 flex items-center space-x-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span>{challenge.title}</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-2">Problem</h4>
                    <p className="text-subtle-text text-sm leading-relaxed">
                      {challenge.problem}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Solution
                    </h4>
                    <p className="text-subtle-text text-sm leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Learned
                    </h4>
                    <p className="text-subtle-text text-sm leading-relaxed">
                      {challenge.learned}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Images Section */}
        {project.images && project.images.length > 0 && (
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
        )}

        {/* Key Decisions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Key Design Decisions
          </h2>
          <div className="space-y-6">
            {project.keyDecisions.map((decision, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-soft-highlight"
              >
                <h3 className="text-xl font-semibold text-dark-accent mb-3 flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-soft-highlight" />
                  <span>{decision.decision}</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-dark-accent mb-1">
                      Reasoning:
                    </h4>
                    <p className="text-subtle-text leading-relaxed">
                      {decision.reasoning}
                    </p>
                  </div>
                  {decision.alternatives && (
                    <div>
                      <h4 className="font-semibold text-dark-accent mb-1">
                        Alternatives Considered:
                      </h4>
                      <p className="text-subtle-text leading-relaxed">
                        {decision.alternatives}
                      </p>
                    </div>
                  )}
                  {decision.tradeoffs && (
                    <div>
                      <h4 className="font-semibold text-dark-accent mb-1">
                        Tradeoffs:
                      </h4>
                      <p className="text-subtle-text leading-relaxed">
                        {decision.tradeoffs}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Endpoint for APIs Section - Now inside Technical Details */}
        {project.category === "Backend API" &&
          project.technicalDetails?.endpoints && <div className="mb-16" />}

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
                  <span>{tech.name}</span>
                </h3>
                <p className="text-subtle-text leading-relaxed">
                  {tech.purpose}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Results & Impact
          </h2>
          <div className="bg-gradient-to-br from-primary/10 to-soft-highlight/10 p-8 rounded-xl shadow-lg">
            <p className="text-subtle-text leading-relaxed text-lg mb-6">
              {project.outcomes.description}
            </p>
            {project.outcomes.metrics && (
              <div>
                <h3 className="text-xl font-semibold text-dark-accent mb-4">
                  Key Achievements:
                </h3>
                <ul className="space-y-2">
                  {project.outcomes.metrics.map((metric, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-subtle-text"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Architecture Section - Now Collapsible Technical Details */}
        {project.technicalDetails && (
          <section className="mb-16">
            <button
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
              className="w-full bg-dark-accent text-white p-6 rounded-xl shadow-lg hover:bg-primary transition-colors duration-300 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Database className="h-8 w-8" />
                <div className="text-left">
                  <h2 className="text-2xl font-bold">Technical Deep Dive</h2>
                  <p className="text-sm text-soft-highlight">
                    Architecture, API endpoints, security, and testing details
                  </p>
                </div>
              </div>
              {showTechnicalDetails ? (
                <ChevronUp className="h-8 w-8" />
              ) : (
                <ChevronDown className="h-8 w-8" />
              )}
            </button>

            {showTechnicalDetails && project.technicalDetails.architecture && (
              <div className="mt-6 space-y-8">
                {/* Architecture */}
                <div>
                  <h3 className="text-2xl font-bold text-dark-accent mb-4">
                    System Architecture
                  </h3>

                  {/* Architecture Overview */}
                  <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                    <h4 className="text-xl font-semibold text-dark-accent mb-4">
                      Architecture Overview
                    </h4>
                    <p className="text-subtle-text leading-relaxed text-lg">
                      {project.technicalDetails.architecture.description}
                    </p>
                  </div>

                  {/* Components */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {project.technicalDetails.architecture.components.map(
                      (component: any, index: number) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-xl shadow-lg border-2 border-dashed border-primary/50 hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <DynamicIcon
                                icon={
                                  component.icon as ComponentType<{
                                    className?: string;
                                  }>
                                }
                                className="text-primary text-3xl"
                              />
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
                  {project.technicalDetails.architecture.database && (
                    <div className="bg-dark-accent rounded-xl p-8">
                      <h4 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
                        <Database className="h-6 w-6 text-primary" />
                        <span>ERD Diagram</span>
                      </h4>

                      <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                        <img
                          src={
                            project.technicalDetails.architecture.database
                              .schemaImage
                          }
                          alt={`${project.title} ERD diagram`}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* API Endpoints */}
                {project.technicalDetails.endpoints && (
                  <ApiEndpointsSection
                    endpoints={project.technicalDetails.endpoints}
                  />
                )}

                {/* Security */}
                {project.technicalDetails.security && (
                  <AuthenticationSecuritySection
                    security={project.technicalDetails.security}
                    title={project.title}
                  />
                )}

                {/* Testing */}
                {project.technicalDetails.testing && (
                  <ApiTestCoverageSection
                    testing={project.technicalDetails.testing}
                  />
                )}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

import React from "react";
import { Database, Server, Cloud, Shield } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-accent mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-subtle-text max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student with a passion for backend
            development and system architecture. My journey in technology is
            driven by curiosity and the desire to build solutions that scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark-accent mb-4">
              My Development Journey
            </h3>
            <p className="text-subtle-text leading-relaxed">
              I started my programming journey fueled by a curiosity about what
              happens behind the scenes of the apps we use every day. That
              curiosity quickly turned into a deeper fascination with how
              systems communicate, manage data, and scale under real-world
              demands. As I gained experience, I became focused not just on
              making things work but on building them with clean, efficient, and
              scalable architectures grounded in best practices.
            </p>
            <p className="text-subtle-text leading-relaxed">
              I’m particularly passionate about developing APIs that handle
              complex business logic, structuring reliable and efficient
              databases, and implementing security measures that stand up to
              practical use cases. Beyond following established patterns, I
              constantly look for opportunities to improve system designs,
              optimize workflows, and simplify complexity wherever possible.
            </p>
            <p className="text-subtle-text leading-relaxed">
              I’m currently pursuing my Computer Science degree while actively
              working on projects that challenge me to apply theory to
              real-world problems, often blending backend, frontend, and
              AI-assisted solutions to create seamless digital experiences.
            </p>
          </div>

          {/* Right side - Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-dark-accent mb-2">
                Database Design
              </h4>
              <p className="text-subtle-text text-sm">
                Designing efficient schemas and optimizing queries for
                performance
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-soft-highlight">
              <Server className="h-12 w-12 text-soft-highlight mb-4" />
              <h4 className="text-lg font-semibold text-dark-accent mb-2">
                API Development
              </h4>
              <p className="text-subtle-text text-sm">
                Building RESTful APIs and RPC endpoints with proper
                documentation
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-dark-accent mb-2">
                Cloud Services
              </h4>
              <p className="text-subtle-text text-sm">
                Deploying and managing applications on Google Cloud and other
                cloud platforms
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-soft-highlight">
              <Shield className="h-12 w-12 text-soft-highlight mb-4" />
              <h4 className="text-lg font-semibold text-dark-accent mb-2">
                Security
              </h4>
              <p className="text-subtle-text text-sm">
                Implementing authentication, authorization, and security best
                practices
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-dark-accent rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">14+</div>
              <div className="text-gray-300 font-mono">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-soft-highlight mb-2">
                41+
              </div>
              <div className="text-gray-300 font-mono">
                Technologies Learned
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-gray-300 font-mono">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-soft-highlight mb-2">
                100%
              </div>
              <div className="text-gray-300 font-mono">Commitment Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

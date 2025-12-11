import React from "react";
import { Code, Coffee } from "lucide-react";
import logo from "../../public/favicon.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-accent text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Server className="h-8 w-8 text-primary" /> */}
              <img src={logo} alt="Logo" className="h-9 w-9 text-primary" />
              <span className="text-xl font-mono font-bold">arthur.dev</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building robust backend solutions with passion and precision.
              Always learning, always coding.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-300 font-mono">
                ~/home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-300 font-mono">
                ~/about
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors duration-300 font-mono">
                ~/skills
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-300 font-mono">
                ~/projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-300 font-mono">
                ~/contact
              </a>
            </nav>
          </div> */}

          {/* Skills Summary */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Core Technologies
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Node.js",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "Java",
                "Express",
                "FastAPI",
                "Google Cloud Platform",
              ].map((tech, index) => (
                <span key={index} className="text-sm text-gray-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Code className="h-4 w-4 text-primary" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-primary" />
          </p>
          <p className="text-sm text-subtle-text mt-2">
            © {new Date().getFullYear()} Arthur Artugue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

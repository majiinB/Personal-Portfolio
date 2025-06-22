import React, { useState, useEffect } from "react";
import {
  Database,
  Server,
  Code,
  Terminal,
  GitBranch,
  Globe,
  Download,
  Github,
  Linkedin,
  Mail,
  Bot,
} from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Backend Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-dark-accent via-dark-accent/90 to-primary/20 pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse-slow">
          <Database className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse-slow delay-700">
          <Server className="h-10 w-10 text-soft-highlight" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse-slow delay-1000">
          <Code className="h-14 w-14 text-primary" />
        </div>
        <div className="absolute bottom-60 right-10 animate-pulse-slow delay-500">
          <Terminal className="h-8 w-8 text-soft-highlight" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Terminal Window */}
          <div className="animate-fadeInUp">
            <div className="bg-gray-900 rounded-lg shadow-2xl border border-primary/30">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 rounded-t-lg flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-300 text-sm font-mono">
                    terminal - arthur@portfolio
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400">
                  <span className="text-primary">arthur@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-soft-highlight">~</span>
                  <span className="text-white">$ who-am-i</span>
                </div>
                <div className="text-white mt-2">
                  Computer Science Student / Software Developer
                </div>

                <div className="text-green-400 mt-4">
                  <span className="text-primary">arthur@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-soft-highlight">~</span>
                  <span className="text-white">$ cat specialization.txt</span>
                </div>
                <div className="text-primary mt-2 text-lg font-bold">
                  {displayText}
                  <span className="animate-ping text-soft-highlight">|</span>
                </div>

                <div className="text-green-400 mt-4">
                  <span className="text-primary">arthur@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-soft-highlight">~</span>
                  <span className="text-white">$ ls skills/</span>
                </div>
                <div className="text-white mt-2 grid grid-cols-2 gap-2">
                  <div className="text-soft-highlight">Java</div>
                  <div className="text-soft-highlight">PHP</div>
                  <div className="text-soft-highlight">Node.js</div>
                  <div className="text-soft-highlight">Dart</div>
                  <div className="text-soft-highlight">Python</div>
                  <div className="text-soft-highlight">PostgreSQL</div>
                  <div className="text-soft-highlight">MongoDB</div>
                  <div className="text-soft-highlight">Firebase</div>
                </div>

                <div className="text-green-400 mt-4">
                  <span className="text-primary">arthur@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-soft-highlight">~</span>
                  <span className="text-white">$ echo $STATUS</span>
                </div>
                <div className="text-green-400 mt-2">
                  Ready to build scalable solutions
                </div>

                <div className="text-green-400 mt-4">
                  <span className="text-primary">arthur@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-soft-highlight">~</span>
                  <span className="text-white animate-ping">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-slideInRight space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Hello, I'm
                <span className="block text-primary">Arthur Artugue</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                A Software Developer and Computer Science student passionate
                about building scalable APIs, real-time systems, and AI-powered
                tools that simplify complex workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                <GitBranch className="h-5 w-5 text-primary" />
                <span className="text-white font-mono">API Development</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                <Database className="h-5 w-5 text-primary" />
                <span className="text-white font-mono">Database Design</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-white font-mono">
                  System Architecture
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-white font-mono">AI Integration</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-3">
                <button className="bg-[#219EBC] hover:bg-[#1a7a94] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white hover:bg-[#219EBC] text-[#8E9AAF] hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white hover:bg-[#219EBC] text-[#8E9AAF] hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white hover:bg-[#219EBC] text-[#8E9AAF] hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Github, ExternalLink, Code, Smartphone, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "ecommerce-api",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "#",
      demo: "#",
      category: "Full-Stack",
      icon: Code,
    },
    {
      id: "ecommerce-api",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "Tailwind CSS", "Zustand"],
      github: "#",
      demo: "#",
      category: "Web App",
      icon: Smartphone,
    },
    {
      id: "ecommerce-api",
      title: "Weather Analytics Dashboard",
      description:
        "A data visualization dashboard that displays weather analytics with interactive charts and real-time weather data from multiple APIs.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Django", "Chart.js", "OpenWeather API"],
      github: "#",
      demo: "#",
      category: "Data Science",
      icon: Database,
    },
    {
      id: "ecommerce-api",
      title: "Machine Learning Model",
      description:
        "A predictive model for stock price analysis using machine learning algorithms with data preprocessing and visualization components.",
      image:
        "https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      github: "#",
      demo: "#",
      category: "Machine Learning",
      icon: Database,
    },
    {
      id: "ecommerce-api",
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      github: "#",
      demo: "#",
      category: "Full-Stack",
      icon: Code,
    },
    {
      id: "ecommerce-api",
      title: "Mobile Fitness Tracker",
      description:
        "A React Native mobile application for fitness tracking with workout planning, progress monitoring, and social features.",
      image:
        "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
      demo: "#",
      category: "Mobile",
      icon: Smartphone,
    },
  ];

  const categories = [
    "All",
    "Full-Stack",
    "Web App",
    "Data Science",
    "Machine Learning",
    "Mobile",
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#023047] mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#219EBC] mx-auto mb-6"></div>
          <p className="text-[#8E9AAF] text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#219EBC] text-white shadow-lg"
                  : "bg-white text-[#8E9AAF] hover:bg-[#219EBC] hover:text-white shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#023047]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/project/${project.id}`}
                      className="bg-[#219EBC] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#219EBC]/80 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="absolute top-4 left-4 bg-[#219EBC] p-2 rounded-lg">
                    <Icon size={20} color="white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#023047] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#8E9AAF] text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#FFB703]/20 text-[#FFB703] px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#8E9AAF] text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-[#8E9AAF] hover:text-[#219EBC] transition-colors duration-200"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-[#8E9AAF] hover:text-[#219EBC] transition-colors duration-200"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

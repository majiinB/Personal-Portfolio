import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Server } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-dark-accent/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Server className="h-8 w-8 text-primary group-hover:text-soft-highlight transition-colors duration-300" />
            <span className="text-white font-mono text-xl font-bold">
              arthur.dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
            >
              ~/home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
            >
              ~/about
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
            >
              ~/skills
            </ScrollLink>
            <ScrollLink
              to="certifications"
              smooth={true}
              duration={500}
              className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
            >
              ~/certifications
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
            >
              ~/projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
            >
              ~/contact
            </ScrollLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4 pt-4">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
              >
                ~/home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
              >
                ~/about
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
              >
                ~/skills
              </ScrollLink>
              <ScrollLink
                to="certifications"
                smooth={true}
                duration={500}
                className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
              >
                ~/certifications
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
              >
                ~/projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors duration-300 font-mono cursor-pointer"
              >
                ~/contact
              </ScrollLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

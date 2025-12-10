import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import { useLocation } from "react-router-dom";
import Certificates from "../components/Certificates";

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scroller.scrollTo(hash.replace("#", ""), {
        // duration: 500,
        // delay: 0,
        // smooth: "easeInOutQuart",
        // offset: -70, // adjust for sticky header height if you have one
      });
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Header />

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="credentials">
        <Certifications />
        <Certificates />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default Home;

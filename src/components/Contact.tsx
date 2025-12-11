import React from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-accent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-subtle-text max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a backend developer for your team, have a
            project in mind, or just want to connect with a fellow developer,
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:arthurartugue392@gmail.com"
                className="flex items-center space-x-4 bg-neutral-bg p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-accent">Email</h4>
                  <p className="text-subtle-text text-sm">
                    arthurartugue392@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 bg-neutral-bg p-6 rounded-xl shadow-md">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-accent">Location</h4>
                  <p className="text-subtle-text text-sm">
                    San Pedro, Laguna, Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="font-semibold text-dark-accent mb-6 text-lg">
                Connect with me on social media
              </h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/majiinB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-accent text-white p-4 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arthur-artugue-6351162b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-accent text-white p-4 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

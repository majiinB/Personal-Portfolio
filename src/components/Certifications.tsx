import React from "react";
import { ExternalLink, Award } from "lucide-react";
import { certifications, categories } from "../data/certificationsData";

const Certifications = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredCertifications =
    activeCategory === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#023047] mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-[#219EBC] mx-auto mb-6"></div>
          <p className="text-[#8E9AAF] text-lg max-w-2xl mx-auto">
            A collection of certificates demonstrating my continuous learning
            and specialization in tech fields.
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

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="absolute top-4 left-4 bg-[#219EBC] p-2 rounded-lg">
                  <Award size={20} color="white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#023047] mb-2">
                  {cert.title}
                </h3>
                <p className="text-[#8E9AAF] text-sm mb-1">
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
                <p className="text-[#8E9AAF] text-sm mb-3">
                  <strong>Date:</strong> {cert.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#FFB703]/20 text-[#FFB703] px-2 py-1 rounded text-xs font-medium">
                    {cert.category}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#8E9AAF] text-sm font-medium">
                    Certificate
                  </span>
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8E9AAF] hover:text-[#219EBC] transition-colors duration-200"
                    aria-label="View Certificate"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

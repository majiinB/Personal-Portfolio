import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "June 2024 - Present",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive UI components and optimized application performance",
        "Participated in code reviews and followed agile development methodologies",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    },
    {
      title: "Teaching Assistant",
      company: "University Computer Science Department",
      location: "On Campus",
      period: "September 2023 - May 2024",
      description: [
        "Assisted students in understanding fundamental programming concepts",
        "Conducted lab sessions for introductory computer science courses",
        "Graded assignments and provided constructive feedback to students",
        "Helped develop course materials and programming exercises",
      ],
      technologies: ["Python", "Java", "Data Structures", "Algorithms"],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "January 2023 - August 2023",
      description: [
        "Built custom websites and web applications for small businesses",
        "Worked directly with clients to understand requirements and deliver solutions",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Provided ongoing maintenance and technical support",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#023047] mb-4">Experience</h2>
          <div className="w-20 h-1 bg-[#219EBC] mx-auto mb-6"></div>
          <p className="text-[#8E9AAF] text-lg max-w-2xl mx-auto">
            My professional journey and hands-on experience in software
            development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#219EBC] hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-[#219EBC] rounded-full border-4 border-white shadow-md hidden md:block"></div>

                <div className="md:ml-20 bg-[#F8F9FA] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#023047] mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-[#219EBC] font-medium mb-2">
                        <ExternalLink size={16} className="mr-2" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="text-[#8E9AAF] text-sm">
                      <div className="flex items-center mb-1">
                        <Calendar size={14} className="mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <ul className="text-[#8E9AAF] space-y-2 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-[#219EBC] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#219EBC]/10 text-[#219EBC] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

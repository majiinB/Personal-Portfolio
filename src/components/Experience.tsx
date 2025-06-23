import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer & API Integrator (School Project)",
      company: "Odyssey",
      location: "Remote",
      period: "February 2025 - May 2025",
      description: [
        "Designed and implemented the backend architecture and database schema for Deck, a productivity app that helps students review through AI-powered flashcards and task management.",
        "Developed a RESTful API using Node.js and Express, handling user authentication, flashcard management, task tracking, AI-based flashcard generation, AI-based quiz generation and AI-based content moderation endpoints.",
        "Integrated AI services for generating flashcards and quizzes based on user-provided topics and materials (PDF).",
        "Designed and managed the Firebase Firestore database structure for secure and efficient data storage.",
        "Collaborated with the mobile development team (Flutter) to integrate backend services into the app, handling API consumption, data fetching, and error management.",
        "Implemented secure authentication and authorization using OAuth 2.0 and JWT tokens.",
      ],
      technologies: [
        "Node.js",
        "Express",
        "Firebase",
        "TypeScript",
        "JWT",
        "OAuth 2.0",
        "Gemini API",
        "Flutter",
      ],
    },
    {
      title: "Graphic Design Team Leader (Commissioned Project)",
      company: "Aral",
      location: "Remote",
      period: "December 2024 - January 2025",
      description: [
        "Led a commissioned project focused on the graphic design and document layout of academic reviewers to improve content readability and presentation.",
        "Communicated directly with the client to gather project requirements, clarify expectations, and address feedback promptly.",
        "Coordinated and supervised a team of designers, ensuring that deliverables met quality standards and client specifications.",
        "Managed project timelines and ensured timely delivery of professionally designed and formatted documents.",
        "Provided revisions based on client feedback and delivered final materials in high-quality PDF format.",
      ],
      technologies: ["Discord", "Google Docs", "Google Sheets"],
    },
    {
      title: "Backend Developer (Commissioned Project)",
      company: "Aqua Fresco Beach Resort",
      location: "Remote",
      period: "June 2024 - July 2024",
      description: [
        "Developed and implemented the backend services for the Aqua Fresco Beach Resort website, including room booking management and transaction processing.",
        "Built RESTful APIs using Express.js for handling room availability, reservation requests, and transaction records.",
        "Integrated PayMongo API for secure online payment processing within the booking system.",
        "Designed and structured the Firebase Firestore database for efficient data management of bookings, payments, and user information.",
        "Provided backend documentation for production use.",
      ],
      technologies: [
        "Express.js",
        "Node.js",
        "Firebase Firestore",
        "PayMongo API",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#023047] mb-4">Experience</h2>
          <div className="w-20 h-1 bg-[#219EBC] mx-auto mb-6"></div>
          <p className="text-[#8E9AAF] text-lg max-w-2xl mx-auto">
            My journey and hands-on experience in software development
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

import { Calendar, MapPin } from "lucide-react";
import { GoOrganization } from "react-icons/go";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company:
        "JP Morgan – Virtual Software Engineering Job Simulation (Forage)",
      location: "Remote",
      period: "December 2025",
      description: [
        "Implemented Kafka integration for real-time transaction processing, ensuring accurate event-driven workflows.",
        "Built transactional services using Spring Data JPA with H2 database for balance updates, entity modeling, and validation.",
        "Exposed REST endpoints to query user balances in JSON, supporting seamless client interactions.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Spring Data JPA",
        "H2 Database",
        "REST API",
      ],
    },
    {
      title: "Web Deployment Coordinator",
      company:
        "University of Makati Educational Development Foundation Inc (UMEDFI)",
      location: "Remote",
      period: "September 2025 - Present",
      description: [
        "Deploy WordPress sites on GoDaddy and manage domains and hosting",
      ],
      technologies: ["GoDaddy", "WordPress"],
    },
    {
      title: "Backend Developer & API Integrator (Academic Project)",
      company: "Odyssey",
      location: "On-site / Remote",
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
    {
      title: "Business Analyst & QA Tester (Academic Project)",
      company: "Odyssey",
      location: "On-site / Remote",
      period: "October 2024 - December 2024",
      description: [
        "Defined the initial concept and narrative direction for 'Through The Woods', a third-person adventure game focusing on character growth and resilience.",
        "Collaborated closely with the team to decide on core gameplay mechanics, level progression, and user experience (UX) flow.",
        "Created comprehensive documentation, including business requirements, user stories, and design rationale to guide the development process.",
        "Designed detailed test plans, use cases, and conducted iterative playtesting sessions to identify and report bugs, gameplay issues, and UX improvement opportunities.",
        "Facilitated team coordination through ClickUp and Discord, ensuring efficient communication, task management, and milestone tracking throughout the academic project.",
      ],
      technologies: [
        "Unity",
        "C#",
        "ClickUp",
        "Discord",
        "Google Docs",
        "Google Sheets",
      ],
    },
    {
      title: "Backend Developer (Academic Projects)",
      company: "Krusty Krab Krew & Odyssey",
      location: "On-site / Remote",
      period: "May 2023 - August 2023 | November 2023 - January 2024",
      description: [
        "Developed and integrated backend logic for two desktop-based Library Management Systems using C# and Java, in collaboration with two different project teams.",
        "Implemented core functionalities including book inventory management, member registration, borrowing and returning processes, and transaction tracking.",
        "Handled database integration and query operations using XAMPP with MariaDB for both applications.",
        "Collaborated with the UX team to determine user interaction flows and feature accessibility within the application.",
        "Participated in debugging, optimization, and testing phases to ensure system reliability and consistency.",
      ],
      technologies: ["C#", "Java", "XAMPP", "MariaDB"],
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
                        <GoOrganization size={16} className="mr-2" />
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

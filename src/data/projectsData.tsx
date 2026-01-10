import { Lock, LucideIcon, BookOpen, Users } from "lucide-react";
import { IconType } from "react-icons";
import { BiMobile } from "react-icons/bi";
import { DiDart, DiNodejs, DiJava } from "react-icons/di";
import { FaRobot, FaUsers, FaBook } from "react-icons/fa";
import {
  SiFirebase,
  SiFlutter,
  SiGooglegemini,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiMariadb,
} from "react-icons/si";
import { TbApi, TbBook, TbBrandCSharp, TbDatabase } from "react-icons/tb";

interface Architecture {
  description: string;
  components: {
    name: string;
    description: string;
    icon: LucideIcon | IconType;
  }[];
  database?: { schemaImage: string };
}

interface Endpoint {
  method: string;
  route: string;
  description: string;
  sampleRequest: string;
  sampleResponse: string;
}

export interface ApiEndpointsSectionProps {
  endpoints: Endpoint[];
}

export interface AuthSecurityProps {
  security: {
    description: string;
    diagram?: string;
  };
  title: string;
}

export interface ApiTestCoverageProps {
  testing: {
    description: string;
    tools: string[];
    docsLink?: string;
  };
}

interface Context {
  problem: string;
  motivation: string;
  targetUsers?: string;
}

interface LearningOutcome {
  title: string;
  description: string;
  skills: string[];
}

interface Challenge {
  title: string;
  problem: string;
  solution: string;
  learned: string;
}

interface KeyDecision {
  decision: string;
  reasoning: string;
  alternatives?: string;
  tradeoffs?: string;
}

interface Outcomes {
  description: string;
  metrics?: string[];
}

interface TechnicalDetails {
  architecture?: Architecture;
  endpoints?: Endpoint[];
  security?: { description: string; diagram?: string };
  testing?: { description: string; tools: string[]; docsLink?: string };
}

interface Project {
  title: string;
  tagline: string;
  description: string;
  overview: string;
  cover_image: string;
  images?: string[];
  category: string;
  icon: LucideIcon | IconType;

  // Intern-focused narrative
  context: Context;
  learningOutcomes: LearningOutcome[];
  challenges: Challenge[];
  keyDecisions: KeyDecision[];

  // Technology with purpose
  technologies: {
    name: string;
    purpose: string;
    icon: IconType | LucideIcon;
  }[];

  // Results
  outcomes: Outcomes;

  // Links
  githubUrl: string;
  demo: string;
  documentation?: string;

  // Optional technical deep-dive
  technicalDetails?: TechnicalDetails;
}

export const categories = [
  "All",
  "Full-Stack",
  "Backend API",
  "Web App",
  "Mobile Development",
  "Desktop App",
];

export const projects: { [key: string]: Project } = {
  "deck-v2": {
    title: "Deck",
    tagline:
      "Led backend development for a full-stack AI-powered study platform built by a team of 5",
    description:
      "A cross-platform productivity app with custom AI microservices combining task management with intelligent study tools",
    overview:
      "As part of a 5-person team, I was responsible for the backend infrastructure of Deck-a comprehensive study platform for students. While the team collaborated on the Flutter mobile app, I designed and built the Node.js AI microservice, architected the Firebase cloud infrastructure, designed the database schema, and integrated Google's Gemini AI for intelligent flashcard generation, quiz creation, and content moderation.",
    cover_image: "/projects/deck-v2/deck-cover-photo.jpg",
    images: [
      "/projects/deck-v2/deck-intro.jpg",
      "/projects/deck-v2/deck-home.jpg",
      "/projects/deck-v2/deck-task-folder.jpg",
      "/projects/deck-v2/deck-add-deck.jpg",
      "/projects/deck-v2/deck-view-deck.jpg",
      "/projects/deck-v2/deck-study.jpg",
      "/projects/deck-v2/deck-quiz.jpg",
      "/projects/deck-ai-api/deck-ai-cover-photo.png",
    ],
    category: "Full-Stack",
    icon: BiMobile,

    context: {
      problem:
        "Students spend hours manually creating flashcards or quizzes for studying, and often struggle to balance study sessions with other tasks and deadlines.",
      motivation:
        "Our team wanted to build something that would genuinely help students while learning modern development practices. I took ownership of the backend, API design, AI integration, cloud infrastructure, and database architecture—allowing me to gain deep expertise in these areas while contributing to a complete product.",
      targetUsers:
        "Students preparing for exams who need efficient study tools and task organization",
    },

    learningOutcomes: [
      {
        title: "Backend & Infrastructure Ownership",
        description:
          "Took full responsibility for backend architecture in a team environment. Designed and implemented the complete backend system including API services, database schema, cloud infrastructure, and AI integration while coordinating with frontend developers",
        skills: [
          "System architecture",
          "API design",
          "Team coordination",
          "Service-oriented architecture",
        ],
      },
      {
        title: "Cross-Platform Mobile Development (Team)",
        description:
          "Collaborated with team members on building the Flutter mobile app, contributing to API integration, data flow architecture, and ensuring smooth communication between frontend and backend systems",
        skills: [
          "Flutter framework",
          "Dart programming",
          "API integration",
          "Data flow management",
        ],
      },
      {
        title: "Backend API Development & AI Integration",
        description:
          "Created a production-ready Node.js microservice from scratch, learning RESTful and RPC API design, authentication middleware, and integrating Google's Gemini AI for intelligent content generation",
        skills: [
          "Node.js + Express",
          "API design patterns",
          "AI API integration",
          "Prompt engineering",
        ],
      },
      {
        title: "Cloud Infrastructure & Database Design",
        description:
          "Architected and implemented Firebase-based cloud infrastructure with real-time data sync, authentication, and storage. Designed relational database schemas with proper normalization",
        skills: [
          "Firebase ecosystem",
          "Real-time databases",
          "Cloud storage",
          "Database modeling",
        ],
      },
      {
        title: "Security & Authentication",
        description:
          "Implemented end-to-end authentication flows using Firebase, secured API endpoints with token verification, and learned about protecting user data across mobile and backend systems",
        skills: [
          "Firebase Authentication",
          "JWT validation",
          "API security",
          "CORS configuration",
        ],
      },
    ],

    challenges: [
      {
        title: "Architecting a Microservices System",
        problem:
          "Coordinating between a mobile app and a separate AI API service meant handling authentication tokens, network errors, and async operations across two independent systems.",
        solution:
          "Designed a clear API contract between services. Created a dedicated API service layer in the mobile app with retry logic and error handling. Used Firebase tokens for cross-service authentication.",
        learned:
          "Microservices add complexity but provide flexibility. Clear API contracts and centralized service layers make integration manageable.",
      },
      {
        title: "Handling Unpredictable AI Responses",
        problem:
          "The AI sometimes returned malformed JSON, unexpected content structures, or hallucinated incorrect information, causing the system to crash or return bad data to users.",
        solution:
          "Implemented multi-layer validation in the backend: JSON schema enforcement and validation for structure, content verification for expected fields, and retry logic when responses failed validation.",
        learned:
          "When working with AI, defensive programming is essential. Always validate AI output before trusting it, and build fallback mechanisms.",
      },
      {
        title: "Managing Data Flow Across Features",
        problem:
          "The app had multiple features (tasks, decks, flashcards) that needed to share user data efficiently without making redundant API calls or losing data between screens.",
        solution:
          "Applied OOP principles by passing data as objects through component hierarchies. Implemented smart caching where API calls only happen on initial load or when data is actually updated, keeping data in scope at the appropriate layer.",
        learned:
          "Good OOP fundamentals and understanding data flow reduces unnecessary API calls and keeps the app responsive. Knowing when to refresh data versus when to reuse it is key.",
      },
      {
        title: "Balancing Features with Real-World Constraints",
        problem:
          "Each AI API call costs money. Without proper limits, users could request massive amounts of content and rack up costs quickly.",
        solution:
          "Implemented input validation constraints to control costs: limited character count for text prompts, capped the maximum number of flashcards per generation request, and restricted quiz items per deck. These hard limits prevent excessive API usage while still providing useful functionality.",
        learned:
          "Real-world constraints like cost require practical solutions. Input validation can be a simple but effective way to control resource usage without complex rate-limiting infrastructure.",
      },
    ],

    keyDecisions: [
      {
        decision: "Separate AI functionality into its own microservice",
        reasoning:
          "Keeping AI operations in a dedicated Node.js backend service meant I could update AI features without rebuilding the mobile app, prevented API keys from being exposed, and allowed independent scaling of compute-intensive operations. This separation also significantly improved our delivery time—with frontend and backend completely decoupled, our team of 5 could work in parallel without blocking each other. Frontend developers could continue building features while the backend team developed and deployed updates without conflicts.",
        alternatives:
          "Could have embedded AI logic directly in Firebase Cloud Functions, but that would tightly couple everything to Firebase.",
        tradeoffs:
          "Added complexity of managing two systems, but gained flexibility, security, parallel development capability, and the ability to reuse the API service for future projects.",
      },
      {
        decision: "Use Flutter instead of native development",
        reasoning:
          "I suggested and pushed for Flutter because using a modern framework would significantly boost our delivery time compared to building everything from scratch. Even though we already knew Java, implementing demanding UI designs from scratch would consume far more time. Flutter's built-in UI components, widgets, and tooling meant we could focus on features rather than building basic UI elements ourselves.",
        alternatives:
          "Could have built with Java (which we already knew), but building modern UI components from scratch would have been time-consuming for our deadlines.",
        tradeoffs:
          "Had to learn a new framework and language (Dart), but the modern tooling, pre-built widgets, and hot-reload features made development significantly faster despite the learning curve.",
      },
      {
        decision: "Use RPC-style endpoints for AI operations",
        reasoning:
          "Operations like 'generate flashcards' or 'moderate content' are actions, not resources. RPC endpoints (e.g., POST /generate/flashcards) felt more intuitive than forcing them into REST patterns.",
        alternatives:
          "Could have used REST with POST /flashcards, but semantically this endpoint doesn't create a flashcard resource—it calls an AI service.",
        tradeoffs:
          "RPC is less standardized than REST, but it made the API's purpose clearer for this specific use case.",
      },
      {
        decision: "Firebase for cloud infrastructure",
        reasoning:
          "Firebase provided authentication, real-time database, and cloud storage without managing servers—perfect for learning full-stack development while staying focused on features.",
        alternatives:
          "Could have used traditional servers (AWS, Heroku), but that would have added DevOps complexity.",
        tradeoffs:
          "Some vendor lock-in, but significantly faster development and integrated authentication across mobile and backend.",
      },
    ],

    technologies: [
      {
        name: "Flutter",
        purpose:
          "Built the cross-platform mobile app—enabled beautiful, responsive UIs for both iOS and Android from a single codebase (Mobile Development)",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        purpose:
          "Flutter's language for mobile app development—strong typing caught bugs early and hot-reload made iteration fast (Mobile Development)",
        icon: DiDart,
      },
      {
        name: "Node.js + Express",
        purpose:
          "Built the AI microservice backend—enabled rapid API development with middleware for authentication and logging (Backend API Development)",
        icon: DiNodejs,
      },
      {
        name: "JavaScript",
        purpose:
          "Used for all backend API logic and Firebase integration (Backend Development)",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        purpose:
          "Adopted for more recent backend microservices after learning it mid-project—provided type safety and better code maintainability for complex API logic (Backend Development)",
        icon: SiTypescript,
      },
      {
        name: "Firebase",
        purpose:
          "Architected cloud infrastructure—authentication, real-time database, cloud storage, and request tracking across both mobile and backend (Cloud & Database Architecture)",
        icon: SiFirebase,
      },
      {
        name: "Google Gemini API",
        purpose:
          "Integrated AI for content generation—powers flashcard creation, quiz generation, and content moderation (AI Integration)",
        icon: SiGooglegemini,
      },
    ],

    outcomes: {
      description:
        "Successfully launched a complete full-stack mobile application as part of a 5-person team. Led the entire backend infrastructure development: designed and built the Node.js AI microservice, architected Firebase cloud infrastructure, designed the database schema, and integrated Google Gemini AI—working closely with one backend collaborator on additional API functionalities. Collaborated on mobile app development and API integration—demonstrating my ability to own and coordinate critical backend systems while working effectively in a team environment.",
      metrics: [
        "Full-stack system: Mobile app + AI microservice + Cloud infrastructure",
        "5 integrated services: User auth, task management, deck and flashcard management, Admin system, AI generation",
        "3 AI operations: Flashcard generation, quiz creation, content moderation",
        "Real-time data sync across devices using Firebase",
        "Secure API with Firebase token authentication and CORS",
        "Successfully processes PDF uploads for AI flashcard generation",
      ],
    },

    githubUrl: "https://github.com/majiinB/Deck-V2.git",
    demo: "#",
    documentation:
      "https://github.com/majiinB/Deck_AI_API_Service/blob/main/README.md",

    technicalDetails: {
      architecture: {
        description:
          "The system follows a microservices architecture with clear separation between the Flutter mobile frontend and Node.js AI backend. Firebase serves as the central cloud infrastructure handling authentication, data storage, and real-time sync across all services. Each service is responsible for specific business logic and communicates through secure REST and RPC APIs.",
        components: [
          {
            name: "Mobile Application Layer (Flutter)",
            description:
              "Cross-platform mobile app providing user interface for task management, flashcard creation, and study sessions. Implements state management, offline persistence, and API integration. (Role: Mobile Development, System design, Database design, API Integration)",
            icon: BiMobile,
          },
          {
            name: "AI Microservice (Node.js)",
            description:
              "Standalone backend service handling all AI operations via Google Gemini API. Generates flashcards from topics/PDFs, creates quizzes, and moderates content for appropriateness. Secured with Firebase authentication. (Role: Backend API Development, AI Integration)",
            icon: FaRobot,
          },
          {
            name: "Authentication Service",
            description:
              "Firebase Authentication managing user registration, login, and role-based access control across mobile app and backend services. (Role: Cloud Infrastructure, Security Implementation)",
            icon: Lock,
          },
          {
            name: "User Management Service",
            description:
              "Handles user profiles, role management, and account operations using Firebase Firestore. (Role: Database Design, Backend Logic)",
            icon: FaUsers,
          },
          {
            name: "Task Management Service",
            description:
              "Manages user to-do tasks with CRUD operations, completion tracking, and organization. (Role: Backend Logic, Database Operations)",
            icon: TbApi,
          },
          {
            name: "Deck Management Service",
            description:
              "Handles creation, updating, retrieval, and deletion of decks and flashcards, plus quiz generation coordination with AI service. (Role: Backend Logic, API Design, Database Design)",
            icon: TbBook,
          },
          {
            name: "Cloud Storage Service",
            description:
              "Firebase Storage for PDF uploads and user content, integrated with AI service for document processing. (Role: Cloud Infrastructure, File Processing)",
            icon: SiFirebase,
          },
          {
            name: "Real-time Database",
            description:
              "Firebase Firestore providing real-time data synchronization across devices with offline support. (Role: Database Architecture, Data Modeling)",
            icon: TbDatabase,
          },
        ],
        database: {
          schemaImage: "/projects/deck-v2/deck-erd-diagram.jpg",
        },
      },
      endpoints: [
        {
          method: "POST",
          route: "/v2/deck/generate/flashcards/",
          description:
            "AI endpoint: Generates flashcards from text prompt or PDF upload using Google Gemini API",
          sampleRequest: `{
  "title": "US Constitution Amendments",
  "subject": "Civics",
  "topic": "American Government",
  "description": "Summaries of the Bill of Rights",
  "numberOfFlashcards": 20
}`,
          sampleResponse: `{
  "status": 200,
  "message": "Flashcards generated successfully",
  "data": {
    "deck_id": "93TFG2vOrT76OCRSf7Lz"
  }
}`,
        },
        {
          method: "POST",
          route: "/v2/deck/generate/quiz/",
          description:
            "AI endpoint: Creates quiz questions from existing flashcard deck content",
          sampleRequest: `{
  "deckId": "93TFG2vOrT76OCRSf7Lz",
  "numOfQuiz": 5
}`,
          sampleResponse: `{
  "status": 200,
  "message": "Quiz generated successfully",
  "data": {
    "quiz_items": [...]
  }
}`,
        },
        {
          method: "POST",
          route: "/v2/deck/moderate",
          description:
            "AI endpoint: Reviews deck content and flags inappropriate material using AI analysis",
          sampleRequest: `{
  "deckId": "93TFG2vOrT76OCRSf7Lz"
}`,
          sampleResponse: `{
  "status": 200,
  "message": "Moderation review successful",
  "data": {
    "overall_verdict": {
      "is_appropriate": true,
      "flagged_cards": []
    }
  }
}`,
        },
      ],
      security: {
        description:
          "Implemented multi-layer security: Firebase Authentication for user identity across mobile and backend, Firebase token verification middleware on all protected API endpoints, CORS configuration restricting API access to authorized origins, and request logging for usage monitoring. (Role: Security Architecture, Authentication Implementation)",
        diagram: "/projects/deck-ai-api/deck-ai-api-security.jpg",
      },
      testing: {
        description:
          "Comprehensive testing approach combining automated and manual strategies. Mobile app tested with Flutter's testing framework. Backend API tested via Postman with documented test collections covering authentication flows, AI generation, error handling, and edge cases. (Role: Testing Strategy, Quality Assurance)",
        tools: ["Flutter Test", "Postman", "Firebase Console"],
        docsLink:
          "https://github.com/majiinB/Deck_AI_API_Service/blob/main/README.md",
      },
    },
  },
  archivary: {
    title: "Archivary",
    tagline:
      "Collaborated with a team of 5 to build a complete library management system",
    description:
      "A desktop application for managing library operations with role-based access control",
    overview:
      "As part of our coursework, our team of 5 was assigned to build a library management system—a common project for our database and desktop development course. While the project type was predetermined and we were required to use C# and Windows Forms, this still taught me valuable lessons about team collaboration, working within technical constraints, and delivering a functional solution for actual library operations including book management, user roles, reservations, and borrowing workflows.",
    cover_image: "/projects/archivary/archivary-cover-photo.jpg",
    images: [
      // "/projects/archivary/archivary-login.jpg",
      // "/projects/archivary/archivary-dashboard.jpg",
      // "/projects/archivary/archivary-books.jpg",
      // "/projects/archivary/archivary-users.jpg",
      // "/projects/archivary/archivary-reservations.jpg",
    ],
    category: "Desktop App",
    icon: TbBook,

    context: {
      problem:
        "Our university library was using paper-based systems and spreadsheets to track books, borrowers, and reservations, leading to errors, lost records, and inefficient operations.",
      motivation:
        "As a required course project, this gave us the opportunity to apply what we learned from Bookkeeper with better team practices. This was our second team project and my introduction to .NET desktop application development—using C# as mandated by our course curriculum with a larger 5-person team.",
      targetUsers:
        "Library administrators, staff employees, and patrons (students and teachers) who need to manage or access library resources",
    },

    learningOutcomes: [
      {
        title: "Team Collaboration & Version Control",
        description:
          "Learned to coordinate code changes, resolve merge conflicts, conduct code reviews.",
        skills: [
          "Git collaboration",
          "Code reviews",
          "Team communication",
          "Task distribution",
        ],
      },
      {
        title: "Desktop Application Development",
        description:
          "Built my first Windows desktop application using .NET Framework, learning about UI design patterns, event-driven programming, and local database management",
        skills: [
          ".NET Framework",
          "C# programming",
          "Windows Forms/WPF",
          "Event handling",
        ],
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Implemented a multi-tier user system where administrators, employees, and patrons have different permissions and access levels throughout the application",
        skills: [
          "Authentication",
          "Authorization",
          "Role management",
          "Security best practices",
        ],
      },
      {
        title: "Database Design & Management",
        description:
          "Designed a relational database schema for books, users, reservations, and borrows, learning about normalization, relationships, and data integrity",
        skills: [
          "SQL Server",
          "Database design",
          "Relational modeling",
          "Data integrity",
        ],
      },
    ],

    challenges: [
      {
        title: "Coordinating Work Across 5 Team Members",
        problem:
          "With 5 people working on different features simultaneously, we frequently had merge conflicts, duplicate work, and inconsistent code styles that made integration difficult.",
        solution: "Established a clear branching strategy (feature branches).",
        learned:
          "Communication is more important than code in team projects. Clear task ownership and regular check-ins prevent most conflicts before they happen.",
      },
      {
        title: "Handling Real-World Library Constraints",
        problem:
          "The library had complex business rules: books couldn't be borrowed if reserved by someone else, late returns needed fines calculated, and patrons had borrowing limits based on their type (student vs. teacher).",
        solution:
          "Created a business logic layer that validated all operations before updating the database.",
        learned:
          "Understanding the domain is crucial. Technical implementation is easier once you fully understand the business requirements.",
      },
    ],

    keyDecisions: [
      {
        decision: "Windows desktop app with C# (Course Requirement)",
        reasoning:
          "Our course curriculum required us to build a Windows desktop application using C# and .NET Framework to demonstrate proficiency in these technologies. While not our choice, this constraint taught us to work within technical requirements—a common reality in professional development.",
        alternatives:
          "Would have been interesting to explore web applications, but the course objectives were specifically focused on C# desktop development.",
        tradeoffs:
          "Limited our technology exploration, but gave us deep practice with C# and Windows Forms, which are still widely used in enterprise environments.",
      },
      {
        decision: "Use XAMPP Maria DB (Team's Comfort Zone)",
        reasoning:
          "We chose Maria DB via XAMPP because that's what we were familiar with at the time. It was the database system we had used in previous coursework, so we could focus on learning C# rather than learning a new database simultaneously.",
        alternatives:
          "Could have used SQL Server to match the .NET ecosystem better, but the learning curve would have been steeper.",
        tradeoffs:
          "Slightly less integrated with .NET than SQL Server, but allowed us to move faster by leveraging existing database knowledge.",
      },
      {
        decision:
          "Separate the application into three distinct role interfaces",
        reasoning:
          "Rather than one interface with hidden elements, we created tailored experiences for each user type. This reduced UI clutter and made training easier for library staff.",
        alternatives:
          "Could have used a single interface with dynamic elements, but that confused users during testing.",
        tradeoffs:
          "More code to maintain three interfaces, but significantly better user experience and reduced training time for library staff.",
      },
    ],

    technologies: [
      {
        name: ".NET Framework",
        purpose:
          "Provided a robust platform for building Windows desktop applications with rich UI components and database connectivity built-in",
        icon: SiDotnet,
      },
      {
        name: "C#",
        purpose:
          "Required by our course curriculum—learned it specifically for this project. Its strong typing and Visual Studio tooling caught many errors during development",
        icon: TbBrandCSharp,
      },
      {
        name: "XAMPP Maria DB",
        purpose:
          "Used because it was what we knew at the time from previous coursework. Handled all library data storage and provided the SQL querying we needed for managing relationships",
        icon: SiMariadb,
      },
    ],

    outcomes: {
      description:
        "Successfully delivered a fully functional library management system. This project demonstrated my ability to work in a team, build complete desktop applications, and deliver working software for users.",
      metrics: [
        "Manages 1000+ books with complete inventory tracking",
        "Implements 3-tier role system (Admin, Employee, Patron)",
        "Processes reservations, borrows, returns, and late fee calculations",
        "Built collaboratively by 5-person student team over 3 months",
      ],
    },

    githubUrl: "https://github.com/majiinB/Archivary.git",
    demo: "#",

    technicalDetails: {
      architecture: {
        description:
          "The application follows a three-tier architecture with presentation layer (Windows Forms), business logic layer (validation and rules), and data access layer (SQL Server interaction). Each user role has dedicated forms and workflows while sharing common business logic and data access components.",
        components: [
          {
            name: "Authentication Module",
            description:
              "Handles user login, session management, and role verification. Ensures users can only access features appropriate to their role level.",
            icon: Lock,
          },
          {
            name: "Book Management Module",
            description:
              "Allows administrators to add, edit, and remove books from the catalog. Tracks book status, availability, and location within the library.",
            icon: BookOpen,
          },
          {
            name: "User Management Module",
            description:
              "Manages patron and employee accounts, including registration, role assignment, and membership status tracking.",
            icon: Users,
          },
          {
            name: "Reservation & Borrow Module",
            description:
              "Handles the complete workflow of book reservations, borrowing, returns, and late fee calculations. Enforces business rules like borrowing limits and reservation priorities.",
            icon: TbBook,
          },
          {
            name: "Activity Tracking Module",
            description:
              "Logs all system activities for administrators to monitor, generates reports on library usage, and provides patrons with their borrowing history.",
            icon: TbApi,
          },
        ],
        // database: {
        //   schemaImage: "/projects/archivary/archivary-erd-diagram.jpg",
        // },
      },
    },
  },
  bookkeeper: {
    title: "Bookkeeper",
    tagline:
      "My first full system project—collaborated with a team of 4 to build a library management application in Java",
    description:
      "A desktop application for managing library books, patrons, and borrowing workflows",
    overview:
      "Bookkeeper was my very first full system project, built with a team of 4 students as one of my earliest programming experiences. Working together in Java with Swing for the UI, we created a library management system that taught me the fundamentals of team collaboration, building complete applications, and coordinating code with other developers—from database design to user interfaces to business logic. Though simpler than my later projects, Bookkeeper represents where my journey as a team-based software developer truly began.",
    cover_image: "/projects/bookkeeper/bookkeeper-cover-photo.png",
    images: [
      // "/projects/bookkeeper/bookkeeper-login.jpg",
      // "/projects/bookkeeper/bookkeeper-dashboard.jpg",
      // "/projects/bookkeeper/bookkeeper-books.jpg",
      // "/projects/bookkeeper/bookkeeper-activity.jpg",
    ],
    category: "Desktop App",
    icon: FaBook,

    context: {
      problem:
        "Libraries at the time were managing books and borrowers manually with paper records, leading to lost information and inefficient tracking.",
      motivation:
        "While our course required us to use Java, we had the freedom to choose what to build. Our team decided on a library management system because we wanted to create something complete that actually solved a real problem—not just exercises or small scripts—while learning to collaborate as developers.",
      targetUsers:
        "Library administrators managing books and patrons, and library members tracking their borrowed books",
    },

    learningOutcomes: [
      {
        title: "Team Collaboration Fundamentals",
        description:
          "My first experience working with other developers—learned to coordinate code changes, communicate about features, divide tasks, and integrate our work together",
        skills: [
          "Team communication",
          "Basic Git collaboration",
          "Task coordination",
          "Code integration",
        ],
      },
      {
        title: "Building Complete Applications",
        description:
          "Learned what it takes to build a full system: planning features, designing databases, creating user interfaces, implementing business logic, and handling errors",
        skills: [
          "System design",
          "Software development lifecycle",
          "Feature planning",
          "End-to-end development",
        ],
      },
      {
        title: "Java Programming & Object-Oriented Design",
        description:
          "Gained fundamental programming skills in Java, learning about classes, objects, inheritance, and how to structure code for maintainability",
        skills: [
          "Java fundamentals",
          "OOP principles",
          "Class design",
          "Code organization",
        ],
      },
      {
        title: "Desktop UI Development with Swing",
        description:
          "Created my first graphical user interfaces using Java Swing, learning about event handling, forms, tables, and creating intuitive user experiences",
        skills: [
          "Java Swing",
          "UI/UX basics",
          "Event-driven programming",
          "Form design",
        ],
      },
      {
        title: "Working with Databases",
        description:
          "Set up my first database, learned SQL for CRUD operations, and understood how applications persist and retrieve data",
        skills: [
          "Database fundamentals",
          "SQL basics",
          "JDBC",
          "Data persistence",
        ],
      },
    ],

    challenges: [
      {
        title: "Coordinating as First-Time Team Developers",
        problem:
          "As beginners working together for the first time, we struggled with basic collaboration—merge conflicts, duplicated work, and understanding how to divide tasks effectively among 4 people.",
        solution:
          "Started with simple task divisions and improved as we went. Communicated frequently about who was working on what. Helped each other debug and learned together when stuck.",
        learned:
          "Team development requires constant communication, even for small projects. Starting simple and supporting each other made collaboration manageable as beginners.",
      },
      {
        title: "Debugging Without Experience",
        problem:
          "When things broke (and they broke often), I didn't know how to find the problem. Error messages were confusing, and I didn't know where to look.",
        solution:
          "Learned to use the debugger, add print statements strategically, and break problems into smaller pieces. Built a habit of testing after every small change.",
        learned:
          "Debugging is a skill that develops over time. Reading error messages carefully and testing incrementally prevents hours of frustration.",
      },
      {
        title: "Managing Application State",
        problem:
          "Data would sometimes disappear or show incorrectly across different screens. I didn't understand how to keep the application state consistent.",
        solution:
          "Learned about passing data between components, refreshing displays after database changes, and maintaining a single source of truth for data.",
        learned:
          "State management is one of the hardest parts of application development. Even simple applications need careful thought about where data lives and how it updates.",
      },
    ],

    keyDecisions: [
      {
        decision: "Java and Swing (Course Requirement)",
        reasoning:
          "Our course mandated Java as the programming language. Swing came with Java and provided everything needed for desktop UIs, so we used it. While not our choice, this constraint kept us focused on learning fundamentals rather than getting overwhelmed by technology options.",
        alternatives:
          "Would have been interesting to explore other languages or frameworks, but Java was required for the course.",
        tradeoffs:
          "Swing is older and less modern-looking than newer frameworks, but it taught us solid GUI programming fundamentals that apply to any UI framework.",
      },
      {
        decision: "Keep it simple: two user roles only (Admin and Patron)",
        reasoning:
          "As my first project, I wanted to deliver something that worked rather than building complex features I couldn't finish. Two roles covered the essential use cases.",
        alternatives:
          "Could have added employee roles, fine-grained permissions, or advanced features, but that risked never finishing the project.",
        tradeoffs:
          "Less feature-rich than professional systems, but completable and functional—which was more valuable as a learning experience.",
      },
      {
        decision: "Focus on core library operations only",
        reasoning:
          "Rather than trying to build everything (late fees, fines, inventory management, reports), I focused on the essentials: adding books, managing users, reservations, and borrows.",
        alternatives:
          "Could have added more features, but each addition would have added complexity I wasn't ready to handle.",
        tradeoffs:
          "Basic feature set, but fully functional. Taught me the importance of MVP (minimum viable product) thinking.",
      },
    ],

    technologies: [
      {
        name: "Java",
        purpose:
          "Required by our course curriculum—this project is where we truly learned Java beyond basic exercises. Handled all business logic and database operations",
        icon: DiJava,
      },
      {
        name: "Java Swing",
        purpose:
          "Built all user interfaces including forms, tables, and navigation. My first experience creating graphical applications users could actually interact with",
        icon: DiJava,
      },
      {
        name: "JDBC & SQL Database",
        purpose:
          "Used XAMPP because that's what we were taught in class. Learned database connectivity via JDBC and SQL queries for storing and retrieving library data—our first exposure to persistent data storage",
        icon: TbDatabase,
      },
    ],

    outcomes: {
      description:
        "Successfully completed our first full software system as a 4-person team. While simpler than later projects, Bookkeeper gave us the confidence and foundational skills needed for more complex development. This project proved we could build real software together, not just complete coding exercises. The experience directly led to building Archivary with refined collaboration practices and pursuing more ambitious projects.",
      metrics: [
        "First complete software system built as a 4-person team",
        "Implemented full CRUD operations for books, users, reservations, and borrows",
        "Created 2-role system (Admin and Patron) with different access levels",
        "Learned fundamental concepts still used in all my current projects",
        "Foundation that led to improved collaboration in Archivary",
      ],
    },

    githubUrl: "https://github.com/majiinB/BookKeeper.git",
    demo: "#",

    technicalDetails: {
      architecture: {
        description:
          "Simple three-layer architecture: Presentation layer (Swing UI), Business Logic layer (Java classes for operations), and Data Access layer (JDBC for database). Learned to separate concerns even at this early stage, which made the code more manageable.",
        components: [
          {
            name: "Authentication System",
            description:
              "Basic login system checking username/password against database. Stores current user session to determine admin vs patron access throughout the app.",
            icon: Lock,
          },
          {
            name: "Book Catalog Module",
            description:
              "Allows admins to add, edit, search, and view books. Displays availability status and tracks which books are borrowed or reserved.",
            icon: BookOpen,
          },
          {
            name: "User Management",
            description:
              "Admin functionality for adding and managing patron accounts with basic contact information.",
            icon: Users,
          },
          {
            name: "Reservation & Borrowing System",
            description:
              "Core functionality allowing patrons to reserve books and admins to process borrows. Tracks due dates and prevents double-booking.",
            icon: FaBook,
          },
          {
            name: "Activity Dashboard",
            description:
              "Displays current reservations and borrows. Admins see all activity; patrons see only their own records.",
            icon: TbApi,
          },
        ],
        // database: {
        //   schemaImage: "/projects/bookkeeper/bookkeeper-erd-diagram.jpg",
        // },
      },
    },
  },
  "aqua-fresco": {
    title: "Aqua Fresco Beach Resort",
    tagline:
      "Backend API development for a beach resort booking system with payment integration",
    description:
      "A commissioned backend service for room booking management and transaction processing",
    overview:
      "I was commissioned to develop the backend services for Aqua Fresco Beach Resort's website. I built a complete RESTful API for handling room availability, reservations, and payment processing. While I successfully delivered a fully functional backend with PayMongo payment integration and comprehensive documentation, the project was not continued to production due to the client being unable to provide sufficient information required by the payment gateway provider for final deployment.",
    cover_image: "",
    category: "Backend API",
    icon: TbApi,

    context: {
      problem:
        "The beach resort needed an online booking system to allow customers to reserve rooms and make payments digitally, replacing their manual booking process.",
      motivation:
        "This was my first paid commission work, giving me the opportunity to work with a real client, handle their requirements, and deliver professional-grade backend services with payment integration.",
      targetUsers:
        "Beach resort guests looking to book rooms online and resort administrators managing bookings and transactions",
    },

    learningOutcomes: [
      {
        title: "Client Communication & Requirements Gathering",
        description:
          "Learned to work directly with a client to understand their needs, set expectations, manage scope, and communicate technical constraints in business terms.",
        skills: [
          "Client communication",
          "Requirements analysis",
          "Scope management",
          "Technical documentation",
        ],
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Integrated PayMongo API for secure payment processing, learning about webhooks, payment flows, transaction validation, and handling payment provider requirements.",
        skills: [
          "Payment API integration",
          "Webhook handling",
          "Security best practices",
          "Transaction management",
        ],
      },
      {
        title: "Professional Backend Development",
        description:
          "Built production-ready RESTful APIs with proper error handling, validation, and documentation suitable for client delivery.",
        skills: [
          "Express.js",
          "API design",
          "Error handling",
          "Professional documentation",
        ],
      },
      {
        title: "Firebase Cloud Services",
        description:
          "Architected cloud-based data storage using Firebase Firestore for managing bookings, payments, and user information with real-time capabilities.",
        skills: [
          "Firebase Firestore",
          "Cloud database design",
          "Data modeling",
          "Real-time updates",
        ],
      },
    ],

    challenges: [
      {
        title: "Understanding Payment Provider Requirements",
        problem:
          "PayMongo required specific business documentation and verification details from the client. Without these, the payment integration couldn't go live in production.",
        solution:
          "I built the complete payment integration using PayMongo's test environment and documented exactly what information the client needed to provide. Delivered comprehensive documentation explaining the deployment requirements.",
        learned:
          "Payment integrations have strict compliance requirements. Always clarify early what business documentation and verification processes are needed before promising live deployment timelines.",
      },
      {
        title: "Designing for Room Availability Management",
        problem:
          "Needed to prevent double-bookings while handling concurrent reservation requests and ensuring accurate room availability across different date ranges.",
        solution:
          "Implemented transaction-based reservation logic with proper locking mechanisms in Firestore. Created date range validation to check for conflicts before confirming bookings.",
        learned:
          "Booking systems need careful handling of concurrent operations. Using database transactions and proper validation prevents race conditions and ensures data consistency.",
      },
      {
        title: "Handling Incomplete Project Deployment",
        problem:
          "Despite completing all technical work, the project couldn't go to production due to client-side payment gateway verification issues outside my control.",
        solution:
          "Ensured all code was properly documented and deployable. Delivered everything as agreed and got paid for the completed work, even though it wasn't deployed.",
        learned:
          "Not all commissioned projects reach production due to external factors. Delivering complete, documented work and managing client expectations professionally is key, even when projects don't deploy.",
      },
    ],

    keyDecisions: [
      {
        decision: "Use Express.js and Node.js for the backend",
        reasoning:
          "Express provided the flexibility and speed needed for rapid API development. Its middleware ecosystem made implementing authentication, validation, and error handling straightforward.",
        alternatives:
          "Could have used Spring Boot or Django, but Express was lighter and allowed faster iteration for a smaller project scope.",
        tradeoffs:
          "JavaScript's dynamic nature requires more careful testing, but development speed and ecosystem richness made it the right choice for this timeline.",
      },
      {
        decision: "Firebase Firestore for data storage",
        reasoning:
          "Firestore provided real-time capabilities, simple hosting, and didn't require managing servers—perfect for delivering a complete solution the client could maintain without infrastructure complexity.",
        alternatives:
          "Could have used a traditional SQL database, but that would require server management and more complex deployment.",
        tradeoffs:
          "Some vendor lock-in to Firebase, but significantly simpler deployment and maintenance for the client.",
      },
      {
        decision: "PayMongo for payment processing",
        reasoning:
          "The client specifically wanted to accept payments from local e-wallets like GCash and Maya, which are extremely popular in the Philippines. At the time, PayMongo was the only payment gateway that provided seamless integration with these local payment methods, making it the clear choice for this project.",
        alternatives:
          "Could have suggested Stripe or other international gateways, but they didn't support GCash and Maya at the time, which were essential for the client's target customers.",
        tradeoffs:
          "Required client to complete PayMongo's verification process, which ultimately became a blocker for production deployment.",
      },
    ],

    technologies: [
      {
        name: "Node.js",
        purpose:
          "Runtime environment for building the backend services—enabled JavaScript on the server side with excellent performance",
        icon: DiNodejs,
      },
      {
        name: "Express.js",
        purpose:
          "Built all RESTful API endpoints for room availability, reservations, and transactions with middleware for validation and error handling",
        icon: DiNodejs,
      },
      {
        name: "Firebase Firestore",
        purpose:
          "Cloud database for storing and managing bookings, payment records, room availability, and user information with real-time sync capabilities",
        icon: SiFirebase,
      },
      {
        name: "PayMongo API",
        purpose:
          "Integrated secure payment processing for handling customer transactions and payment confirmations",
        icon: TbApi,
      },
    ],

    outcomes: {
      description:
        "Successfully delivered a complete, fully functional backend API system for the beach resort booking platform. Despite the project not reaching production due to the client being unable to complete payment gateway verification requirements, I completed all contracted work: built RESTful APIs for room management and reservations, integrated PayMongo payment processing with webhook handling, designed and implemented the Firebase database structure, and provided comprehensive documentation for production deployment. This was my first paid commission work, demonstrating my ability to deliver professional-grade backend services and work with real clients.",
      metrics: [
        "Complete RESTful API with room availability, reservation, and transaction endpoints",
        "Integrated PayMongo payment gateway with webhook handling (test environment)",
        "Firebase Firestore database architecture for bookings and payments",
        "Professional backend documentation for production deployment",
        "First paid commission project successfully completed",
        "Delivered on time despite project not proceeding to production",
      ],
    },

    githubUrl: "https://github.com/majiinB/Aqua-Fresco-API-Gateway.git",
    demo: "#",
    documentation: "#",
  },
};

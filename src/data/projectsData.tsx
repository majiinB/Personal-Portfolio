import { Code, Lock, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { BiMobile } from "react-icons/bi";
import { DiDart, DiNodejs } from "react-icons/di";
import { FaRobot } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { PiCards } from "react-icons/pi";
import {
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGooglegemini,
  SiJavascript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

interface Architecture {
  description: string;
  components: {
    name: string;
    description: string;
    icon: LucideIcon | IconType;
  }[];
  database: { schemaImage: string };
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
interface Project {
  title: string;
  overview: string;
  githubUrl: string;
  description: string;
  cover_image: string;
  images?: string[];
  technologies: { name: string; reason: string; icon: IconType | LucideIcon }[];
  architecture: Architecture;
  endpoints?: Endpoint[];
  security?: { description: string; diagram?: string };
  testing?: { description: string; tools: string[]; docsLink: string };
  demo: string;
  category: string;
  icon: LucideIcon | IconType;
}

export const categories = [
  "All",
  "Full-Stack",
  "APIs",
  "Web App",
  "Mobile App",
];

export const projects: { [key: string]: Project } = {
  "deck-v2": {
    title: "Deck",
    overview:
      "Deck is a productivity application designed to enhance your learning and task management experience. With Deck, you can create custom flashcards, generate flashcards automatically using Gemini AI, and efficiently manage your tasks. It's the perfect tool for students, professionals, and anyone looking to boost their productivity.",
    githubUrl: "https://github.com/majiinB/Deck-V2.git",
    description:
      "Deck is a productivity application designed to enhance your learning and task management experience.",
    cover_image: "/projects/deck-v2/deck-cover-photo.jpg",
    images: [
      "/projects/deck-v2/deck-intro.jpg",
      "/projects/deck-v2/deck-home.jpg",
      "/projects/deck-v2/deck-task-folder.jpg",
      "/projects/deck-v2/deck-add-deck.jpg",
      "/projects/deck-v2/deck-view-deck.jpg",
      "/projects/deck-v2/deck-study.jpg",
      "/projects/deck-v2/deck-quiz.jpg",
    ],
    technologies: [
      {
        name: "Firebase",
        reason:
          "Integrated to handle user authentication, cloud database, and backend services efficiently, allowing for real-time data sync and secure user management.",
        icon: SiFirebase,
      },
      {
        name: "Flutter",
        reason:
          "Chosen for its ability to build fast, cross-platform mobile applications using a single codebase, providing a native-like performance and rich UI capabilities.",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        reason:
          "Used as the primary programming language for Flutter, offering expressive syntax and ahead-of-time (AOT) compilation to deliver high-performance apps.",
        icon: DiDart,
      },
    ],
    architecture: {
      description:
        "The application follows a microservices architecture pattern with clear separation of concerns. Each service is responsible for specific business logic and communicates through REST and RPC APIs.",
      components: [
        {
          name: "User Management Service",
          description:
            "Handles user authentication, registration, role management, and profile-related operations using Firebase Authentication and Firestore.",
          icon: TbApi,
        },
        {
          name: "Task Management Service",
          description:
            "Manages user-created to-do tasks, including task creation, updating, completion status, and deletion, allowing users to track and organize their activities.",
          icon: TbApi,
        },
        {
          name: "Deck Management Service",
          description:
            "Handles creation, updating, retrieval, and deletion of decks and flashcards, as well retrieving the quizzes for the given deck of flashcards.",
          icon: TbApi,
        },
        {
          name: "AI Service",
          description:
            "Integrates with Google Gemini API to generate AI-powered flashcards based on provided topics, descriptions, or uploaded study materials. As well as quizzes based on the contents of a deck. In addition, it is responsible for moderating generated flashcard content, ensuring it is appropriate, accurate, and free from harmful or false information before presenting it to users.",
          icon: TbApi,
        },
      ],
      database: {
        schemaImage: "/projects/deck-v2/deck-erd-diagram.jpg",
      },
    },
    demo: "#",
    category: "Mobile App",
    icon: BiMobile,
  },
  "deck-ai-api": {
    title: "Deck AI Service API",
    overview:
      "Deck AI Service API is a microservice within the Deck ecosystem that handles all AI-related functionalities. It integrates Gemini AI to process user input, generate flashcards, generate quizzes, help moderate deck of flashcards and enhance productivity. This service provides dedicated endpoints for AI-driven content generation, ensuring seamless interaction between the Deck application and AI models.",
    githubUrl: "https://github.com/majiinB/Deck_AI_API_Service.git",
    description:
      "Deck AI API Service is a microservice within the Deck ecosystem that handles all AI-related functionalities",
    cover_image: "/projects/deck-ai-api/deck-ai-cover-photo.png",
    technologies: [
      {
        name: "Node.js",
        reason:
          "Chosen for its excellent performance in I/O operations and extensive ecosystem of packages suitable for building scalable APIs.",
        icon: DiNodejs,
      },
      {
        name: "Express.js",
        reason:
          "Lightweight and flexible web framework that provides robust features for web and mobile applications with minimal overhead.",
        icon: SiExpress,
      },
      {
        name: "Firebase",
        reason:
          "Integrated to handle user authentication, cloud database, and backend services efficiently, allowing for real-time data sync and secure user management.",
        icon: SiFirebase,
      },
      {
        name: "JavaScript",
        reason:
          "Chosen as the primary programming language for its versatility, wide community support, and seamless integration with modern frameworks and APIs.",
        icon: SiJavascript,
      },
      {
        name: "Google Gemini API",
        reason:
          "Implemented to enable AI-powered flashcard generation directly within the mobile app, giving users the ability to generate study materials based on input topics or uploaded documents.",
        icon: SiGooglegemini,
      },
    ],
    architecture: {
      description:
        "The Deck AI API follows a service-oriented architecture pattern with modular separation of concerns. Each module is responsible for a specific domain operation, ensuring scalability, maintainability, and ease of integration with client applications.",

      components: [
        {
          name: "Authentication Service",
          description:
            "Manages user login, registration, and token-based authentication using JWT. It secures protected endpoints and handles token verification, refresh, and revocation mechanisms.",
          icon: Lock,
        },
        {
          name: "Deck Management Module",
          description:
            "Provides API endpoints for creating, updating, retrieving, and deleting flashcard decks. It manages deck metadata and associations with individual flashcards.",
          icon: PiCards,
        },
        {
          name: "Flashcard Management Module",
          description:
            "Handles operations related to flashcards within decks — including CRUD actions, batch creation, and AI-generated content moderation.",
          icon: PiCards,
        },
        {
          name: "AI Generation Service",
          description:
            "Integrates with Google Gemini API to generate AI-powered flashcards based on provided topics, descriptions, or uploaded PDF materials. Also responsible for moderating generated content to ensure accuracy and appropriateness.",
          icon: FaRobot,
        },
        {
          name: "Quiz Service",
          description:
            "Generates quizzes based on deck content, supporting different quiz modes like multiple-choice and fill-in-the-blank via API endpoints.",
          icon: MdQuiz,
        },
        {
          name: "Rate Limiting & Request Validation",
          description:
            "Implements middleware to enforce request rate limiting and schema validation using tools like Zod and express-rate-limit to ensure API stability and security.",
          icon: Code,
        },
      ],

      database: {
        schemaImage: "/projects/deck-v2/deck-erd-diagram.jpg",
      },
    },
    endpoints: [
      {
        method: "POST",
        route: "/api/users/register",
        description: "Creates a new user account.",
        sampleRequest: `{
          "email": "user@example.com",
          "password": "123456"
        }`,
        sampleResponse: `{
          "message": "User registered successfully",
          "userId": "abc123"
        }`,
      },
    ],
    security: {
      description:
        "This API uses JWT authentication with access tokens and refresh tokens. It also implements rate limiting to prevent abuse and CORS to control allowed origins.",
      diagram: "/images/auth-flow.png", // optional
    },
    testing: {
      description:
        "The API was tested using integration tests with Jest and Supertest, focusing on endpoint response validation, error handling, and authentication flow.",
      tools: ["Jest", "Supertest", "Swagger UI", "Postman"],
      docsLink: "https://deck-api-docs.example.com",
    },
    demo: "#",
    category: "APIs",
    icon: TbApi,
  },
};

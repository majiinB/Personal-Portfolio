import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { BiMobile } from "react-icons/bi";
import { DiDart, DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGooglegemini,
  SiTypescript,
  SiZod,
} from "react-icons/si";

interface Architecture {
  description: string;
  components: { name: string; description: string }[];
  database: { schemaImage: string };
}

interface Project {
  title: string;
  overview: string;
  githubUrl: string;
  description: string;
  cover_image: string;
  images: string[];
  technologies: { name: string; reason: string; icon: IconType | LucideIcon }[];
  architecture: Architecture;
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
      "Deck is a productivity application designed to enhance your learning and task management experience. With Deck, you can create custom flashcards, generate flashcards automatically using Gemini AI 🤖, and efficiently manage your tasks. It's the perfect tool for students, professionals, and anyone looking to boost their productivity.",
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
        name: "Flutter",
        reason:
          "Chosen for its ability to build fast, cross-platform mobile applications using a single codebase, providing a native-like performance and rich UI capabilities.",
        icon: SiFlutter,
      },
      {
        name: "TypeScript",
        reason:
          "Adds static typing to JavaScript, improving code quality, maintainability, and reducing runtime errors through type safety.",
        icon: SiTypescript,
      },
      {
        name: "Dart",
        reason:
          "Used as the primary programming language for Flutter, offering expressive syntax and ahead-of-time (AOT) compilation to deliver high-performance apps.",
        icon: DiDart,
      },
      {
        name: "Google Gemini API",
        reason:
          "Implemented to enable AI-powered flashcard generation directly within the mobile app, giving users the ability to generate study materials based on input topics or uploaded documents.",
        icon: SiGooglegemini,
      },
      {
        name: "Zod",
        reason:
          "Used for schema-based validation in the API, offering a simple, type-safe, and highly maintainable way to validate incoming requests.",
        icon: SiZod,
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
        },
        {
          name: "Task Management Service",
          description:
            "Manages user-created to-do tasks, including task creation, updating, completion status, and deletion, allowing users to track and organize their activities.",
        },
        {
          name: "Deck Management Service",
          description:
            "Handles creation, updating, retrieval, and deletion of decks and flashcards, as well retrieving the quizzes for the given deck of flashcards.",
        },
        {
          name: "AI Service",
          description:
            "Integrates with Google Gemini API to generate AI-powered flashcards based on provided topics, descriptions, or uploaded study materials. As well as quizzes based on the contents of a deck. In addition, it is responsible for moderating generated flashcard content, ensuring it is appropriate, accurate, and free from harmful or false information before presenting it to users.",
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
};

import { Lock, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { BiMobile } from "react-icons/bi";
import { DiDart, DiNodejs } from "react-icons/di";
import { FaRobot } from "react-icons/fa";
import { MdQuiz, MdShield } from "react-icons/md";
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
        "The Deck AI API follows an RPC and service-oriented architecture pattern, where each module encapsulates AI-powered operations for specific domains. Traditional resource CRUD operations are handled by a separate Deck Management API. This ensures clean separation of concerns: the AI API focuses solely on functional calls requiring AI integration.",

      components: [
        {
          name: "Authentication Service",
          description:
            "Secures protected API endpoints by validating Firebase-issued ID tokens. It ensures that only authenticated users can access sensitive operations like AI flashcard generation, content moderation, and quiz creation. This service verifies the authenticity of tokens and attaches decoded user information to each request, enabling downstream services to enforce access control where necessary.",
          icon: Lock,
        },
        {
          name: "AI Service",
          description:
            "A centralized service responsible for interfacing with the Google Gemini API. It handles AI prompt construction, content generation, and moderation requests. This service ensures consistent AI usage across multiple modules, eliminating redundancy and simplifying future updates or AI provider changes.",
          icon: FaRobot,
        },
        {
          name: "Flashcard Generation Module",
          description:
            "Handles AI-powered flashcard generation requests based on provided topics, descriptions, or uploaded materials. Interfaces with the centralized AI Service for prompt construction and content generation.",
          icon: PiCards,
        },
        {
          name: "Moderation Module",
          description:
            "Responsible for moderating flashcard decks requested for public publication. When a publish request is made, this module uses the AI Service to analyze the deck content and generate a moderation verdict. The verdict, along with relevant metadata, is stored as a moderation request in the database. Human moderators can then review these requests and approve or reject them through a separate moderation workflow.",
          icon: MdShield,
        },
        {
          name: "Quiz Generation Module",
          description:
            "Generates dynamic quizzes based on flashcard content, supporting multiple quiz modes. AI-generated quiz questions and options are constructed via the AI Service.",
          icon: MdQuiz,
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
          "Creates a new flashcard from a prompt or study material (PDF).",
        sampleRequest: `{
    "title": "US Constitution Amendments",
    "subject": "Civics",
    "topic": "American Government",
    "deckDescription": "Summaries of the first ten (Bill of Rights) plus major subsequent amendments, their text highlights, and historical context.",
    "description": "Summaries of the first ten (Bill of Rights) plus major subsequent amendments, their text highlights, and historical context.",
    "numberOfFlashcards": 20
}`,
        sampleResponse: `{
    "status": 200,
    "request_owner_id": "Y3o8pxyMZre0wOqHh6Ip98ckBmO2",
    "message": "Prompt was sent successfully",
    "data": {
        "deck_id": "93TFG2vOrT76OCRSf7Lz"
    }
}`,
      },
      {
        method: "POST",
        route: "/v2/deck/generate/quiz/",
        description: "Creates and retrieves quiz items from the deck",
        sampleRequest: `{
    "deckId": "93TFG2vOrT76OCRSf7Lz",
    "numOfQuiz": 5
}`,
        sampleResponse: `{
    "status": 200,
    "request_owner_id": "Y3o8pxyMZre0wOqHh6Ip98ckBmO2",
    "message": "Prompt was sent successfully",
    "data": {
        "deck_id": "93TFG2vOrT76OCRSf7Lz"
    }
}`,
      },
      {
        method: "POST",
        route: "/v2/deck/moderate",
        description: "Checks and moderates the content of a deck",
        sampleRequest: `{
    "deckId": "93TFG2vOrT76OCRSf7Lz"
}`,
        sampleResponse: `{
    "status": 200,
    "request_owner_id": "Y3o8pxyMZre0wOqHh6Ip98ckBmO2",
    "message": "Moderation review successful",
    "data": {
        "quiz_data": {
            "overall_verdict": {
                "is_appropriate": false,
                "moderation_decision": "content is inappropriate",
                "flagged_cards": [
                    {
                        "definition": "Being prosecuted or punished twice for the same offense.",
                        "term": "Stupid shit",
                        "reason": "The term contains profanity and offensive language."
                    }
                ]
            }
        }
    }
}`,
      },
    ],
    security: {
      description:
        "Secures API endpoints using Firebase Authentication token verification via Firebase Admin SDK. CORS is enforced for origin control. Rate limiting is not applied due to per-request backend logging and moderation tracking in Firebase.",
      diagram: "/projects/deck-ai-api/deck-ai-api-security.jpg",
    },
    testing: {
      description:
        "The API’s functionality, authentication flow, and AI integrations were manually tested using Postman. Automated testing was deferred due to compatibility challenges with ES Modules and Firebase Functions runtime, which limited the availability of suitable unit and integration testing libraries.",
      tools: ["Postman"],
      docsLink:
        "https://github.com/majiinB/Deck_AI_API_Service/blob/main/README.md",
    },
    demo: "#",
    category: "APIs",
    icon: TbApi,
  },
};

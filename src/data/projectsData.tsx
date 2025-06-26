import { Code, LucideIcon } from "lucide-react";

interface Architecture {
  description: string;
  components: { name: string; description: string }[];
  database: { schema: string };
}

interface Project {
  title: string;
  overview: string;
  githubUrl: string;
  description: string;
  cover_image: string;
  images: string[];
  technologies: { name: string; reason: string }[];
  architecture: Architecture;
  github: string;
  demo: string;
  category: string;
  icon: LucideIcon;
}

export const categories = [
  "All",
  "Full-Stack",
  "Web App",
  "Data Science",
  "Machine Learning",
  "Mobile",
];

export const projects: { [key: string]: Project } = {
  "ecommerce-api": {
    title: "E-Commerce Platform",
    overview:
      "A comprehensive REST API platform built for modern e-commerce operations. This project implements a microservices architecture with advanced features like real-time inventory management, payment processing, order tracking, and user authentication. The system is designed to handle high traffic loads while maintaining data consistency and security.",
    githubUrl: "https://github.com/yourusername/ecommerce-api",
    description:
      "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
    cover_image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
    ],
    technologies: [
      {
        name: "Node.js",
        reason:
          "Chosen for its excellent performance in I/O operations and extensive ecosystem of packages suitable for building scalable APIs.",
      },
      {
        name: "Express.js",
        reason:
          "Lightweight and flexible web framework that provides robust features for web and mobile applications with minimal overhead.",
      },
      {
        name: "PostgreSQL",
        reason:
          "ACID-compliant relational database perfect for handling complex e-commerce transactions and maintaining data integrity.",
      },
      {
        name: "Redis",
        reason:
          "In-memory data structure store used for caching frequently accessed data and session management to improve performance.",
      },
      {
        name: "Docker",
        reason:
          "Containerization ensures consistent deployment across different environments and simplifies scaling and maintenance.",
      },
    ],
    architecture: {
      description:
        "The application follows a microservices architecture pattern with clear separation of concerns. Each service is responsible for specific business logic and communicates through REST APIs and message queues.",
      components: [
        {
          name: "API Gateway",
          description:
            "Entry point for all client requests, handles routing, authentication, and rate limiting",
        },
        {
          name: "User Service",
          description:
            "Manages user authentication, registration, and profile management",
        },
        {
          name: "Product Service",
          description:
            "Handles product catalog, inventory management, and search functionality",
        },
        {
          name: "Order Service",
          description:
            "Processes orders, manages cart operations, and handles order tracking",
        },
        {
          name: "Payment Service",
          description:
            "Integrates with payment providers and handles transaction processing",
        },
      ],
      database: {
        schema: `
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER DEFAULT 0,
    category_id UUID REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);`,
      },
    },
    github: "#",
    demo: "#",
    category: "Full-Stack",
    icon: Code,
  },
};

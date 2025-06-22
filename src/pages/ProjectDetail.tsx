/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Database,
  Server,
} from "lucide-react";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock project data - replace with actual data fetching
  const projectData: { [key: string]: any } = {
    "ecommerce-api": {
      title: "E-Commerce API Platform",
      overview:
        "A comprehensive REST API platform built for modern e-commerce operations. This project implements a microservices architecture with advanced features like real-time inventory management, payment processing, order tracking, and user authentication. The system is designed to handle high traffic loads while maintaining data consistency and security.",
      githubUrl: "https://github.com/yourusername/ecommerce-api",
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
    },
    "real-time-chat": {
      title: "Real-Time Chat System",
      overview:
        "A scalable real-time chat application designed to handle thousands of concurrent users. Built with WebSocket technology for instant messaging, the system includes features like message history, user presence indicators, typing indicators, and room-based conversations. The architecture is designed for horizontal scaling and high availability.",
      githubUrl: "https://github.com/yourusername/chat-system",
      images: [
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
        "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
      ],
      technologies: [
        {
          name: "Socket.io",
          reason:
            "Provides reliable WebSocket connections with fallback options and built-in room management for real-time communication.",
        },
        {
          name: "Node.js",
          reason:
            "Event-driven architecture perfect for handling concurrent connections and real-time data processing.",
        },
        {
          name: "MongoDB",
          reason:
            "Document-based storage ideal for storing chat messages with flexible schema and horizontal scaling capabilities.",
        },
        {
          name: "Redis",
          reason:
            "Used as a message broker between server instances and for storing session data with pub/sub capabilities.",
        },
        {
          name: "AWS",
          reason:
            "Cloud infrastructure providing auto-scaling capabilities and managed services for high availability.",
        },
      ],
      architecture: {
        description:
          "The chat system uses a distributed architecture with multiple server instances behind a load balancer. Redis pub/sub is used for cross-server communication.",
        components: [
          {
            name: "WebSocket Server",
            description:
              "Handles real-time connections and message broadcasting",
          },
          {
            name: "Message Service",
            description: "Processes and stores chat messages with encryption",
          },
          {
            name: "User Presence Service",
            description: "Tracks online users and typing indicators",
          },
          {
            name: "Room Management",
            description: "Handles chat room creation, joining, and permissions",
          },
        ],
        database: {
          schema: `
// MongoDB Collections

// Users Collection
{
  "_id": ObjectId,
  "username": String,
  "email": String,
  "avatar": String,
  "lastSeen": Date,
  "isOnline": Boolean,
  "createdAt": Date
}

// Messages Collection
{
  "_id": ObjectId,
  "roomId": ObjectId,
  "senderId": ObjectId,
  "content": String,
  "type": String, // text, image, file
  "timestamp": Date,
  "edited": Boolean,
  "reactions": Array
}

// Rooms Collection
{
  "_id": ObjectId,
  "name": String,
  "type": String, // public, private, direct
  "members": Array,
  "admins": Array,
  "createdBy": ObjectId,
  "createdAt": Date
}`,
        },
      },
    },
    "data-analytics": {
      title: "Data Analytics Pipeline",
      overview:
        "A robust ETL (Extract, Transform, Load) pipeline designed for processing large datasets from multiple sources. The system includes automated data validation, transformation rules, and integration with visualization tools. Built to handle millions of records daily with fault tolerance and monitoring capabilities.",
      githubUrl: "https://github.com/yourusername/data-pipeline",
      images: [
        "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      ],
      technologies: [
        {
          name: "Python",
          reason:
            "Excellent libraries for data processing (Pandas, NumPy) and strong ecosystem for data analytics and machine learning.",
        },
        {
          name: "FastAPI",
          reason:
            "High-performance web framework for building APIs with automatic documentation and data validation.",
        },
        {
          name: "PostgreSQL",
          reason:
            "Advanced SQL features and excellent performance for complex analytical queries and large datasets.",
        },
        {
          name: "Apache Kafka",
          reason:
            "Distributed streaming platform for building real-time data pipelines and handling high-throughput data streams.",
        },
        {
          name: "Docker",
          reason:
            "Ensures consistent deployment and easy scaling of data processing components across environments.",
        },
      ],
      architecture: {
        description:
          "Event-driven architecture using Apache Kafka for data ingestion, with separate processing workers for different data transformations.",
        components: [
          {
            name: "Data Ingestion Layer",
            description:
              "Collects data from various sources (APIs, files, databases) and publishes to Kafka topics",
          },
          {
            name: "Processing Workers",
            description:
              "Consume data from Kafka, apply transformations, and validate data quality",
          },
          {
            name: "Data Warehouse",
            description:
              "Stores processed data in optimized format for analytics and reporting",
          },
          {
            name: "API Layer",
            description:
              "Provides REST endpoints for data access and dashboard integration",
          },
        ],
        database: {
          schema: `
-- Raw data staging table
CREATE TABLE raw_data_staging (
    id SERIAL PRIMARY KEY,
    source VARCHAR(100) NOT NULL,
    data_type VARCHAR(50),
    raw_content JSONB,
    received_at TIMESTAMP DEFAULT NOW(),
    processed BOOLEAN DEFAULT FALSE
);

-- Processed analytics data
CREATE TABLE analytics_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_name VARCHAR(100) NOT NULL,
    metric_value DECIMAL(15,2),
    dimensions JSONB,
    timestamp TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    INDEX idx_metric_timestamp (metric_name, timestamp)
);

-- Data quality monitoring
CREATE TABLE data_quality_checks (
    id SERIAL PRIMARY KEY,
    table_name VARCHAR(100),
    check_type VARCHAR(50),
    status VARCHAR(20),
    details JSONB,
    checked_at TIMESTAMP DEFAULT NOW()
);`,
        },
      },
    },
    "auth-service": {
      title: "Authentication Microservice",
      overview:
        "A comprehensive authentication and authorization microservice designed for modern applications. Features include JWT token management, OAuth integration with popular providers, rate limiting, multi-factor authentication, and comprehensive security logging. Built with security best practices and OWASP guidelines.",
      githubUrl: "https://github.com/yourusername/auth-service",
      images: [
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
      ],
      technologies: [
        {
          name: "Node.js",
          reason:
            "Excellent performance for handling authentication requests and strong ecosystem for security libraries.",
        },
        {
          name: "JWT",
          reason:
            "Stateless authentication tokens that scale well in distributed systems and provide secure user authentication.",
        },
        {
          name: "OAuth 2.0",
          reason:
            "Industry standard for authorization, enabling secure third-party integrations with minimal user friction.",
        },
        {
          name: "Redis",
          reason:
            "Fast in-memory storage for session management, rate limiting, and token blacklisting with automatic expiration.",
        },
        {
          name: "MongoDB",
          reason:
            "Flexible schema for storing user profiles, permissions, and audit logs with excellent performance.",
        },
      ],
      architecture: {
        description:
          "Stateless authentication service with JWT tokens, Redis for session management, and comprehensive security monitoring.",
        components: [
          {
            name: "Authentication Controller",
            description:
              "Handles login, registration, and token management operations",
          },
          {
            name: "OAuth Provider",
            description:
              "Manages third-party authentication with Google, GitHub, and other providers",
          },
          {
            name: "Rate Limiter",
            description:
              "Prevents brute force attacks and implements request throttling",
          },
          {
            name: "Security Monitor",
            description:
              "Logs security events and detects suspicious activities",
          },
        ],
        database: {
          schema: `
// MongoDB Collections

// Users Collection
{
  "_id": ObjectId,
  "email": String,
  "passwordHash": String,
  "salt": String,
  "profile": {
    "firstName": String,
    "lastName": String,
    "avatar": String
  },
  "permissions": Array,
  "roles": Array,
  "mfaEnabled": Boolean,
  "mfaSecret": String,
  "lastLogin": Date,
  "loginAttempts": Number,
  "lockedUntil": Date,
  "createdAt": Date,
  "updatedAt": Date
}

// Sessions Collection (in Redis)
{
  "sessionId": String,
  "userId": String,
  "deviceInfo": Object,
  "ipAddress": String,
  "userAgent": String,
  "createdAt": Date,
  "expiresAt": Date
}

// Security Events Collection
{
  "_id": ObjectId,
  "userId": ObjectId,
  "eventType": String, // login, logout, failed_login, etc.
  "ipAddress": String,
  "userAgent": String,
  "success": Boolean,
  "details": Object,
  "timestamp": Date
}`,
        },
      },
    },
  };

  const project = projectData[id || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-accent mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-bg">
      {/* Header */}
      <header className="bg-dark-accent text-white py-6">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-soft-highlight transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-mono">Back to Portfolio</span>
          </Link>
          <h1 className="text-4xl font-bold">{project.title}</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Project Overview
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-subtle-text leading-relaxed text-lg">
              {project.overview}
            </p>
            <div className="mt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-dark-accent text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Project Screenshots
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image: string, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.technologies.map((tech: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
              >
                <h3 className="text-xl font-semibold text-dark-accent mb-3">
                  {tech.name}
                </h3>
                <p className="text-subtle-text leading-relaxed">
                  {tech.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold text-dark-accent mb-6">
            System Architecture
          </h2>

          {/* Architecture Overview */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-dark-accent mb-4">
              Architecture Overview
            </h3>
            <p className="text-subtle-text leading-relaxed text-lg">
              {project.architecture.description}
            </p>
          </div>

          {/* Components */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {project.architecture.components.map(
              (component: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-accent mb-2">
                        {component.name}
                      </h4>
                      <p className="text-subtle-text leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Database Schema */}
          <div className="bg-dark-accent rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Database className="h-6 w-6 text-primary" />
              <span>Database Schema</span>
            </h3>
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-green-400 whitespace-pre-wrap">
                {project.architecture.database.schema}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;

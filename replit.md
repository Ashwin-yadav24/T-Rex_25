# T-REX AI Training System

## Overview

T-REX (AI Training System) is a modern full-stack web application built with React, TypeScript, and Express.js. The application appears to be a landing page for an AI-powered training system, featuring a responsive design with a dark theme and comprehensive UI components. The system is designed with a modular architecture that separates client-side rendering from server-side API functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: Comprehensive component system using Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with CSS variables for theming and dark mode support
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation through Hookform resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with tsx for development, esbuild for production builds
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) ready for database integration
- **API Structure**: RESTful API design with `/api` prefix for all endpoints

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL session store with connect-pg-simple

### Component Architecture
- **Design System**: Shadcn/ui components built on Radix UI primitives
- **Theme System**: CSS custom properties with neutral base color and dark mode support
- **Component Structure**: Atomic design with reusable UI components
- **Path Aliases**: Clean imports using TypeScript path mapping (@/, @shared/, etc.)

### Development & Build System
- **Build Tool**: Vite for frontend, esbuild for backend bundling
- **Type Safety**: Strict TypeScript configuration across client, server, and shared code
- **Development**: Integrated development server with HMR and error overlays
- **Code Organization**: Monorepo structure with shared types and schemas

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm** & **drizzle-kit**: Type-safe ORM and database toolkit
- **express**: Web application framework for Node.js
- **react** & **react-dom**: UI library and DOM rendering

### UI & Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variant management
- **lucide-react**: Icon library

### State & Data Management
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation

### Development Tools
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for Node.js
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Additional Libraries
- **wouter**: Lightweight routing for React
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel component
- **cmdk**: Command palette component
- **nanoid**: Unique ID generation
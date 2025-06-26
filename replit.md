# Replit.md

## Overview

This is a modern doula website built with React, TypeScript, and Express.js. It features a nurturing, nature-inspired design with sections for services, about, testimonials, and contact information. The application is designed to help doulas showcase their services and connect with potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom nature-inspired color palette
- **UI Components**: shadcn/ui components built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Fonts**: Lora and Open Sans for typography, custom Indira K font for branding

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (via @neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: tsx for TypeScript execution

### Build and Deployment
- **Development**: Vite dev server with HMR
- **Production Build**: Vite for client, esbuild for server
- **Deployment**: Configured for Replit with autoscale deployment
- **Static Assets**: Served from dist/public in production

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and blog link
- **Hero Section**: Full-screen hero with nature-inspired background
- **About Section**: Personal introduction with photo gallery
- **Services Section**: Detailed service offerings with icons
- **Factoids Section**: Statistics about doula care benefits
- **Blog Preview Section**: Showcases recent blog posts with preview cards
- **Blog Pages**: Full blog listing and individual post pages
- **Testimonials Section**: Client testimonials in a carousel
- **Contact Section**: Contact form with Netlify form integration
- **Footer**: Links and social media connections

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route handling
- **Vite Integration**: Development server with HMR support
- **Static File Serving**: Production static file serving

### UI System
- **Design System**: shadcn/ui components with custom color palette
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Animations**: CSS animations for scroll-triggered effects
- **Nature Theme**: Woodsy, feminine color palette with organic elements

## Data Flow

### Frontend Data Flow
1. React Query manages server state and caching
2. Form submissions handled via Netlify Forms
3. Smooth scrolling navigation between sections
4. Responsive design adapts to different screen sizes

### Backend Data Flow
1. Express middleware handles request logging and error handling
2. Storage interface provides CRUD operations
3. Database schema defines users and contact submissions
4. Development mode integrates with Vite middleware

### Database Schema
- **Users**: id, username, password (for potential admin features)
- **Contact Submissions**: id, name, email, phone, dueDate, services, message, createdAt

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM)
- UI libraries (Radix UI, Lucide icons)
- State management (React Query)
- Styling (Tailwind CSS, class-variance-authority)
- Form handling (React Hook Form, Zod validation)
- Carousel (Embla Carousel)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- PostgreSQL drivers and session store
- Development tools (tsx, cross-env)

### Development Dependencies
- Vite for build tooling
- TypeScript for type safety
- Replit-specific plugins for development environment

## Deployment Strategy

### Development
- Replit environment with Node.js 20
- Vite dev server on port 5000
- Hot module replacement enabled
- TypeScript compilation with strict mode

### Production
1. **Build Process**: 
   - Vite builds client-side code to dist/public
   - esbuild bundles server code to dist/index.js
2. **Deployment**: Configured for Replit autoscale deployment
3. **Static Assets**: Served from dist/public directory
4. **Environment**: Production mode with NODE_ENV=production

### Configuration Files
- **Vite**: Custom configuration with React plugin and path aliases
- **TypeScript**: Strict configuration with module resolution
- **Tailwind**: Custom design system with CSS variables
- **Drizzle**: PostgreSQL configuration for database operations

## Changelog

Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Added Decap CMS blog integration with GitHub/Netlify compatibility
- June 26, 2025. Updated blog pages to use real API data instead of sample data
- June 26, 2025. Configured CMS to use git-gateway for proper Netlify Identity integration
- June 26, 2025. Added Netlify Identity scripts and redirect handling for authentication

## User Preferences

Preferred communication style: Simple, everyday language.
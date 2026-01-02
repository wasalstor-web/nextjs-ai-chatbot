# Copilot Instructions

This file provides context and instructions for GitHub Copilot to work effectively in this codebase.

## Project Overview

This is **Chat SDK**, a free, open-source AI chatbot template built with Next.js and the AI SDK. It helps developers quickly build powerful chatbot applications with authentication, data persistence, and support for multiple AI model providers.

- **Type**: Web Application (Full-stack Next.js app)
- **Languages**: TypeScript, JavaScript
- **Frameworks**: Next.js 16 (App Router), React 19

## Architecture & Patterns

- **Architecture**: Next.js App Router with React Server Components (RSCs) and Server Actions
- **State Management**: 
  - React Hooks (`useState`, `useContext`, `useCallback`, `useMemo`) for local component state
  - SWR for server state and data fetching
  - React Context API for global state (e.g., `DataStreamProvider`, `PromptInputProvider`)
  - AI SDK hooks (`useChat`) for chat state management
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - shadcn/ui components built on Radix UI primitives
  - CSS Modules for component-scoped styles where needed

## Coding Standards

- **Naming**: 
  - camelCase for variables and functions
  - PascalCase for React components and types
  - UPPER_SNAKE_CASE for constants
- **Typing**: 
  - Strict TypeScript usage
  - Prefer explicit types over inference for public APIs
  - Use `type` for object shapes, `interface` for extensible types
  - Avoid `any` - use `unknown` if type is truly unknown
- **Error Handling**: 
  - Use try-catch blocks for async operations
  - Return error objects with `success: boolean` pattern where appropriate
  - Handle errors gracefully in UI with user-friendly messages
- **Code Quality**: 
  - Follow Ultracite rules (extended Biome configuration)
  - Use arrow functions for component definitions and callbacks
  - Prefer functional components with hooks over class components
  - Use `useMemo` and `useCallback` for performance optimization when needed
  - Export pure components for testing when possible (e.g., `PureMessages`, `PureMultimodalInput`)

## Testing

- **Framework**: Playwright for end-to-end testing
- **Conventions**: 
  - E2E tests located in `tests/e2e/` directory
  - Test fixtures and helpers in `tests/` directory
  - Use page object pattern for complex UI interactions
- **Mocks**: 
  - Mock external services and API calls in tests
  - Use test fixtures for consistent test data

## Tech Stack Specifics

- **Next.js**: 
  - App Router with Server Components by default
  - Server Actions for mutations
  - Route handlers in `app/api/` for API endpoints
- **AI SDK** (`@ai-sdk/react`, `ai`):
  - Use `useChat` hook for chat functionality
  - Use `streamText` for streaming responses
  - Support for tools and tool approval flows
- **Auth.js** (`next-auth`):
  - Authentication configuration in `app/(auth)/auth.config.ts`
  - Credential-based authentication
  - Session management via cookies
- **Database** (Drizzle ORM + PostgreSQL):
  - Schema definitions in `lib/db/`
  - Migrations managed via Drizzle Kit
  - Use server-only imports for database access
- **UI Components** (shadcn/ui + Radix UI):
  - Import components from `components/ui/`
  - Follow Radix UI patterns for accessibility
  - Use Tailwind classes for styling
- **Code Formatting/Linting** (Biome via Ultracite):
  - Run `pnpm format` to auto-fix code
  - Run `pnpm lint` to check for issues
  - Follow strict accessibility (a11y) rules
  - No console.log in production code (disabled in config for dev)
- **State Management Patterns**:
  - Use SWR for server state caching and revalidation
  - Use Context API sparingly for truly global state
  - Prefer prop drilling for component communication when feasible
  - Use React hooks for component-local state

## Key Patterns

- **Component Structure**: 
  - Separate pure/presentational components (prefixed with `Pure`) from container components
  - Use TypeScript props interfaces for component props
  - Export both default and named exports where appropriate
- **File Organization**: 
  - Components in `components/` directory
  - Server logic in `app/` directory (App Router)
  - Shared utilities in `lib/` directory
  - Hooks in `hooks/` directory
  - Types in `lib/types.ts` or co-located with components
- **API Routes**: 
  - Use Route Handlers in `app/api/` for API endpoints
  - Use Server Actions in `app/(chat)/actions.ts` for mutations
  - Return proper HTTP status codes and error responses
- **Streaming**: 
  - Use AI SDK streaming capabilities for real-time responses
  - Handle data streams via `DataStreamProvider` context
  - Support UI message streams for chat interactions

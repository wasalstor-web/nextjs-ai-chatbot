# AI Chatbot — Project Guide

> Full directive: [`.ai/APEX_AGENT.md`](.ai/APEX_AGENT.md)

## Stack
Next.js 16 • React 19 • TypeScript • Tailwind 4 • shadcn/ui • Drizzle ORM • PostgreSQL • NextAuth v5 • AI SDK • Puck Editor • pnpm 9

## Structure
```
/app                → pages, layouts, API routes
/app/(auth)         → authentication
/app/(chat)         → chat interface + actions
/app/builder        → visual page builder (admin)
/app/p              → public rendered pages
/components         → UI components
/components/ui      → shadcn primitives
/components/elements → chat elements
/hooks              → custom hooks
/lib                → utilities, DB, AI config
/lib/builder        → Puck components (20)
/tests              → Playwright e2e
/docs               → documentation
```

## Commands
```bash
pnpm dev          # development
pnpm build        # production build
pnpm lint         # check code
pnpm format       # fix formatting
pnpm test         # run tests
pnpm db:migrate   # apply migrations
pnpm db:studio    # Drizzle Studio
pnpm cf:deploy    # deploy to Cloudflare
```

## Rules
- Zero duplication • No `any` type • Named exports • Max 200 lines/file
- Server Components default • `'use client'` only when needed
- Skeleton loading • WCAG AA • RTL support • zod validation

## Language
Respond in user's language. Execute, don't explain.

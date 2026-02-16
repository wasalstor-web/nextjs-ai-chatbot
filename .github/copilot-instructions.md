# Copilot Instructions

> **MANDATORY**: Read [.ai/APEX_AGENT.md](../.ai/APEX_AGENT.md) first — the complete project directive. ALL rules there are binding.

## Project: AI Chatbot (Chat SDK)

**Stack**: Next.js 16 App Router + React 19 + TypeScript strict + Tailwind 4 + shadcn/ui + Radix UI + Drizzle ORM + PostgreSQL + NextAuth v5 + Vercel AI SDK + SWR + Playwright + pnpm 9

## Key Patterns

- Server Components default, `'use client'` only when needed
- Server Actions: `app/(chat)/actions.ts`
- Route Handlers: `app/api/`
- Pure components (prefix `Pure`) for testability
- `cn()` from `lib/utils` for Tailwind classes
- `server-only` for DB imports
- Streaming via `DataStreamProvider`
- Toast: `sonner` | Icons: `lucide-react` | Dark mode: `next-themes` | Animations: `framer-motion`

## Critical Rules

1. **ZERO DUPLICATION** — search before writing, extract shared
2. **No `any`** — `unknown` + type guards
3. **Named exports** — no default exports
4. **Max**: 200 lines/file, 30 lines/function, 100 lines JSX
5. **All states**: default/hover/focus/active/disabled/loading/error
6. **Skeleton loading** not spinners
7. **WCAG 2.1 AA** — focus rings, aria, contrast 4.5:1
8. **RTL** when Arabic
9. **No `console.log`** in production
10. **Validate** with `zod`
11. **Conventional commits**: `feat|fix|refactor(scope): message`
12. **Self-heal**: fix duplication, broken imports, missing types, a11y issues automatically
13. **Build must pass**: `pnpm build`
14. **Match user's language** in responses

## Commands
```bash
pnpm dev          # dev server (turbo)
pnpm build        # build (includes DB migrate)
pnpm lint         # check issues
pnpm format       # auto-fix
pnpm test         # Playwright e2e
pnpm db:generate  # generate migration
pnpm db:migrate   # run migrations
pnpm db:studio    # DB GUI
pnpm cf:deploy    # Cloudflare deploy
```

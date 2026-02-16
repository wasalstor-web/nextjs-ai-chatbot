# READ .ai/APEX_AGENT.md — the complete project directive. ALL rules are MANDATORY.

## Project: AI Chatbot — Next.js 16 + React 19 + TypeScript + Tailwind 4 + shadcn/ui + Drizzle ORM + PostgreSQL + NextAuth v5 + AI SDK + Puck Editor + pnpm 9

## Structure: /app (pages+API+actions) | /app/builder (Puck page builder, admin) | /app/p (public pages SSR) | /components (UI) | /components/ui (shadcn) | /hooks | /lib (utils+DB) | /lib/builder (Puck config+components) | /tests (Playwright)

## Rules: zero duplication | no `any` | named exports | max 200 lines/file | skeleton loading | WCAG AA | RTL Arabic | no console.log | zod validation | conventional commits | self-heal (fix duplication, types, a11y auto)

## Patterns: Server Components default | `'use client'` only when needed | Server Actions in actions.ts | `cn()` for classes | `server-only` for DB | streaming via DataStreamProvider | toast via sonner | icons: lucide-react | dark: next-themes | animate: framer-motion

## Builder: Puck Editor for visual pages | Tailwind lookup maps (no dynamic classes) | radio "yes"/"no" (not booleans) | admin auth via proxy.ts + layout.tsx | publish flow: save draft → publish → snapshot → revalidate

## Commands: `pnpm dev` | `pnpm build` | `pnpm lint` | `pnpm format` | `pnpm test` | `pnpm db:migrate` | `pnpm cf:deploy`

## Language: respond in user's language. Quality: Apple × Stripe × Vercel. Average = rejected.

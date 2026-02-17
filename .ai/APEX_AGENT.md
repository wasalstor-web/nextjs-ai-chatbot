# APEX AGENT — Project Directive v5.0

> This file is the SINGLE SOURCE OF TRUTH for all AI agents working on this project.
> Every AI tool (Copilot, Cursor, Claude, Codex, Cline, Windsurf, etc.) MUST read and follow this file.

---

## §1 — IDENTITY

You are an autonomous software engineer operating inside this codebase.
You own the outcome. Quality bar: Apple × Stripe × Vercel.
Respond in the user's language. Average = rejected.

---

## §2 — THIS PROJECT

- **Name**: مبسط LAW — منصة الاستشارات القانونية
- **Stack**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui + Radix UI
- **Database**: PostgreSQL + Drizzle ORM
- **Auth**: NextAuth (Auth.js) v5 beta
- **AI**: Vercel AI SDK (`ai`, `@ai-sdk/react`) + OpenAI GPT
- **State**: React hooks + SWR + Context API + `useChat`
- **Icons**: lucide-react
- **Linter**: Biome via Ultracite
- **Testing**: Playwright (e2e)
- **Package Manager**: pnpm 9
- **Deployment**: Vercel + Cloudflare (OpenNext)
- **Font**: Tajawal + Geist
- **Animations**: Framer Motion / Motion

### File Structure
```
/app                 → Next.js App Router (pages, layouts, API routes, server actions)
  /(auth)            → صفحات المصادقة
  /(chat)            → واجهة المحادثة
  /(landing)         → صفحات الهبوط
  /admin             → لوحة الإدارة
  /api               → route handlers
/components          → UI components
  /ui                → shadcn/ui primitives
  /legal             → Legal consultation components
/hooks               → custom React hooks
/lib                 → utilities, helpers, DB, AI config
  /ai                → AI providers, tools, prompts
  /db                → Drizzle schema, migrations, queries
  /legal             → Legal data, intake, validators
/tests               → Playwright e2e tests
/public              → static assets
/artifacts           → generated artifacts
```

---

## §3 — PRIME DIRECTIVE: ZERO DUPLICATION

**LAW #1 — overrides everything.**

Before writing ANY code:
1. Search codebase for similar logic/component/util
2. Found → extend/refactor existing, NEVER duplicate
3. Not found → write ONCE in correct shared location

Dedup targets: components, hooks, utils, types, API calls, validation schemas, styles, constants.

File limits:
- Max 200 lines/file — split if larger
- Max 30 lines/function
- Max 100 lines JSX/component
- One responsibility per file

Import order (blank line between groups):
1. Node built-ins
2. External packages
3. `@/` aliases: lib → types → hooks → components
4. Relative (within same feature only)

---

## §4 — CODE STANDARDS

### TypeScript
- `strict: true`, zero `any` (use `unknown` + guards)
- Named exports only
- Explicit return types on public functions
- Discriminated unions > optional fields
- `const` default, `let` only for mutation
- Early returns, max 2 nesting levels
- Descriptive names: `handleSubmitMessage` not `handle`

### React / Next.js
- Server Components by default, `'use client'` only when needed
- Server Actions for mutations (in `app/(chat)/actions.ts`)
- Route Handlers in `app/api/` for API endpoints
- Props interface above component
- No business logic in components → extract to hooks/services
- Error boundaries at feature level
- `useMemo`/`useCallback` only when profiler proves need
- Pure components pattern (prefix `Pure`) for testability

### Styling
- Tailwind classes only — no inline styles, no CSS modules
- Design tokens via Tailwind config
- `cn()` utility for conditional classes (from `lib/utils`)
- shadcn/ui components from `components/ui/`
- Radix UI patterns for accessibility
- Dark mode via `next-themes`

### State Management
- Server state → SWR (never in global store)
- Chat state → `useChat` from AI SDK
- Stream data → `DataStreamProvider` context
- UI state → `useState`/`useReducer` local
- Form state → controlled components
- URL state → search params

---

## §5 — DATABASE (Drizzle + PostgreSQL)

- Schema in `lib/db/` — main (`schema.ts`), chat (`schema-chat.ts`), legal (`lib/db/schema/`)
- Migrations via `drizzle-kit generate` + `tsx lib/db/migrate`
- Every change → create migration
- Parameterized queries only
- Select needed columns only
- `server-only` imports for DB access
- Commands: `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:studio`
- Builder tables: `builder_page`, `builder_asset`, `builder_snapshot` with `page_status` enum

---

## §6 — API & ERROR HANDLING

- Validate inputs with `zod`
- Consistent error shape: `{ error: string, code: string, status: number }`
- Auth middleware on protected routes
- Proper HTTP status codes
- Streaming via AI SDK for chat responses
- Try/catch at service boundaries
- User-facing: friendly message + action
- Never swallow errors silently

---

## §7 — SECURITY

- Secrets in `.env.local` only, never in code
- `.env*` in `.gitignore`
- Auth tokens: httpOnly + secure + sameSite
- RBAC server-side only
- Sanitize user content
- No `eval()`, no `innerHTML` with user data
- No `any` type
- Parameterized DB queries

---

## §8 — UI/UX STANDARDS

- "Would this impress in a Series A demo?"
- Every component needs: default, hover, focus, active, disabled, loading, error states
- Loading → skeleton shimmer (not spinner)
- Empty states → icon + message + CTA
- Error states → message + retry
- Animations: 150-300ms ease-out, GPU-accelerated (transform/opacity)
- `prefers-reduced-motion` respected
- WCAG 2.1 AA: contrast 4.5:1, focus rings, aria labels, keyboard nav
- RTL support for Arabic (logical CSS properties)
- Responsive: mobile-first, no horizontal scroll
- Touch targets: 44×44px minimum on mobile
- Toast feedback via `sonner` for every user action

---

## §9 — PERFORMANCE

- FCP < 1.2s, LCP < 2.0s, CLS < 0.05, INP < 200ms
- Tree-shake, dynamic import routes + heavy components
- SSR/RSC default, CSR only for interactive auth'd content
- Images: WebP/AVIF, lazy load, width/height
- Fonts: Geist subset, display=swap, preload
- Virtualize lists > 50 items
- Debounce search (300ms), throttle scroll (16ms)
- No N+1 queries

---

## §10 — TESTING

- Playwright for e2e in `tests/`
- Critical flows: auth, chat, message
- Mock external services
- Tests must pass before merge
- Run: `pnpm test`

---

## §11 — GIT & DEPLOYMENT

- Conventional commits: `feat|fix|refactor|perf|chore(scope): message`
- Never commit: `node_modules`, `.env.local`, `.next`, `dist`
- Build: `pnpm build` (includes DB migration)
- Lint: `pnpm lint`, Format: `pnpm format`
- Deploy: Vercel (auto) or `pnpm cf:deploy` (Cloudflare)
- Verify build before shipping
- No `console.log` in production code

---

## §12 — SELF-HEALING

On every task, auto-detect and fix (no permission needed):
- Duplicate code → extract shared
- Broken imports → fix paths
- Missing types → add
- `any` usage → proper type
- Unused vars → remove
- Dead code → remove
- `console.log` → remove
- Missing loading/empty/error states → add
- A11y violations → fix
- N+1 queries → batch
- Secrets in code → move to env

---

## §13 — EXECUTION PROTOCOL

```
SCAN → UNDERSTAND → DEDUPLICATE → ARCHITECT → IMPLEMENT → VERIFY
```

- Read structure + configs before any change
- Search for existing code before writing new
- Smallest diff, maximum impact
- Build + types + lint must pass
- Never deliver broken code
- 3 auto-fix attempts on failure, then revert + report

---

## §14 — COMMUNICATION

- Match user's language
- Ask ONLY when: missing keys, ambiguous business logic, destructive action
- Otherwise: decide + execute
- Never explain what you'll do — do it
- Never list options — pick best, execute
- Simple tasks: just do it + one-line confirmation

---

## §15 — PROHIBITIONS

Never:
- Duplicate code
- Guess when you can read
- Hallucinate files/APIs
- Create unnecessary files
- Use `any` type
- Hardcode values
- Break existing functionality
- Ignore project conventions
- Skip error handling
- Ship without build verify
- Leave `console.log`
- Ignore a11y or RTL

---

## §16 — LEGAL AI MODULE (أدوات القانون)

The core AI tools for Saudi legal consultation:

### Tools (lib/ai/tools/)
- **legalConsultation** — Interactive Q&A for legal advice with guided intake
- **analyzeContract** — Contract review with risk assessment
- **searchSaudiLaw** — Search 50+ Saudi legal sources

### Legal Data (lib/legal/)
- **prompts.ts** — LEGAL_SYSTEM_PROMPT with Saudi law expertise
- **sources.ts** — 50+ Saudi legal sources database
- **intake.ts** — Guided question flows by consultation type
- **validator.ts** — Legal document validation
- **types.ts** — ConsultationType, ContractType enums

### Supported Consultation Types
- عمالية (Labor) • تجارية (Commercial) • عقارية (Real Estate)
- أحوال شخصية (Family) • جنائية (Criminal) • مرورية (Traffic)
- إدارية (Administrative) • تنفيذ أحكام (Enforcement) • عامة (General)

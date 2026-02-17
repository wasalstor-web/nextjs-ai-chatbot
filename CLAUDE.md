# مبسط LAW — دليل المشروع

> للتوجيهات الكاملة: [`.ai/APEX_AGENT.md`](.ai/APEX_AGENT.md)

## Stack
Next.js 16 • React 19 • TypeScript • Tailwind 4 • shadcn/ui • Drizzle ORM • PostgreSQL • NextAuth v5 • AI SDK • pnpm 9

## Structure
```
/app                → الصفحات والـ layouts والـ API routes
/app/(auth)         → المصادقة
/app/(chat)         → واجهة الشات الرئيسية
/app/(landing)      → صفحات الهبوط
/app/admin          → لوحة الإدارة
/components         → مكونات الواجهة
/components/ui      → مكونات shadcn الأساسية
/components/legal   → مكونات قانونية
/hooks              → React hooks مخصصة
/lib/ai             → إعدادات الذكاء الاصطناعي والأدوات
/lib/legal          → البيانات والدوال القانونية
/lib/db             → قاعدة البيانات
/docs               → التوثيق
/tests              → اختبارات Playwright
```

## Commands
```bash
pnpm dev          # التطوير
pnpm build        # بناء الإنتاج
pnpm lint         # فحص الكود
pnpm format       # تنسيق الكود
pnpm test         # تشغيل الاختبارات
pnpm db:migrate   # تطبيق التهجيرات
pnpm db:studio    # Drizzle Studio
```

## Rules
- صفر تكرار • لا `any` • Named exports • Max 200 lines/file
- Server Components افتراضي • `'use client'` عند الحاجة فقط
- Skeleton loading • WCAG AA • RTL • zod validation

## Language
استجب بلغة المستخدم. نفذ ولا تشرح.

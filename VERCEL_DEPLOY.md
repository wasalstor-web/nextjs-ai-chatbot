# دليل رفع المشروع على Vercel 🚀

## المتطلبات الأساسية

### 1. حساب Vercel
- إذا لم يكن لديك حساب، سجل في [vercel.com](https://vercel.com)
- اربط حسابك بـ GitHub/GitLab/Bitbucket

### 2. قاعدة البيانات
يمكنك استخدام:
- **Vercel Postgres** (موصى به - متكامل مع Vercel)
- **Neon Postgres** (موصى به أيضاً)
- **Supabase** (بديل مجاني)
- أي قاعدة بيانات PostgreSQL

## خطوات الرفع على Vercel

### الطريقة 1: رفع مباشر من GitHub (موصى به)

1. **ادفع المشروع إلى GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **الذهاب إلى Vercel:**
   - افتح [vercel.com/new](https://vercel.com/new)
   - اختر "Import Git Repository"
   - اختر المستودع الخاص بك
   - انقر "Import"

3. **إعداد المشروع:**
   - **Framework Preset:** Next.js (يتم اكتشافه تلقائياً)
   - **Root Directory:** `./` (افتراضي)
   - **Build Command:** `pnpm build` (موجود في vercel.json)
   - **Install Command:** `pnpm install` (موجود في vercel.json)
   - **Output Directory:** `.next` (افتراضي)

4. **إضافة متغيرات البيئة (Environment Variables):**

   اضغط على "Environment Variables" وأضف:

   #### المطلوب (Required):
   
   ```env
   # المصادقة - مطلوب
   AUTH_SECRET=your-random-secret-key-here
   ```
   **كيفية إنشاء AUTH_SECRET:**
   ```bash
   openssl rand -base64 32
   # أو
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

   ```env
   # قاعدة البيانات - مطلوب
   POSTGRES_URL=postgresql://user:password@host:5432/database
   ```

   #### اختياري (Optional):
   
   ```env
   # الإدارة
   ADMIN_EMAILS=admin@example.com,admin2@example.com
   
   # AI Gateway (فقط للتطبيقات غير المستضافة على Vercel)
   # AI_GATEWAY_API_KEY=your-key-here
   
   # Vercel Blob Storage (يتم تكوينه تلقائياً على Vercel)
   # BLOB_READ_WRITE_TOKEN=your-token-here
   ```

5. **إعداد قاعدة البيانات:**

   #### خيار 1: Vercel Postgres (موصى به)
   - في صفحة المشروع على Vercel
   - اذهب إلى "Storage" → "Create" → "Postgres"
   - سيقوم Vercel بإنشاء قاعدة البيانات تلقائياً
   - انقر "Use this Database" وسيتم إضافة `POSTGRES_URL` تلقائياً

   #### خيار 2: Neon Postgres
   - اذهب إلى [neon.tech](https://neon.tech)
   - أنشئ مشروع جديد
   - انسخ رابط الاتصال (Connection String)
   - أضفه كـ `POSTGRES_URL` في Vercel Environment Variables

   #### خيار 3: Supabase
   - اذهب إلى [supabase.com](https://supabase.com)
   - أنشئ مشروع جديد
   - من Settings → Database → Connection String
   - انسخ رابط الاتصال وأضفه كـ `POSTGRES_URL`

6. **النشر (Deploy):**
   - انقر "Deploy"
   - انتظر حتى يكتمل البناء (Build)
   - ستحصل على رابط المشروع مثل: `your-project.vercel.app`

### الطريقة 2: استخدام Vercel CLI

1. **تثبيت Vercel CLI:**
   ```bash
   npm i -g vercel
   # أو
   pnpm add -g vercel
   ```

2. **ربط المشروع:**
   ```bash
   cd rewqpppppp-main
   vercel login
   vercel link
   ```

3. **سحب متغيرات البيئة (إذا كانت موجودة على Vercel):**
   ```bash
   vercel env pull .env.local
   ```

4. **إضافة متغيرات البيئة يدوياً في `.env.local`:**
   ```env
   AUTH_SECRET=your-secret-key-here
   POSTGRES_URL=postgresql://user:password@host:5432/database
   ADMIN_EMAILS=admin@example.com
   ```

5. **النشر:**
   ```bash
   vercel
   # للإنتاج:
   vercel --prod
   ```

## بعد الرفع

### 1. تشغيل Migrations (الهجرة):

بعد الرفع الناجح، يجب تشغيل migrations لقاعدة البيانات. يمكنك:

#### خيار 1: من Vercel Dashboard
- اذهب إلى المشروع → Settings → Environment Variables
- تأكد من وجود `POSTGRES_URL`
- Vercel سيشغل migrations تلقائياً عند البناء (مذكور في `package.json`: `"build": "tsx lib/db/migrate && next build"`)

#### خيار 2: يدوياً من Terminal
```bash
vercel env pull .env.local
pnpm db:migrate
```

### 2. التحقق من عمل الموقع:

- افتح رابط المشروع
- تأكد من أن الصفحة الرئيسية تعمل
- جرب تسجيل الدخول
- تأكد من أن قاعدة البيانات متصلة

### 3. إعداد Domain مخصص (اختياري):

- في Vercel Dashboard → Settings → Domains
- أضف Domain الخاص بك
- اتبع التعليمات لإعداد DNS

## استكشاف الأخطاء

### المشكلة: Build فشل
- تحقق من Console Logs في Vercel
- تأكد من أن جميع متغيرات البيئة موجودة
- تأكد من أن `POSTGRES_URL` صحيح

### المشكلة: Database connection failed
- تحقق من `POSTGRES_URL`
- تأكد من أن قاعدة البيانات قابلة للوصول من الإنترنت
- تأكد من إعدادات Firewall في قاعدة البيانات

### المشكلة: Authentication لا تعمل
- تأكد من وجود `AUTH_SECRET`
- تأكد من أن `AUTH_SECRET` طويل ومفروض (32+ character)

### المشكلة: الصفحات لا تظهر
- تحقق من Console في المتصفح
- تأكد من أن Build نجح
- تحقق من Logs في Vercel

## ملاحظات مهمة

1. **لا ترفع ملف `.env.local` إلى Git**
   - تأكد من وجوده في `.gitignore`
   - استخدم Vercel Environment Variables فقط

2. **أمان AUTH_SECRET:**
   - استخدم مفتاح عشوائي قوي
   - لا تشارك المفتاح مع أحد
   - استخدم مفتاح مختلف لكل بيئة (development, production)

3. **قاعدة البيانات:**
   - استخدم قاعدة بيانات منفصلة للإنتاج
   - لا تستخدم قاعدة بيانات التطوير للإنتاج
   - احتفظ بنسخة احتياطية (Backup) دورية

4. **الميزات المجانية:**
   - Vercel: 100GB bandwidth/month
   - Neon: 0.5GB database storage
   - Supabase: 500MB database storage

## الملفات المهمة للرفع

✅ **يجب أن تكون موجودة:**
- `package.json` - إعدادات المشروع
- `next.config.ts` - إعدادات Next.js
- `vercel.json` - إعدادات Vercel
- `.gitignore` - لمنع رفع ملفات حساسة
- `lib/db/migrations/` - ملفات قاعدة البيانات
- `tsconfig.json` - إعدادات TypeScript

❌ **لا ترفع:**
- `.env.local`
- `.env`
- `node_modules/`
- `.next/`
- `.vercel/`

## رابط مفيد

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

**جاهز للنشر! 🎉**

إذا واجهت أي مشاكل، تحقق من Logs في Vercel Dashboard أو راجع الوثائق أعلاه.


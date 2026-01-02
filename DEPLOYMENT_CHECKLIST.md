# ✅ قائمة التحقق قبل النشر على Vercel

## 📋 قبل الرفع

### 1. الملفات المطلوبة
- [x] `package.json` موجود
- [x] `next.config.ts` موجود
- [x] `vercel.json` موجود
- [x] `tsconfig.json` موجود
- [x] `.gitignore` موجود ويحمي الملفات الحساسة
- [x] `.env.example` موجود (قالب للمتغيرات)

### 2. قاعدة البيانات
- [ ] تم إنشاء قاعدة بيانات PostgreSQL
- [ ] تم الحصول على `POSTGRES_URL`
- [ ] قاعدة البيانات متاحة من الإنترنت
- [ ] تم تشغيل migrations (سيتم تلقائياً على Vercel)

### 3. Git Repository
- [ ] المشروع موجود على GitHub/GitLab/Bitbucket
- [ ] جميع التغييرات تم رفعها (commit & push)
- [ ] لا توجد ملفات حساسة في Git (.env, .env.local)

### 4. Environment Variables (متغيرات البيئة)
يجب إضافتها على Vercel Dashboard:

#### المطلوب (Required):
- [ ] `AUTH_SECRET` - مفتاح سري عشوائي
  - أنشئه بـ: `openssl rand -base64 32`
  - أو: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`
  
- [ ] `POSTGRES_URL` - رابط قاعدة البيانات
  - مثال: `postgresql://user:password@host:5432/database`
  - احصل عليه من Vercel Postgres / Neon / Supabase

#### اختياري (Optional):
- [ ] `ADMIN_EMAILS` - عناوين البريد للمدراء
  - مثال: `admin@example.com,admin2@example.com`
  
- [ ] `AI_GATEWAY_API_KEY` - فقط للتطبيقات غير المستضافة على Vercel
- [ ] `BLOB_READ_WRITE_TOKEN` - يتم تكوينه تلقائياً على Vercel

## 🚀 خطوات النشر

### الطريقة 1: من Vercel Dashboard (موصى به)

1. [ ] الذهاب إلى [vercel.com/new](https://vercel.com/new)
2. [ ] تسجيل الدخول / إنشاء حساب
3. [ ] ربط حساب GitHub/GitLab/Bitbucket
4. [ ] اختيار المستودع (Repository)
5. [ ] مراجعة إعدادات المشروع:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`
6. [ ] إضافة Environment Variables (انظر أعلاه)
7. [ ] النقر على "Deploy"
8. [ ] انتظار اكتمال البناء (Build)
9. [ ] التحقق من أن الموقع يعمل

### الطريقة 2: باستخدام Vercel CLI

1. [ ] تثبيت Vercel CLI: `npm i -g vercel`
2. [ ] تسجيل الدخول: `vercel login`
3. [ ] ربط المشروع: `vercel link`
4. [ ] النشر: `vercel` (للاختبار) أو `vercel --prod` (للإنتاج)

## ✅ بعد النشر

### التحقق من العمل
- [ ] الموقع الرئيسي يعمل
- [ ] صفحة تسجيل الدخول تعمل
- [ ] قاعدة البيانات متصلة
- [ ] Authentication يعمل
- [ ] لوحة الإدارة تعمل (إذا أضفت ADMIN_EMAILS)

### إعدادات إضافية (اختياري)
- [ ] إضافة Domain مخصص
- [ ] إعداد Analytics
- [ ] إعداد Monitoring
- [ ] إعداد Backups لقاعدة البيانات

## 🔧 استكشاف الأخطاء

### Build فشل
- [ ] تحقق من Build Logs في Vercel
- [ ] تأكد من وجود جميع Environment Variables
- [ ] تحقق من أن `POSTGRES_URL` صحيح
- [ ] تأكد من أن `AUTH_SECRET` موجود

### Database Connection Failed
- [ ] تحقق من `POSTGRES_URL`
- [ ] تأكد من أن قاعدة البيانات متاحة من الإنترنت
- [ ] تحقق من إعدادات Firewall
- [ ] تأكد من صحة اسم المستخدم وكلمة المرور

### Authentication لا يعمل
- [ ] تأكد من وجود `AUTH_SECRET`
- [ ] تأكد من أن `AUTH_SECRET` قوي (32+ character)
- [ ] تحقق من Logs في Vercel

### الصفحات لا تظهر
- [ ] تحقق من Console في المتصفح
- [ ] تحقق من Build Logs
- [ ] تأكد من عدم وجود أخطاء في الكود

## 📚 موارد مفيدة

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)

---

**ملاحظة:** استخدم `node scripts/pre-deploy-check.js` للتحقق التلقائي من جاهزية المشروع.


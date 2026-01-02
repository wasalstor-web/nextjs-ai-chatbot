# ⚡ دليل النشر السريع على Vercel

## 🎯 النشر في 5 خطوات

### 1️⃣ التحقق من الجاهزية
```bash
pnpm run deploy:check
# أو
node scripts/pre-deploy-check.js
```

### 2️⃣ رفع التغييرات إلى GitHub
```bash
git add .
git commit -m "Ready for deployment: Improved loading states and deployment setup"
git push
```

### 3️⃣ الذهاب إلى Vercel
افتح: [vercel.com/new](https://vercel.com/new)

### 4️⃣ إعداد المشروع
- اختر المستودع من GitHub
- Framework: Next.js (يُكتشف تلقائياً)
- Root Directory: `./`
- Build Command: `pnpm build` (موجود في vercel.json)
- Install Command: `pnpm install`

### 5️⃣ إضافة Environment Variables

#### المطلوب (Required):
```
AUTH_SECRET=your-random-secret-here
POSTGRES_URL=postgresql://user:pass@host:5432/db
```

#### اختياري (Optional):
```
ADMIN_EMAILS=admin@example.com
```

**💡 كيفية إنشاء AUTH_SECRET:**
```bash
openssl rand -base64 32
# أو
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 6️⃣ النشر
- انقر **"Deploy"**
- انتظر اكتمال البناء
- 🎉 جاهز!

---

## 🔧 استخدام Vercel CLI (بديل)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# ربط المشروع
vercel link

# النشر
vercel          # للاختبار
vercel --prod   # للإنتاج
```

---

## 📋 قائمة التحقق السريعة

- [ ] المشروع على GitHub
- [ ] قاعدة بيانات PostgreSQL جاهزة
- [ ] `AUTH_SECRET` جاهز
- [ ] `POSTGRES_URL` جاهز
- [ ] تم رفع التغييرات (git push)

---

## 🆘 مساعدة

- **Build فشل؟** → تحقق من Build Logs في Vercel
- **Database Error؟** → تحقق من `POSTGRES_URL`
- **Auth Error؟** → تحقق من `AUTH_SECRET`

للمزيد من التفاصيل: راجع `VERCEL_DEPLOY.md`


# دليل الأمان (Security Guide)

## ⚠️ معلومات حساسة - لا ترفعها أبداً

### الملفات التي يجب عدم رفعها إلى Git:
- `.env.local`
- `.env`
- `.env.production`
- `.env.development`
- `.env.test`
- أي ملف يحتوي على `.env` في اسمه

### المفاتيح والمعلومات الحساسة:
- `AUTH_SECRET` - مفتاح NextAuth
- `SUPABASE_SERVICE_ROLE_KEY` - مفتاح Supabase السري
- `POSTGRES_URL` - رابط قاعدة البيانات (يحتوي على كلمة المرور)
- `SUBSPACE_API_KEY` - مفتاح Subspace API
- `AI_GATEWAY_API_KEY` - مفتاح AI Gateway
- `BLOB_READ_WRITE_TOKEN` - رمز Vercel Blob
- أي كلمات مرور أو tokens

## ✅ أين يجب حفظ المفاتيح:

### 1. محلياً (Local Development):
- احفظ المفاتيح في ملف `.env.local` (غير موجود في Git)
- استخدم `.env.example` كقالب فقط (بدون قيم حقيقية)

### 2. على Vercel:
- استخدم **Vercel Environment Variables** فقط
- لا تضع المفاتيح في الكود أو الملفات
- أضف المفاتيح من: Project Settings → Environment Variables

### 3. على Supabase:
- المفاتيح موجودة في Supabase Dashboard
- لا تشارك `service_role` key أبداً
- `anon` key آمن للاستخدام في client-side

## 🔒 أفضل الممارسات:

1. **استخدم متغيرات البيئة دائماً**:
   ```typescript
   const apiKey = process.env.API_KEY; // ✅ صحيح
   const apiKey = "hardcoded-key"; // ❌ خطأ!
   ```

2. **تحقق من وجود المفاتيح**:
   ```typescript
   if (!process.env.API_KEY) {
     throw new Error("API_KEY is required");
   }
   ```

3. **لا تضع المفاتيح في**:
   - ملفات التوثيق (README, .md)
   - الكود المصدري
   - ملفات الإعدادات العامة
   - سجلات الأخطاء (logs)

4. **استخدم `.env.example` كقالب**:
   ```env
   # .env.example (آمن للرفع)
   API_KEY=your-api-key-here
   
   # .env.local (لا ترفعه!)
   API_KEY=actual-secret-key-12345
   ```

## 🚨 إذا تم رفع مفتاح بالخطأ:

1. **غيّر المفتاح فوراً** في:
   - Vercel Environment Variables
   - Supabase Dashboard
   - أي خدمة أخرى

2. **احذف المفتاح من Git history**:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **أضف الملف إلى `.gitignore`** إذا لم يكن موجوداً

4. **أبلغ الفريق** إذا كان المفتاح مشتركاً


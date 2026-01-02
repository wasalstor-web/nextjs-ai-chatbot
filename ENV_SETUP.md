# إعداد المتغيرات البيئية (Environment Variables)

## المفاتيح المطلوبة

### 1. قاعدة البيانات (Database)

#### خيار 1: PostgreSQL مباشر
```env
POSTGRES_URL=postgresql://user:password@localhost:5432/chatbot
```
- **مطلوب**: نعم (إذا لم تستخدم Supabase)
- **الوصف**: رابط الاتصال بقاعدة بيانات PostgreSQL
- **مثال**: `postgresql://admin:password123@localhost:5432/chatbot`

#### خيار 2: Supabase
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```
- **مطلوب**: نعم (إذا لم تستخدم PostgreSQL مباشر)
- **الوصف**: إعدادات Supabase
- **مثال**: 
  - URL: `https://gdfvktjkmdyvpewqycpd.supabase.co`
  - Anon Key: JWT token مع role: "anon"
  - Service Role Key: JWT token مع role: "service_role"

### 2. المصادقة (Authentication)
```env
AUTH_SECRET=your-secret-key-here
```
- **مطلوب**: نعم
- **الوصف**: مفتاح سري لـ NextAuth.js
- **كيفية الإنشاء**: 
  ```bash
  openssl rand -base64 32
  ```

### 3. AI Gateway (اختياري)
```env
AI_GATEWAY_API_KEY=your-ai-gateway-api-key-here
```
- **مطلوب**: لا (فقط للتطبيقات غير المستضافة على Vercel)
- **الوصف**: مفتاح API لـ AI Gateway
- **ملاحظة**: على Vercel يتم التعامل مع المصادقة تلقائياً

### 4. الإدارة (Admin)
```env
ADMIN_EMAILS=admin@example.com
```
- **مطلوب**: لا
- **الوصف**: قائمة بفاصلة من عناوين البريد الإلكتروني للمدراء
- **مثال**: `admin1@example.com,admin2@example.com`

### 5. Vercel Blob Storage (اختياري)
```env
BLOB_READ_WRITE_TOKEN=your-blob-token-here
```
- **مطلوب**: لا (يتم تكوينه تلقائياً على Vercel)
- **الوصف**: رمز الوصول لتخزين الملفات

### 6. بيئة التشغيل (Environment)
```env
NODE_ENV=development
```
- **مطلوب**: لا (افتراضي: development)
- **القيم**: `development`, `production`, `test`

### 7. المنفذ (Port)
```env
PORT=3000
```
- **مطلوب**: لا (افتراضي: 3000)
- **الوصف**: منفذ الخادم

## خطوات الإعداد

1. انسخ ملف `.env.example` إلى `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. املأ القيم المطلوبة في `.env.local`

3. تأكد من أن قاعدة البيانات تعمل وأن رابط الاتصال صحيح

4. قم بتشغيل التطبيق:
   ```bash
   pnpm install
   pnpm db:migrate
   pnpm dev
   ```

## ملاحظات الأمان

- **لا تقم برفع ملف `.env.local` إلى Git**
- استخدم متغيرات بيئية آمنة في الإنتاج
- على Vercel، استخدم Vercel Environment Variables


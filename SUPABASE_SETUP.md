# إعداد Supabase

## الخطوات

### 1. الحصول على مفاتيح Supabase

1. اذهب إلى [Supabase Dashboard](https://app.supabase.com)
2. اختر مشروعك
3. اذهب إلى **Settings** → **API**
4. انسخ المفاتيح التالية:
   - **Project URL**: `https://your-project.supabase.co`
   - **anon/public key**: المفتاح العام (يمكن استخدامه في العميل)
   - **service_role key**: المفتاح السري (استخدمه فقط على السيرفر)

⚠️ **مهم**: لا تشارك `service_role key` أبداً - لديه صلاحيات كاملة!

### 2. إضافة متغيرات البيئة

أضف إلى ملف `.env.local` (لا ترفع هذا الملف إلى Git):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# يمكنك أيضاً استخدام Supabase كقاعدة بيانات بدلاً من PostgreSQL
# POSTGRES_URL=postgresql://postgres:[YOUR-PASSWORD]@db.gdfvktjkmdyvpewqycpd.supabase.co:5432/postgres
```

### 3. استخدام Supabase

المشروع يدعم الآن استخدام Supabase كقاعدة بيانات. يمكنك:

1. **استخدام Supabase Client**:
```typescript
import { getSupabaseClient } from "@/lib/supabase/client";

const supabase = await getSupabaseClient();
const { data, error } = await supabase.from("users").select("*");
```

2. **استخدام Supabase Admin Client** (على السيرفر فقط):
```typescript
import { getSupabaseAdminClient } from "@/lib/supabase/client";

const supabase = await getSupabaseAdminClient();
const { data, error } = await supabase.from("users").select("*");
```

3. **استخدام Supabase Database Helper**:
```typescript
import { createSupabaseDatabase } from "@/lib/supabase/database";

const db = createSupabaseDatabase();
const users = await db.from("users").select("*");
```

### 4. ملاحظات الأمان

- **Anon Key**: آمن للاستخدام في الكود الذي يعمل في المتصفح (client-side)
- **Service Role Key**: يجب استخدامه فقط في API routes والكود الذي يعمل على السيرفر (server-side)
- **لا تشارك Service Role Key** في الكود الذي يعمل في المتصفح


# إعداد Supabase

## الخطوات

### 1. الحصول على مفاتيح Supabase

من JWT tokens المقدمة:
- **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZnZrdGprbWR5dnBld3F5Y3BkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjQ0MTA1MCwiZXhwIjoyMDgyMDE3MDUwfQ.G_UDn6mnTqwHpVR6WEkrDiVeqYbxJG7FIDE0_fR2dA8`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZnZrdGprbWR5dnBld3F5Y3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NDEwNTAsImV4cCI6MjA4MjAxNzA1MH0.5WAZ8pjwZWQZ51hZu5AX9nJJf7Ihtm4aI6fXz7Q-29Q`
- **Project Reference**: `gdfvktjkmdyvpewqycpd`
- **Supabase URL**: `https://gdfvktjkmdyvpewqycpd.supabase.co`

### 2. إضافة متغيرات البيئة

أضف إلى ملف `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://gdfvktjkmdyvpewqycpd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZnZrdGprbWR5dnBld3F5Y3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NDEwNTAsImV4cCI6MjA4MjAxNzA1MH0.5WAZ8pjwZWQZ51hZu5AX9nJJf7Ihtm4aI6fXz7Q-29Q
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZnZrdGprbWR5dnBld3F5Y3BkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjQ0MTA1MCwiZXhwIjoyMDgyMDE3MDUwfQ.G_UDn6mnTqwHpVR6WEkrDiVeqYbxJG7FIDE0_fR2dA8

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


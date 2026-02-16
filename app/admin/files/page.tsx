"use client";

import { Upload, HardDrive, AlertCircle } from "lucide-react";

export default function AdminFilesPage() {
  const r2Configured = Boolean(process.env.NEXT_PUBLIC_R2_ENABLED);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة الملفات</h1>
        <p className="text-muted-foreground mt-2">
          عرض وإدارة جميع الملفات المرفوعة في النظام
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">التخزين</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Cloudflare R2 {r2Configured ? "(مفعّل)" : "(غير مفعّل)"}
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">الرفع</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            الحد الأقصى: 4.5 ميغابايت لكل ملف
          </p>
        </div>
      </div>

      {!r2Configured && (
        <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
          <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          <div>
            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              R2 غير مفعّل
            </p>
            <p className="text-xs text-yellow-700 dark:text-yellow-300">
              لتفعيل رفع الملفات، قم بتفعيل Cloudflare R2 وأضف المتغيرات البيئية المطلوبة
            </p>
          </div>
        </div>
      )}

      <div className="rounded-lg border p-8 text-center">
        <Upload className="mx-auto h-12 w-12 text-muted-foreground/30" />
        <p className="mt-3 text-sm text-muted-foreground">
          لا توجد ملفات مرفوعة بعد
        </p>
      </div>
    </div>
  );
}


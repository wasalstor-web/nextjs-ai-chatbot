"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  formatDate,
  getStatusColor,
  getStatusLabel,
  isValidSlug,
  toSlug,
} from "@/lib/builder/utils";
import { cn } from "@/lib/utils";

interface PageItem {
  id: string;
  title: string;
  slug: string;
  status: string;
  updatedAt: string;
  publishedAt: string | null;
}

export default function BuilderPagesManager() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPages = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch("/builder/api/pages");
      if (res.ok) {
        const data = await res.json();
        setPages(data);
      } else {
        setError("فشل في تحميل الصفحات");
      }
    } catch {
      setError("خطأ في الاتصال");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPages();
  }, [loadPages]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugTouched && newTitle) {
      setNewSlug(toSlug(newTitle));
    }
  }, [newTitle, slugTouched]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim() || !newSlug.trim()) return;

    if (!isValidSlug(newSlug)) {
      setError(
        "الرابط غير صالح — استخدم حروف إنجليزية صغيرة وأرقام وشرطات فقط"
      );
      return;
    }

    setCreating(true);
    setError(null);
    try {
      const res = await fetch("/builder/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, slug: newSlug }),
      });

      if (res.ok) {
        setNewTitle("");
        setNewSlug("");
        setSlugTouched(false);
        loadPages();
      } else {
        const data = await res.json();
        setError(data.error || "فشل في إنشاء الصفحة");
      }
    } catch {
      setError("خطأ في الاتصال");
    } finally {
      setCreating(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("هل أنت متأكد من حذف هذه الصفحة؟")) return;

    try {
      const res = await fetch(`/builder/api/pages/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPages((prev) => prev.filter((p) => p.id !== id));
      } else {
        setError("فشل في حذف الصفحة");
      }
    } catch {
      setError("خطأ في الاتصال");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-screen-xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-3xl tracking-tight">بناء الصفحات</h1>
            <p className="mt-1 text-muted-foreground">
              إنشاء وإدارة صفحات الموقع بالسحب والإفلات
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors hover:bg-muted"
              href="/admin"
            >
              لوحة التحكم
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors hover:bg-muted"
              href="/"
            >
              ← الرئيسية
            </Link>
          </div>
        </div>

        {/* Error banner */}
        {error && (
          <div className="mb-6 flex items-center justify-between rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-destructive text-sm">
            <span>{error}</span>
            <button
              className="text-destructive hover:text-destructive/80"
              onClick={() => setError(null)}
              type="button"
            >
              ✕
            </button>
          </div>
        )}

        {/* Create form */}
        <form
          className="mb-8 space-y-3 rounded-lg border bg-card p-4"
          onSubmit={handleCreate}
        >
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="sr-only" htmlFor="page-title">
                عنوان الصفحة
              </label>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                dir="rtl"
                id="page-title"
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="عنوان الصفحة الجديدة..."
                type="text"
                value={newTitle}
              />
            </div>
            <div className="w-48">
              <label className="sr-only" htmlFor="page-slug">
                الرابط
              </label>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                dir="ltr"
                id="page-slug"
                onChange={(e) => {
                  setSlugTouched(true);
                  setNewSlug(e.target.value);
                }}
                placeholder="my-page"
                type="text"
                value={newSlug}
              />
            </div>
            <button
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90 disabled:opacity-50"
              disabled={creating || !newTitle.trim() || !newSlug.trim()}
              type="submit"
            >
              {creating ? "جاري الإنشاء..." : "إنشاء صفحة"}
            </button>
          </div>
          {newSlug && (
            <p className="text-muted-foreground text-xs" dir="ltr">
              URL: /p/{newSlug}
            </p>
          )}
        </form>

        {/* Stats bar */}
        {!loading && pages.length > 0 && (
          <div className="mb-6 flex gap-6 text-muted-foreground text-sm">
            <span>
              الكل: <strong className="text-foreground">{pages.length}</strong>
            </span>
            <span>
              منشور:{" "}
              <strong className="text-foreground">
                {pages.filter((p) => p.status === "published").length}
              </strong>
            </span>
            <span>
              مسودة:{" "}
              <strong className="text-foreground">
                {pages.filter((p) => p.status === "draft").length}
              </strong>
            </span>
          </div>
        )}

        {/* Pages list */}
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                className="flex items-center gap-4 rounded-lg border p-4"
                key={`skel-${i}`}
              >
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-48 animate-pulse rounded bg-muted" />
                  <div className="h-3 w-32 animate-pulse rounded bg-muted" />
                </div>
                <div className="h-8 w-20 animate-pulse rounded bg-muted" />
              </div>
            ))}
          </div>
        ) : pages.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-muted text-2xl">
              📄
            </div>
            <p className="font-medium text-lg">لا توجد صفحات بعد</p>
            <p className="mt-1 text-sm">
              أنشئ صفحتك الأولى باستخدام النموذج أعلاه
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {pages.map((page) => (
              <div
                className="flex items-center justify-between rounded-lg border bg-card p-4 transition-shadow hover:shadow-sm"
                key={page.id}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="truncate font-semibold">{page.title}</h3>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 font-medium text-xs",
                        getStatusColor(page.status) === "default" &&
                          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                        getStatusColor(page.status) === "secondary" &&
                          "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
                        getStatusColor(page.status) === "outline" &&
                          "border text-muted-foreground"
                      )}
                    >
                      {getStatusLabel(page.status)}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-4 text-muted-foreground text-xs">
                    <span className="font-mono" dir="ltr">
                      /p/{page.slug}
                    </span>
                    <span>آخر تعديل: {formatDate(page.updatedAt)}</span>
                    {page.publishedAt && (
                      <span>نُشر: {formatDate(page.publishedAt)}</span>
                    )}
                  </div>
                </div>
                <div className="mr-4 flex items-center gap-2">
                  <Link
                    className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 font-medium text-primary-foreground text-xs transition-colors hover:bg-primary/90"
                    href={`/builder/${page.slug}`}
                  >
                    تحرير
                  </Link>
                  {page.status === "published" && (
                    <Link
                      className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs transition-colors hover:bg-muted"
                      href={`/p/${page.slug}`}
                      target="_blank"
                    >
                      معاينة ↗
                    </Link>
                  )}
                  <button
                    className="inline-flex items-center rounded-md px-3 py-1.5 text-destructive text-xs transition-colors hover:bg-destructive/10"
                    onClick={() => handleDelete(page.id)}
                    type="button"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

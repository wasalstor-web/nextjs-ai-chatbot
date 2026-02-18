import { ChevronLeft, Code2, Key, Zap } from "lucide-react";

const ENDPOINTS = [
  {
    method: "POST",
    path: "/api/v1/analyze",
    desc: "تحليل نص قانوني واستخراج المعلومات الرئيسية.",
  },
  {
    method: "POST",
    path: "/api/v1/draft",
    desc: "صياغة عقد أو مذكرة قانونية بناء على المدخلات.",
  },
  {
    method: "GET",
    path: "/api/v1/cases/{id}",
    desc: "استرجاع تفاصيل قضية محددة.",
  },
  {
    method: "POST",
    path: "/api/v1/research",
    desc: "البحث في قاعدة بيانات السوابق القضائية والتشريعات.",
  },
  {
    method: "POST",
    path: "/api/v1/chat",
    desc: "التحدث مع المساعد القانوني الذكي بصيغة محادثة.",
  },
];

const FEATURES = [
  {
    icon: Zap,
    title: "استجابة فورية",
    desc: "زمن استجابة أقل من 200ms لمعظم الطلبات.",
  },
  {
    icon: Key,
    title: "مصادقة آمنة",
    desc: "مفاتيح API مشفرة مع نطاقات صلاحية محددة.",
  },
  {
    icon: Code2,
    title: "REST & Stream",
    desc: "دعم كامل لـ REST وSSE للاستجابة المتدفقة.",
  },
];

export default function ApiPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      <section className="border-zinc-200 border-b px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <Code2 className="h-4 w-4" />
            واجهة برمجية
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
            مبسط API
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            ادمج قدرات الذكاء الاصطناعي القانوني مباشرة في تطبيقاتك.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="rounded-full bg-zinc-900 px-6 py-2.5 font-medium text-sm text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900"
              href="/register"
            >
              احصل على مفتاح API
            </a>
            <a
              className="rounded-full border border-zinc-300 px-6 py-2.5 font-medium text-sm transition-colors hover:border-zinc-500 dark:border-zinc-600"
              href="mailto:api@mubassit.ai"
            >
              تواصل مع الفريق
            </a>
          </div>
        </div>
      </section>
      <section className="border-zinc-200 border-b px-6 py-16 dark:border-zinc-800">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              key={f.title}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                <f.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
              </div>
              <h3 className="mb-1 font-semibold">{f.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-bold text-2xl">المسارات المتاحة</h2>
          <div className="space-y-3">
            {ENDPOINTS.map((ep) => (
              <div
                className="flex flex-col gap-3 rounded-2xl border border-zinc-200 p-5 sm:flex-row sm:items-center dark:border-zinc-800"
                key={ep.path}
              >
                <span
                  className={`shrink-0 rounded-md px-2 py-0.5 font-mono font-semibold text-xs ${ep.method === "POST" ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400" : "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"}`}
                >
                  {ep.method}
                </span>
                <code className="shrink-0 font-mono text-sm text-zinc-700 dark:text-zinc-300">
                  {ep.path}
                </code>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {ep.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-6 mb-16 rounded-3xl bg-zinc-900 px-8 py-16 text-center text-white md:mx-auto md:max-w-4xl dark:bg-zinc-800">
        <h2 className="mb-3 font-bold text-3xl tracking-tight">
          ابدأ البناء اليوم
        </h2>
        <p className="mb-8 text-zinc-400">
          وثائق كاملة وحزم SDK جاهزة للاستخدام الفوري.
        </p>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
          href="/register"
        >
          احصل على مفتاح API <ChevronLeft className="h-4 w-4 rotate-180" />
        </a>
      </section>
    </div>
  );
}

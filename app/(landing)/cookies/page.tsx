import { CheckCircle, Cookie } from "lucide-react";

const SECTIONS = [
  {
    num: "01",
    title: "ما هي ملفات Cookies",
    items: [
      "ملفات نصية صغيرة تحفظ في متصفحك.",
      "تساعدنا على تذكر تفضيلاتك.",
      "لا تحتوي على معلومات شخصية حساسة.",
    ],
  },
  {
    num: "02",
    title: "Cookies الضرورية",
    items: [
      "ضرورية لعمل الموقع الأساسي.",
      "تتضمن جلسة المستخدم وحالة تسجيل الدخول.",
      "لا يمكن تعطيلها دون التأثير على الخدمة.",
    ],
  },
  {
    num: "03",
    title: "Cookies الأداء",
    items: [
      "تقيس أداء الصفحات وسرعة التحميل.",
      "تساعدنا في تحسين تجربتك.",
      "يمكنك تعطيلها دون التأثير على المميزات الأساسية.",
    ],
  },
  {
    num: "04",
    title: "إدارة Cookies",
    items: [
      "يمكنك حذف Cookies من إعدادات متصفحك.",
      "يمكنك رفض Cookies الاختيارية.",
      "تفضيلاتك محفوظة لمدة 12 شهرا.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      <section className="border-zinc-200 border-b px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <Cookie className="h-4 w-4" />
            سياسة Cookies
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
            سياسة الكوكيز
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            نستخدم Cookies فقط لتحسين تجربتك. مفهوم بسيط تنفيذ شفاف.
          </p>
          <p className="mt-4 text-sm text-zinc-400">آخر تحديث: يناير 2025</p>
        </div>
      </section>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((sec) => (
            <div
              className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800"
              key={sec.num}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-400">
                  {sec.num}
                </span>
                <h2 className="font-semibold text-xl">{sec.title}</h2>
              </div>
              <ul className="space-y-2">
                {sec.items.map((item) => (
                  <li
                    className="flex gap-2 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400"
                    key={item}
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

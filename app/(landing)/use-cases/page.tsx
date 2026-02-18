import {
  ArrowLeft,
  Briefcase,
  Building,
  ChevronLeft,
  FileText,
  Gavel,
  Scale,
  Users,
} from "lucide-react";

const CASES = [
  {
    icon: Gavel,
    num: "01",
    title: "القضايا الجزائية",
    tags: ["تحليل أدلة", "صياغة دفوع", "استئناف"],
    desc: "تحليل الوقائع وصياغة الدفوع الجزائية بدقة قانونية عالية.",
  },
  {
    icon: Building,
    num: "02",
    title: "عقود العقارات",
    tags: ["مراجعة عقود", "تسجيل", "نزاعات"],
    desc: "مراجعة وصياغة عقود البيع والإيجار والتمويل العقاري.",
  },
  {
    icon: Users,
    num: "03",
    title: "قضايا العمل",
    tags: ["إنهاء خدمة", "مستحقات", "تسوية"],
    desc: "حساب المستحقات العمالية وصياغة الردود أمام المحاكم.",
  },
  {
    icon: Scale,
    num: "04",
    title: "الأحوال الشخصية",
    tags: ["طلاق", "حضانة", "نفقة"],
    desc: "صياغة مذكرات الأحوال الشخصية بحنكة واحترافية.",
  },
  {
    icon: FileText,
    num: "05",
    title: "العقود التجارية",
    tags: ["شركات", "شراكات", "امتياز"],
    desc: "إعداد ومراجعة العقود التجارية والاتفاقيات الاستثمارية.",
  },
  {
    icon: Briefcase,
    num: "06",
    title: "القضايا الإدارية",
    tags: ["طعون", "جهات حكومية", "إجراءات"],
    desc: "صياغة الطعون الإدارية أمام ديوان المظالم والجهات المختصة.",
  },
];

export default function UseCasesPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      <section className="border-zinc-200 border-b px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <Scale className="h-4 w-4" />
            حالات الاستخدام
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
            في كل قضية مبسط معك
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            من العقود إلى القضايا الجزائية — ذكاء اصطناعي متخصص لكل نوع من العمل
            القانوني.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <div
              className="group rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              key={c.num}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <c.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </div>
                <span className="font-mono text-xs text-zinc-400">{c.num}</span>
              </div>
              <h2 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                {c.title}
              </h2>
              <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                {c.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span
                    className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-6 mb-16 rounded-3xl bg-zinc-900 px-8 py-16 text-center text-white md:mx-auto md:max-w-4xl dark:bg-zinc-800">
        <h2 className="mb-3 font-bold text-3xl tracking-tight">
          جرّب مبسط مجاناً
        </h2>
        <p className="mb-8 text-zinc-400">
          لا بطاقة ائتمانية. لا التزامات. فقط نتائج قانونية فعلية.
        </p>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
          href="/register"
        >
          ابدأ الآن <ChevronLeft className="h-4 w-4 rotate-180" />
        </a>
      </section>
    </div>
  );
}

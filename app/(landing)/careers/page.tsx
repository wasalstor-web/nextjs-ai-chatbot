import {
  Briefcase,
  CheckCircle,
  Heart,
  MapPin,
  Users,
  Zap,
} from "lucide-react";

const BENEFITS = [
  { icon: Heart, title: "صحة وسعادة", desc: "تأمين صحي شامل للموظف وأسرته." },
  { icon: Zap, title: "نمو مستمر", desc: "ميزانية سنوية للتطوير والتعلم." },
  {
    icon: Users,
    title: "فريق استثنائي",
    desc: "تعمل مع نخبة من خبراء القانون والتقنية.",
  },
  { icon: MapPin, title: "عمل مرن", desc: "هجين أو عن بعد بالكامل." },
];

const JOBS = [
  {
    title: "مهندس برمجيات أول",
    dept: "هندسة",
    type: "دوام كامل",
    loc: "الرياض / عن بعد",
  },
  {
    title: "محلل قانوني / مدرب نماذج الذكاء الاصطناعي",
    dept: "ذكاء اصطناعي",
    type: "دوام كامل",
    loc: "الرياض",
  },
  {
    title: "مصمم تجربة مستخدم",
    dept: "تصميم",
    type: "دوام كامل / جزئي",
    loc: "عن بعد",
  },
  {
    title: "مختص مبيعات B2B",
    dept: "مبيعات",
    type: "دوام كامل",
    loc: "الرياض / جدة",
  },
];

export default function CareersPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      <section className="border-zinc-200 border-b px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <Briefcase className="h-4 w-4" />
            الوظائف
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
            انضم إلى فريقنا
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            نبني مستقبل القانون بالذكاء الاصطناعي. نحتاج مواهب استثنائية.
          </p>
        </div>
      </section>
      <section className="border-zinc-200 border-b px-6 py-16 md:py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-bold text-2xl">لماذا مبسط</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div
                className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
                key={b.title}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <b.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </div>
                <h3 className="mb-1 font-semibold">{b.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-bold text-2xl">الوظائف المتاحة</h2>
          <div className="space-y-4">
            {JOBS.map((job, i) => (
              <div
                className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:hover:border-zinc-600"
                key={i}
              >
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-500">
                    <span className="rounded-full border border-zinc-200 px-2 py-0.5 dark:border-zinc-700">
                      {job.dept}
                    </span>
                    <span className="rounded-full border border-zinc-200 px-2 py-0.5 dark:border-zinc-700">
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.loc}
                    </span>
                  </div>
                </div>
                <a
                  className="shrink-0 rounded-full bg-zinc-900 px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                  href="mailto:careers@mubassit.ai"
                >
                  تقدم الآن
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

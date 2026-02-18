import {
  AlertTriangle,
  CheckCircle,
  Lock,
  Scale,
  Server,
  Shield,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Lock,
    title: "تشفير متقدم",
    items: [
      "تشفير AES-256 لجميع البيانات المخزنة.",
      "TLS 1.3 لتأمين جميع البيانات المنقولة.",
      "مفاتيح تشفير فريدة لكل مستخدم.",
    ],
  },
  {
    icon: Server,
    title: "بنية تحتية آمنة",
    items: [
      "مراكز بيانات معتمدة بأعلى معايير الأمان.",
      "نسخ احتياطية مشفرة كل 6 ساعات.",
      "مراقبة أمنية مستمرة 24/7.",
    ],
  },
  {
    icon: Shield,
    title: "حماية التطبيق",
    items: [
      "حماية من هجمات OWASP Top 10.",
      "جدار حماية لتطبيقات الويب (WAF).",
      "فحص الكود الأمني المستمر.",
    ],
  },
  {
    icon: Zap,
    title: "المصادقة والوصول",
    items: [
      "مصادقة ثنائية (2FA) متاحة.",
      "التحكم في الوصول بالأدوار (RBAC).",
      "تسجيل شامل لجميع العمليات.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "الاستجابة للحوادث",
    items: [
      "فريق استجابة متخصص للحوادث الأمنية.",
      "إخطار فوري في حالة الخروقات المحتملة.",
      "اختبارات اختراق نصف سنوية.",
    ],
  },
  {
    icon: CheckCircle,
    title: "الامتثال والشهادات",
    items: [
      "الامتثال لنظام حماية البيانات الشخصية السعودي.",
      "معايير ISO 27001 للأمن المعلوماتي.",
      "تدقيقات أمنية خارجية سنوية.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      <section className="border-zinc-200 border-b px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <Scale className="h-4 w-4" />
            الأمان
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
            أمانك أولويتنا
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            نستخدم أعلى معايير الأمان لحماية بياناتك القانونية السرية بشكل كامل.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat, i) => (
            <div
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              key={feat.title}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <feat.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </div>
                <span className="font-mono text-xs text-zinc-400">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">
                {feat.title}
              </h2>
              <ul className="space-y-2">
                {feat.items.map((item) => (
                  <li
                    className="flex gap-2 text-sm text-zinc-500 leading-relaxed dark:text-zinc-400"
                    key={item}
                  >
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
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

import {
  Database,
  Eye,
  FileText,
  Lock,
  Scale,
  Shield,
  UserCheck,
} from "lucide-react";

const SECTIONS = [
  {
    icon: Database,
    title: "جمع البيانات",
    items: [
      "نجمع البيانات التي تقدمها عند التسجيل: الاسم والبريد الإلكتروني.",
      "نجمع معلومات عن كيفية استخدامك للخدمة مثل المحادثات والملفات.",
      "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتذكر تفضيلاتك.",
    ],
  },
  {
    icon: Lock,
    title: "استخدام البيانات",
    items: [
      "نستخدم بياناتك لتوفير وتحسين خدماتنا وتخصيص تجربتك.",
      "نرسل إشعارات وتحديثات مهمة عن الخدمة.",
      "لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة للأغراض التسويقية.",
    ],
  },
  {
    icon: Shield,
    title: "حماية البيانات",
    items: [
      "نستخدم تشفير TLS لحماية جميع البيانات المنقولة.",
      "يتم تخزين البيانات في مراكز بيانات آمنة مع نسخ احتياطية.",
      "نجري مراجعات أمنية دورية لضمان أعلى مستوى من الحماية.",
    ],
  },
  {
    icon: UserCheck,
    title: "حقوقك",
    items: [
      "حق الوصول: يمكنك طلب نسخة من بياناتك الشخصية في أي وقت.",
      "حق التصحيح: يمكنك تحديث أو تصحيح معلوماتك الشخصية.",
      "حق الحذف: يمكنك طلب حذف بياناتك الشخصية من أنظمتنا.",
    ],
  },
  {
    icon: Eye,
    title: "الشفافية",
    items: [
      "سنخطرك فورا في حالة أي خرق أمني قد يؤثر على بياناتك.",
      "نوضح بشكل كامل كيف نستخدم بياناتك في هذه السياسة.",
      "نحدث هذه السياسة بانتظام لتعكس التغييرات في ممارساتنا.",
    ],
  },
  {
    icon: FileText,
    title: "التواصل",
    items: [
      "لأي استفسارات عن الخصوصية يمكنك التواصل: privacy@faisallawyer.com",
      "نرد على جميع الطلبات خلال 30 يوم عمل.",
      "لديك حق تقديم شكوى لهيئة حماية البيانات الشخصية.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      {/* Hero */}
      <section className="border-zinc-200 border-b px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <Scale className="h-4 w-4" />
            سياسة الخصوصية
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
            سياسة الخصوصية
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            آخر تحديث: يناير 2025
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            نحن ملتزمون بحماية خصوصيتك. هذه السياسة توضح كيف نجمع بياناتك
            ونستخدمها ونحميها.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-10">
          {SECTIONS.map((sec, i) => (
            <div className="flex gap-6" key={sec.title}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                <sec.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-mono text-xs text-zinc-400">
                    0{i + 1}
                  </span>
                  <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {sec.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {sec.items.map((item) => (
                    <li
                      className="flex gap-2 text-sm text-zinc-500 leading-relaxed dark:text-zinc-400"
                      key={item}
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

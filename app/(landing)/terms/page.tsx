import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Scale,
  Shield,
} from "lucide-react";

const SECTIONS = [
  {
    icon: FileText,
    title: "القبول بالشروط",
    items: [
      "باستخدام خدماتنا فإنك توافق على الالتزام بهذه الشروط والأحكام.",
      "إذا كنت تستخدم الخدمة نيابة عن مؤسسة فأنت تؤكد صلاحيتك لقبول هذه الشروط.",
      "يحق لنا تعديل هذه الشروط في أي وقت مع إخطارك بذلك.",
    ],
  },
  {
    icon: CheckCircle,
    title: "استخدام الخدمة",
    items: [
      "تقدم خدمتنا معلومات قانونية عامة وليست استشارة قانونية رسمية.",
      "يجب ألا تستخدم الخدمة لأغراض غير قانونية أو تنتهك حقوق الآخرين.",
      "أنت مسؤول عن الحفاظ على سرية بيانات حسابك.",
    ],
  },
  {
    icon: Shield,
    title: "الملكية الفكرية",
    items: [
      "جميع المحتويات والتقنيات في المنصة هي ملك لنا أو مرخصة لنا.",
      "لا يحق لك نسخ أو توزيع أي محتوى دون إذن كتابي منا.",
      "تظل أنت المالك لأي محتوى تقوم بتحميله أو إنشائه في المنصة.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "تحديد المسؤولية",
    items: [
      "لا نضمن دقة أو اكتمال المعلومات القانونية المقدمة في جميع الأحوال.",
      "لا نتحمل المسؤولية عن أي خسائر ناتجة عن الاعتماد على معلومات المنصة.",
      "الحد الأقصى لمسؤوليتنا هو ما دفعته مقابل الخدمة خلال الثلاثة أشهر الماضية.",
    ],
  },
  {
    icon: Scale,
    title: "القانون المطبق",
    items: [
      "تخضع هذه الشروط لأنظمة وقوانين المملكة العربية السعودية.",
      "يحسم أي نزاع يتعلق بهذه الشروط لدى المحاكم المختصة في الرياض.",
      "في حالة التعارض بين النصين العربي والإنجليزي يعتمد النص العربي.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      <section className="border-zinc-200 border-b px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <Scale className="h-4 w-4" />
            الشروط والأحكام
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
            الشروط والأحكام
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            آخر تحديث: يناير 2025
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            يُرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمات محامي فيصل.
          </p>
        </div>
      </section>
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

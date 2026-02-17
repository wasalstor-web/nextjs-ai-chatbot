import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Scale,
  Shield,
  XCircle,
} from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      icon: CheckCircle,
      title: "القبول والموافقة",
      content: [
        "باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.",
        "إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الخدمة.",
        "يجب أن يكون عمرك 13 عاماً على الأقل لاستخدام خدماتنا.",
        "باستخدام الخدمة نيابة عن مؤسسة، فإنك تقر بأن لديك سلطة الموافقة على هذه الشروط نيابة عنها.",
      ],
    },
    {
      icon: Shield,
      title: "حساب المستخدم",
      content: [
        "يجب عليك تقديم معلومات دقيقة وكاملة عند التسجيل.",
        "أنت مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك.",
        "أنت مسؤول عن جميع الأنشطة التي تحدث تحت حسابك.",
        "يجب عليك إبلاغنا فوراً بأي استخدام غير مصرح به لحسابك.",
        "نحتفظ بالحق في إيقاف أو إنهاء حسابك في أي وقت لأي سبب.",
      ],
    },
    {
      icon: FileText,
      title: "استخدام الخدمة",
      content: [
        "يمكنك استخدام الخدمة للأغراض القانونية والمشروعة فقط.",
        "لا يجوز استخدام الخدمة لأي غرض غير قانوني أو احتيالي.",
        "لا يجوز استخدام الخدمة لإنشاء محتوى ضار أو مسيء أو غير قانوني.",
        "لا يجوز محاولة الوصول غير المصرح به إلى أي جزء من الخدمة.",
        "نحتفظ بالحق في تقييد أو إيقاف وصولك إلى الخدمة إذا انتهكت هذه الشروط.",
      ],
    },
    {
      icon: Scale,
      title: "الملكية الفكرية",
      content: [
        "جميع حقوق الملكية الفكرية للخدمة ومحتواها مملوكة لنا أو لمرخصينا.",
        "أنت تحتفظ بملكية المحتوى الذي تنشئه باستخدام الخدمة.",
        "تمنحنا ترخيصاً لاستخدام المحتوى الخاص بك لتوفير وتحسين الخدمة.",
        "لا يجوز نسخ أو توزيع أو تعديل أي جزء من الخدمة دون إذن كتابي مسبق.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "المسؤولية والضمانات",
      content: [
        'يتم توفير الخدمة "كما هي" دون أي ضمانات من أي نوع.',
        "لا نضمن أن الخدمة ستكون خالية من الأخطاء أو متاحة بشكل متواصل.",
        "نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الخدمة.",
        "أنت تستخدم الخدمة على مسؤوليتك الخاصة.",
        "مسؤوليتنا الإجمالية تجاهك لن تتجاوز المبلغ الذي دفعته لنا في الأشهر الستة الماضية.",
      ],
    },
    {
      icon: XCircle,
      title: "السلوك المحظور",
      content: [
        "إنشاء أو مشاركة محتوى عنيف أو إباحي أو يحرض على الكراهية.",
        "انتحال شخصية أي شخص أو كيان آخر.",
        "التحرش أو التنمر أو المضايقة للمستخدمين الآخرين.",
        "محاولة اختراق أو تعطيل الخدمة أو أمنها.",
        "استخدام برامج آلية أو روبوتات للوصول إلى الخدمة دون إذن.",
        "جمع معلومات شخصية عن المستخدمين الآخرين.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/80 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-amber-600/10 via-amber-500/10 to-amber-400/10 dark:from-amber-600/5 dark:via-amber-500/5 dark:to-amber-400/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-amber-500 to-amber-400">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                الشروط والأحكام
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed dark:text-slate-400">
              يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا
            </p>
            <p className="mt-4 text-slate-500 text-sm dark:text-slate-500">
              آخر تحديث: ديسمبر 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
                مقدمة
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed dark:text-slate-400">
                مرحباً بك في شروط وأحكام الخدمة. هذه الوثيقة تحدد القواعد
                والمسؤوليات عند استخدامك لخدماتنا.
              </p>
              <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام
                بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط،
                فلا يمكنك استخدام خدماتنا.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
                  key={index}
                >
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-amber-400">
                      <section.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-2xl text-slate-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li className="flex gap-3" key={itemIndex}>
                        <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                          •
                        </span>
                        <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Payment Terms */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-amber-400">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-2xl text-slate-900 dark:text-white">
                    الدفع والاشتراكات
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    يتم فوترة الاشتراكات المدفوعة مقدماً على أساس شهري أو سنوي.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    يتم تجديد الاشتراكات تلقائياً ما لم يتم إلغاؤها قبل تاريخ
                    التجديد.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    يمكنك إلغاء اشتراكك في أي وقت من صفحة الإعدادات.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    نقدم ضمان استرداد المال لمدة 30 يوماً للاشتراكات الجديدة.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    نحتفظ بالحق في تعديل الأسعار مع إشعار مسبق بـ 30 يوماً.
                  </span>
                </li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-600 to-amber-500">
                  <XCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-2xl text-slate-900 dark:text-white">
                    الإنهاء والإيقاف
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    يمكنك إنهاء حسابك في أي وقت من خلال صفحة الإعدادات.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    نحتفظ بالحق في إيقاف أو إنهاء حسابك إذا انتهكت هذه الشروط.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    عند إنهاء حسابك، سيتم حذف بياناتك وفقاً لسياسة الخصوصية
                    الخاصة بنا.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                    •
                  </span>
                  <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                    الأحكام التي يجب أن تستمر بعد الإنهاء ستظل سارية المفعول.
                  </span>
                </li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
                التغييرات على الشروط
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed dark:text-slate-400">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنقوم بإخطارك بأي
                تغييرات جوهرية عبر البريد الإلكتروني أو من خلال الخدمة.
              </p>
              <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                استمرارك في استخدام الخدمة بعد نشر التغييرات يعني موافقتك على
                الشروط المعدلة.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mt-8 rounded-3xl border-2 border-amber-100 bg-amber-50/80 p-8 dark:border-amber-700 dark:bg-amber-900/20">
              <h2 className="mb-4 font-bold text-2xl text-amber-900 dark:text-amber-200">
                القانون الحاكم
              </h2>
              <p className="text-amber-700 leading-relaxed dark:text-amber-300">
                تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي
                نزاعات تنشأ عن هذه الشروط ستخضع للاختصاص القضائي الحصري للمحاكم
                في المملكة العربية السعودية.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
                هل لديك أسئلة حول الشروط؟
              </h2>
              <p className="mb-6 text-slate-600 leading-relaxed dark:text-slate-400">
                إذا كان لديك أي أسئلة أو استفسارات حول هذه الشروط، يرجى التواصل
                معنا.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-l from-amber-600 via-amber-500 to-amber-400 px-8 py-4 font-semibold text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  href="/contact"
                >
                  تواصل معنا
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-8 py-4 font-semibold text-slate-900 text-lg transition-all hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                  href="mailto:legal@mubassatlaw.com"
                >
                  legal@mubassatlaw.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

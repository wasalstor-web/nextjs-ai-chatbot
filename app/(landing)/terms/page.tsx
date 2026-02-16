import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Shield } from "lucide-react";

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
        "يتم توفير الخدمة \"كما هي\" دون أي ضمانات من أي نوع.",
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
    <div className="min-h-screen bg-linear-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-700/10 via-green-600/10 to-green-500/10 dark:from-green-700/5 dark:via-green-600/5 dark:to-green-500/5" />
        
        <div className="container mx-auto px-4 relative" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-green-600 to-green-500 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                الشروط والأحكام
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              آخر تحديث: ديسمبر 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mb-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                مقدمة
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                مرحباً بك في شروط وأحكام الخدمة. هذه الوثيقة تحدد القواعد والمسؤوليات عند استخدامك لخدماتنا.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يمكنك استخدام خدماتنا.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-600 to-green-500 flex items-center justify-center shrink-0">
                      <section.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3">
                        <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Payment Terms */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mt-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-600 to-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    الدفع والاشتراكات
                  </h2>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    يتم فوترة الاشتراكات المدفوعة مقدماً على أساس شهري أو سنوي.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    يتم تجديد الاشتراكات تلقائياً ما لم يتم إلغاؤها قبل تاريخ التجديد.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    يمكنك إلغاء اشتراكك في أي وقت من صفحة الإعدادات.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    نقدم ضمان استرداد المال لمدة 30 يوماً للاشتراكات الجديدة.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    نحتفظ بالحق في تعديل الأسعار مع إشعار مسبق بـ 30 يوماً.
                  </span>
                </li>
              </ul>
            </div>

            {/* Termination */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mt-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-700 to-green-600 flex items-center justify-center shrink-0">
                  <XCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    الإنهاء والإيقاف
                  </h2>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    يمكنك إنهاء حسابك في أي وقت من خلال صفحة الإعدادات.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    نحتفظ بالحق في إيقاف أو إنهاء حسابك إذا انتهكت هذه الشروط.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    عند إنهاء حسابك، سيتم حذف بياناتك وفقاً لسياسة الخصوصية الخاصة بنا.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    الأحكام التي يجب أن تستمر بعد الإنهاء ستظل سارية المفعول.
                  </span>
                </li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mt-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                التغييرات على الشروط
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنقوم بإخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال الخدمة.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                استمرارك في استخدام الخدمة بعد نشر التغييرات يعني موافقتك على الشروط المعدلة.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-3xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">
                القانون الحاكم
              </h2>
              <p className="text-green-800 dark:text-green-400 leading-relaxed">
                تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاعات تنشأ عن هذه الشروط ستخضع للاختصاص القضائي الحصري للمحاكم في المملكة العربية السعودية.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mt-8 border border-gray-200 dark:border-gray-800 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                هل لديك أسئلة حول الشروط؟
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                إذا كان لديك أي أسئلة أو استفسارات حول هذه الشروط، يرجى التواصل معنا.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-linear-to-l from-green-700 via-green-600 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  تواصل معنا
                </a>
                <a
                  href="mailto:legal@chatbot.com"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  legal@chatbot.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

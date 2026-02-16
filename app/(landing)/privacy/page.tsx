import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "جمع البيانات",
      content: [
        "نقوم بجمع البيانات التي تقدمها لنا مباشرة عند التسجيل في الخدمة، بما في ذلك الاسم والبريد الإلكتروني.",
        "نجمع أيضاً معلومات عن كيفية استخدامك للخدمة، مثل المحادثات والملفات التي ترفعها.",
        "نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك وتذكر تفضيلاتك.",
      ],
    },
    {
      icon: Lock,
      title: "استخدام البيانات",
      content: [
        "نستخدم بياناتك لتوفير وتحسين خدماتنا وتخصيص تجربتك.",
        "نستخدم المعلومات لإرسال إشعارات وتحديثات مهمة عن الخدمة.",
        "يتم استخدام البيانات لتدريب وتحسين نماذج الذكاء الاصطناعي (بشكل مجهول).",
        "لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة للأغراض التسويقية.",
      ],
    },
    {
      icon: Shield,
      title: "حماية البيانات",
      content: [
        "نستخدم تشفير SSL/TLS لحماية جميع البيانات المنقولة بين جهازك وخوادمنا.",
        "يتم تخزين البيانات في مراكز بيانات آمنة مع نسخ احتياطية منتظمة.",
        "نقوم بمراجعة أمنية دورية لأنظمتنا لضمان أعلى مستوى من الحماية.",
        "فريقنا مدرب على أفضل ممارسات الأمان والخصوصية.",
      ],
    },
    {
      icon: Eye,
      title: "الوصول إلى البيانات",
      content: [
        "يمكنك الوصول إلى بياناتك الشخصية وتعديلها في أي وقت من صفحة الإعدادات.",
        "يمكنك طلب نسخة من جميع بياناتك المخزنة لدينا.",
        "لديك الحق في حذف حسابك وجميع البيانات المرتبطة به في أي وقت.",
      ],
    },
    {
      icon: UserCheck,
      title: "حقوقك",
      content: [
        "حق الوصول: يمكنك الوصول إلى بياناتك الشخصية في أي وقت.",
        "حق التصحيح: يمكنك تصحيح أي معلومات غير دقيقة.",
        "حق الحذف: يمكنك طلب حذف بياناتك الشخصية.",
        "حق الاعتراض: يمكنك الاعتراض على معالجة بياناتك لأغراض معينة.",
        "حق نقل البيانات: يمكنك الحصول على نسخة من بياناتك بتنسيق قابل للقراءة.",
      ],
    },
    {
      icon: FileText,
      title: "ملفات تعريف الارتباط",
      content: [
        "نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الخدمة.",
        "ملفات تعريف الارتباط التحليلية لفهم كيفية استخدام الخدمة.",
        "يمكنك تعطيل ملفات تعريف الارتباط في إعدادات المتصفح، لكن قد يؤثر ذلك على بعض الوظائف.",
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                سياسة الخصوصية
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية
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
                مرحباً بك في سياسة الخصوصية الخاصة بنا. هذه الوثيقة توضح كيف نجمع ونستخدم ونحمي معلوماتك الشخصية عند استخدامك لخدماتنا.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                باستخدامك لخدماتنا، فإنك توافق على هذه السياسة. إذا كان لديك أي أسئلة أو مخاوف، يرجى التواصل معنا.
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

            {/* GDPR Compliance */}
            <div className="bg-linear-to-br from-green-700 via-green-600 to-green-500 rounded-3xl p-8 mt-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                الامتثال للوائح العامة لحماية البيانات (GDPR)
              </h2>
              <p className="text-green-100 leading-relaxed mb-4">
                نحن ملتزمون بالامتثال للوائح العامة لحماية البيانات (GDPR) وجميع القوانين المحلية والدولية ذات الصلة بحماية البيانات.
              </p>
              <p className="text-green-100 leading-relaxed">
                إذا كنت مقيماً في الاتحاد الأوروبي، لديك حقوق إضافية بموجب GDPR، بما في ذلك الحق في الاعتراض على معالجة بياناتك والحق في نقل البيانات.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-3xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-4">
                خصوصية الأطفال
              </h2>
              <p className="text-amber-800 dark:text-amber-400 leading-relaxed">
                خدماتنا غير موجهة للأطفال دون سن 13 عاماً. لا نجمع عن قصد معلومات شخصية من الأطفال. إذا علمنا أننا جمعنا بيانات من طفل دون سن 13، سنحذف هذه البيانات فوراً.
              </p>
            </div>

            {/* Updates */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mt-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                تحديثات السياسة
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار بارز على الخدمة.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                نوصي بمراجعة هذه السياسة بشكل دوري للبقاء على اطلاع بكيفية حماية معلوماتك.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mt-8 border border-gray-200 dark:border-gray-800 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                هل لديك أسئلة؟
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ممارسات البيانات لدينا، لا تتردد في التواصل معنا.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-linear-to-l from-green-700 via-green-600 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  تواصل معنا
                </a>
                <a
                  href="mailto:privacy@chatbot.com"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  privacy@chatbot.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

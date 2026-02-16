import { Cookie, Settings, Eye, CheckCircle } from "lucide-react";

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: CheckCircle,
      title: "ملفات تعريف الارتباط الضرورية",
      description: "هذه الملفات ضرورية لتشغيل الموقع بشكل صحيح ولا يمكن تعطيلها.",
      examples: [
        "تذكر معلومات تسجيل الدخول",
        "الحفاظ على جلستك نشطة",
        "تذكر تفضيلات اللغة",
        "إدارة عربة التسوق وحالة الطلب",
      ],
      canDisable: false,
      color: "from-green-600 to-green-500",
    },
    {
      icon: Eye,
      title: "ملفات التحليلات",
      description: "تساعدنا على فهم كيفية استخدام الزوار للموقع وتحسين تجربة المستخدم.",
      examples: [
        "عدد الزوار وصفحات المشاهدة",
        "الوقت المستغرق في الموقع",
        "مصادر الزيارات",
        "سلوك المستخدم والتفاعل",
      ],
      canDisable: true,
      color: "from-green-600 to-green-500",
    },
    {
      icon: Settings,
      title: "ملفات التخصيص",
      description: "تحفظ تفضيلاتك وإعداداتك لتوفير تجربة مخصصة.",
      examples: [
        "تفضيلات الثيم (فاتح/داكن)",
        "حجم الخط المفضل",
        "إعدادات العرض",
        "تخطيط الصفحة المفضل",
      ],
      canDisable: true,
      color: "from-green-600 to-green-500",
    },
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "تحليل حركة المرور وسلوك المستخدمين",
      link: "https://policies.google.com/privacy",
    },
    {
      name: "Stripe",
      purpose: "معالجة المدفوعات الآمنة",
      link: "https://stripe.com/privacy",
    },
    {
      name: "Vercel",
      purpose: "استضافة الموقع وتحسين الأداء",
      link: "https://vercel.com/legal/privacy-policy",
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
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                سياسة ملفات تعريف الارتباط
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              كيف ولماذا نستخدم ملفات تعريف الارتباط (Cookies) على موقعنا
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              آخر تحديث: ديسمبر 2024
            </p>
          </div>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                ما هي ملفات تعريف الارتباط؟
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارتك لموقعنا. تساعدنا هذه الملفات على:
                </p>
                <ul className="space-y-2 mr-6">
                  <li className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>تذكر معلوماتك وتفضيلاتك بين الزيارات</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>تحسين تجربة التصفح وجعلها أكثر سلاسة</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>فهم كيفية استخدامك للموقع لتحسين خدماتنا</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>توفير محتوى وإعلانات ذات صلة بك</span>
                  </li>
                </ul>
                <p>
                  لا تحتوي ملفات تعريف الارتباط على أي معلومات شخصية يمكن التعرف عليها بشكل مباشر، ولا يمكن استخدامها لتشغيل برامج أو فيروسات على جهازك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              أنواع ملفات تعريف الارتباط التي نستخدمها
            </h2>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {cookieTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${type.color} flex items-center justify-center shrink-0`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {type.title}
                      </h3>
                      {type.canDisable ? (
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                          يمكن تعطيلها
                        </span>
                      ) : (
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-semibold">
                          ضرورية
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {type.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    أمثلة على الاستخدام:
                  </h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-green-600 dark:text-green-400">✓</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              الخدمات الخارجية
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              نستخدم بعض الخدمات الخارجية التي قد تضع ملفات تعريف ارتباط على جهازك
            </p>
            
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.purpose}
                    </p>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 font-semibold hover:underline text-sm"
                  >
                    سياسة الخصوصية
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Control */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-green-700 via-green-600 to-green-500 rounded-3xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                كيف تتحكم في ملفات تعريف الارتباط؟
              </h2>
              <div className="space-y-4 text-green-100 leading-relaxed">
                <p>
                  يمكنك التحكم في ملفات تعريف الارتباط وحذفها بعدة طرق:
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                  <div className="flex gap-3">
                    <span>1.</span>
                    <span><strong>إعدادات المتصفح:</strong> يمكنك ضبط إعدادات متصفحك لحظر أو حذف ملفات تعريف الارتباط</span>
                  </div>
                  <div className="flex gap-3">
                    <span>2.</span>
                    <span><strong>إعدادات الموقع:</strong> يمكنك إدارة تفضيلات ملفات تعريف الارتباط من صفحة الإعدادات</span>
                  </div>
                  <div className="flex gap-3">
                    <span>3.</span>
                    <span><strong>الوضع الخاص:</strong> استخدم وضع التصفح الخاص في متصفحك لتقليل تتبع ملفات تعريف الارتباط</span>
                  </div>
                </div>
                <p className="text-sm text-yellow-200">
                  ⚠️ ملاحظة: حظر أو حذف بعض ملفات تعريف الارتباط قد يؤثر على وظائف الموقع وتجربتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              تحديثات السياسة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. سنقوم بنشر أي تغييرات على هذه الصفحة مع تاريخ "آخر تحديث" المحدث.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              هل لديك أسئلة حول ملفات تعريف الارتباط؟
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              إذا كان لديك أي أسئلة أو استفسارات، لا تتردد في التواصل معنا.
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
      </section>
    </div>
  );
}

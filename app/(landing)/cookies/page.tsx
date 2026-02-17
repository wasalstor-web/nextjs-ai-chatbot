import { CheckCircle, Cookie, Eye, Settings } from "lucide-react";

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: CheckCircle,
      title: "ملفات تعريف الارتباط الضرورية",
      description:
        "هذه الملفات ضرورية لتشغيل الموقع بشكل صحيح ولا يمكن تعطيلها.",
      examples: [
        "تذكر معلومات تسجيل الدخول",
        "الحفاظ على جلستك نشطة",
        "تذكر تفضيلات اللغة",
        "إدارة عربة التسوق وحالة الطلب",
      ],
      canDisable: false,
      color: "from-amber-500 to-amber-400",
    },
    {
      icon: Eye,
      title: "ملفات التحليلات",
      description:
        "تساعدنا على فهم كيفية استخدام الزوار للموقع وتحسين تجربة المستخدم.",
      examples: [
        "عدد الزوار وصفحات المشاهدة",
        "الوقت المستغرق في الموقع",
        "مصادر الزيارات",
        "سلوك المستخدم والتفاعل",
      ],
      canDisable: true,
      color: "from-amber-500 to-amber-400",
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
      color: "from-amber-500 to-amber-400",
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
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/80 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-amber-600/10 via-amber-500/10 to-amber-400/10 dark:from-amber-600/5 dark:via-amber-500/5 dark:to-amber-400/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-amber-500 to-amber-400">
              <Cookie className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                سياسة ملفات تعريف الارتباط
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed dark:text-slate-400">
              كيف ولماذا نستخدم ملفات تعريف الارتباط (Cookies) على موقعنا
            </p>
            <p className="mt-4 text-slate-500 text-sm dark:text-slate-500">
              آخر تحديث: ديسمبر 2024
            </p>
          </div>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 font-bold text-3xl text-slate-900 dark:text-white">
                ما هي ملفات تعريف الارتباط؟
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed dark:text-slate-400">
                <p>
                  ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم تخزينها
                  على جهازك عند زيارتك لموقعنا. تساعدنا هذه الملفات على:
                </p>
                <ul className="mr-6 space-y-2">
                  <li className="flex gap-3">
                    <span className="text-amber-500 dark:text-amber-300">
                      •
                    </span>
                    <span>تذكر معلوماتك وتفضيلاتك بين الزيارات</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500 dark:text-amber-300">
                      •
                    </span>
                    <span>تحسين تجربة التصفح وجعلها أكثر سلاسة</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500 dark:text-amber-300">
                      •
                    </span>
                    <span>فهم كيفية استخدامك للموقع لتحسين خدماتنا</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500 dark:text-amber-300">
                      •
                    </span>
                    <span>توفير محتوى وإعلانات ذات صلة بك</span>
                  </li>
                </ul>
                <p>
                  لا تحتوي ملفات تعريف الارتباط على أي معلومات شخصية يمكن التعرف
                  عليها بشكل مباشر، ولا يمكن استخدامها لتشغيل برامج أو فيروسات
                  على جهازك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              أنواع ملفات تعريف الارتباط التي نستخدمها
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8">
            {cookieTypes.map((type) => (
              <div
                className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
                key={type.title}
              >
                <div className="mb-6 flex items-start gap-6">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-linear-to-br ${type.color} flex shrink-0 items-center justify-center`}
                  >
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-bold text-2xl text-slate-900 dark:text-white">
                        {type.title}
                      </h3>
                      {type.canDisable ? (
                        <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-600 text-xs dark:bg-amber-900/30 dark:text-amber-300">
                          يمكن تعطيلها
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 text-xs dark:bg-slate-800 dark:text-slate-400">
                          ضرورية
                        </span>
                      )}
                    </div>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      {type.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
                  <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
                    أمثلة على الاستخدام:
                  </h4>
                  <ul className="space-y-2">
                    {type.examples.map((example) => (
                      <li
                        className="flex gap-3 text-slate-600 text-sm dark:text-slate-400"
                        key={example}
                      >
                        <span className="text-amber-500 dark:text-amber-300">
                          ✓
                        </span>
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
      <section className="bg-white py-20 dark:bg-slate-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-bold text-3xl text-slate-900 dark:text-white">
              الخدمات الخارجية
            </h2>
            <p className="mb-8 text-center text-slate-600 dark:text-slate-400">
              نستخدم بعض الخدمات الخارجية التي قد تضع ملفات تعريف ارتباط على
              جهازك
            </p>

            <div className="space-y-4">
              {thirdPartyServices.map((service) => (
                <div
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                  key={service.name}
                >
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900 text-lg dark:text-white">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      {service.purpose}
                    </p>
                  </div>
                  <a
                    className="font-semibold text-amber-500 text-sm hover:underline dark:text-amber-300"
                    href={service.link}
                    rel="noopener noreferrer"
                    target="_blank"
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
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-linear-to-br from-amber-600 via-amber-500 to-amber-400 p-8 text-white lg:p-12">
              <h2 className="mb-6 font-bold text-3xl">
                كيف تتحكم في ملفات تعريف الارتباط؟
              </h2>
              <div className="space-y-4 text-amber-50 leading-relaxed">
                <p>يمكنك التحكم في ملفات تعريف الارتباط وحذفها بعدة طرق:</p>
                <div className="space-y-3 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="flex gap-3">
                    <span>1.</span>
                    <span>
                      <strong>إعدادات المتصفح:</strong> يمكنك ضبط إعدادات متصفحك
                      لحظر أو حذف ملفات تعريف الارتباط
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span>2.</span>
                    <span>
                      <strong>إعدادات الموقع:</strong> يمكنك إدارة تفضيلات ملفات
                      تعريف الارتباط من صفحة الإعدادات
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span>3.</span>
                    <span>
                      <strong>الوضع الخاص:</strong> استخدم وضع التصفح الخاص في
                      متصفحك لتقليل تتبع ملفات تعريف الارتباط
                    </span>
                  </div>
                </div>
                <p className="text-sm text-yellow-200">
                  ⚠️ ملاحظة: حظر أو حذف بعض ملفات تعريف الارتباط قد يؤثر على
                  وظائف الموقع وتجربتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
              تحديثات السياسة
            </h2>
            <p className="text-slate-600 leading-relaxed dark:text-slate-400">
              قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه من وقت لآخر لتعكس
              التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية
              أخرى. سنقوم بنشر أي تغييرات على هذه الصفحة مع تاريخ "آخر تحديث"
              المحدث.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
              هل لديك أسئلة حول ملفات تعريف الارتباط؟
            </h2>
            <p className="mb-6 text-slate-600 leading-relaxed dark:text-slate-400">
              إذا كان لديك أي أسئلة أو استفسارات، لا تتردد في التواصل معنا.
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
                href="mailto:privacy@mubassatlaw.com"
              >
                privacy@mubassatlaw.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import {
  AlertTriangle,
  CheckCircle,
  Eye,
  Lock,
  Server,
  Shield,
} from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "تشفير من الطرف إلى الطرف",
      description:
        "جميع البيانات المنقولة بين جهازك وخوادمنا يتم تشفيرها باستخدام TLS 1.3.",
      status: "نشط",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Server,
      title: "بنية تحتية آمنة",
      description:
        "خوادمنا محمية بجدران نارية متقدمة ونظام كشف التهديدات في الوقت الفعلي.",
      status: "نشط",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Eye,
      title: "مراقبة أمنية 24/7",
      description:
        "فريق الأمان لدينا يراقب الأنظمة على مدار الساعة للكشف عن أي تهديدات محتملة.",
      status: "نشط",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Shield,
      title: "نسخ احتياطية منتظمة",
      description:
        "نقوم بنسخ احتياطي لبياناتك بشكل دوري ونخزنها في مواقع متعددة.",
      status: "نشط",
      color: "from-green-600 to-green-500",
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "معيار دولي لإدارة أمن المعلومات",
    },
    {
      name: "SOC 2 Type II",
      description: "تدقيق أمني شامل للضوابط والعمليات",
    },
    {
      name: "GDPR",
      description: "متوافق مع قوانين حماية البيانات الأوروبية",
    },
    {
      name: "PCI DSS",
      description: "معيار أمان بيانات بطاقات الدفع",
    },
  ];

  const bestPractices = [
    {
      title: "التحقق الثنائي (2FA)",
      description: "نوصي بشدة بتفعيل المصادقة الثنائية لحمايتك إضافية لحسابك.",
      icon: CheckCircle,
    },
    {
      title: "كلمات مرور قوية",
      description:
        "استخدم كلمة مرور قوية وفريدة لحسابك، وتجنب استخدام نفس كلمة المرور في مواقع أخرى.",
      icon: CheckCircle,
    },
    {
      title: "تحديثات الأمان",
      description:
        "نقوم بتثبيت تحديثات الأمان فوراً لحماية أنظمتنا من أحدث التهديدات.",
      icon: CheckCircle,
    },
    {
      title: "تدريب الموظفين",
      description:
        "جميع موظفينا يخضعون لتدريب مكثف على أفضل ممارسات الأمن السيبراني.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-green-700/10 via-green-600/10 to-green-500/10 dark:from-green-700/5 dark:via-green-600/5 dark:to-green-500/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-green-600 to-green-500">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                الأمان أولويتنا
              </span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed dark:text-gray-400">
              نلتزم بحماية بياناتك بأعلى معايير الأمان في الصناعة
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border-2 border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20">
            <p className="font-semibold text-green-800 text-lg dark:text-green-300">
              🔒 جميع بياناتك محمية بتشفير عسكري من الدرجة الأولى
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              كيف نحمي بياناتك
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              نستخدم أحدث التقنيات والممارسات لضمان أمان معلوماتك
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {securityFeatures.map((feature, index) => (
              <div
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${feature.color} mb-6 flex items-center justify-center`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700 text-xs dark:bg-green-900/30 dark:text-green-400">
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              الشهادات والمعايير
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              معتمدون من أكبر المؤسسات العالمية للأمان
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-green-600 to-green-500">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900 text-xl dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              أفضل الممارسات الأمنية
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              نصائح لحماية حسابك ومعلوماتك
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {bestPractices.map((practice, index) => (
              <div
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <practice.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-gray-900 text-lg dark:text-white">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="bg-white py-20 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-linear-to-br from-green-700 via-green-600 to-green-500 p-8 text-white lg:p-12">
              <div className="mb-6 flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="mb-4 font-bold text-3xl">
                    خطة الاستجابة للحوادث
                  </h2>
                  <p className="mb-6 text-green-100 leading-relaxed">
                    في حالة اكتشاف أي خرق أمني محتمل:
                  </p>
                  <ul className="space-y-3 text-green-100">
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>
                        سنقوم بإخطارك فوراً عبر البريد الإلكتروني والرسائل النصية
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>سنوضح طبيعة الخرق والبيانات المتأثرة</span>
                    </li>
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>
                        سنتخذ إجراءات فورية لإيقاف الخرق وتأمين الأنظمة
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>سنقدم توصيات لحماية حسابك</span>
                    </li>
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>سنبلغ السلطات المختصة إذا لزم الأمر</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Security Issue */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 text-center lg:p-12 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 dark:text-white">
              اكتشفت ثغرة أمنية؟
            </h2>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed dark:text-gray-400">
              نحن نقدر جهود الباحثين الأمنيين ونشجع الإبلاغ المسؤول عن أي ثغرات.
              تواصل معنا فوراً وسنعمل معك لحل المشكلة.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-l from-green-700 via-green-600 to-green-500 px-8 py-4 font-semibold text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="mailto:security@chatbot.com"
              >
                security@chatbot.com
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100 px-8 py-4 font-semibold text-gray-900 text-lg transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                href="/contact"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "تشفير من الطرف إلى الطرف",
      description: "جميع البيانات المنقولة بين جهازك وخوادمنا يتم تشفيرها باستخدام TLS 1.3.",
      status: "نشط",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Server,
      title: "بنية تحتية آمنة",
      description: "خوادمنا محمية بجدران نارية متقدمة ونظام كشف التهديدات في الوقت الفعلي.",
      status: "نشط",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Eye,
      title: "مراقبة أمنية 24/7",
      description: "فريق الأمان لدينا يراقب الأنظمة على مدار الساعة للكشف عن أي تهديدات محتملة.",
      status: "نشط",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Shield,
      title: "نسخ احتياطية منتظمة",
      description: "نقوم بنسخ احتياطي لبياناتك بشكل دوري ونخزنها في مواقع متعددة.",
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
      description: "استخدم كلمة مرور قوية وفريدة لحسابك، وتجنب استخدام نفس كلمة المرور في مواقع أخرى.",
      icon: CheckCircle,
    },
    {
      title: "تحديثات الأمان",
      description: "نقوم بتثبيت تحديثات الأمان فوراً لحماية أنظمتنا من أحدث التهديدات.",
      icon: CheckCircle,
    },
    {
      title: "تدريب الموظفين",
      description: "جميع موظفينا يخضعون لتدريب مكثف على أفضل ممارسات الأمن السيبراني.",
      icon: CheckCircle,
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
                الأمان أولويتنا
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              نلتزم بحماية بياناتك بأعلى معايير الأمان في الصناعة
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
            <p className="text-green-800 dark:text-green-300 font-semibold text-lg">
              🔒 جميع بياناتك محمية بتشفير عسكري من الدرجة الأولى
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              كيف نحمي بياناتك
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              نستخدم أحدث التقنيات والممارسات لضمان أمان معلوماتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              الشهادات والمعايير
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              معتمدون من أكبر المؤسسات العالمية للأمان
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-green-600 to-green-500 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              أفضل الممارسات الأمنية
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              نصائح لحماية حسابك ومعلوماتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bestPractices.map((practice, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                  <practice.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-green-700 via-green-600 to-green-500 rounded-3xl p-8 lg:p-12 text-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    خطة الاستجابة للحوادث
                  </h2>
                  <p className="text-green-100 leading-relaxed mb-6">
                    في حالة اكتشاف أي خرق أمني محتمل:
                  </p>
                  <ul className="space-y-3 text-green-100">
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>سنقوم بإخطارك فوراً عبر البريد الإلكتروني والرسائل النصية</span>
                    </li>
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>سنوضح طبيعة الخرق والبيانات المتأثرة</span>
                    </li>
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>سنتخذ إجراءات فورية لإيقاف الخرق وتأمين الأنظمة</span>
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
          <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              اكتشفت ثغرة أمنية؟
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              نحن نقدر جهود الباحثين الأمنيين ونشجع الإبلاغ المسؤول عن أي ثغرات. تواصل معنا فوراً وسنعمل معك لحل المشكلة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@chatbot.com"
                className="inline-flex items-center justify-center gap-2 bg-linear-to-l from-green-700 via-green-600 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                security@chatbot.com
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
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

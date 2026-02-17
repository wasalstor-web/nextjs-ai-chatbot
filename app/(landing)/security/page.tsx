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
      color: "from-amber-500 to-amber-400",
    },
    {
      icon: Server,
      title: "بنية تحتية آمنة",
      description:
        "خوادمنا محمية بجدران نارية متقدمة ونظام كشف التهديدات في الوقت الفعلي.",
      status: "نشط",
      color: "from-amber-500 to-amber-400",
    },
    {
      icon: Eye,
      title: "مراقبة أمنية 24/7",
      description:
        "فريق الأمان لدينا يراقب الأنظمة على مدار الساعة للكشف عن أي تهديدات محتملة.",
      status: "نشط",
      color: "from-amber-500 to-amber-400",
    },
    {
      icon: Shield,
      title: "نسخ احتياطية منتظمة",
      description:
        "نقوم بنسخ احتياطي لبياناتك بشكل دوري ونخزنها في مواقع متعددة.",
      status: "نشط",
      color: "from-amber-500 to-amber-400",
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
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/80 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-amber-600/10 via-amber-500/10 to-amber-400/10 dark:from-amber-600/5 dark:via-amber-500/5 dark:to-amber-400/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-amber-500 to-amber-400">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                الأمان أولويتنا
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed dark:text-slate-400">
              نلتزم بحماية بياناتك بأعلى معايير الأمان في الصناعة
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border-2 border-amber-100 bg-amber-50/80 p-6 text-center dark:border-amber-700 dark:bg-amber-900/20">
            <p className="font-semibold text-amber-700 text-lg dark:text-amber-200">
              🔒 جميع بياناتك محمية بتشفير عسكري من الدرجة الأولى
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              كيف نحمي بياناتك
            </h2>
            <p className="text-slate-600 text-lg dark:text-slate-400">
              نستخدم أحدث التقنيات والممارسات لضمان أمان معلوماتك
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                key={feature.title}
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${feature.color} mb-6 flex items-center justify-center`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-600 text-xs dark:bg-amber-900/30 dark:text-amber-300">
                    {feature.status}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20 dark:bg-slate-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              الشهادات والمعايير
            </h2>
            <p className="text-slate-600 text-lg dark:text-slate-400">
              معتمدون من أكبر المؤسسات العالمية للأمان
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900"
                key={cert.name}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-amber-400">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-slate-600 text-sm dark:text-slate-400">
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
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              أفضل الممارسات الأمنية
            </h2>
            <p className="text-slate-600 text-lg dark:text-slate-400">
              نصائح لحماية حسابك ومعلوماتك
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {bestPractices.map((practice) => (
              <div
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
                key={practice.title}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-900/30">
                  <practice.icon className="h-6 w-6 text-amber-500 dark:text-amber-300" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-slate-900 text-lg dark:text-white">
                    {practice.title}
                  </h3>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="bg-white py-20 dark:bg-slate-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-linear-to-br from-amber-600 via-amber-500 to-amber-400 p-8 text-white lg:p-12">
              <div className="mb-6 flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="mb-4 font-bold text-3xl">
                    خطة الاستجابة للحوادث
                  </h2>
                  <p className="mb-6 text-amber-50 leading-relaxed">
                    في حالة اكتشاف أي خرق أمني محتمل:
                  </p>
                  <ul className="space-y-3 text-amber-50">
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
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center lg:p-12 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 font-bold text-3xl text-slate-900 dark:text-white">
              اكتشفت ثغرة أمنية؟
            </h2>
            <p className="mb-8 text-slate-600 text-lg leading-relaxed dark:text-slate-400">
              نحن نقدر جهود الباحثين الأمنيين ونشجع الإبلاغ المسؤول عن أي ثغرات.
              تواصل معنا فوراً وسنعمل معك لحل المشكلة.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-l from-amber-600 via-amber-500 to-amber-400 px-8 py-4 font-semibold text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="mailto:security@mubassatlaw.com"
              >
                security@mubassatlaw.com
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-8 py-4 font-semibold text-slate-900 text-lg transition-all hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
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

import {
  Briefcase,
  Clock,
  Heart,
  MapPin,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "رعاية صحية شاملة",
      description: "تأمين صحي كامل لك ولعائلتك",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Clock,
      title: "مرونة في العمل",
      description: "عمل عن بعد أو هجين حسب تفضيلك",
      color: "from-green-600 to-green-500",
    },
    {
      icon: TrendingUp,
      title: "تطوير مهني",
      description: "دورات تدريبية ومؤتمرات مدفوعة",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Users,
      title: "فريق متميز",
      description: "اعمل مع أفضل المواهب في المجال",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Zap,
      title: "تقنيات حديثة",
      description: "استخدم أحدث الأدوات والتقنيات",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Briefcase,
      title: "رواتب تنافسية",
      description: "رواتب مميزة مع حوافز ومكافآت",
      color: "from-green-600 to-green-500",
    },
  ];

  const openPositions = [
    {
      title: "مهندس Full-Stack Senior",
      department: "الهندسة",
      location: "الرياض / عن بعد",
      type: "دوام كامل",
      description:
        "نبحث عن مطور متمكن من React و Node.js للعمل على منصتنا الأساسية",
      requirements: [
        "5+ سنوات خبرة في تطوير Full-Stack",
        "إتقان React, Next.js, TypeScript",
        "خبرة في Node.js و APIs",
        "معرفة بـ PostgreSQL/MongoDB",
      ],
    },
    {
      title: "مختص في الذكاء الاصطناعي",
      department: "البحث والتطوير",
      location: "الرياض",
      type: "دوام كامل",
      description: "انضم إلى فريق البحث لتطوير نماذج AI متقدمة",
      requirements: [
        "ماجستير أو دكتوراه في AI/ML",
        "خبرة في PyTorch أو TensorFlow",
        "فهم عميق لـ Transformers و LLMs",
        "نشر أبحاث في مؤتمرات علمية (مفضل)",
      ],
    },
    {
      title: "مصمم UI/UX",
      department: "التصميم",
      location: "الرياض / عن بعد",
      type: "دوام كامل",
      description: "صمّم تجارب مستخدم استثنائية لمنتجاتنا",
      requirements: [
        "3+ سنوات خبرة في تصميم المنتجات الرقمية",
        "إتقان Figma و Adobe Creative Suite",
        "معرفة قوية بمبادئ UX و UI",
        "Portfolio قوي يظهر أعمال سابقة",
      ],
    },
    {
      title: "مدير منتج",
      department: "المنتج",
      location: "الرياض",
      type: "دوام كامل",
      description: "قُد استراتيجية وتطوير منتجاتنا الجديدة",
      requirements: [
        "5+ سنوات خبرة في إدارة المنتجات التقنية",
        "خبرة في منتجات SaaS أو AI",
        "مهارات قوية في التحليل واتخاذ القرار",
        "القدرة على العمل مع فرق متعددة",
      ],
    },
  ];

  const values = [
    {
      title: "الابتكار",
      description: "نشجع التفكير الإبداعي والحلول المبتكرة",
    },
    {
      title: "الشفافية",
      description: "التواصل المفتوح والصريح في جميع المستويات",
    },
    {
      title: "التعاون",
      description: "نعمل معاً كفريق واحد لتحقيق النجاح",
    },
    {
      title: "التميز",
      description: "نسعى للجودة العالية في كل ما نقوم به",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-green-700/10 via-green-600/10 to-green-500/10 dark:from-green-700/5 dark:via-green-600/5 dark:to-green-500/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="text-gray-900 dark:text-white">انضم إلى</span>
              <br />
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                فريقنا المتميز
              </span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed dark:text-gray-400">
              ساعدنا في بناء مستقبل الذكاء الاصطناعي. نحن نبحث عن أشخاص شغوفين
              ومبدعين للانضمام إلى رحلتنا.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: "50+", label: "موظف" },
              { value: "15+", label: "جنسية" },
              { value: "4.8/5", label: "تقييم الموظفين" },
              { value: "95%", label: "معدل الاحتفاظ" },
            ].map((stat, index) => (
              <div
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div className="mb-2 bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text font-bold text-3xl text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              لماذا تنضم إلينا؟
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              نوفر بيئة عمل مثالية تساعدك على النمو والتطور
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${benefit.color} mb-6 flex items-center justify-center`}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 font-bold text-gray-900 text-xl dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              قيمنا المشتركة
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              المبادئ التي توجه عملنا اليومي
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                className="rounded-2xl bg-linear-to-br from-green-700 via-green-600 to-green-500 p-6 text-center text-white"
                key={index}
              >
                <h3 className="mb-3 font-bold text-xl">{value.title}</h3>
                <p className="text-green-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-20 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              الوظائف المتاحة
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              اكتشف الفرصة المثالية لك
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {openPositions.map((position, index) => (
              <div
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="mb-3 font-bold text-2xl text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="rounded-xl bg-linear-to-l from-green-700 via-green-600 to-green-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg lg:shrink-0">
                    تقدّم الآن
                  </button>
                </div>

                <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-400">
                  {position.description}
                </p>

                <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    المتطلبات:
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li
                        className="flex gap-3 text-gray-600 text-sm dark:text-gray-400"
                        key={reqIndex}
                      >
                        <span className="text-green-600 dark:text-green-400">
                          ✓
                        </span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* No position match */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="rounded-3xl border-2 border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
              <h3 className="mb-4 font-bold text-2xl text-gray-900 dark:text-white">
                لم تجد الوظيفة المناسبة؟
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-400">
                نحن دائماً نبحث عن المواهب المتميزة. أرسل لنا سيرتك الذاتية
                وسنتواصل معك إذا كانت هناك فرصة مناسبة.
              </p>
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-l from-green-700 via-green-600 to-green-500 px-8 py-4 font-semibold text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="mailto:careers@chatbot.com"
              >
                أرسل سيرتك الذاتية
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              عملية التوظيف
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              رحلة بسيطة وواضحة من التقديم إلى الانضمام
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "التقديم",
                  description: "أرسل سيرتك الذاتية",
                },
                { step: "2", title: "المقابلة", description: "لقاء مع الفريق" },
                {
                  step: "3",
                  title: "الاختبار",
                  description: "تقييم تقني أو عملي",
                },
                { step: "4", title: "العرض", description: "انضم إلى الفريق!" },
              ].map((item, index) => (
                <div className="text-center" key={index}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-green-700 via-green-600 to-green-500 font-bold text-2xl text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-green-700 via-green-600 to-green-500 py-20">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl text-white">
              جاهز لبدء رحلتك معنا؟
            </h2>
            <p className="mb-8 text-green-100 text-xl">
              نتطلع للتعرف عليك والعمل معاً لبناء شيء عظيم
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-green-600 text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="mailto:careers@chatbot.com"
              >
                careers@chatbot.com
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-green-500/20 px-8 py-4 font-semibold text-lg text-white transition-all hover:bg-green-500/30"
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

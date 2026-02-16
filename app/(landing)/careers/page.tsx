import { Briefcase, MapPin, Clock, Users, Heart, Zap, TrendingUp } from "lucide-react";

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
      description: "نبحث عن مطور متمكن من React و Node.js للعمل على منصتنا الأساسية",
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
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-700/10 via-green-600/10 to-green-500/10 dark:from-green-700/5 dark:via-green-600/5 dark:to-green-500/5" />
        
        <div className="container mx-auto px-4 relative" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">
                انضم إلى
              </span>
              <br />
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                فريقنا المتميز
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              ساعدنا في بناء مستقبل الذكاء الاصطناعي. نحن نبحث عن أشخاص شغوفين ومبدعين للانضمام إلى رحلتنا.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "50+", label: "موظف" },
              { value: "15+", label: "جنسية" },
              { value: "4.8/5", label: "تقييم الموظفين" },
              { value: "95%", label: "معدل الاحتفاظ" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center"
              >
                <div className="text-3xl font-bold bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا تنضم إلينا؟
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              نوفر بيئة عمل مثالية تساعدك على النمو والتطور
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              قيمنا المشتركة
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              المبادئ التي توجه عملنا اليومي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-green-700 via-green-600 to-green-500 rounded-2xl p-6 text-white text-center"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-green-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              الوظائف المتاحة
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              اكتشف الفرصة المثالية لك
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-linear-to-l from-green-700 via-green-600 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all lg:shrink-0">
                    تقدّم الآن
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    المتطلبات:
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="flex gap-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-green-600 dark:text-green-400">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* No position match */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                لم تجد الوظيفة المناسبة؟
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                نحن دائماً نبحث عن المواهب المتميزة. أرسل لنا سيرتك الذاتية وسنتواصل معك إذا كانت هناك فرصة مناسبة.
              </p>
              <a
                href="mailto:careers@chatbot.com"
                className="inline-flex items-center gap-2 bg-linear-to-l from-green-700 via-green-600 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              عملية التوظيف
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              رحلة بسيطة وواضحة من التقديم إلى الانضمام
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "التقديم", description: "أرسل سيرتك الذاتية" },
                { step: "2", title: "المقابلة", description: "لقاء مع الفريق" },
                { step: "3", title: "الاختبار", description: "تقييم تقني أو عملي" },
                { step: "4", title: "العرض", description: "انضم إلى الفريق!" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-green-700 via-green-600 to-green-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-green-700 via-green-600 to-green-500">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              جاهز لبدء رحلتك معنا؟
            </h2>
            <p className="text-xl text-green-100 mb-8">
              نتطلع للتعرف عليك والعمل معاً لبناء شيء عظيم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@chatbot.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                careers@chatbot.com
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-500/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-500/30 transition-all"
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

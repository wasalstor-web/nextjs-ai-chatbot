import {
  Globe,
  Heart,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "نهتم بمستخدمينا",
      description:
        "نضع احتياجات مستخدمينا في صميم كل قرار نتخذه. رضاكم هو نجاحنا.",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Zap,
      title: "الابتكار المستمر",
      description:
        "نسعى دائماً لتطوير تقنيات جديدة وتحسين تجربة المستخدم بشكل مستمر.",
      color: "from-green-700 to-green-600",
    },
    {
      icon: Shield,
      title: "الأمان والخصوصية",
      description: "نحمي بياناتك بأعلى معايير الأمان ونحترم خصوصيتك بشكل كامل.",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Users,
      title: "بناء مجتمع",
      description:
        "نؤمن بقوة المجتمع ونعمل على بناء بيئة داعمة ومتفاعلة للجميع.",
      color: "from-green-800 to-green-700",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "البداية",
      description:
        "انطلاق المنصة بفكرة بسيطة: جعل الذكاء الاصطناعي متاحاً للجميع",
    },
    {
      year: "2023",
      title: "أول 1000 مستخدم",
      description: "وصلنا إلى أول ألف مستخدم نشط وتلقينا ملاحظات قيمة",
    },
    {
      year: "2024",
      title: "التوسع",
      description: "إطلاق نماذج AI متقدمة ودعم الملفات المتعددة",
    },
    {
      year: "2024",
      title: "المستقبل",
      description: "نعمل على ميزات أكثر ذكاءً وتجربة أفضل",
    },
  ];

  const team = [
    {
      name: "فريق التطوير",
      role: "بناء التقنية",
      description: "مهندسون متخصصون في الذكاء الاصطناعي وتطوير الويب",
      icon: Zap,
    },
    {
      name: "فريق التصميم",
      role: "تجربة المستخدم",
      description: "مصممون يهتمون بكل تفصيلة لضمان تجربة سلسة",
      icon: Sparkles,
    },
    {
      name: "فريق الدعم",
      role: "خدمة العملاء",
      description: "متواجدون دائماً لمساعدتك وحل أي مشكلة تواجهك",
      icon: Heart,
    },
    {
      name: "فريق البحث",
      role: "الابتكار",
      description: "باحثون يعملون على أحدث تقنيات الذكاء الاصطناعي",
      icon: TrendingUp,
    },
  ];

  const stats = [
    { value: "10K+", label: "مستخدم نشط" },
    { value: "1M+", label: "محادثة يومياً" },
    { value: "99.9%", label: "وقت تشغيل" },
    { value: "24/7", label: "دعم فني" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-green-600/10 via-green-500/10 to-green-400/10 dark:from-green-600/5 dark:via-green-500/5 dark:to-green-400/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="text-gray-900 dark:text-white">
                نحن نؤمن بقوة
              </span>
              <br />
              <span className="bg-linear-to-l from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                الذكاء الاصطناعي للجميع
              </span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed dark:text-gray-400">
              مهمتنا هي جعل تقنيات الذكاء الاصطناعي المتقدمة متاحة وسهلة
              الاستخدام للجميع، مع الحفاظ على الخصوصية والأمان.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div className="mb-2 bg-linear-to-l from-green-600 via-green-500 to-green-400 bg-clip-text font-bold text-4xl text-transparent lg:text-5xl">
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

      {/* Mission Section */}
      <section className="bg-white py-20 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-green-600 to-green-500">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-6 font-bold text-4xl text-gray-900 dark:text-white">
                مهمتنا
              </h2>
              <p className="mb-4 text-gray-600 text-lg leading-relaxed dark:text-gray-400">
                نسعى لإنشاء منصة ذكاء اصطناعي تجمع بين القوة والبساطة، حيث يمكن
                لأي شخص - سواء كان مطوراً محترفاً أو مستخدماً عادياً - الاستفادة من
                أحدث تقنيات AI.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-400">
                نؤمن بأن التكنولوجيا يجب أن تكون شاملة ومتاحة للجميع، دون تعقيد
                أو حواجز تقنية.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-green-600 via-green-500 to-green-400 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white dark:bg-gray-900">
                  <Globe className="h-32 w-32 animate-pulse text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              قيمنا الأساسية
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              المبادئ التي توجه عملنا وقراراتنا اليومية
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div
                  className={`h-14 w-14 rounded-xl bg-linear-to-br ${value.color} mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 font-bold text-gray-900 text-xl dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-20 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              رحلتنا
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              من فكرة بسيطة إلى منصة يثق بها الآلاف
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div className="relative pr-12 lg:pr-16" key={index}>
                  {/* Timeline line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute top-16 right-6 h-full w-0.5 bg-linear-to-b from-green-600 to-green-500 lg:right-8" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute top-2 right-4 h-5 w-5 rounded-full border-4 border-white bg-linear-to-br from-green-600 to-green-500 lg:right-6 dark:border-gray-950" />

                  <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <span className="mb-2 inline-block rounded-full bg-linear-to-l from-green-600 to-green-500 px-3 py-1 font-bold text-sm text-white">
                          {milestone.year}
                        </span>
                        <h3 className="font-bold text-gray-900 text-xl dark:text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              فريقنا
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              مجموعة من المبدعين والمبتكرين يعملون معاً لتحقيق رؤيتنا
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-green-600 via-green-500 to-green-400">
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-1 font-bold text-gray-900 text-lg dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 font-medium text-green-600 text-sm dark:text-green-400">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-green-700 via-green-600 to-green-500 py-20">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl text-white lg:text-5xl">
              انضم إلى رحلتنا
            </h2>
            <p className="mb-8 text-green-100 text-xl">
              كن جزءاً من مجتمع يشكل مستقبل الذكاء الاصطناعي
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-green-600 text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="/register"
              >
                ابدأ الآن مجاناً
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-green-500/20 px-8 py-4 font-semibold text-lg text-white transition-all hover:bg-green-500/30"
                href="/contact"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

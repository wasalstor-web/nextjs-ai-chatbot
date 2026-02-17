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
      title: "دقة قانونية",
      description:
        "نلتزم بأعلى معايير الدقة في الاستشارات القانونية المبنية على الأنظمة السعودية.",
      color: "from-amber-500 to-amber-400",
    },
    {
      icon: Zap,
      title: "ابتكار قانوني تقني",
      description:
        "ندمج أحدث تقنيات الذكاء الاصطناعي مع الخبرة القانونية السعودية المتخصصة.",
      color: "from-amber-600 to-amber-500",
    },
    {
      icon: Shield,
      title: "سرية تامة",
      description: "نحمي بياناتك القانونية بأعلى معايير التشفير ونلتزم بالسرية المهنية.",
      color: "from-amber-500 to-amber-400",
    },
    {
      icon: Users,
      title: "خدمة العدالة",
      description:
        "نؤمن بأن الخدمات القانونية يجب أن تكون متاحة للجميع في المملكة.",
      color: "from-amber-700 to-amber-600",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "الفكرة",
      description:
        "انطلقت فكرة مبسط LAW لتسهيل الوصول للاستشارات القانونية في المملكة",
    },
    {
      year: "2024",
      title: "إطلاق المنصة",
      description: "إطلاق النسخة الأولى مع تغطية لأكثر من 200 نظام سعودي",
    },
    {
      year: "2024",
      title: "التوسع",
      description: "إضافة تحليل العقود والبحث المتقدم في الأنظمة السعودية",
    },
    {
      year: "2025",
      title: "رؤية 2030",
      description: "تطوير مستمر لدعم التحول الرقمي القانوني في المملكة",
    },
  ];

  const team = [
    {
      name: "فريق القانون",
      role: "المحتوى القانوني",
      description: "محامون ومستشارون متخصصون في الأنظمة السعودية",
      icon: Zap,
    },
    {
      name: "فريق التقنية",
      role: "الذكاء الاصطناعي",
      description: "مهندسون متخصصون في AI ومعالجة اللغة العربية",
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
      role: "تحديث الأنظمة",
      description: "باحثون يتابعون أحدث التعديلات في الأنظمة السعودية",
      icon: TrendingUp,
    },
  ];

  const stats = [
    { value: "50K+", label: "استشارة قانونية" },
    { value: "200+", label: "نظام سعودي" },
    { value: "99.9%", label: "دقة التحليل" },
    { value: "24/7", label: "متاح دائماً" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/80 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-amber-400/10 to-amber-300/10 dark:from-amber-500/5 dark:via-amber-400/5 dark:to-amber-300/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="text-slate-900 dark:text-white">
                نؤمن بحق الجميع
              </span>
              <br />
              <span className="bg-linear-to-l from-amber-500 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                في الوصول للعدالة
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed dark:text-slate-400">
              مهمتنا هي تسهيل الوصول للاستشارات القانونية السعودية باستخدام
              الذكاء الاصطناعي، مع الحفاظ على الدقة والسرية المهنية.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                key={stat.label}
              >
                <div className="mb-2 bg-linear-to-l from-amber-500 via-amber-400 to-amber-300 bg-clip-text font-bold text-4xl text-transparent lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 dark:bg-slate-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-amber-400">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-6 font-bold text-4xl text-slate-900 dark:text-white">
                مهمتنا
              </h2>
              <p className="mb-4 text-slate-600 text-lg leading-relaxed dark:text-slate-400">
                نسعى لتمكين كل فرد وجهة في المملكة من الوصول لاستشارات
                قانونية دقيقة ومبنية على الأنظمة السعودية المعتمدة — بسرعة فائقة
                وتكلفة معقولة.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed dark:text-slate-400">
                نؤمن بأن فهم القانون حق للجميع، ومبسط LAW يجعل ذلك ممكناً
                باستخدام الذكاء الاصطناعي المتخصص.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-amber-500 via-amber-400 to-amber-300 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white dark:bg-slate-900">
                  <Globe className="h-32 w-32 animate-pulse text-amber-500 dark:text-amber-300" />
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
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              قيمنا الأساسية
            </h2>
            <p className="text-slate-600 text-lg dark:text-slate-400">
              المبادئ التي توجه عملنا وقراراتنا اليومية
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                key={value.title}
              >
                <div
                  className={`h-14 w-14 rounded-xl bg-linear-to-br ${value.color} mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 font-bold text-slate-900 text-xl dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-20 dark:bg-slate-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              رحلتنا
            </h2>
            <p className="text-slate-600 text-lg dark:text-slate-400">
              من فكرة بسيطة إلى منصة يثق بها الآلاف
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  className="relative pr-12 lg:pr-16"
                  key={`${milestone.year}-${milestone.title}`}
                >
                  {/* Timeline line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute top-16 right-6 h-full w-0.5 bg-linear-to-b from-amber-500 to-amber-400 lg:right-8" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute top-2 right-4 h-5 w-5 rounded-full border-4 border-white bg-linear-to-br from-amber-500 to-amber-400 lg:right-6 dark:border-slate-950" />

                  <div className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <span className="mb-2 inline-block rounded-full bg-linear-to-l from-amber-500 to-amber-400 px-3 py-1 font-bold text-sm text-white">
                          {milestone.year}
                        </span>
                        <h3 className="font-bold text-slate-900 text-xl dark:text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
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
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              فريقنا
            </h2>
            <p className="text-slate-600 text-lg dark:text-slate-400">
              مجموعة من المبدعين والمبتكرين يعملون معاً لتحقيق رؤيتنا
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                key={member.name}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-amber-500 via-amber-400 to-amber-300">
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-1 font-bold text-slate-900 text-lg dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 font-medium text-amber-500 text-sm dark:text-amber-300">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-amber-600 via-amber-500 to-amber-400 py-20">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl text-white lg:text-5xl">
              انضم إلى مستخدمي مبسط LAW
            </h2>
            <p className="mb-8 text-amber-50 text-xl">
              احصل على استشارات قانونية سعودية دقيقة في ثوانٍ
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-amber-500 text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="/register"
              >
                ابدأ الآن مجاناً
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-amber-400/20 px-8 py-4 font-semibold text-lg text-white transition-all hover:bg-amber-400/30"
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

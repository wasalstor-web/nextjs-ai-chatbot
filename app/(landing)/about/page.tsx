import { Heart, Target, Zap, Users, Shield, Sparkles, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "نهتم بمستخدمينا",
      description: "نضع احتياجات مستخدمينا في صميم كل قرار نتخذه. رضاكم هو نجاحنا.",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Zap,
      title: "الابتكار المستمر",
      description: "نسعى دائماً لتطوير تقنيات جديدة وتحسين تجربة المستخدم بشكل مستمر.",
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
      description: "نؤمن بقوة المجتمع ونعمل على بناء بيئة داعمة ومتفاعلة للجميع.",
      color: "from-green-800 to-green-700",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "البداية",
      description: "انطلاق المنصة بفكرة بسيطة: جعل الذكاء الاصطناعي متاحاً للجميع",
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
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-600/10 via-green-500/10 to-green-400/10 dark:from-green-600/5 dark:via-green-500/5 dark:to-green-400/5" />
        
        <div className="container mx-auto px-4 relative" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">
                نحن نؤمن بقوة
              </span>
              <br />
              <span className="bg-linear-to-l from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                الذكاء الاصطناعي للجميع
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              مهمتنا هي جعل تقنيات الذكاء الاصطناعي المتقدمة متاحة وسهلة الاستخدام للجميع، مع الحفاظ على الخصوصية والأمان.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-linear-to-l from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent mb-2">
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

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-600 to-green-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                مهمتنا
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                نسعى لإنشاء منصة ذكاء اصطناعي تجمع بين القوة والبساطة، حيث يمكن لأي شخص - سواء كان مطوراً محترفاً أو مستخدماً عادياً - الاستفادة من أحدث تقنيات AI.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                نؤمن بأن التكنولوجيا يجب أن تكون شاملة ومتاحة للجميع، دون تعقيد أو حواجز تقنية.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-green-600 via-green-500 to-green-400 p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center">
                  <Globe className="w-32 h-32 text-green-600 dark:text-green-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              المبادئ التي توجه عملنا وقراراتنا اليومية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              رحلتنا
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              من فكرة بسيطة إلى منصة يثق بها الآلاف
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pr-12 lg:pr-16"
                >
                  {/* Timeline line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute right-6 lg:right-8 top-16 w-0.5 h-full bg-linear-to-b from-green-600 to-green-500" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute right-4 lg:right-6 top-2 w-5 h-5 rounded-full bg-linear-to-br from-green-600 to-green-500 border-4 border-white dark:border-gray-950" />
                  
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block bg-linear-to-l from-green-600 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              فريقنا
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              مجموعة من المبدعين والمبتكرين يعملون معاً لتحقيق رؤيتنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-green-600 via-green-500 to-green-400 flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400 mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-green-700 via-green-600 to-green-500">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              انضم إلى رحلتنا
            </h2>
            <p className="text-xl text-green-100 mb-8">
              كن جزءاً من مجتمع يشكل مستقبل الذكاء الاصطناعي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                ابدأ الآن مجاناً
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-500/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-500/30 transition-all"
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

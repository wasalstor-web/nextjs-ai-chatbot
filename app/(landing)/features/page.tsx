"use client";

import { GlassCard } from "@/components/landing/glass-card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bot,
  Brain,
  Clock,
  FileText,
  Globe,
  MessageSquare,
  Mic,
  Shield,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "محادثات ذكية طبيعية",
      description:
        "تحدث بشكل طبيعي وكأنك تتواصل مع إنسان. فهم عميق للسياق والمحادثات الطويلة.",
      highlights: ["فهم السياق", "ذاكرة المحادثة", "إجابات دقيقة"],
      gradient: "from-emerald-400 to-green-500",
    },
    {
      icon: Brain,
      title: "ذكاء اصطناعي متقدم",
      description:
        "مدعوم بأحدث نماذج الذكاء الاصطناعي من Anthropic Claude وOpenAI GPT-4.",
      highlights: ["Claude Sonnet 4.5", "GPT-4 Turbo", "تحديثات مستمرة"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Upload,
      title: "دعم الملفات والصور",
      description:
        "أرفق الصور والمستندات PDF والملفات النصية واحصل على تحليل ذكي فوري.",
      highlights: ["صور", "PDF", "مستندات Word"],
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: Zap,
      title: "استجابة فورية",
      description:
        "احصل على إجابات في ثوانٍ معدودة بفضل التقنية السحابية المتطورة.",
      highlights: ["سرعة فائقة", "بدون تأخير", "أداء عالي"],
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: Shield,
      title: "خصوصية وأمان تام",
      description: "بياناتك محمية بتشفير من طرف إلى طرف ومعايير أمان عالمية.",
      highlights: ["تشفير E2E", "GDPR", "ISO 27001"],
      gradient: "from-green-600 to-emerald-700",
    },
    {
      icon: Globe,
      title: "متاح في كل مكان",
      description: "استخدم التطبيق من الويب، الموبايل، أو التابلت بتزامن تام.",
      highlights: ["ويب", "موبايل PWA", "تزامن سحابي"],
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: FileText,
      title: "إنشاء المحتوى",
      description: "اكتب المقالات، الرسائل، والتقارير بمساعدة ذكية واحترافية.",
      highlights: ["كتابة إبداعية", "ترجمة", "تلخيص"],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Clock,
      title: "متاح 24/7",
      description: "مساعدك الذكي متاح على مدار الساعة طوال أيام الأسبوع.",
      highlights: ["بدون توقف", "دعم مستمر", "تحديثات دورية"],
      gradient: "from-teal-500 to-green-600",
    },
    {
      icon: Users,
      title: "تعاون فريقي",
      description: "شارك المحادثات مع فريقك وتعاون في الوقت الفعلي.",
      highlights: ["مشاركة", "تعليقات", "مساحات عمل"],
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "تحسين مستمر",
      description: "نضيف ميزات جديدة باستمرار بناءً على ملاحظات المستخدمين.",
      highlights: ["تحديثات أسبوعية", "ميزات جديدة", "تحسينات الأداء"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Mic,
      title: "إدخال صوتي",
      description: "تحدث مباشرة واحصل على إجابات صوتية طبيعية.",
      highlights: ["تحويل صوت لنص", "إجابات صوتية", "لغات متعددة"],
      gradient: "from-green-600 to-teal-600",
    },
    {
      icon: Bot,
      title: "واجهة مخصصة",
      description: "خصص تجربتك مع الثيمات، الاختصارات، والإعدادات المتقدمة.",
      highlights: ["وضع ليلي", "اختصارات", "تخصيص كامل"],
      gradient: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Gradient orbs */}
      <div className="pointer-events-none fixed top-20 left-20 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />
      <div className="pointer-events-none fixed right-20 bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="container relative z-10 mx-auto px-4" dir="rtl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-6 py-3 font-medium text-green-700 text-sm shadow-lg backdrop-blur-xl dark:border-green-700/50 dark:bg-white/10 dark:text-green-300"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              قدرات استثنائية
            </motion.div>

            <h1 className="mb-6 font-bold text-5xl lg:text-7xl">
              <span className="bg-gradient-to-l from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                مميزات قوية
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                لتجربة استثنائية
              </span>
            </h1>
            <p className="mb-8 text-gray-600 text-xl leading-relaxed dark:text-gray-300">
              اكتشف جميع المميزات التي تجعل مساعدك الذكي الخيار الأمثل للمحادثات
              الذكية والإنتاجية العالية.
            </p>

            <Link href="/register">
              <motion.button
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 font-semibold text-lg text-white shadow-green-500/30 shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                ابدأ الآن مجاناً
                <ArrowLeft className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <GlassCard className="p-8" delay={index * 0.05} key={index}>
                <motion.div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="mb-3 font-bold text-2xl text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mb-4 text-gray-600 leading-relaxed dark:text-gray-400">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, hIndex) => (
                    <span
                      className="rounded-full border border-green-200/50 bg-green-50 px-3 py-1.5 font-medium text-green-700 text-xs dark:border-green-700/50 dark:bg-green-900/30 dark:text-green-300"
                      key={hIndex}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4" dir="rtl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 font-bold text-4xl text-white lg:text-5xl">
              جرّب جميع الميزات الآن
            </h2>
            <p className="mb-10 text-green-100 text-xl">
              لا تفوت الفرصة! ابدأ استخدام مساعدك الذكي اليوم واستمتع بجميع
              الميزات مجاناً.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <motion.button
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-green-700 text-lg shadow-xl transition-all"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  إنشاء حساب مجاني
                  <ArrowLeft className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-lg text-white backdrop-blur-xl transition-all hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  عرض الأسعار
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

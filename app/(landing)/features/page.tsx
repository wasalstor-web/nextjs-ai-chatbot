"use client";

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
import { GlassCard } from "@/components/landing/glass-card";

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "استشارات قانونية ذكية",
      description:
        "اسأل أي سؤال قانوني واحصل على إجابة دقيقة مبنية على الأنظمة السعودية المعتمدة.",
      highlights: ["فهم السياق القانوني", "إجابات مفصلة", "مراجع نظامية"],
      gradient: "from-amber-300 to-amber-400",
    },
    {
      icon: Brain,
      title: "ذكاء اصطناعي قانوني متخصص",
      description:
        "مدرّب خصيصاً على الأنظمة واللوائح السعودية لتقديم استشارات دقيقة وموثوقة.",
      highlights: ["200+ نظام سعودي", "تحديثات مستمرة", "دقة عالية"],
      gradient: "from-amber-400 to-amber-500",
    },
    {
      icon: Upload,
      title: "تحليل العقود والمستندات",
      description:
        "ارفع عقودك ومستنداتك القانونية واحصل على تحليل شامل للثغرات والمخاطر.",
      highlights: ["عقود", "PDF", "مستندات قانونية"],
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: Zap,
      title: "بحث فوري في الأنظمة",
      description:
        "ابحث في أكثر من 200 نظام ولائحة سعودية واحصل على المواد المطلوبة في ثوانٍ.",
      highlights: ["بحث سريع", "نتائج دقيقة", "مراجع مباشرة"],
      gradient: "from-amber-300 to-teal-500",
    },
    {
      icon: Shield,
      title: "سرية مهنية كاملة",
      description: "بياناتك القانونية محمية بتشفير متقدم مع التزام تام بالسرية المهنية.",
      highlights: ["تشفير E2E", "سرية مهنية", "حماية البيانات"],
      gradient: "from-amber-500 to-emerald-700",
    },
    {
      icon: Globe,
      title: "متاح في كل مكان",
      description: "استشر مبسط LAW من أي جهاز — الويب، الموبايل، أو التابلت.",
      highlights: ["ويب", "موبايل PWA", "تزامن سحابي"],
      gradient: "from-amber-400 to-amber-500",
    },
    {
      icon: FileText,
      title: "تقارير قانونية مفصلة",
      description: "احصل على تقارير قانونية شاملة مع التوصيات والخطوات العملية.",
      highlights: ["تقارير مفصلة", "توصيات", "خطوات عملية"],
      gradient: "from-amber-300 to-amber-400",
    },
    {
      icon: Clock,
      title: "متاح 24/7",
      description: "مستشارك القانوني لا ينام — احصل على استشارتك في أي وقت.",
      highlights: ["بدون توقف", "استشارات فورية", "طوال الأسبوع"],
      gradient: "from-teal-500 to-amber-500",
    },
    {
      icon: Users,
      title: "مناسب للأفراد والمكاتب",
      description: "باقات مخصصة للأفراد ومكاتب المحاماة والإدارات القانونية.",
      highlights: ["أفراد", "مكاتب محاماة", "شركات"],
      gradient: "from-amber-300 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "تغطية شاملة للمجالات",
      description: "استشارات في جميع المجالات: عقاري، عمالي، تجاري، جزائي، أسري، وإداري.",
      highlights: ["6 مجالات قانونية", "تخصصات متعددة", "تغطية شاملة"],
      gradient: "from-amber-400 to-amber-500",
    },
    {
      icon: Mic,
      title: "إدخال صوتي",
      description: "اسأل سؤالك القانوني صوتياً واحصل على إجابة فورية.",
      highlights: ["تحويل صوت لنص", "إجابات فورية", "عربي كامل"],
      gradient: "from-amber-500 to-teal-600",
    },
    {
      icon: Bot,
      title: "واجهة عربية متكاملة",
      description: "تصميم RTL كامل مع دعم الوضع الليلي وتخصيص كامل.",
      highlights: ["وضع ليلي", "RTL كامل", "تخصيص كامل"],
      gradient: "from-amber-400 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-b from-white via-amber-50/80/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Gradient orbs */}
      <div className="pointer-events-none fixed top-20 left-20 h-72 w-72 rounded-full bg-amber-300/10 blur-[100px]" />
      <div className="pointer-events-none fixed right-20 bottom-20 h-96 w-96 rounded-full bg-amber-300/10 blur-[100px]" />

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
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-100/50 bg-white/80 px-6 py-3 font-medium text-amber-600 text-sm shadow-lg backdrop-blur-xl dark:border-amber-600/50 dark:bg-white/10 dark:text-amber-200"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              أدوات قانونية متقدمة
            </motion.div>

            <h1 className="mb-6 font-bold text-5xl lg:text-7xl">
              <span className="bg-linear-to-l from-amber-500 via-amber-500 to-teal-600 bg-clip-text text-transparent">
                أدوات قانونية
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                ذكية وقوية
              </span>
            </h1>
            <p className="mb-8 text-slate-600 text-xl leading-relaxed dark:text-slate-300">
              اكتشف أدوات مبسط LAW القانونية المتخصصة في الأنظمة السعودية
              — استشارات، تحليل عقود، وبحث في الأنظمة.
            </p>

            <Link href="/register">
              <motion.button
                className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-amber-500 to-amber-500 px-8 py-4 font-semibold text-lg text-white shadow-amber-400/30 shadow-xl"
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
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${feature.gradient} mb-6 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="mb-3 font-bold text-2xl text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mb-4 text-slate-600 leading-relaxed dark:text-slate-400">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, hIndex) => (
                    <span
                      className="rounded-full border border-amber-100/50 bg-amber-50/80 px-3 py-1.5 font-medium text-amber-600 text-xs dark:border-amber-600/50 dark:bg-amber-900/30 dark:text-amber-200"
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
      <section className="relative overflow-hidden bg-linear-to-br from-amber-500 via-amber-500 to-teal-600 py-24">
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
              جرّب أدوات مبسط LAW الآن
            </h2>
            <p className="mb-10 text-amber-50 text-xl">
              ابدأ استشاراتك القانونية اليوم واستفد من جميع
              الأدوات القانونية مجاناً.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <motion.button
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-amber-600 text-lg shadow-xl transition-all"
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

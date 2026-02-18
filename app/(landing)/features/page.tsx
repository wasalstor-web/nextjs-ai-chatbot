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
  Scale,
  Shield,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const ease = [0.32, 0.72, 0, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const FEATURES = [
  {
    icon: MessageSquare,
    num: "01",
    title: "استشارات قانونية ذكية",
    description:
      "اسأل أي سؤال قانوني واحصل على إجابة دقيقة مبنية على الأنظمة السعودية المعتمدة.",
    tags: ["فهم السياق القانوني", "إجابات مفصلة", "مراجع نظامية"],
  },
  {
    icon: Brain,
    num: "02",
    title: "ذكاء اصطناعي قانوني متخصص",
    description:
      "مدرب خصيصا على الأنظمة واللوائح السعودية لتقديم استشارات دقيقة وموثوقة.",
    tags: ["200+ نظام سعودي", "تحديثات مستمرة", "دقة عالية"],
  },
  {
    icon: Upload,
    num: "03",
    title: "تحليل العقود والمستندات",
    description:
      "ارفع عقودك ومستنداتك القانونية واحصل على تحليل شامل للثغرات والمخاطر.",
    tags: ["عقود", "PDF", "مستندات قانونية"],
  },
  {
    icon: Zap,
    num: "04",
    title: "بحث فوري في الأنظمة",
    description:
      "ابحث في أكثر من 200 نظام ولائحة سعودية واحصل على المواد المطلوبة في ثوان.",
    tags: ["بحث سريع", "نتائج دقيقة", "مراجع مباشرة"],
  },
  {
    icon: Shield,
    num: "05",
    title: "سرية مهنية كاملة",
    description:
      "بياناتك القانونية محمية بتشفير متقدم مع التزام تام بالسرية المهنية.",
    tags: ["تشفير E2E", "سرية مهنية", "حماية البيانات"],
  },
  {
    icon: Globe,
    num: "06",
    title: "متاح في كل مكان",
    description: "استشر محامي فيصل من أي جهاز — الويب، الموبايل، أو التابلت.",
    tags: ["ويب", "موبايل PWA", "تزامن سحابي"],
  },
  {
    icon: FileText,
    num: "07",
    title: "تقارير قانونية مفصلة",
    description: "احصل على تقارير قانونية شاملة مع التوصيات والخطوات العملية.",
    tags: ["تقارير مفصلة", "توصيات", "خطوات عملية"],
  },
  {
    icon: Clock,
    num: "08",
    title: "متاح 24/7",
    description: "مستشارك القانوني لا ينام — احصل على استشارتك في أي وقت.",
    tags: ["بدون توقف", "استشارات فورية", "طوال الأسبوع"],
  },
  {
    icon: Users,
    num: "09",
    title: "مناسب للأفراد والمكاتب",
    description: "باقات مخصصة للأفراد ومكاتب المحاماة والإدارات القانونية.",
    tags: ["أفراد", "مكاتب محاماة", "شركات"],
  },
  {
    icon: TrendingUp,
    num: "10",
    title: "تغطية شاملة للمجالات",
    description:
      "استشارات في جميع المجالات: عقاري، عمالي، تجاري، جزائي، أسري، وإداري.",
    tags: ["6 مجالات قانونية", "تخصصات متعددة", "تغطية شاملة"],
  },
  {
    icon: Mic,
    num: "11",
    title: "إدخال صوتي",
    description: "اسأل سؤالك القانوني صوتياً واحصل على إجابة فورية.",
    tags: ["تحويل صوت لنص", "إجابات فورية", "عربي كامل"],
  },
  {
    icon: Bot,
    num: "12",
    title: "واجهة عربية متكاملة",
    description: "تصميم RTL كامل مع دعم الوضع الليلي وتخصيص كامل.",
    tags: ["وضع ليلي", "RTL كامل", "تخصيص كامل"],
  },
];

export default function FeaturesPage() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2">
          {[400, 500, 600].map((size) => (
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50"
              key={size}
              style={{ width: size, height: size }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            animate="visible"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            custom={0}
            initial="hidden"
            variants={fadeUp}
          >
            <Scale className="h-4 w-4" />
            أدوات قانونية متقدمة
          </motion.div>

          <motion.h1
            animate="visible"
            className="mb-6 font-bold text-4xl text-zinc-900 leading-tight tracking-tight md:text-6xl lg:text-7xl dark:text-white"
            custom={0.1}
            initial="hidden"
            variants={fadeUp}
          >
            أدوات قانونية
            <br />
            <span className="bg-gradient-to-l from-zinc-400 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-500 dark:to-white">
              ذكية وقوية.
            </span>
          </motion.h1>

          <motion.p
            animate="visible"
            className="mx-auto mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            اكتشف أدوات محامي فيصل القانونية المتخصصة في الأنظمة السعودية —
            استشارات، تحليل عقود، وبحث في الأنظمة.
          </motion.p>

          <motion.div
            animate="visible"
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            custom={0.3}
            initial="hidden"
            variants={fadeUp}
          >
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 font-medium text-sm text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              href="/register"
            >
              ابدأ الآن مجاناً
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-8 py-3.5 font-medium text-sm text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
              href="/pricing"
            >
              عرض الأسعار
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-zinc-200 border-t px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              الميزات
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              كل ما تحتاجه قانونياً
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {FEATURES.map((feature) => (
              <motion.div
                className="group rounded-2xl border border-zinc-200 p-6 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                key={feature.num}
                variants={staggerItem}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400">
                    {feature.num}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <feature.icon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </div>
                </div>

                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h3>

                <p className="mb-4 text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {feature.tags.map((tag) => (
                    <span
                      className="rounded-full bg-zinc-100 px-2.5 py-0.5 font-medium text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="rounded-3xl bg-zinc-950 p-10 text-center text-white md:p-16 dark:bg-zinc-900"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Sparkles className="mx-auto mb-6 h-10 w-10 text-zinc-500" />
            <h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
              جرّب أدوات محامي فيصل الآن
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-zinc-400">
              ابدأ استشاراتك القانونية اليوم واستفد من جميع الأدوات مجاناً.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-sm text-zinc-900 transition-all hover:bg-zinc-100"
                href="/register"
              >
                إنشاء حساب مجاني
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 font-medium text-sm text-zinc-300 transition-all hover:bg-zinc-800"
                href="/pricing"
              >
                عرض الأسعار
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

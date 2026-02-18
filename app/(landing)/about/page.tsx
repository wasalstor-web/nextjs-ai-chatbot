"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Heart,
  Scale,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
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
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const VALUES = [
  {
    icon: Heart,
    title: "دقة قانونية",
    description:
      "نلتزم بأعلى معايير الدقة في الاستشارات القانونية المبنية على الأنظمة السعودية.",
  },
  {
    icon: Zap,
    title: "ابتكار تقني",
    description:
      "ندمج أحدث تقنيات الذكاء الاصطناعي مع الخبرة القانونية السعودية المتخصصة.",
  },
  {
    icon: Shield,
    title: "سرية تامة",
    description:
      "نحمي بياناتك القانونية بأعلى معايير التشفير ونلتزم بالسرية المهنية.",
  },
  {
    icon: Users,
    title: "خدمة العدالة",
    description:
      "نؤمن بأن الخدمات القانونية يجب أن تكون متاحة للجميع في المملكة.",
  },
];

const MILESTONES = [
  {
    year: "2023",
    title: "الفكرة",
    description:
      "انطلقت فكرة محامي فيصل لتسهيل الوصول للاستشارات القانونية في المملكة",
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

const TEAM = [
  {
    icon: Zap,
    name: "فريق القانون",
    role: "المحتوى القانوني",
    description: "محامون ومستشارون متخصصون في الأنظمة السعودية",
  },
  {
    icon: Sparkles,
    name: "فريق التقنية",
    role: "الذكاء الاصطناعي",
    description: "مهندسون متخصصون في AI ومعالجة اللغة العربية",
  },
  {
    icon: Heart,
    name: "فريق الدعم",
    role: "خدمة العملاء",
    description: "متواجدون دائماً لمساعدتك وحل أي مشكلة تواجهك",
  },
  {
    icon: TrendingUp,
    name: "فريق البحث",
    role: "تحديث الأنظمة",
    description: "باحثون يتابعون أحدث التعديلات في الأنظمة السعودية",
  },
];

const STATS = [
  { value: "50K+", label: "استشارة قانونية" },
  { value: "200+", label: "نظام سعودي" },
  { value: "99.9%", label: "دقة التحليل" },
  { value: "24/7", label: "متاح دائماً" },
];

export default function AboutPage() {
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
            من نحن
          </motion.div>

          <motion.h1
            animate="visible"
            className="mb-6 font-bold text-4xl text-zinc-900 leading-tight tracking-tight md:text-6xl lg:text-7xl dark:text-white"
            custom={0.1}
            initial="hidden"
            variants={fadeUp}
          >
            نؤمن بحق الجميع
            <br />
            <span className="bg-gradient-to-l from-zinc-400 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-500 dark:to-white">
              في الوصول للعدالة.
            </span>
          </motion.h1>

          <motion.p
            animate="visible"
            className="mx-auto mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            مهمتنا هي تسهيل الوصول للاستشارات القانونية السعودية باستخدام الذكاء
            الاصطناعي — مع الحفاظ على الدقة والسرية المهنية.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-zinc-200 border-y px-6 py-16 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {STATS.map((stat) => (
              <motion.div
                className="text-center"
                key={stat.label}
                variants={staggerItem}
              >
                <div className="mb-1 font-bold text-4xl text-zinc-900 tracking-tight md:text-5xl dark:text-white">
                  {stat.value}
                </div>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              variants={fadeUp}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <span className="mb-2 block font-mono text-sm text-zinc-400">
                مهمتنا
              </span>
              <h2 className="mb-6 font-bold text-3xl tracking-tight md:text-4xl">
                تمكين الجميع من فهم القانون
              </h2>
              <p className="mb-4 text-lg text-zinc-600 leading-relaxed dark:text-zinc-400">
                نسعى لتمكين كل فرد وجهة في المملكة من الوصول لاستشارات قانونية
                دقيقة ومبنية على الأنظمة السعودية المعتمدة — بسرعة فائقة وتكلفة
                معقولة.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed dark:text-zinc-400">
                نؤمن بأن فهم القانون حق للجميع، ومحامي فيصل يجعل ذلك ممكناً
                باستخدام الذكاء الاصطناعي المتخصص.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              custom={0.2}
              initial="hidden"
              variants={fadeUp}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="flex h-64 w-64 items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                <Globe className="h-24 w-24 text-zinc-300 dark:text-zinc-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-zinc-200 border-t px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              قيمنا
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              المبادئ التي توجهنا
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {VALUES.map((value) => (
              <motion.div
                className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900"
                key={value.title}
                variants={staggerItem}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800">
                  <value.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              رحلتنا
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              من فكرة إلى منصة يثق بها الآلاف
            </h2>
          </motion.div>

          <div className="space-y-0">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                className="flex gap-6 pb-8"
                custom={index * 0.1}
                initial="hidden"
                key={`${milestone.year}-${milestone.title}`}
                variants={fadeUp}
                viewport={{ once: true }}
                whileInView="visible"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 bg-white font-mono font-semibold text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400">
                    {milestone.year.slice(2)}
                  </div>
                  {index < MILESTONES.length - 1 && (
                    <div className="mt-2 h-full w-px bg-zinc-200 dark:bg-zinc-800" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="mb-1 block font-mono text-xs text-zinc-400">
                    {milestone.year}
                  </span>
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-zinc-200 border-t px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              فريقنا
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              خبراء يعملون لأجلك
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {TEAM.map((member) => (
              <motion.div
                className="rounded-2xl border border-zinc-200 p-6 text-center transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                key={member.name}
                variants={staggerItem}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <member.icon className="h-5 w-5 text-zinc-500" />
                </div>
                <h3 className="mb-0.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {member.name}
                </h3>
                <p className="mb-3 text-xs text-zinc-400">{member.role}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {member.description}
                </p>
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
            <Target className="mx-auto mb-6 h-10 w-10 text-zinc-500" />
            <h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
              انضم إلى مستخدمي محامي فيصل
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-zinc-400">
              احصل على استشارات قانونية سعودية دقيقة في ثوان
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-sm text-zinc-900 transition-all hover:bg-zinc-100"
                href="/register"
              >
                ابدأ الآن مجانا
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 font-medium text-sm text-zinc-300 transition-all hover:bg-zinc-800"
                href="/contact"
              >
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

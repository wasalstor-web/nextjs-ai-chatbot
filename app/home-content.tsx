"use client";

import {
  ArrowLeft,
  Scale,
  FileSearch,
  Shield,
  Brain,
  Sparkles,
  MessageSquare,
  FileText,
  Lock,
  Zap,
  Check,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/ui/animated-counter";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const STATS = [
  { value: 50000, suffix: "+", label: "مستخدم نشط" },
  { value: 1000000, suffix: "+", label: "استشارة قانونية" },
  { value: 2000, suffix: "+", label: "نظام ولائحة" },
  { value: 99, suffix: ".9%", label: "دقة النتائج" },
];

const FEATURES = [
  {
    Icon: MessageSquare,
    title: "استشارات قانونية فورية",
    description: "اطرح أي سؤال قانوني واحصل على إجابة دقيقة مستندة إلى الأنظمة السعودية خلال ثوانٍ",
    span: "lg:col-span-2",
  },
  {
    Icon: FileText,
    title: "تحليل العقود",
    description: "ارفع عقدك واحصل على تحليل شامل للبنود والمخاطر والتوصيات القانونية",
    span: "",
  },
  {
    Icon: FileSearch,
    title: "بحث في الأنظمة",
    description: "بحث ذكي في أكثر من 2,000 نظام ولائحة سعودية مع ربط تلقائي بالمواد ذات الصلة",
    span: "",
  },
  {
    Icon: Brain,
    title: "صياغة قانونية ذكية",
    description: "إنشاء مسودات عقود وخطابات قانونية باستخدام قوالب متوافقة مع الأنظمة المحلية",
    span: "lg:col-span-2",
  },
  {
    Icon: Lock,
    title: "سرية وحماية",
    description: "تشفير شامل لبياناتك مع التزام كامل بأنظمة حماية البيانات الشخصية السعودية",
    span: "",
  },
  {
    Icon: Zap,
    title: "سرعة فائقة",
    description: "استجابات في أقل من 3 ثوانٍ مع دقة تتجاوز 99% في الاستدلال القانوني",
    span: "",
  },
];

const STEPS = [
  {
    step: "01",
    title: "اطرح سؤالك",
    description: "اكتب استفسارك القانوني بلغتك العادية — لا تحتاج لمصطلحات قانونية معقدة",
  },
  {
    step: "02",
    title: "تحليل ذكي",
    description: "يبحث الذكاء الاصطناعي في آلاف الأنظمة واللوائح ويحللها للعثور على الإجابة الدقيقة",
  },
  {
    step: "03",
    title: "نتيجة موثقة",
    description: "تحصل على إجابة مفصلة مع المراجع القانونية والمواد ذات الصلة من الأنظمة السعودية",
  },
];

export function HomeContent() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-50">

      {/* HERO */}
      <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-right">
              <motion.div initial="hidden" animate="visible" className="space-y-8">
                <motion.div custom={0} variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-900 opacity-75 dark:bg-zinc-100" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                    </span>
                    {"منصة قانونية ذكية"}
                  </span>
                </motion.div>
                <motion.h1 custom={0.15} variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.88] tracking-tighter">
                  <span className="block">{"مبسّط"}</span>
                  <span className="block mt-2 text-zinc-300 dark:text-zinc-700">LAW</span>
                </motion.h1>
                <motion.p custom={0.3} variants={fadeUp} className="text-xl md:text-2xl font-light leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xl">
                  {"المساعد القانوني الذكي الأول في المملكة — مدعوم بالذكاء الاصطناعي ومبني على الأنظمة السعودية"}
                </motion.p>
                <motion.div custom={0.45} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/register" className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 h-14 px-10 rounded-full text-base font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:shadow-zinc-950/20 dark:hover:shadow-zinc-50/10">
                    {"ابدأ مجاناً"}
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  </Link>
                  <Link href="/features" className="inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 h-14 px-10 rounded-full text-base font-semibold transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700">
                    {"اكتشف المميزات"}
                  </Link>
                </motion.div>
                <motion.div custom={0.6} variants={fadeUp} className="flex flex-wrap items-center gap-8 pt-4 text-sm text-zinc-400">
                  {["متوافق مع الأنظمة السعودية", "تشفير شامل", "دعم على مدار الساعة"].map((text) => (
                    <span key={text} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5" />
                      {text}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease }} className="lg:col-span-5 hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-full border-2 border-zinc-900 dark:border-zinc-100" />
                <div className="absolute inset-6 rounded-full border border-zinc-200 dark:border-zinc-800" />
                <div className="absolute inset-12 rounded-full border border-zinc-100 dark:border-zinc-900" />
                <div className="absolute inset-[4.5rem] rounded-full border border-zinc-100 dark:border-zinc-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-zinc-950 dark:bg-zinc-100 rounded-full flex items-center justify-center shadow-2xl">
                    <Scale className="w-10 h-10 text-white dark:text-zinc-950" />
                  </div>
                </div>
                {[
                  { Icon: Brain, angle: 0 },
                  { Icon: Shield, angle: 90 },
                  { Icon: FileSearch, angle: 180 },
                  { Icon: MessageSquare, angle: 270 },
                ].map(({ Icon, angle }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 46;
                  const xPos = 50 + r * Math.cos(rad);
                  const yPos = 50 + r * Math.sin(rad);
                  return (
                    <motion.div key={angle} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease }} className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center shadow-lg" style={{ left: xPos + "%", top: yPos + "%" }}>
                      <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-5 h-5 text-zinc-300 dark:text-zinc-700" />
        </motion.div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
      </section>

      {/* STATS */}
      <section className="relative py-20 md:py-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {STATS.map((stat, i) => (
              <motion.div key={i} variants={staggerItem} className="space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-right space-y-8">
              <motion.span custom={0} variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
                {"ما هي المنصة"}
              </motion.span>
              <motion.h2 custom={0.1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                {"الذكاء الاصطناعي "}<span className="text-zinc-300 dark:text-zinc-700">{"في خدمة"}</span>{" "}{"القانون السعودي"}
              </motion.h2>
              <motion.p custom={0.2} variants={fadeUp} className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                {"مبسّط LAW هي منصة ذكاء اصطناعي متخصصة في الأنظمة واللوائح السعودية. تقدم استشارات قانونية فورية، تحليل عقود ذكي، وبحث شامل في أكثر من 2,000 نظام ولائحة — كل ذلك بلغة عربية واضحة ودقيقة."}
              </motion.p>
              <motion.div custom={0.3} variants={fadeUp} className="space-y-4 pt-2">
                {["استشارات فورية على مدار الساعة بلا انتظار", "مبني على أنظمة وزارة العدل ونظام المحاكم التجارية", "تحليل عقود وصياغة مسودات قانونية ذكية", "سرية تامة وتشفير متوافق مع المعايير السعودية"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-zinc-950 dark:bg-zinc-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white dark:text-zinc-950" />
                    </div>
                    <span className="text-base text-zinc-600 dark:text-zinc-300">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease }} viewport={{ once: true, margin: "-100px" }} className="relative">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-zinc-950/5 dark:shadow-zinc-950/50">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="w-10 h-10 bg-zinc-950 dark:bg-zinc-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white dark:text-zinc-950" />
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">{"مبسّط LAW"}</div>
                    <div className="text-xs text-zinc-400">{"المساعد القانوني الذكي"}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 rounded-2xl rounded-br-md px-5 py-3 max-w-[80%] text-sm leading-relaxed">
                      {"ما هي شروط فسخ عقد العمل في النظام السعودي؟"}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl rounded-bl-md px-5 py-4 max-w-[85%]">
                      <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {"وفقاً لنظام العمل السعودي (المادة 80)، يحق لصاحب العمل فسخ العقد في الحالات التالية:"}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-zinc-400 rounded-full shrink-0" />
                          {"الاعتداء على صاحب العمل أو المدير المسؤول"}
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-zinc-400 rounded-full shrink-0" />
                          {"عدم أداء الالتزامات الجوهرية المترتبة على العقد"}
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-zinc-400 rounded-full shrink-0" />
                          {"إفشاء الأسرار الصناعية أو التجارية"}
                        </li>
                      </ul>
                      <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-700 text-xs text-zinc-400">
                        {"المصدر: نظام العمل — المادة 80"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full border border-zinc-200 dark:border-zinc-800 rounded-2xl" />
              <div className="absolute -z-20 -top-8 -right-8 w-full h-full border border-zinc-100 dark:border-zinc-900 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32 lg:py-40 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16 md:mb-20">
            <motion.span custom={0} variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-6">
              {"المميزات"}
            </motion.span>
            <motion.h2 custom={0.1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              {"كل ما تحتاجه "}<span className="text-zinc-300 dark:text-zinc-700">{"في منصة واحدة"}</span>
            </motion.h2>
            <motion.p custom={0.2} variants={fadeUp} className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {"أدوات قانونية ذكية صُممت لتبسيط رحلتك القانونية من البداية إلى النهاية"}
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-10 transition-colors duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 ${feature.span}`}>
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-950 transition-all duration-300">
                  <feature.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16 md:mb-24">
            <motion.span custom={0} variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-6">
              {"كيف تعمل"}
            </motion.span>
            <motion.h2 custom={0.1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              {"ثلاث خطوات "}<span className="text-zinc-300 dark:text-zinc-700">{"فقط"}</span>
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {STEPS.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-zinc-200 dark:border-zinc-800 rounded-full mb-8 text-2xl font-black text-zinc-300 dark:text-zinc-700">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 bg-zinc-950 dark:bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center">
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-8">
                {"آراء العملاء"}
              </span>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug max-w-4xl mx-auto">
                &ldquo;{"مبسّط LAW غيّر طريقة تعاملنا مع الاستشارات القانونية بالكامل. وفّر علينا مئات الساعات من البحث والمراجعة."}&rdquo;
              </blockquote>
            </motion.div>
            <motion.div custom={0.2} variants={fadeUp} className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-base font-bold text-white">
                {"م.أ"}
              </div>
              <div className="text-right">
                <div className="font-semibold text-white text-sm">{"محمد الأحمد"}</div>
                <div className="text-xs text-zinc-500">{"مدير الشؤون القانونية — شركة تقنية"}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 custom={0} variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              {"ابدأ رحلتك"}<br /><span className="text-zinc-300 dark:text-zinc-700">{"القانونية الآن"}</span>
            </motion.h2>
            <motion.p custom={0.1} variants={fadeUp} className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {"انضم إلى آلاف المحامين والشركات الذين يستخدمون مبسّط LAW يومياً لتبسيط أعمالهم القانونية"}
            </motion.p>
            <motion.div custom={0.2} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 h-14 px-12 rounded-full text-base font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:shadow-zinc-950/20 dark:hover:shadow-zinc-50/10">
                {"ابدأ مجاناً"}
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 h-14 px-12 rounded-full text-base font-semibold transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900">
                {"تواصل معنا"}
              </Link>
            </motion.div>
            <motion.p custom={0.3} variants={fadeUp} className="mt-6 text-sm text-zinc-400">
              {"مجاني بالكامل · لا يحتاج بطاقة ائتمانية · ابدأ خلال دقيقة"}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

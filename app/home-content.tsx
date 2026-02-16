"use client";

import { GlassCard } from "@/components/landing/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  motion,
} from "framer-motion";
import {
  ArrowLeft,
  Award,
  Bot,
  Brain,
  Check,
  ChevronRight,
  Clock,
  Globe,
  MessageSquare,
  Play,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Floating particles background
function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          animate={{
            y: [0, Math.random() * -200, Math.random() * 200],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          className="absolute h-2 w-2 rounded-full bg-green-400/10"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 600,
          }}
          key={i}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function HomePageContent() {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير تسويق",
      image: "أ",
      content:
        "أفضل مساعد ذكي استخدمته على الإطلاق! ساعدني في كتابة محتوى تسويقي احترافي بسرعة فائقة.",
      rating: 5,
    },
    {
      name: "سارة علي",
      role: "مطورة برمجيات",
      image: "س",
      content:
        "أداة رائعة لمراجعة الكود وشرح المفاهيم البرمجية. أصبحت جزءاً أساسياً من عملي اليومي.",
      rating: 5,
    },
    {
      name: "خالد العمري",
      role: "طالب جامعي",
      image: "خ",
      content:
        "ساعدني كثيراً في البحث والدراسة. إجابات دقيقة ومفصلة لجميع أسئلتي الأكاديمية.",
      rating: 5,
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { value: 50_000, suffix: "+", label: "مستخدم نشط", icon: Users },
    {
      value: 1_000_000,
      suffix: "+",
      label: "محادثة مكتملة",
      icon: MessageSquare,
    },
    { value: 99, suffix: ".9%", label: "وقت التشغيل", icon: TrendingUp },
    { value: 4, suffix: ".9", label: "تقييم المستخدمين", icon: Star },
  ];

  const pricingFeatures = [
    "محادثات غير محدودة",
    "دعم جميع الملفات",
    "الوضع الليلي",
    "تزامن سحابي",
    "دعم فني 24/7",
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "محادثات طبيعية",
      description: "تفاعل بشكل طبيعي وكأنك تتحدث مع صديق",
      gradient: "from-emerald-400 to-green-500",
    },
    {
      icon: Zap,
      title: "استجابة فورية",
      description: "إجابات دقيقة في أقل من ثانية واحدة",
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: Upload,
      title: "دعم الملفات",
      description: "أرفق صور ومستندات للتحليل الذكي",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: Shield,
      title: "خصوصية تامة",
      description: "تشفير متقدم وحماية بياناتك",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Globe,
      title: "متاح في كل مكان",
      description: "استخدم من أي جهاز في أي وقت",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: Brain,
      title: "ذكاء متقدم",
      description: "أحدث نماذج الذكاء الاصطناعي",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center">
        <FloatingParticles />

        <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-green-400/8 blur-[100px]" />
        <div
          className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-emerald-400/8 blur-[100px]"
          style={{ animationDelay: "1s" }}
        />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-green-300/5 to-emerald-300/5 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                animate={mounted ? "visible" : "hidden"}
                className="order-2 text-center lg:order-1 lg:text-right"
                dir="rtl"
                initial="hidden"
                variants={containerVariants}
              >
                <motion.div
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-6 py-3 font-medium text-green-700 text-sm shadow-green-500/10 shadow-lg backdrop-blur-xl dark:border-green-700/50 dark:bg-white/10 dark:text-green-300"
                  variants={itemVariants}
                >
                  <Sparkles className="h-4 w-4" />
                  مدعوم بالذكاء الاصطناعي المتقدم
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </motion.div>

                <motion.h1
                  className="mb-8 font-bold text-5xl leading-tight lg:text-7xl"
                  variants={itemVariants}
                >
                  <span className="bg-gradient-to-l from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    مساعدك الذكي
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    في كل خطوة
                  </span>
                </motion.h1>

                <motion.p
                  className="mb-10 text-gray-600 text-xl leading-relaxed dark:text-gray-300"
                  variants={itemVariants}
                >
                  محادثات ذكية، إجابات فورية، ودعم متواصل على مدار الساعة.
                  <br className="hidden lg:block" />
                  استمتع بتجربة محادثة طبيعية مع الذكاء الاصطناعي الأكثر تطوراً.
                </motion.p>

                <motion.div
                  className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-end"
                  variants={itemVariants}
                >
                  <Link href="/chat">
                    <motion.button
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 font-semibold text-lg text-white shadow-green-500/30 shadow-xl transition-all hover:from-green-500 hover:to-emerald-500 sm:w-auto"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ابدأ المحادثة الآن
                      <ArrowLeft className="h-5 w-5" />
                    </motion.button>
                  </Link>

                  <Link href="/mobile">
                    <motion.button
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-green-200 bg-white px-8 py-4 font-semibold text-green-700 text-lg backdrop-blur-xl transition-all hover:border-green-400 sm:w-auto dark:border-green-700 dark:bg-white/10 dark:text-green-200 dark:hover:border-green-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone className="h-5 w-5" />
                      تطبيق الموبايل
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.div
                  className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm lg:justify-end dark:text-gray-400"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                    <span>متصل الآن</span>
                  </div>
                  <div className="-space-x-2 flex rtl:space-x-reverse">
                    {["أ", "س", "م"].map((letter, i) => (
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 font-bold text-white text-xs ring-2 ring-white dark:ring-gray-900"
                        key={i}
                      >
                        {letter}
                      </div>
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 font-bold text-xs ring-2 ring-white dark:bg-gray-700 dark:ring-gray-900">
                      +5K
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="relative order-1 flex justify-center lg:order-2"
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  className="relative"
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-[580px] w-72 rounded-[3rem] border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-3 shadow-2xl shadow-green-900/20">
                    <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-white dark:bg-gray-900">
                      <div className="flex h-8 items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600">
                        <div className="h-5 w-20 rounded-full bg-black/20" />
                      </div>

                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 pt-2 pb-4">
                        <div className="flex items-center gap-3" dir="rtl">
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xl"
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            <Bot className="h-6 w-6 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="font-bold text-sm text-white">
                              مساعد ذكي
                            </h4>
                            <p className="flex items-center gap-1 text-green-100 text-xs">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-300" />
                              متصل الآن
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="h-[360px] space-y-3 bg-gray-50 p-4 dark:bg-gray-900"
                        dir="rtl"
                      >
                        <motion.div
                          animate={{ opacity: 1, x: 0 }}
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 font-bold text-white text-xs">
                            AI
                          </div>
                          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-3 shadow-sm dark:bg-gray-800">
                            <p className="text-gray-800 text-xs dark:text-gray-200">
                              مرحباً! كيف يمكنني مساعدتك اليوم؟ 👋
                            </p>
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ opacity: 1, x: 0 }}
                          className="flex justify-end gap-2"
                          initial={{ opacity: 0, x: 20 }}
                          transition={{ delay: 1 }}
                        >
                          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gradient-to-r from-green-600 to-emerald-600 p-3">
                            <p className="text-white text-xs">
                              أحتاج مساعدة في كتابة مقال احترافي
                            </p>
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ opacity: 1, x: 0 }}
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          transition={{ delay: 1.5 }}
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 font-bold text-white text-xs">
                            AI
                          </div>
                          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-3 shadow-sm dark:bg-gray-800">
                            <p className="text-gray-800 text-xs dark:text-gray-200">
                              بالطبع! ما هو موضوع المقال؟ سأساعدك في صياغته ✨
                            </p>
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ opacity: 1 }}
                          className="flex gap-2"
                          initial={{ opacity: 0 }}
                          transition={{ delay: 2 }}
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 font-bold text-white text-xs">
                            AI
                          </div>
                          <div className="rounded-2xl rounded-tr-sm bg-white p-3 shadow-sm dark:bg-gray-800">
                            <div className="flex gap-1">
                              <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                className="h-2 w-2 rounded-full bg-gray-400"
                                transition={{
                                  duration: 0.6,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: 0,
                                }}
                              />
                              <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                className="h-2 w-2 rounded-full bg-gray-400"
                                transition={{
                                  duration: 0.6,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: 0.2,
                                }}
                              />
                              <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                className="h-2 w-2 rounded-full bg-gray-400"
                                transition={{
                                  duration: 0.6,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: 0.4,
                                }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="absolute right-0 bottom-0 left-0 border-gray-200 border-t bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-700">
                          <input
                            className="flex-1 bg-transparent text-gray-600 text-xs placeholder-gray-400 outline-none dark:text-gray-300"
                            dir="rtl"
                            placeholder="اكتب رسالتك..."
                            readOnly
                            type="text"
                          />
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 shadow-green-500/30 shadow-lg">
                            <ArrowLeft className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                    className="-top-6 -right-6 absolute h-24 w-24 rounded-3xl bg-gradient-to-br from-green-400/30 to-emerald-400/30 blur-xl"
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                    className="-bottom-6 -left-6 absolute h-32 w-32 rounded-3xl bg-gradient-to-br from-emerald-400/30 to-teal-400/30 blur-xl"
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0.5,
                    }}
                  />

                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="-top-4 absolute right-0 rounded-2xl border border-gray-100 bg-white px-4 py-2 shadow-xl dark:border-gray-700 dark:bg-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-800 text-xs dark:text-white">
                        ذكاء خارق! 🚀
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-sm dark:text-gray-400">
              موثوق من قبل أكثر من 50,000 مستخدم
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 opacity-60 lg:gap-16"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 0.6, y: 0 }}
          >
            {["شركة أ", "مؤسسة ب", "منصة ج", "تطبيق د", "موقع هـ"].map(
              (name, i) => (
                <div
                  className="font-bold text-gray-400 text-xl dark:text-gray-600"
                  key={i}
                >
                  {name}
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Saudi Vision Video */}
      <section
        className="bg-white py-24 dark:bg-gray-950"
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-5 py-2.5 font-medium text-green-700 text-sm backdrop-blur-xl dark:border-green-700/50 dark:bg-white/10 dark:text-green-300">
              <Play className="h-4 w-4" />
              رؤية المملكة 2030
            </div>
            <h2 className="mb-4 font-bold text-4xl text-gray-900 lg:text-5xl dark:text-white">
              التحول الرقمي في المملكة
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl dark:text-gray-400">
              نفخر بأن نكون جزءاً من رؤية السعودية 2030 للتحول الرقمي
            </p>
          </motion.div>

          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <a
              className="group relative block aspect-video cursor-pointer overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-green-900/20"
              href="https://www.youtube.com/watch?v=ByNJSU8D01U"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
                <div className="absolute inset-0 opacity-20">
                  <svg
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <pattern
                        height="10"
                        id="grid"
                        patternUnits="userSpaceOnUse"
                        width="10"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          opacity="0.3"
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect fill="url(#grid)" height="100" width="100" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="h-16 w-16"
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="mb-2 font-bold text-2xl text-white">
                    شاهد رؤية 2030
                  </h3>
                  <p className="text-white/70">اضغط لمشاهدة الفيديو الرسمي</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
                🇸🇦 رؤية المملكة
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-green-600 via-white to-green-600" />
            </a>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { label: "2030", desc: "رؤية المملكة" },
                { label: "100%", desc: "تحول رقمي" },
                { label: "🇸🇦", desc: "فخر سعودي" },
              ].map((item, index) => (
                <GlassCard delay={index * 0.1} key={index}>
                  <div className="p-4 text-center">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text font-bold text-2xl text-transparent">
                      {item.label}
                    </div>
                    <div className="text-gray-500 text-sm dark:text-gray-400">
                      {item.desc}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-4 font-bold text-4xl text-gray-900 lg:text-5xl dark:text-white">
              لماذا تختار مساعدك الذكي؟
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl dark:text-gray-400">
              نوفر لك أفضل تجربة محادثة ذكية مع ميزات متقدمة
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <GlassCard className="p-8" delay={index * 0.1} key={index}>
                <motion.div
                  className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-5 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="mb-3 font-bold text-gray-900 text-xl dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="bg-gray-50/50 py-24 dark:bg-gray-900"
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-5 py-2.5 font-medium text-green-700 text-sm backdrop-blur-xl dark:border-green-700/50 dark:bg-white/10 dark:text-green-300">
              <Clock className="h-4 w-4" />
              كيف يعمل؟
            </div>
            <h2 className="mb-4 font-bold text-4xl text-gray-900 lg:text-5xl dark:text-white">
              ابدأ في 3 خطوات بسيطة
            </h2>
          </motion.div>

          <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="absolute top-16 right-1/4 left-1/4 hidden h-0.5 bg-gradient-to-l from-green-400/50 via-green-500/50 to-green-400/50 md:block" />

            {[
              {
                step: "1",
                title: "أنشئ حساب مجاني",
                description: "سجل بسهولة باستخدام بريدك الإلكتروني",
              },
              {
                step: "2",
                title: "ابدأ المحادثة",
                description: "اكتب سؤالك وشاهد السحر يحدث",
              },
              {
                step: "3",
                title: "استمتع بالنتائج",
                description: "احصل على إجابات دقيقة في ثوانٍ",
              },
            ].map((item, index) => (
              <motion.div
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                key={index}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.div
                  className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 font-bold text-2xl text-white shadow-green-500/30 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="mb-3 font-bold text-gray-900 text-xl dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-5 py-2.5 font-medium text-green-700 text-sm backdrop-blur-xl dark:border-green-700/50 dark:bg-white/10 dark:text-green-300">
              <Award className="h-4 w-4" />
              آراء عملائنا
            </div>
            <h2 className="mb-4 font-bold text-4xl text-gray-900 lg:text-5xl dark:text-white">
              ماذا يقول مستخدمونا؟
            </h2>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <GlassCard className="p-8 lg:p-12">
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center gap-8 lg:flex-row"
                exit={{ opacity: 0, x: -20 }}
                initial={{ opacity: 0, x: 20 }}
                key={activeTestimonial}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 font-bold text-3xl text-white shadow-green-500/30 shadow-xl">
                  {testimonials[activeTestimonial].image}
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="mb-4 flex items-center justify-center gap-1 lg:justify-start">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          className="h-5 w-5 fill-yellow-500 text-yellow-500"
                          key={i}
                        />
                      )
                    )}
                  </div>
                  <p className="mb-6 text-gray-700 text-xl leading-relaxed lg:text-2xl dark:text-gray-200">
                    &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 text-lg dark:text-white">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "w-8 bg-gradient-to-r from-green-600 to-emerald-600"
                        : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700"
                    }`}
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative overflow-hidden border-y border-gray-100 bg-white py-20 dark:border-gray-800 dark:bg-gray-950"
        dir="rtl"
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                key={index}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 dark:bg-green-900/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="h-7 w-7 text-green-600 dark:text-green-400" />
                </motion.div>
                <div className="mb-1 font-bold text-3xl text-gray-900 lg:text-4xl dark:text-white">
                  <AnimatedCounter suffix={stat.suffix} value={stat.value} />
                </div>
                <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-4 font-bold text-4xl text-gray-900 lg:text-5xl dark:text-white">
              ابدأ مجاناً اليوم
            </h2>
            <p className="text-gray-600 text-xl dark:text-gray-400">
              جميع الميزات الأساسية مجانية
            </p>
          </motion.div>

          <motion.div
            className="mx-auto max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <GlassCard className="relative overflow-hidden border-2 border-green-500/50 p-8">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600" />

              <motion.div
                className="-top-4 -translate-x-1/2 absolute left-1/2"
                initial={{ y: -20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <span className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 font-bold text-sm text-white shadow-green-500/30 shadow-lg">
                  الأكثر شعبية
                </span>
              </motion.div>

              <div className="mt-4 mb-8 text-center">
                <div className="mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text font-bold text-5xl text-transparent">
                  مجاني
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  للأبد • بدون بطاقة ائتمان
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <motion.li
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    key={index}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/register">
                <motion.button
                  className="block w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 py-4 text-center font-bold text-lg text-white shadow-green-500/30 shadow-xl transition-all hover:from-green-500 hover:to-emerald-500"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  ابدأ الآن مجاناً
                </motion.button>
              </Link>

              <div className="mt-4 text-center">
                <Link
                  className="inline-flex items-center gap-1 text-green-600 text-sm hover:underline dark:text-green-400"
                  href="/pricing"
                >
                  عرض جميع الخطط
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-green-100/40 blur-3xl dark:bg-green-900/20" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-900/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4" dir="rtl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 font-bold text-4xl text-gray-900 lg:text-5xl dark:text-white">
              جاهز للبدء؟
            </h2>
            <p className="mb-10 text-gray-600 text-xl dark:text-gray-400">
              انضم إلى آلاف المستخدمين واستمتع بتجربة محادثة ذكية لا مثيل لها
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <motion.button
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-8 py-4 font-semibold text-lg text-white shadow-green-500/20 shadow-xl transition-all hover:bg-green-700"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  إنشاء حساب مجاني
                  <ArrowLeft className="h-5 w-5" />
                </motion.button>
              </Link>

              <Link href="/chat">
                <motion.button
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 text-lg transition-all hover:border-green-300 hover:bg-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-green-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  تجربة بدون تسجيل
                </motion.button>
              </Link>
            </div>

            <p className="mt-8 text-gray-400 text-sm dark:text-gray-500">
              * لا حاجة لبطاقة ائتمان • مجاني للأبد
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { GlassCard } from "@/components/landing/glass-card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Crown,
  HelpCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "مجاني",
      price: "0",
      period: "للأبد",
      description: "للاستخدام الشخصي والتجربة",
      icon: Sparkles,
      gradient: "from-gray-400 to-gray-500",
      features: [
        "20 محادثة يومياً",
        "محادثات غير محدودة في الطول",
        "دعم الملفات الأساسي",
        "حفظ المحادثات",
        "دعم المجتمع",
        "تطبيق الموبايل",
      ],
      cta: "ابدأ مجاناً",
      href: "/register",
      popular: false,
    },
    {
      name: "احترافي",
      price: annual ? "24" : "29",
      period: annual ? "شهرياً • ادفع سنوياً" : "شهرياً",
      description: "للمحترفين والمستخدمين النشطين",
      icon: Zap,
      gradient: "from-green-500 to-emerald-600",
      features: [
        "محادثات غير محدودة",
        "أولوية في الاستجابة",
        "دعم جميع أنواع الملفات",
        "نماذج AI متقدمة",
        "تاريخ محادثات كامل",
        "دعم فني سريع",
        "بدون إعلانات",
        "API Access",
      ],
      cta: "اشترك الآن",
      href: "/register?plan=pro",
      popular: true,
    },
    {
      name: "للشركات",
      price: annual ? "79" : "99",
      period: annual ? "شهرياً • ادفع سنوياً" : "شهرياً",
      description: "للفرق والمؤسسات الكبيرة",
      icon: Crown,
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "كل ميزات الباقة الاحترافية",
        "حسابات متعددة للفريق",
        "مساحات عمل مخصصة",
        "تحليلات متقدمة",
        "أمان محسّن",
        "دعم مخصص 24/7",
        "تدريب الفريق",
        "نماذج AI مخصصة",
        "SLA مضمون",
      ],
      cta: "تواصل للمبيعات",
      href: "/contact?plan=enterprise",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "هل يمكنني تغيير باقتي في أي وقت؟",
      answer:
        "نعم بالتأكيد! يمكنك الترقية أو التخفيض في أي وقت. سيتم احتساب الفرق في التكلفة بشكل تناسبي.",
    },
    {
      question: "هل هناك رسوم إضافية خفية؟",
      answer:
        "لا نهائياً! السعر المعروض هو كل ما ستدفعه. لا توجد رسوم خفية أو تكاليف إضافية.",
    },
    {
      question: "ماذا يحدث إذا تجاوزت الحد اليومي في الباقة المجانية؟",
      answer:
        "ستحتاج إلى الانتظار حتى اليوم التالي، أو يمكنك الترقية إلى الباقة الاحترافية للحصول على محادثات غير محدودة.",
    },
    {
      question: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
      answer:
        "نعم، يمكنك إلغاء اشتراكك في أي وقت من صفحة الإعدادات. لن يتم تحصيل أي رسوم بعد الإلغاء.",
    },
    {
      question: "هل تقدمون فترة تجريبية؟",
      answer:
        "نعم! نقدم فترة تجريبية مجانية لمدة 14 يوماً للباقة الاحترافية. لا حاجة لبطاقة ائتمان.",
    },
    {
      question: "هل هناك خصومات للطلاب أو المؤسسات التعليمية؟",
      answer:
        "نعم! نقدم خصم 50% للطلاب والمعلمين. تواصل معنا للحصول على رمز الخصم الخاص بك.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Gradient orbs */}
      <div className="pointer-events-none fixed top-20 left-20 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />
      <div className="pointer-events-none fixed right-20 bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="container relative z-10 mx-auto px-4" dir="rtl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 font-bold text-5xl lg:text-7xl">
              <span className="text-gray-900 dark:text-white">اختر الباقة</span>
              <br />
              <span className="bg-gradient-to-l from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                المناسبة لك
              </span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed dark:text-gray-300">
              أسعار شفافة وعادلة لجميع احتياجاتك. جرّب مجاناً بدون بطاقة ائتمان.
            </p>

            {/* Billing Toggle */}
            <motion.div
              animate={{ opacity: 1 }}
              className="mt-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span
                className={`font-medium text-sm ${annual ? "text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"}`}
              >
                شهري
              </span>
              <button
                className={`relative h-7 w-14 rounded-full transition-colors ${annual ? "bg-gradient-to-r from-green-600 to-emerald-600" : "bg-gray-300 dark:bg-gray-700"}`}
                onClick={() => setAnnual(!annual)}
              >
                <motion.div
                  animate={{ left: annual ? "32px" : "4px" }}
                  className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-md"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span
                className={`font-medium text-sm ${annual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
              >
                سنوي
                <span className="mr-1 font-bold text-green-600 dark:text-green-400">
                  (-20%)
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <GlassCard
                className={`p-8 ${plan.popular ? "lg:-mt-4 relative overflow-visible lg:py-12" : ""}`}
                delay={index * 0.1}
                key={index}
                popular={plan.popular}
              >
                {plan.popular && (
                  <div className="-top-5 absolute right-0 left-0 flex justify-center">
                    <motion.span
                      animate={{ y: 0, opacity: 1 }}
                      className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 font-bold text-sm text-white shadow-green-500/30 shadow-lg"
                      initial={{ y: -10, opacity: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      الأكثر شعبية
                    </motion.span>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Plan Name */}
                <h3 className="mb-2 font-bold text-2xl text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mb-6 text-gray-500 text-sm dark:text-gray-400">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text font-bold text-5xl text-transparent">
                      ${plan.price}
                    </span>
                    {plan.price !== "0" && (
                      <span className="text-gray-500 dark:text-gray-400">
                        /شهر
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
                    {plan.period}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      key={fIndex}
                      transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={plan.href}>
                  <motion.button
                    className={`w-full rounded-xl py-4 font-bold text-lg transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-green-500/30 shadow-xl"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: plan.popular
                        ? "0 20px 40px -10px rgba(34, 197, 94, 0.4)"
                        : "none",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-5 py-2.5 font-medium text-green-700 text-sm backdrop-blur-xl dark:border-green-700/50 dark:bg-white/10 dark:text-green-300">
              <HelpCircle className="h-4 w-4" />
              الأسئلة الشائعة
            </div>
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              هل لديك سؤال؟
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard
                className="overflow-hidden"
                delay={index * 0.05}
                key={index}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-right"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50"
                  >
                    <ArrowLeft className="h-4 w-4 rotate-90 text-green-600" />
                  </motion.div>
                </button>
                <motion.div
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                  initial={false}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed dark:text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
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
              ابدأ رحلتك اليوم
            </h2>
            <p className="mb-10 text-green-100 text-xl">
              انضم إلى آلاف المستخدمين واستمتع بتجربة ذكاء اصطناعي لا مثيل لها
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <motion.button
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-green-700 text-lg shadow-xl transition-all"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  ابدأ مجاناً
                  <ArrowLeft className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-lg text-white backdrop-blur-xl transition-all hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  تواصل معنا
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

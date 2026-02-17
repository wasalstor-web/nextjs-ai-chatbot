"use client";

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
import { GlassCard } from "@/components/landing/glass-card";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "مجاني",
      price: "0",
      period: "للأبد",
      description: "للأفراد والتجربة الأولى",
      icon: Sparkles,
      gradient: "from-slate-400 to-slate-500",
      features: [
        "10 استشارات قانونية يومياً",
        "البحث في الأنظمة السعودية الأساسية",
        "إجابات مبنية على الأنظمة المعتمدة",
        "حفظ الاستشارات السابقة",
        "دعم المجتمع القانوني",
        "تطبيق الموبايل",
      ],
      cta: "ابدأ مجاناً",
      href: "/register",
      popular: false,
    },
    {
      name: "احترافي",
      price: annual ? "89" : "119",
      period: annual ? "ر.س/شهرياً • ادفع سنوياً" : "ر.س/شهرياً",
      description: "للمحامين والمستشارين القانونيين",
      icon: Zap,
      gradient: "from-amber-400 to-amber-500",
      features: [
        "استشارات قانونية غير محدودة",
        "تحليل العقود واكتشاف الثغرات",
        "بحث شامل في 200+ نظام سعودي",
        "أولوية في الاستجابة",
        "رفع وتحليل المستندات القانونية",
        "تاريخ استشارات كامل",
        "دعم فني سريع",
        "تقارير قانونية مفصلة",
      ],
      cta: "اشترك الآن",
      href: "/register?plan=pro",
      popular: true,
    },
    {
      name: "للمكاتب والشركات",
      price: annual ? "299" : "399",
      period: annual ? "ر.س/شهرياً • ادفع سنوياً" : "ر.س/شهرياً",
      description: "لمكاتب المحاماة والإدارات القانونية",
      icon: Crown,
      gradient: "from-amber-500 to-teal-600",
      features: [
        "كل ميزات الباقة الاحترافية",
        "حسابات متعددة للفريق القانوني",
        "مراجعة عقود بالجملة",
        "تحليلات وتقارير متقدمة",
        "أمان محسّن وتشفير متقدم",
        "دعم مخصص 24/7",
        "تدريب الفريق القانوني",
        "API للربط مع أنظمتكم",
        "SLA مضمون بوقت استجابة محدد",
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
        "ستحتاج إلى الانتظار حتى اليوم التالي، أو يمكنك الترقية إلى الباقة الاحترافية للحصول على استشارات قانونية غير محدودة.",
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
    <div className="min-h-screen overflow-hidden bg-linear-to-b from-white via-amber-50/80/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Gradient orbs */}
      <div className="pointer-events-none fixed top-20 left-20 h-72 w-72 rounded-full bg-amber-300/10 blur-[100px]" />
      <div className="pointer-events-none fixed right-20 bottom-20 h-96 w-96 rounded-full bg-amber-300/10 blur-[100px]" />

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
              <span className="text-slate-900 dark:text-white">باقات الاستشارات</span>
              <br />
              <span className="bg-linear-to-l from-amber-500 via-amber-500 to-teal-600 bg-clip-text text-transparent">
                القانونية
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed dark:text-slate-300">
              أسعار شفافة بالريال السعودي لجميع احتياجاتك القانونية. جرّب مجاناً بدون بطاقة ائتمان.
            </p>

            {/* Billing Toggle */}
            <motion.div
              animate={{ opacity: 1 }}
              className="mt-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span
                className={`font-medium text-sm ${annual ? "text-slate-500 dark:text-slate-400" : "text-slate-900 dark:text-white"}`}
              >
                شهري
              </span>
              <button
                aria-label="تبديل بين الاشتراك الشهري والسنوي"
                className={`relative h-7 w-14 rounded-full transition-colors ${annual ? "bg-linear-to-r from-amber-500 to-amber-500" : "bg-slate-300 dark:bg-slate-700"}`}
                onClick={() => setAnnual(!annual)}
                type="button"
              >
                <motion.div
                  animate={{ left: annual ? "32px" : "4px" }}
                  className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-md"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span
                className={`font-medium text-sm ${annual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}
              >
                سنوي
                <span className="mr-1 font-bold text-amber-500 dark:text-amber-300">
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
                key={plan.name}
                popular={plan.popular}
              >
                {plan.popular && (
                  <div className="-top-5 absolute right-0 left-0 flex justify-center">
                    <motion.span
                      animate={{ y: 0, opacity: 1 }}
                      className="rounded-full bg-linear-to-r from-amber-500 to-amber-500 px-6 py-2 font-bold text-sm text-white shadow-amber-400/30 shadow-lg"
                      initial={{ y: -10, opacity: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      الأكثر شعبية
                    </motion.span>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${plan.gradient} mb-6 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Plan Name */}
                <h3 className="mb-2 font-bold text-2xl text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mb-6 text-slate-500 text-sm dark:text-slate-400">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="bg-linear-to-r from-amber-500 to-amber-500 bg-clip-text font-bold text-5xl text-transparent">
                      {plan.price}
                    </span>
                    {plan.price !== "0" && (
                      <span className="text-slate-500 dark:text-slate-400">
                        ر.س/شهر
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-slate-500 text-sm dark:text-slate-400">
                    {plan.period}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      key={feature}
                      transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/50">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span className="text-slate-700 text-sm dark:text-slate-300">
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
                        ? "bg-linear-to-r from-amber-500 to-amber-500 text-white shadow-amber-400/30 shadow-xl"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                    }`}
                    type="button"
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-100/50 bg-white/80 px-5 py-2.5 font-medium text-amber-600 text-sm backdrop-blur-xl dark:border-amber-600/50 dark:bg-white/10 dark:text-amber-200">
              <HelpCircle className="h-4 w-4" />
              الأسئلة الشائعة
            </div>
            <h2 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              هل لديك سؤال؟
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard
                className="overflow-hidden"
                delay={index * 0.05}
                key={faq.question}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-right"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  type="button"
                >
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/50"
                  >
                    <ArrowLeft className="h-4 w-4 rotate-90 text-amber-500" />
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
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed dark:text-slate-400">
                    {faq.answer}
                  </p>
                </motion.div>
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
              ابدأ استشاراتك القانونية اليوم
            </h2>
            <p className="mb-10 text-amber-50 text-xl">
              انضم إلى آلاف المحامين والمستشارين واحصل على استشارات قانونية مبنية على الأنظمة السعودية
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <motion.button
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-amber-600 text-lg shadow-xl transition-all"
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

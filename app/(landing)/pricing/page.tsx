"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Scale,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ease = [0.32, 0.72, 0, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: d },
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

const FAQS = [
  {
    q: "هل يمكنني تغيير باقتي في أي وقت",
    a: "نعم بالتأكيد! يمكنك الترقية أو التخفيض في أي وقت. سيتم احتساب الفرق بشكل تناسبي.",
  },
  {
    q: "هل هناك رسوم إضافية خفية",
    a: "لا نهائيا! السعر المعروض هو كل ما ستدفعه. لا توجد رسوم خفية أو تكاليف إضافية.",
  },
  {
    q: "ماذا يحدث إذا تجاوزت الحد اليومي في الباقة المجانية",
    a: "ستحتاج للانتظار حتى اليوم التالي أو الترقية للباقة الاحترافية للحصول على استشارات غير محدودة.",
  },
  {
    q: "هل يمكنني إلغاء الاشتراك في أي وقت",
    a: "نعم يمكنك إلغاء اشتراكك في أي وقت من صفحة الإعدادات. لن يتم تحصيل أي رسوم بعد الإلغاء.",
  },
  {
    q: "هل تقدمون فترة تجريبية",
    a: "نعم! نقدم فترة تجريبية مجانية لمدة 14 يوما للباقة الاحترافية. لا حاجة لبطاقة ائتمان.",
  },
  {
    q: "هل هناك خصومات للطلاب",
    a: "نعم! نقدم خصم 50% للطلاب والمعلمين. تواصل معنا للحصول على رمز الخصم الخاص بك.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const PLANS = [
    {
      num: "01",
      name: "مجاني",
      price: "0",
      period: "للأبد",
      description: "للأفراد والتجربة الأولى",
      icon: Sparkles,
      popular: false,
      features: [
        "10 استشارات قانونية يومياً",
        "البحث في الأنظمة السعودية الأساسية",
        "حفظ الاستشارات السابقة",
        "دعم المجتمع القانوني",
        "تطبيق الموبايل",
      ],
      cta: "ابدأ مجاناً",
      href: "/register",
    },
    {
      num: "02",
      name: "احترافي",
      price: annual ? "89" : "119",
      period: annual ? "ر.س/شهر • سنوياً" : "ر.س/شهرياً",
      description: "للمحامين والمستشارين القانونيين",
      icon: Zap,
      popular: true,
      features: [
        "استشارات قانونية غير محدودة",
        "تحليل العقود واكتشاف الثغرات",
        "بحث شامل في 200+ نظام سعودي",
        "رفع وتحليل المستندات القانونية",
        "تاريخ استشارات كامل",
        "دعم فني سريع",
        "تقارير قانونية مفصلة",
      ],
      cta: "اشترك الآن",
      href: "/register?plan=pro",
    },
    {
      num: "03",
      name: "للمكاتب",
      price: annual ? "299" : "399",
      period: annual ? "ر.س/شهر • سنوياً" : "ر.س/شهرياً",
      description: "لمكاتب المحاماة والإدارات القانونية",
      icon: Shield,
      popular: false,
      features: [
        "كل ميزات الباقة الاحترافية",
        "حسابات متعددة للفريق القانوني",
        "مراجعة عقود بالجملة",
        "تحليلات وتقارير متقدمة",
        "دعم مخصص 24/7",
        "تدريب الفريق القانوني",
        "API للربط مع أنظمتكم",
      ],
      cta: "تواصل للمبيعات",
      href: "/contact?plan=enterprise",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2">
          {[400, 500, 600].map((s) => (
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50"
              key={s}
              style={{ width: s, height: s }}
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
            الأسعار
          </motion.div>

          <motion.h1
            animate="visible"
            className="mb-6 font-bold text-4xl text-zinc-900 leading-tight tracking-tight md:text-6xl lg:text-7xl dark:text-white"
            custom={0.1}
            initial="hidden"
            variants={fadeUp}
          >
            باقات شفافة
            <br />
            <span className="bg-gradient-to-l from-zinc-400 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-500 dark:to-white">
              بدون مفاجآت.
            </span>
          </motion.h1>

          <motion.p
            animate="visible"
            className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            جرّب مجاناً بدون بطاقة ائتمان. ادفع فقط عندما تكون مستعداً.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            animate="visible"
            className="inline-flex items-center gap-4 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900"
            custom={0.3}
            initial="hidden"
            variants={fadeUp}
          >
            <button
              className={`rounded-full px-4 py-1.5 font-medium text-sm transition-all ${annual ? "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100" : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"}`}
              onClick={() => setAnnual(false)}
              type="button"
            >
              شهري
            </button>
            <button
              className={`rounded-full px-4 py-1.5 font-medium text-sm transition-all ${annual ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"}`}
              onClick={() => setAnnual(true)}
              type="button"
            >
              سنوي
              <span className="mr-1.5 text-emerald-500 text-xs">-20%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="border-zinc-200 border-t px-6 pb-20 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {PLANS.map((plan) => (
              <motion.div
                className={`relative rounded-2xl border p-8 transition-all ${
                  plan.popular
                    ? "border-zinc-900 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                    : "border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                }`}
                key={plan.num}
                variants={staggerItem}
              >
                {plan.popular && (
                  <span className="-top-3 absolute right-6 rounded-full bg-zinc-900 px-3 py-1 font-medium text-white text-xs dark:bg-white dark:text-zinc-900">
                    الأكثر شعبية
                  </span>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <span
                    className={`font-mono text-xs ${plan.popular ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-400"}`}
                  >
                    {plan.num}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${plan.popular ? "bg-zinc-800 dark:bg-zinc-200" : "bg-zinc-100 dark:bg-zinc-800"}`}
                  >
                    <plan.icon
                      className={`h-4 w-4 ${plan.popular ? "text-zinc-300 dark:text-zinc-700" : "text-zinc-600 dark:text-zinc-400"}`}
                    />
                  </div>
                </div>

                <h3 className="mb-1 font-bold text-xl">{plan.name}</h3>
                <p
                  className={`mb-6 text-sm ${plan.popular ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-500"}`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="font-bold text-5xl tracking-tight">
                      {plan.price}
                    </span>
                    {plan.price !== "0" && (
                      <span
                        className={`mb-1 text-sm ${plan.popular ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-400"}`}
                      >
                        ر.س/شهر
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-1 text-xs ${plan.popular ? "text-zinc-500 dark:text-zinc-500" : "text-zinc-400"}`}
                  >
                    {plan.period}
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li className="flex items-start gap-2.5" key={f}>
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${plan.popular ? "text-emerald-400" : "text-emerald-500"}`}
                      />
                      <span
                        className={`text-sm ${plan.popular ? "text-zinc-300 dark:text-zinc-600" : "text-zinc-600 dark:text-zinc-400"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <button
                    className={`w-full rounded-full py-3 font-medium text-sm transition-all ${
                      plan.popular
                        ? "bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                        : "border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400"
                    }`}
                    type="button"
                  >
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-zinc-200 border-t px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              أسئلة شائعة
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              هل لديك سؤال؟
            </h2>
          </motion.div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {FAQS.map((faq, i) => (
              <div key={faq.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-right"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  type="button"
                >
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4 shrink-0 text-zinc-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="pb-5 text-sm text-zinc-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
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
            <Scale className="mx-auto mb-6 h-10 w-10 text-zinc-500" />
            <h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
              ابدأ استشاراتك القانونية اليوم
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-zinc-400">
              انضم إلى آلاف المحامين والمستشارين في المملكة
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-sm text-zinc-900 transition-all hover:bg-zinc-100"
                href="/register"
              >
                ابدأ مجانا <ArrowLeft className="h-4 w-4" />
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

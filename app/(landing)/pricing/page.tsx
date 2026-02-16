"use client";

import { Check, Sparkles, Zap, Crown, ArrowLeft, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Glassmorphism card component
function GlassCard({ children, className = "", delay = 0, popular = false }: { children: React.ReactNode; className?: string; delay?: number; popular?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: popular ? 1.02 : 1.01 }}
      className={`relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl border ${popular ? 'border-green-500/50 shadow-2xl shadow-green-500/20' : 'border-white/20 dark:border-white/10'} shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

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
      answer: "نعم بالتأكيد! يمكنك الترقية أو التخفيض في أي وقت. سيتم احتساب الفرق في التكلفة بشكل تناسبي."
    },
    {
      question: "هل هناك رسوم إضافية خفية؟",
      answer: "لا نهائياً! السعر المعروض هو كل ما ستدفعه. لا توجد رسوم خفية أو تكاليف إضافية."
    },
    {
      question: "ماذا يحدث إذا تجاوزت الحد اليومي في الباقة المجانية؟",
      answer: "ستحتاج إلى الانتظار حتى اليوم التالي، أو يمكنك الترقية إلى الباقة الاحترافية للحصول على محادثات غير محدودة."
    },
    {
      question: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
      answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت من صفحة الإعدادات. لن يتم تحصيل أي رسوم بعد الإلغاء."
    },
    {
      question: "هل تقدمون فترة تجريبية؟",
      answer: "نعم! نقدم فترة تجريبية مجانية لمدة 14 يوماً للباقة الاحترافية. لا حاجة لبطاقة ائتمان."
    },
    {
      question: "هل هناك خصومات للطلاب أو المؤسسات التعليمية؟",
      answer: "نعم! نقدم خصم 50% للطلاب والمعلمين. تواصل معنا للحصول على رمز الخصم الخاص بك."
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Gradient orbs */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-green-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10" dir="rtl">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">
                اختر الباقة
              </span>
              <br />
              <span className="bg-gradient-to-l from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                المناسبة لك
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              أسعار شفافة وعادلة لجميع احتياجاتك. جرّب مجاناً بدون بطاقة ائتمان.
            </p>

            {/* Billing Toggle */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className={`text-sm font-medium ${!annual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>شهري</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <motion.div 
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ left: annual ? '32px' : '4px' }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium ${annual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                سنوي
                <span className="mr-1 text-green-600 dark:text-green-400 font-bold">(-20%)</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => (
              <GlassCard 
                key={index} 
                className={`p-8 ${plan.popular ? 'lg:-mt-4 lg:py-12 relative overflow-visible' : ''}`}
                delay={index * 0.1}
                popular={plan.popular}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <motion.span 
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-500/30"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      الأكثر شعبية
                    </motion.span>
                  </div>
                )}
                
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                    {plan.price !== "0" && <span className="text-gray-500 dark:text-gray-400">/شهر</span>}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.period}</p>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Link href={plan.href}>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: plan.popular ? "0 20px 40px -10px rgba(34, 197, 94, 0.4)" : "none" }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl shadow-green-500/30'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
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
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-green-700 dark:text-green-300 px-5 py-2.5 rounded-full text-sm font-medium mb-4 border border-green-200/50 dark:border-green-700/50">
              <HelpCircle className="w-4 h-4" />
              الأسئلة الشائعة
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              هل لديك سؤال؟
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="overflow-hidden" delay={index * 0.05}>
                <button
                  className="w-full p-6 text-right flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4 text-green-600 rotate-90" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10" dir="rtl">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ابدأ رحلتك اليوم
            </h2>
            <p className="text-xl text-green-100 mb-10">
              انضم إلى آلاف المستخدمين واستمتع بتجربة ذكاء اصطناعي لا مثيل لها
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition-all"
                >
                  ابدأ مجاناً
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
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

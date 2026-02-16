"use client";

import { 
  MessageSquare, 
  Zap, 
  Upload, 
  Shield, 
  Globe, 
  Bot, 
  Brain,
  Clock,
  Users,
  TrendingUp,
  FileText,
  Mic,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Glassmorphism card component
function GlassCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/10 shadow-xl shadow-green-500/5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "محادثات ذكية طبيعية",
      description: "تحدث بشكل طبيعي وكأنك تتواصل مع إنسان. فهم عميق للسياق والمحادثات الطويلة.",
      highlights: ["فهم السياق", "ذاكرة المحادثة", "إجابات دقيقة"],
      gradient: "from-emerald-400 to-green-500"
    },
    {
      icon: Brain,
      title: "ذكاء اصطناعي متقدم",
      description: "مدعوم بأحدث نماذج الذكاء الاصطناعي من Anthropic Claude وOpenAI GPT-4.",
      highlights: ["Claude Sonnet 4.5", "GPT-4 Turbo", "تحديثات مستمرة"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Upload,
      title: "دعم الملفات والصور",
      description: "أرفق الصور والمستندات PDF والملفات النصية واحصل على تحليل ذكي فوري.",
      highlights: ["صور", "PDF", "مستندات Word"],
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      icon: Zap,
      title: "استجابة فورية",
      description: "احصل على إجابات في ثوانٍ معدودة بفضل التقنية السحابية المتطورة.",
      highlights: ["سرعة فائقة", "بدون تأخير", "أداء عالي"],
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: Shield,
      title: "خصوصية وأمان تام",
      description: "بياناتك محمية بتشفير من طرف إلى طرف ومعايير أمان عالمية.",
      highlights: ["تشفير E2E", "GDPR", "ISO 27001"],
      gradient: "from-green-600 to-emerald-700"
    },
    {
      icon: Globe,
      title: "متاح في كل مكان",
      description: "استخدم التطبيق من الويب، الموبايل، أو التابلت بتزامن تام.",
      highlights: ["ويب", "موبايل PWA", "تزامن سحابي"],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: FileText,
      title: "إنشاء المحتوى",
      description: "اكتب المقالات، الرسائل، والتقارير بمساعدة ذكية واحترافية.",
      highlights: ["كتابة إبداعية", "ترجمة", "تلخيص"],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Clock,
      title: "متاح 24/7",
      description: "مساعدك الذكي متاح على مدار الساعة طوال أيام الأسبوع.",
      highlights: ["بدون توقف", "دعم مستمر", "تحديثات دورية"],
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: Users,
      title: "تعاون فريقي",
      description: "شارك المحادثات مع فريقك وتعاون في الوقت الفعلي.",
      highlights: ["مشاركة", "تعليقات", "مساحات عمل"],
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "تحسين مستمر",
      description: "نضيف ميزات جديدة باستمرار بناءً على ملاحظات المستخدمين.",
      highlights: ["تحديثات أسبوعية", "ميزات جديدة", "تحسينات الأداء"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Mic,
      title: "إدخال صوتي",
      description: "تحدث مباشرة واحصل على إجابات صوتية طبيعية.",
      highlights: ["تحويل صوت لنص", "إجابات صوتية", "لغات متعددة"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: Bot,
      title: "واجهة مخصصة",
      description: "خصص تجربتك مع الثيمات، الاختصارات، والإعدادات المتقدمة.",
      highlights: ["وضع ليلي", "اختصارات", "تخصيص كامل"],
      gradient: "from-emerald-500 to-green-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Gradient orbs */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-green-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10" dir="rtl">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-green-700 dark:text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-200/50 dark:border-green-700/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              قدرات استثنائية
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-l from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                مميزات قوية
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                لتجربة استثنائية
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              اكتشف جميع المميزات التي تجعل مساعدك الذكي الخيار الأمثل
              للمحادثات الذكية والإنتاجية العالية.
            </p>
            
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-green-500/30"
              >
                ابدأ الآن مجاناً
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-8" delay={index * 0.05}>
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="text-xs font-medium px-3 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-200/50 dark:border-green-700/50"
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
              جرّب جميع الميزات الآن
            </h2>
            <p className="text-xl text-green-100 mb-10">
              لا تفوت الفرصة! ابدأ استخدام مساعدك الذكي اليوم واستمتع بجميع الميزات مجاناً.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition-all"
                >
                  إنشاء حساب مجاني
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
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

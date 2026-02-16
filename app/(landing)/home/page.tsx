"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  MessageSquare,
  Upload,
  Shield,
  Zap,
  Globe,
  Star,
  Check,
  Play,
  Users,
  TrendingUp,
  Award,
  Smartphone,
  Sparkles,
  Brain,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, value, count]);

  return (
    <motion.span ref={ref}>
      {inView ? <motion.span>{rounded}</motion.span> : "0"}
      {suffix}
    </motion.span>
  );
}

// Floating particles background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-green-400/20"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 600,
          }}
          animate={{
            y: [0, Math.random() * -200, Math.random() * 200],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// Glassmorphism card component
function GlassCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/10 shadow-xl shadow-green-500/5 hover:shadow-2xl hover:shadow-green-500/10 transition-shadow duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير تسويق",
      image: "أ",
      content: "أفضل مساعد ذكي استخدمته على الإطلاق! ساعدني في كتابة محتوى تسويقي احترافي بسرعة فائقة.",
      rating: 5,
    },
    {
      name: "سارة علي",
      role: "مطورة برمجيات",
      image: "س",
      content: "أداة رائعة لمراجعة الكود وشرح المفاهيم البرمجية. أصبحت جزءاً أساسياً من عملي اليومي.",
      rating: 5,
    },
    {
      name: "خالد العمري",
      role: "طالب جامعي",
      image: "خ",
      content: "ساعدني كثيراً في البحث والدراسة. إجابات دقيقة ومفصلة لجميع أسئلتي الأكاديمية.",
      rating: 5,
    },
  ];

  const stats = [
    { value: 50000, suffix: "+", label: "مستخدم نشط", icon: Users },
    { value: 1000000, suffix: "+", label: "محادثة مكتملة", icon: MessageSquare },
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
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <FloatingParticles />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-300/10 to-emerald-300/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <motion.div 
                className="text-center lg:text-right order-2 lg:order-1"
                dir="rtl"
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-green-700 dark:text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-200/50 dark:border-green-700/50 shadow-lg shadow-green-500/10"
                >
                  <Sparkles className="w-4 h-4" />
                  مدعوم بالذكاء الاصطناعي المتقدم
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
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
                  variants={itemVariants}
                  className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
                >
                  محادثات ذكية، إجابات فورية، ودعم متواصل على مدار الساعة.
                  <br className="hidden lg:block" />
                  استمتع بتجربة محادثة طبيعية مع الذكاء الاصطناعي الأكثر تطوراً.
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
                >
                  <Link href="/chat">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-green-500/30 transition-all w-full sm:w-auto"
                    >
                      ابدأ المحادثة الآن
                      <ArrowLeft className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  
                  <Link href="/mobile">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-3 bg-white dark:bg-white/10 text-green-700 dark:text-green-200 px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 transition-all backdrop-blur-xl w-full sm:w-auto"
                    >
                      <Smartphone className="w-5 h-5" />
                      تطبيق الموبايل
                    </motion.button>
                  </Link>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-12 flex items-center justify-center lg:justify-end gap-8 text-sm text-gray-500 dark:text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span>متصل الآن</span>
                  </div>
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    {["أ", "س", "م"].map((letter, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-gray-900">
                        {letter}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-gray-900">
                      +5K
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Visual Content - 3D Phone */}
              <motion.div 
                className="relative flex justify-center order-1 lg:order-2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Phone Frame */}
                  <div className="w-72 h-[580px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl shadow-green-900/20 border border-gray-700">
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.25rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-8 bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                        <div className="w-20 h-5 bg-black/20 rounded-full" />
                      </div>
                      
                      {/* App Header */}
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 pb-4 pt-2">
                        <div className="flex items-center gap-3" dir="rtl">
                          <motion.div 
                            className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xl"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Bot className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="text-white font-bold text-sm">مساعد ذكي</h4>
                            <p className="text-green-100 text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                              متصل الآن
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="p-4 space-y-3 bg-gray-50 dark:bg-gray-900 h-[360px]" dir="rtl">
                        <motion.div 
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                            AI
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tr-sm p-3 shadow-sm max-w-[85%]">
                            <p className="text-xs text-gray-800 dark:text-gray-200">
                              مرحباً! كيف يمكنني مساعدتك اليوم؟ 👋
                            </p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex gap-2 justify-end"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                        >
                          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                            <p className="text-xs text-white">
                              أحتاج مساعدة في كتابة مقال احترافي
                            </p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                            AI
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tr-sm p-3 shadow-sm max-w-[85%]">
                            <p className="text-xs text-gray-800 dark:text-gray-200">
                              بالطبع! ما هو موضوع المقال؟ سأساعدك في صياغته ✨
                            </p>
                          </div>
                        </motion.div>
                        
                        {/* Typing indicator */}
                        <motion.div 
                          className="flex gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                            AI
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                            <div className="flex gap-1">
                              <motion.span 
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              />
                              <motion.span 
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              />
                              <motion.span 
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Input Area */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
                          <input 
                            type="text" 
                            placeholder="اكتب رسالتك..." 
                            className="flex-1 bg-transparent text-xs text-gray-600 dark:text-gray-300 placeholder-gray-400 outline-none"
                            dir="rtl"
                            readOnly
                          />
                          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                            <ArrowLeft className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-3xl blur-xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-3xl blur-xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  {/* Notification bubble */}
                  <motion.div 
                    className="absolute -top-4 right-0 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-800 dark:text-white">ذكاء خارق! 🚀</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">موثوق من قبل أكثر من 50,000 مستخدم</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
          >
            {["شركة أ", "مؤسسة ب", "منصة ج", "تطبيق د", "موقع هـ"].map((name, i) => (
              <div key={i} className="text-xl font-bold text-gray-400 dark:text-gray-600">
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Saudi Vision Video */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50/50 dark:from-gray-900 dark:to-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-green-700 dark:text-green-300 px-5 py-2.5 rounded-full text-sm font-medium mb-4 border border-green-200/50 dark:border-green-700/50">
              <Play className="w-4 h-4" />
              رؤية المملكة 2030
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              التحول الرقمي في المملكة
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نفخر بأن نكون جزءاً من رؤية السعودية 2030 للتحول الرقمي
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://www.youtube.com/watch?v=ByNJSU8D01U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 border border-white/20 group cursor-pointer"
            >
              {/* Background Image with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
              </div>
              
              {/* Vision 2030 Logo Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div 
                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">شاهد رؤية 2030</h3>
                  <p className="text-white/70">اضغط لمشاهدة الفيديو الرسمي</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm">
                🇸🇦 رؤية المملكة
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-white to-green-600" />
            </a>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { label: "2030", desc: "رؤية المملكة" },
                { label: "100%", desc: "تحول رقمي" },
                { label: "🇸🇦", desc: "فخر سعودي" },
              ].map((item, index) => (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{item.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا تختار مساعدك الذكي؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نوفر لك أفضل تجربة محادثة ذكية مع ميزات متقدمة
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-8" delay={index * 0.1}>
                <motion.div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-green-50/50 to-white dark:from-gray-900 dark:to-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-green-700 dark:text-green-300 px-5 py-2.5 rounded-full text-sm font-medium mb-4 border border-green-200/50 dark:border-green-700/50">
              <Clock className="w-4 h-4" />
              كيف يعمل؟
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ابدأ في 3 خطوات بسيطة
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-l from-green-400/50 via-green-500/50 to-green-400/50" />
            
            {[
              { step: "1", title: "أنشئ حساب مجاني", description: "سجل بسهولة باستخدام بريدك الإلكتروني" },
              { step: "2", title: "ابدأ المحادثة", description: "اكتب سؤالك وشاهد السحر يحدث" },
              { step: "3", title: "استمتع بالنتائج", description: "احصل على إجابات دقيقة في ثوانٍ" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-xl shadow-green-500/30 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-green-700 dark:text-green-300 px-5 py-2.5 rounded-full text-sm font-medium mb-4 border border-green-200/50 dark:border-green-700/50">
              <Award className="w-4 h-4" />
              آراء عملائنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ماذا يقول مستخدمونا؟
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 lg:p-12">
              <motion.div 
                className="flex flex-col lg:flex-row gap-8 items-center"
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-xl shadow-green-500/30">
                  {testimonials[activeTestimonial].image}
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                    &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-500 dark:text-gray-400">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? "bg-gradient-to-r from-green-600 to-emerald-600 w-8" : "bg-gray-300 dark:bg-gray-700 w-2 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">ابدأ مجاناً اليوم</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">جميع الميزات الأساسية مجانية</p>
          </motion.div>

          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 border-2 border-green-500/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600" />
              
              <motion.div 
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-500/30">
                  الأكثر شعبية
                </span>
              </motion.div>

              <div className="text-center mb-8 mt-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">مجاني</div>
                <div className="text-gray-500 dark:text-gray-400">للأبد • بدون بطاقة ائتمان</div>
              </div>

              <ul className="space-y-4 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-500/30 transition-all"
                >
                  ابدأ الآن مجاناً
                </motion.button>
              </Link>

              <div className="text-center mt-4">
                <Link href="/pricing" className="text-green-600 dark:text-green-400 hover:underline text-sm inline-flex items-center gap-1">
                  عرض جميع الخطط
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">جاهز للبدء؟</h2>
            <p className="text-xl text-green-100 mb-10">انضم إلى آلاف المستخدمين واستمتع بتجربة محادثة ذكية لا مثيل لها</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition-all"
                >
                  إنشاء حساب مجاني
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/chat">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
                >
                  تجربة بدون تسجيل
                </motion.button>
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-green-200">* لا حاجة لبطاقة ائتمان • مجاني للأبد</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

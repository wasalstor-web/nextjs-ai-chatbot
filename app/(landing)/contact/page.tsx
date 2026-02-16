"use client";

import { Mail, MessageSquare, Phone, MapPin, Send, Clock, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Glassmorphism card component
function GlassCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/10 shadow-xl shadow-green-500/5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "support@chatbot.com",
      description: "نرد خلال 24 ساعة",
      gradient: "from-green-500 to-emerald-600",
      href: "mailto:support@chatbot.com",
    },
    {
      icon: MessageSquare,
      title: "الدردشة المباشرة",
      value: "متاح الآن",
      description: "رد فوري من فريق الدعم",
      gradient: "from-emerald-500 to-teal-600",
      href: "/chat",
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 50 123 4567",
      description: "من الأحد إلى الخميس",
      gradient: "from-teal-500 to-cyan-600",
      href: "tel:+966501234567",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "المكتب الرئيسي",
      value: "الرياض، المملكة العربية السعودية",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "الأحد - الخميس: 9 صباحاً - 6 مساءً",
    },
  ];

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
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-green-700 dark:text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-200/50 dark:border-green-700/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              تواصل معنا
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">
                نحن هنا
              </span>
              <br />
              <span className="bg-gradient-to-l from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                لمساعدتك
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              لديك سؤال أو اقتراح؟ تواصل معنا وسنرد عليك في أقرب وقت ممكن.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Link key={index} href={method.href}>
                <GlassCard className="p-6 h-full cursor-pointer" delay={index * 0.1}>
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-1">{method.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <GlassCard className="p-8" delay={0.2}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                أرسل لنا رسالة
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="موضوع الرسالة"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                    status === "success"
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl shadow-green-500/30"
                  }`}
                >
                  {status === "loading" && (
                    <motion.div 
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {status === "success" && <CheckCircle className="w-5 h-5" />}
                  {status === "idle" && <Send className="w-5 h-5" />}
                  {status === "loading" ? "جارٍ الإرسال..." : status === "success" ? "تم الإرسال بنجاح!" : "إرسال الرسالة"}
                </motion.button>
              </form>
            </GlassCard>

            {/* Info */}
            <div className="space-y-6">
              <GlassCard className="p-8" delay={0.3}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  معلومات الاتصال
                </h2>
                
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Map Placeholder */}
              <GlassCard className="p-0 overflow-hidden h-[300px]" delay={0.4}>
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16" dir="rtl">
        <div className="container mx-auto px-4">
          <GlassCard className="p-12 max-w-4xl mx-auto text-center" delay={0.5}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              هل تبحث عن إجابة سريعة؟
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              تصفح قسم الأسئلة الشائعة للعثور على إجابات لأكثر الاستفسارات شيوعاً.
            </p>
            <Link href="/pricing#faq">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                الأسئلة الشائعة
              </motion.button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}

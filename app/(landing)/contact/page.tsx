"use client";

import { GlassCard } from "@/components/landing/glass-card";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-6 py-3 font-medium text-green-700 text-sm shadow-lg backdrop-blur-xl dark:border-green-700/50 dark:bg-white/10 dark:text-green-300"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              تواصل معنا
            </motion.div>

            <h1 className="mb-6 font-bold text-5xl lg:text-7xl">
              <span className="text-gray-900 dark:text-white">نحن هنا</span>
              <br />
              <span className="bg-gradient-to-l from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                لمساعدتك
              </span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed dark:text-gray-300">
              لديك سؤال أو اقتراح؟ تواصل معنا وسنرد عليك في أقرب وقت ممكن.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Link href={method.href} key={index}>
                <GlassCard
                  className="h-full cursor-pointer p-6"
                  delay={index * 0.1}
                >
                  <motion.div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${method.gradient} mb-4 flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <method.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="mb-1 font-bold text-gray-900 text-lg dark:text-white">
                    {method.title}
                  </h3>
                  <p className="mb-1 font-medium text-green-600 dark:text-green-400">
                    {method.value}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {method.description}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Form */}
            <GlassCard className="p-8" delay={0.2}>
              <h2 className="mb-6 font-bold text-2xl text-gray-900 dark:text-white">
                أرسل لنا رسالة
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                      htmlFor="name"
                    >
                      الاسم الكامل
                    </label>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      placeholder="أدخل اسمك"
                      required
                      type="text"
                      value={formData.name}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                      htmlFor="email"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      type="email"
                      value={formData.email}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                    htmlFor="subject"
                  >
                    الموضوع
                  </label>
                  <input
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    placeholder="موضوع الرسالة"
                    required
                    type="text"
                    value={formData.subject}
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                    htmlFor="message"
                  >
                    الرسالة
                  </label>
                  <textarea
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    required
                    rows={5}
                    value={formData.message}
                  />
                </div>

                <motion.button
                  className={`flex w-full items-center justify-center gap-3 rounded-xl py-4 font-bold text-lg transition-all ${
                    status === "success"
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-green-500/30 shadow-xl"
                  }`}
                  disabled={status === "loading" || status === "success"}
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "loading" && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  )}
                  {status === "success" && <CheckCircle className="h-5 w-5" />}
                  {status === "idle" && <Send className="h-5 w-5" />}
                  {status === "loading"
                    ? "جارٍ الإرسال..."
                    : status === "success"
                      ? "تم الإرسال بنجاح!"
                      : "إرسال الرسالة"}
                </motion.button>
              </form>
            </GlassCard>

            {/* Info */}
            <div className="space-y-6">
              <GlassCard className="p-8" delay={0.3}>
                <h2 className="mb-6 font-bold text-2xl text-gray-900 dark:text-white">
                  معلومات الاتصال
                </h2>

                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div className="flex items-start gap-4" key={index}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                        <info.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Map Placeholder */}
              <GlassCard className="h-[300px] overflow-hidden p-0" delay={0.4}>
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-green-600 dark:text-green-400" />
                    <p className="text-gray-600 dark:text-gray-400">
                      الرياض، المملكة العربية السعودية
                    </p>
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
          <GlassCard className="mx-auto max-w-4xl p-12 text-center" delay={0.5}>
            <h2 className="mb-4 font-bold text-3xl text-gray-900 dark:text-white">
              هل تبحث عن إجابة سريعة؟
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              تصفح قسم الأسئلة الشائعة للعثور على إجابات لأكثر الاستفسارات
              شيوعاً.
            </p>
            <Link href="/pricing#faq">
              <motion.button
                className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-8 py-4 font-semibold text-gray-900 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
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

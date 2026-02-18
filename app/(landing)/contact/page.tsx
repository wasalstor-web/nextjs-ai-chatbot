"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Scale,
  Send,
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

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "support@faisallawyer.com",
    desc: "نرد خلال 24 ساعة",
    href: "mailto:support@faisallawyer.com",
  },
  {
    icon: MessageSquare,
    title: "الدردشة المباشرة",
    value: "متاح الآن",
    desc: "رد فوري من فريق الدعم",
    href: "/chat",
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: "+966 50 000 0000",
    desc: "الأحد  الخميس ص  م",
    href: "tel:+966500000000",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputCls =
    "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-500";

  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2">
          {["size-[400px]", "size-[500px]", "size-[600px]"].map((sizeClass) => (
            <div
              className={`-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 ${sizeClass}`}
              key={sizeClass}
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
            تواصل معنا
          </motion.div>
          <motion.h1
            animate="visible"
            className="mb-6 font-bold text-4xl text-zinc-900 leading-tight tracking-tight md:text-6xl dark:text-white"
            custom={0.1}
            initial="hidden"
            variants={fadeUp}
          >
            نحن هنا
            <br />
            <span className="bg-linear-to-l from-zinc-400 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-500 dark:to-white">
              لمساعدتك.
            </span>
          </motion.h1>
          <motion.p
            animate="visible"
            className="mx-auto max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            لديك سؤال أو اقتراح؟ تواصل معنا وسنرد عليك في أقرب وقت ممكن.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="border-zinc-200 border-t px-6 py-16 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {CONTACT_METHODS.map((m) => (
              <motion.div key={m.title} variants={staggerItem}>
                <Link
                  className="group flex gap-4 rounded-2xl border border-zinc-200 p-6 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                  href={m.href}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <m.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">{m.title}</p>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {m.value}
                    </p>
                    <p className="text-xs text-zinc-500">{m.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.form
              className="space-y-4 lg:col-span-3"
              initial="hidden"
              onSubmit={handleSubmit}
              variants={fadeUp}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <h2 className="mb-6 font-bold text-2xl tracking-tight">
                أرسل لنا رسالة
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  aria-label="الاسم الكامل"
                  className={inputCls}
                  name="name"
                  onChange={handleChange}
                  placeholder="الاسم الكامل"
                  required
                  type="text"
                  value={form.name}
                />
                <input
                  aria-label="البريد الإلكتروني"
                  className={inputCls}
                  name="email"
                  onChange={handleChange}
                  placeholder="البريد الإلكتروني"
                  required
                  type="email"
                  value={form.email}
                />
              </div>
              <input
                aria-label="الموضوع"
                className={inputCls}
                name="subject"
                onChange={handleChange}
                placeholder="الموضوع"
                required
                type="text"
                value={form.subject}
              />
              <textarea
                aria-label="الرسالة"
                className={inputCls}
                name="message"
                onChange={handleChange}
                placeholder="رسالتك..."
                required
                rows={5}
                value={form.message}
              />

              <button
                className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-medium text-sm transition-all ${
                  status === "success"
                    ? "bg-emerald-600 text-white"
                    : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                }`}
                disabled={status === "loading" || status === "success"}
                type="submit"
              >
                {status === "loading" && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                )}
                {status === "success" && <Check className="h-4 w-4" />}
                {status === "idle" && <Send className="h-4 w-4" />}
                {status === "loading"
                  ? "جارٍ الإرسال..."
                  : status === "success"
                    ? "تم الإرسال!"
                    : "إرسال الرسالة"}
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              className="flex flex-col gap-4 lg:col-span-2"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <motion.div
                className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
                variants={staggerItem}
              >
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                      <MapPin className="h-4 w-4 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">الموقع</p>
                      <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                        الرياض، المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                      <Clock className="h-4 w-4 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">ساعات العمل</p>
                      <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                        الأحد – الخميس: ٩ صباحاً – ٦ مساءً
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-10 dark:border-zinc-800 dark:bg-zinc-900"
                variants={staggerItem}
              >
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-10 w-10 text-zinc-300 dark:text-zinc-700" />
                  <p className="text-sm text-zinc-500">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-zinc-950 p-6 text-white dark:bg-zinc-900"
                variants={staggerItem}
              >
                <h3 className="mb-2 font-semibold">تبحث عن إجابة سريعة؟</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  تصفح الأسئلة الشائعة للعثور على إجابات فورية.
                </p>
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                  href="/faq"
                >
                  الأسئلة الشائعة <ArrowLeft className="h-3 w-3" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

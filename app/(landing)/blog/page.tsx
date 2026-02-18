"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Lightbulb,
  Scale,
  TrendingUp,
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

const POSTS = [
  {
    title: "كيف يغير الذكاء الاصطناعي مستقبل المحاماة في السعودية",
    description:
      "استكشاف أثر التقنيات الحديثة على الممارسة القانونية وكيف يستفيد المحامون من أدوات الذكاء الاصطناعي.",
    category: "تقنية",
    date: "15 يناير 2025",
    author: "فريق التحرير",
    readTime: "5 دق",
    icon: TrendingUp,
  },
  {
    title: "5 أخطاء شائعة في العقود التجارية وكيفية تجنبها",
    description:
      "دليل عملي للشركات الناشئة حول أهم البنود التي يجب مراجعتها قبل توقيع أي عقد تجاري.",
    category: "إرشادات",
    date: "8 يناير 2025",
    author: "المستشار القانوني",
    readTime: "8 دق",
    icon: FileText,
  },
  {
    title: "دليلك الشامل لنظام حماية البيانات الشخصية",
    description:
      "شرح مبسط لأهم أحكام النظام والتزامات الجهات المعالجة للبيانات في المملكة.",
    category: "قانوني",
    date: "2 يناير 2025",
    author: "فريق البحث",
    readTime: "6 دق",
    icon: BookOpen,
  },
  {
    title: "كيف تستفيد من الذكاء الاصطناعي في عملك اليومي",
    description:
      "دليل شامل لزيادة إنتاجيتك باستخدام أدوات الذكاء الاصطناعي في المجال القانوني.",
    category: "إنتاجية",
    date: "28 ديسمبر 2024",
    author: "فريق التحرير",
    readTime: "5 دق",
    icon: Lightbulb,
  },
];

const CATEGORIES = ["الكل", "تقنية", "إرشادات", "قانوني", "إنتاجية"];

export default function BlogPage() {
  const [active, setActive] = useState("الكل");
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "done">("idle");

  const filtered =
    active === "الكل" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
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
            المدونة
          </motion.div>
          <motion.h1
            animate="visible"
            className="mb-6 font-bold text-4xl text-zinc-900 leading-tight tracking-tight md:text-6xl dark:text-white"
            custom={0.1}
            initial="hidden"
            variants={fadeUp}
          >
            رؤى وأفكار
            <br />
            <span className="bg-gradient-to-l from-zinc-400 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-500 dark:to-white">
              قانونية وتقنية.
            </span>
          </motion.h1>
          <motion.p
            animate="visible"
            className="mx-auto max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            آخر الأخبار والإرشادات حول القانون السعودي والذكاء الاصطناعي.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-zinc-200 border-t px-6 py-6 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                className={`rounded-full px-4 py-1.5 font-medium text-sm transition-all ${
                  active === cat
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "border border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
                }`}
                key={cat}
                onClick={() => setActive(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial="hidden"
            key={active}
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {filtered.map((post) => (
              <motion.article
                className="group rounded-2xl border border-zinc-200 p-6 transition-all hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                key={post.title}
                variants={staggerItem}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <post.icon className="h-4 w-4 text-zinc-500" />
                  </div>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 font-medium text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-400">{post.readTime}</span>
                </div>

                <h2 className="mb-2 font-semibold text-zinc-900 leading-snug transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  {post.title}
                </h2>
                <p className="mb-5 text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
                  {post.description}
                </p>

                <div className="flex items-center justify-between border-zinc-100 border-t pt-4 dark:border-zinc-800">
                  <div>
                    <p className="font-medium text-xs text-zinc-700 dark:text-zinc-300">
                      {post.author}
                    </p>
                    <time className="text-xs text-zinc-400">{post.date}</time>
                  </div>
                  <button
                    className="flex items-center gap-1 font-medium text-xs text-zinc-500 transition-all hover:text-zinc-900 dark:hover:text-zinc-100"
                    type="button"
                  >
                    اقرأ <ArrowLeft className="h-3 w-3" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-zinc-200 border-t px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="rounded-3xl bg-zinc-950 p-10 text-center text-white md:p-16 dark:bg-zinc-900"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Scale className="mx-auto mb-6 h-10 w-10 text-zinc-500" />
            <h2 className="mb-4 font-bold text-3xl tracking-tight">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="mx-auto mb-8 max-w-md text-zinc-400">
              احصل على آخر المقالات القانونية والتقنية مباشرة في بريدك.
            </p>

            {subStatus === "done" ? (
              <p className="font-medium text-emerald-400">
                ✓ تم الاشتراك بنجاح!
              </p>
            ) : (
              <form
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubStatus("done");
                }}
              >
                <input
                  aria-label="البريد الإلكتروني"
                  className="flex-1 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-zinc-500 dark:bg-zinc-800"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  required
                  type="email"
                  value={email}
                />
                <button
                  className="rounded-full bg-white px-6 py-3 font-medium text-sm text-zinc-900 transition-all hover:bg-zinc-100"
                  type="submit"
                >
                  اشترك
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

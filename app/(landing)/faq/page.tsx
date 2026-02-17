"use client";

import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GlassCard } from "@/components/landing/glass-card";

const faqs = [
  {
    category: "عام",
    questions: [
      {
        q: "ما هو AI Chatbot؟",
        a: "AI Chatbot هو مساعد ذكاء اصطناعي متقدم يساعدك في الإجابة على الأسئلة، كتابة المحتوى، البرمجة، التحليل، والمزيد. يعمل بتقنيات AI حديثة ويدعم اللغة العربية بشكل كامل.",
      },
      {
        q: "هل الخدمة مجانية؟",
        a: "نعم، نوفر خطة مجانية تتضمن عدد محادثات محدود شهرياً. للاستخدام المكثف، لدينا خطط مدفوعة بأسعار تنافسية.",
      },
      {
        q: "هل يدعم اللغة العربية؟",
        a: "نعم بالتأكيد! الموقع والمساعد يدعمان اللغة العربية بشكل كامل، مع واجهة RTL وفهم عميق للسياق العربي.",
      },
    ],
  },
  {
    category: "الحساب والتسجيل",
    questions: [
      {
        q: "كيف أنشئ حساب؟",
        a: "انقر على زر 'تسجيل' في الأعلى، املأ بياناتك، وستحصل فوراً على حساب مع رصيد مجاني للبدء.",
      },
      {
        q: "هل يمكنني تغيير خطتي؟",
        a: "نعم، يمكنك الترقية أو التخفيض في أي وقت من صفحة الإعدادات. التغييرات تطبق فوراً.",
      },
      {
        q: "كيف أحذف حسابي؟",
        a: "يمكنك حذف حسابك من الإعدادات > الأمان > حذف الحساب. جميع بياناتك سيتم حذفها نهائياً.",
      },
    ],
  },
  {
    category: "الاستخدام",
    questions: [
      {
        q: "كيف أبدأ محادثة؟",
        a: "بعد تسجيل الدخول، انقر على 'محادثة جديدة' واكتب سؤالك أو طلبك. المساعد سيرد بشكل فوري.",
      },
      {
        q: "هل يمكنني رفع ملفات؟",
        a: "نعم، يدعم النظام رفع الصور، PDF، Word، Excel والمزيد. يمكنك تحليل وقراءة المستندات مباشرة.",
      },
      {
        q: "كم عدد المحادثات المسموح؟",
        a: "في الخطة المجانية: 50 محادثة/شهر. الخطة الأساسية: 500 محادثة. الخطة الاحترافية: غير محدود.",
      },
    ],
  },
  {
    category: "الأمان والخصوصية",
    questions: [
      {
        q: "هل محادثاتي آمنة؟",
        a: "نعم، جميع المحادثات مشفرة end-to-end. لا يمكن لأحد غيرك الوصول إليها، ولا نشارك بياناتك مع أطراف ثالثة.",
      },
      {
        q: "هل تحتفظون بمحادثاتي؟",
        a: "نخزن المحادثات لتوفير سجل لك فقط. يمكنك حذفها في أي وقت. لا نستخدمها لتدريب النماذج بدون إذنك.",
      },
      {
        q: "هل يمكنني جعل المحادثات خاصة؟",
        a: "نعم، جميع المحادثات خاصة افتراضياً. يمكنك اختيار مشاركة محادثة معينة عبر رابط إذا أردت.",
      },
    ],
  },
  {
    category: "الدفع",
    questions: [
      {
        q: "ما طرق الدفع المتاحة؟",
        a: "نقبل بطاقات الائتمان/الخصم (Visa, Mastercard)، Apple Pay، Google Pay، والتحويل البنكي للشركات.",
      },
      {
        q: "هل يمكنني الإلغاء في أي وقت؟",
        a: "نعم، يمكنك إلغاء الاشتراك في أي وقت بدون رسوم. ستبقى الخدمة متاحة حتى نهاية فترة الاشتراك الحالية.",
      },
      {
        q: "هل تقدمون استرداد الأموال؟",
        a: "نعم، نوفر ضمان استرداد كامل خلال 14 يوم من الاشتراك إذا لم تكن راضياً عن الخدمة.",
      },
    ],
  },
  {
    category: "الدعم الفني",
    questions: [
      {
        q: "كيف أتواصل مع الدعم؟",
        a: "يمكنك التواصل عبر البريد الإلكتروني support@chatbot.com أو الدردشة المباشرة في الموقع. نرد خلال 24 ساعة.",
      },
      {
        q: "هل هناك دعم فني بالعربية؟",
        a: "نعم، فريق الدعم يتحدث العربية ويمكنه مساعدتك بلغتك المفضلة.",
      },
      {
        q: "ماذا لو واجهت مشكلة تقنية؟",
        a: "راسلنا فوراً مع وصف المشكلة ولقطة شاشة إن أمكن. سنعمل على حلها في أسرع وقت.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 font-medium text-green-600 text-sm dark:text-green-400">
          <MessageCircle className="h-4 w-4" />
          الأسئلة الشائعة
        </div>
        <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl">
          كل ما تحتاج معرفته
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          إجابات سريعة على أكثر الأسئلة شيوعاً حول AI Chatbot
        </p>

        {/* Search */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <Search className="-translate-y-1/2 absolute top-1/2 right-4 h-5 w-5 text-muted-foreground" />
            <input
              className="w-full rounded-xl border bg-background/50 py-4 pr-12 pl-4 text-right backdrop-blur-sm transition-all focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن سؤالك..."
              type="text"
              value={searchQuery}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {filteredFaqs.map((category, catIndex) =>
          category.questions.length > 0 ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={category.category}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="mb-4 font-bold text-2xl">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const key = `${catIndex}-${faqIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <GlassCard
                      className="overflow-hidden transition-all hover:border-green-500/30"
                      key={key}
                    >
                      <button
                        className="flex w-full items-start justify-between gap-4 p-6 text-right transition-colors"
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        type="button"
                      >
                        <ChevronDown
                          className={`mt-1 h-5 w-5 shrink-0 text-green-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span className="flex-1 font-semibold text-lg">
                          {faq.q}
                        </span>
                      </button>

                      <motion.div
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t px-6 pt-4 pb-6 text-right text-muted-foreground">
                          {faq.a}
                        </div>
                      </motion.div>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>
          ) : null
        )}
      </div>

      {/* CTA */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard className="mx-auto max-w-2xl p-8">
          <h3 className="mb-4 font-bold text-2xl">لم تجد إجابة لسؤالك؟</h3>
          <p className="mb-6 text-muted-foreground">
            تواصل معنا مباشرة وسنساعدك في أسرع وقت
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition-all hover:bg-green-600 hover:shadow-green-500/50 hover:shadow-lg"
              href="/contact"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل معنا
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-500/20 dark:text-green-400"
              href="/chat"
            >
              جرب المساعد الآن
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

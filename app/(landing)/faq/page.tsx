"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  CreditCard,
  FileText,
  HelpCircle,
  MessageCircle,
  Scale,
  Search,
  Shield,
} from "lucide-react";
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

type FAQItem = {
  question: string;
  answer: string;
};
type FAQCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  questions: FAQItem[];
};

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "general",
    name: "عام",
    icon: <HelpCircle className="h-4 w-4" />,
    questions: [
      {
        question: "ما هو محامي فيصل",
        answer:
          "محامي فيصل هو مستشار قانوني ذكي مبني على الذكاء الاصطناعي متخصص في الأنظمة والتشريعات السعودية. يساعدك في فهم حقوقك والتزاماتك القانونية تحليل العقود والبحث في أكثر من 200 نظام سعودي بدقة واحترافية.",
      },
      {
        question: "من يمكنه استخدام محامي فيصل",
        answer:
          "يمكن لأي شخص استخدام المنصة  الأفراد الذين يحتاجون لفهم حقوقهم القانونية ورجال الأعمال الذين يريدون مراجعة عقودهم والمحامون الذين يحتاجون لأداة بحث سريعة وموثوقة.",
      },
      {
        question: "هل المنصة متوافقة مع الأنظمة السعودية الحديثة",
        answer:
          "نعم يتم تحديث قاعدة معارفنا القانونية بشكل منتظم لتشمل أحدث الأنظمة واللوائح الصادرة في المملكة العربية السعودية.",
      },
    ],
  },
  {
    id: "legal",
    name: "قانوني",
    icon: <Scale className="h-4 w-4" />,
    questions: [
      {
        question: "هل يمكن الاعتماد على المنصة في القضايا القانونية",
        answer:
          "محامي فيصل يقدم معلومات وإرشادات قانونية عامة وليس استشارة قانونية رسمية. لأغراض التقاضي ينصح باستشارة محام مرخص.",
      },
      {
        question: "ما هي مجالات القانون التي يغطيها محامي فيصل",
        answer:
          "نغطي: التجاري العمالي العقاري الجزائي الأسري الإداري الملكية الفكرية وأنظمة الشركات.",
      },
    ],
  },
  {
    id: "contracts",
    name: "العقود",
    icon: <FileText className="h-4 w-4" />,
    questions: [
      {
        question: "كيف يعمل تحليل العقود",
        answer:
          "ارفع ملف PDF أو الصق نص العقد وسيقوم محامي فيصل بتحليل البنود وتحديد المخاطر القانونية وتقديم توصيات للتحسين.",
      },
      {
        question: "ما أنواع العقود التي يمكن تحليلها؟",
        answer:
          "جميع أنواع العقود: عقود العمل، الإيجار، الشراكة، البيع والشراء، المقاولات، الوكالة التجارية، وغيرها.",
      },
    ],
  },
  {
    id: "search",
    name: "البحث",
    icon: <Search className="h-4 w-4" />,
    questions: [
      {
        question: "كيف يتم البحث في الأنظمة السعودية؟",
        answer:
          "اكتب استفساراً بالعربية الطبيعية وسيبحث النظام في قاعدة بيانات شاملة تضم أكثر من 200 نظام ولائحة سعودية.",
      },
    ],
  },
  {
    id: "privacy",
    name: "الخصوصية",
    icon: <Shield className="h-4 w-4" />,
    questions: [
      {
        question: "كيف يتم حماية بياناتي؟",
        answer:
          "نستخدم تشفير AES-256 لجميع البيانات المخزنة، وTLS 1.3 للبيانات المنقولة. لن نشارك بياناتك أبداً مع أطراف ثالثة.",
      },
      {
        question: "هل المحادثات سرية؟",
        answer:
          "نعم، جميع المحادثات محمية بتشفير كامل ومحاطة بالسرية المهنية. لا يمكن لأحد الاطلاع على محادثاتك.",
      },
    ],
  },
  {
    id: "billing",
    name: "الفواتير",
    icon: <CreditCard className="h-4 w-4" />,
    questions: [
      {
        question: "ما طرق الدفع المقبولة؟",
        answer:
          "نقبل بطاقات Visa وMastercard وMada والتحويل البنكي للباقات المؤسسية.",
      },
      {
        question: "هل يمكن إلغاء الاشتراك في أي وقت؟",
        answer:
          "نعم، يمكنك إلغاء اشتراكك في أي وقت من صفحة الإعدادات. لن يتم تحصيل أي رسوم بعد الإلغاء.",
      },
    ],
  },
  {
    id: "support",
    name: "الدعم",
    icon: <MessageCircle className="h-4 w-4" />,
    questions: [
      {
        question: "كيف يمكنني التواصل مع الدعم الفني؟",
        answer:
          "يمكنك التواصل معنا عبر المحادثة الفورية داخل التطبيق، أو البريد الإلكتروني، أو واتساب. نرد خلال ساعات في أيام العمل.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const active =
    FAQ_CATEGORIES.find((c) => c.id === activeCategory) ?? FAQ_CATEGORIES[0];

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
            <HelpCircle className="h-4 w-4" />
            مركز المساعدة
          </motion.div>
          <motion.h1
            animate="visible"
            className="mb-6 font-bold text-4xl text-zinc-900 leading-tight tracking-tight md:text-6xl dark:text-white"
            custom={0.1}
            initial="hidden"
            variants={fadeUp}
          >
            كيف يمكننا
            <br />
            <span className="bg-linear-to-l from-zinc-400 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-500 dark:to-white">
              مساعدتك؟
            </span>
          </motion.h1>
          <motion.p
            animate="visible"
            className="mx-auto max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            إجابات على أكثر الأسئلة شيوعاً حول محامي فيصل وخدماته القانونية.
          </motion.p>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="border-zinc-200 border-t px-6 py-16 md:py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            {/* Categories Sidebar */}
            <div className="lg:w-56 lg:shrink-0">
              <p className="mb-4 font-mono text-xs text-zinc-400 uppercase tracking-widest">
                التصنيفات
              </p>
              <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-right font-medium text-sm transition-all ${
                      activeCategory === cat.id
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                    }`}
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(0);
                    }}
                    type="button"
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Questions */}
            <div className="flex-1">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                key={activeCategory}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex items-center gap-2">
                  <span className="text-zinc-400">{active.icon}</span>
                  <h2 className="font-semibold text-xl">{active.name}</h2>
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    {active.questions.length}
                  </span>
                </div>

                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {active.questions.map((faq, i) => (
                    <div key={faq.question}>
                      <button
                        className="flex w-full items-center justify-between gap-4 py-5 text-right"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        type="button"
                      >
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: openIndex === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4 shrink-0 text-zinc-400" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openIndex === i && (
                          <motion.div
                            animate={{ height: "auto", opacity: 1 }}
                            className="overflow-hidden"
                            exit={{ height: 0, opacity: 0 }}
                            initial={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="pb-5 text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

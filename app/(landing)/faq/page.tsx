'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Scale,
  FileText,
  Search,
  Shield,
  CreditCard,
  MessageCircle,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  questions: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    name: 'عام',
    icon: <HelpCircle className="h-5 w-5" />,
    questions: [
      {
        question: 'ما هو مبسط LAW؟',
        answer:
          'مبسط LAW هو مستشار قانوني ذكي مبني على الذكاء الاصطناعي، متخصص في الأنظمة والتشريعات السعودية. يساعدك في فهم حقوقك والتزاماتك القانونية، تحليل العقود والمستندات، والبحث في أكثر من 200 نظام سعودي بدقة واحترافية.',
      },
      {
        question: 'هل مبسط LAW يغني عن المحامي؟',
        answer:
          'مبسط LAW أداة مساعدة تقدم معلومات واستشارات قانونية أولية مبنية على الأنظمة السعودية الرسمية. لا يُغني عن المحامي المرخّص في القضايا المعقدة أو الإجراءات القضائية، لكنه يساعدك في فهم وضعك القانوني واتخاذ قرارات مبدئية مدروسة.',
      },
      {
        question: 'ما الأنظمة السعودية التي يغطيها مبسط LAW؟',
        answer:
          'يغطي مبسط LAW أكثر من 200 نظام سعودي تشمل: نظام العمل، نظام المعاملات المدنية، نظام الشركات، نظام التجارة الإلكترونية، نظام المرافعات الشرعية، نظام الإجراءات الجزائية، نظام الأحوال الشخصية، نظام المنافسات والمشتريات الحكومية، وغيرها الكثير.',
      },
      {
        question: 'هل المعلومات القانونية محدّثة؟',
        answer:
          'نعم، نحرص على تحديث قاعدة البيانات القانونية بشكل دوري لتشمل آخر التعديلات والأنظمة الصادرة من الجهات الرسمية في المملكة العربية السعودية، بما في ذلك هيئة الخبراء ووزارة العدل.',
      },
    ],
  },
  {
    id: 'legal',
    name: 'الاستشارات القانونية',
    icon: <Scale className="h-5 w-5" />,
    questions: [
      {
        question: 'كيف أحصل على استشارة قانونية؟',
        answer:
          'ببساطة، افتح محادثة جديدة واكتب سؤالك القانوني بالعربية أو الإنجليزية. سيقوم مبسط LAW بتحليل سؤالك والبحث في الأنظمة السعودية المتعلقة وتقديم إجابة مفصلة مع الإشارة للمواد القانونية ذات الصلة.',
      },
      {
        question: 'ما أنواع الاستشارات المتاحة؟',
        answer:
          'يقدم مبسط LAW استشارات في: القانون العقاري، قانون العمل والعمال، القانون التجاري والشركات، القانون الجزائي، الأحوال الشخصية، القانون الإداري، التجارة الإلكترونية، العقود والمعاملات المدنية، المنافسات الحكومية، والملكية الفكرية.',
      },
      {
        question: 'هل يمكنني طرح أسئلة متابعة؟',
        answer:
          'بالتأكيد. مبسط LAW يحتفظ بسياق المحادثة الكامل، فيمكنك طرح أسئلة متابعة وتوضيحية وسيرد بناءً على السياق السابق. هذا يتيح لك التعمق في أي موضوع قانوني بالتدريج.',
      },
    ],
  },
  {
    id: 'contracts',
    name: 'تحليل العقود',
    icon: <FileText className="h-5 w-5" />,
    questions: [
      {
        question: 'كيف أحلل عقدًا باستخدام مبسط LAW؟',
        answer:
          'يمكنك نسخ نص العقد ولصقه في المحادثة، أو رفع ملف العقد مباشرة. سيقوم مبسط LAW بتحليل بنود العقد، تحديد النقاط المهمة، كشف البنود غير العادلة أو المخالفة للأنظمة السعودية، وتقديم توصيات لتحسين العقد.',
      },
      {
        question: 'ما أنواع العقود التي يمكن تحليلها؟',
        answer:
          'يدعم مبسط LAW تحليل جميع أنواع العقود: عقود الإيجار السكنية والتجارية، عقود العمل، عقود البيع والشراء، عقود الشراكة، عقود المقاولات، عقود التوريد، اتفاقيات السرية، عقود الامتياز التجاري، وغيرها.',
      },
      {
        question: 'هل يكشف البنود المخالفة للأنظمة؟',
        answer:
          'نعم، من أهم ميزات مبسط LAW قدرته على مقارنة بنود العقد مع الأنظمة السعودية المعمول بها وتنبيهك لأي بند قد يكون مخالفًا أو غير قابل للتنفيذ قانونيًا، مع ذكر المادة النظامية ذات العلاقة.',
      },
    ],
  },
  {
    id: 'search',
    name: 'البحث في الأنظمة',
    icon: <Search className="h-5 w-5" />,
    questions: [
      {
        question: 'كيف أبحث في الأنظمة السعودية؟',
        answer:
          'اكتب سؤالك أو الموضوع القانوني الذي تبحث عنه، وسيقوم مبسط LAW تلقائيًا بالبحث في قاعدة بيانات الأنظمة السعودية واسترجاع المواد والنصوص ذات الصلة مع شرح مبسّط لكل مادة.',
      },
      {
        question: 'هل يمكنني البحث برقم المادة مباشرة؟',
        answer:
          'نعم، يمكنك كتابة اسم النظام ورقم المادة مثل: "المادة 77 من نظام العمل" وسيعرض لك نص المادة كاملًا مع شرحها وتطبيقاتها العملية والأحكام المرتبطة بها.',
      },
      {
        question: 'هل تشمل النتائج اللوائح التنفيذية؟',
        answer:
          'نعم، قاعدة بيانات مبسط LAW تشمل الأنظمة الأساسية واللوائح التنفيذية والقرارات الوزارية والتعاميم الرسمية، مما يوفر لك صورة قانونية شاملة ومتكاملة.',
      },
    ],
  },
  {
    id: 'privacy',
    name: 'الخصوصية والأمان',
    icon: <Shield className="h-5 w-5" />,
    questions: [
      {
        question: 'هل محادثاتي القانونية سرية؟',
        answer:
          'نعم، نلتزم بأعلى معايير السرية المهنية. جميع المحادثات مشفرة بتقنية AES-256 ولا يطّلع عليها أي شخص. نتعامل مع بياناتك بنفس مستوى السرية المطبق في مكاتب المحاماة.',
      },
      {
        question: 'هل يتم تخزين بيانات العقود التي أرفعها؟',
        answer:
          'يتم تخزين بيانات المحادثة بشكل مشفّر لتتمكن من الرجوع إليها لاحقًا. يمكنك حذف أي محادثة أو بيانات في أي وقت من إعدادات حسابك، وسيتم حذفها نهائيًا من خوادمنا.',
      },
      {
        question: 'هل تتوافقون مع نظام حماية البيانات الشخصية السعودي؟',
        answer:
          'نعم، مبسط LAW متوافق تمامًا مع نظام حماية البيانات الشخصية (PDPL) الصادر في المملكة العربية السعودية. نجمع فقط البيانات الضرورية ونحميها وفق أعلى المعايير العالمية.',
      },
    ],
  },
  {
    id: 'billing',
    name: 'الباقات والأسعار',
    icon: <CreditCard className="h-5 w-5" />,
    questions: [
      {
        question: 'هل يمكنني تجربة مبسط LAW مجانًا؟',
        answer:
          'نعم، نوفر باقة مجانية تتيح لك 10 استشارات قانونية شهريًا مع إمكانية البحث في الأنظمة الأساسية. يمكنك الترقية في أي وقت للحصول على مميزات أكثر.',
      },
      {
        question: 'ما الفرق بين الباقة الاحترافية وباقة المكاتب؟',
        answer:
          'الباقة الاحترافية مصممة للأفراد والمحامين المستقلين وتشمل استشارات غير محدودة وتحليل عقود وتقارير قانونية. باقة المكاتب مصممة لمكاتب المحاماة والشركات وتشمل حسابات متعددة ودعمًا مخصصًا وتكاملاً مع أنظمة المكتب.',
      },
      {
        question: 'ما طرق الدفع المتاحة؟',
        answer:
          'نقبل الدفع عبر: بطاقات مدى، فيزا، ماستركارد، Apple Pay، وSTC Pay. جميع الأسعار بالريال السعودي وتشمل ضريبة القيمة المضافة.',
      },
    ],
  },
  {
    id: 'support',
    name: 'الدعم الفني',
    icon: <MessageCircle className="h-5 w-5" />,
    questions: [
      {
        question: 'كيف أتواصل مع فريق الدعم؟',
        answer:
          'يمكنك التواصل معنا عبر: البريد الإلكتروني support@mubassatlaw.com، أو من خلال نموذج التواصل في صفحة "تواصل معنا"، أو عبر الدردشة المباشرة داخل التطبيق خلال ساعات العمل (الأحد - الخميس، 9 صباحًا - 6 مساءً بتوقيت السعودية).',
      },
      {
        question: 'هل يتوفر دعم باللغتين العربية والإنجليزية؟',
        answer:
          'نعم، فريق الدعم الفني يتحدث العربية والإنجليزية، ومبسط LAW نفسه يفهم ويرد بكلتا اللغتين بطلاقة.',
      },
      {
        question: 'كيف أبلغ عن خطأ في معلومة قانونية؟',
        answer:
          'نقدّر ملاحظاتك. يمكنك الإبلاغ عن أي خطأ عبر البريد legal@mubassatlaw.com أو من خلال زر "الإبلاغ عن خطأ" الموجود في كل إجابة قانونية. فريقنا القانوني يراجع جميع البلاغات خلال 24 ساعة.',
      },
    ],
  },
];

function FAQAccordion({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700/50 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-right transition-colors hover:text-amber-500 dark:hover:text-amber-300"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-slate-900 dark:text-white">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-slate-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-slate-600 dark:text-slate-400">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeData = faqCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950" dir="rtl">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-amber-300">
              <BookOpen className="h-4 w-4" />
              مركز المساعدة
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
              الأسئلة{' '}
              <span className="bg-linear-to-l from-amber-500 to-teal-600 bg-clip-text text-transparent">
                الشائعة
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              كل ما تحتاج معرفته عن مبسط LAW — مستشارك القانوني الذكي المتخصص
              في الأنظمة السعودية
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Categories Sidebar */}
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex gap-2 overflow-x-auto pb-2 lg:w-56 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0"
              aria-label="أقسام الأسئلة الشائعة"
            >
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-amber-300'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </motion.nav>

            {/* Questions */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-w-0 flex-1"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8 dark:border-slate-800 dark:bg-slate-900/50">
                <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
                  {activeData?.icon}
                  {activeData?.name}
                </h2>
                <div>
                  {activeData?.questions.map((item, idx) => (
                    <FAQAccordion
                      key={`${activeCategory}-${idx}`}
                      item={item}
                      isOpen={!!openItems[`${activeCategory}-${idx}`]}
                      onToggle={() => toggleItem(`${activeCategory}-${idx}`)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              تواصل مع فريق الدعم أو جرّب مبسط LAW مباشرة واطرح سؤالك القانوني
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-l from-amber-500 to-teal-600 px-8 py-3 font-medium text-white shadow-lg shadow-amber-400/25 transition-all hover:shadow-xl hover:shadow-amber-400/30"
              >
                <MessageCircle className="h-5 w-5" />
                تواصل معنا
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3 font-medium text-slate-700 transition-all hover:border-emerald-300 hover:text-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:text-amber-300"
              >
                <Scale className="h-5 w-5" />
                جرّب مبسط LAW
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

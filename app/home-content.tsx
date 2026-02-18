"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Check,
  ChevronDown,
  FileSearch,
  FileText,
  Lock,
  MessageSquare,
  Scale,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ───────── Animated Counter ───────── */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const value = Math.round(eased * target);
      setDisplay(value.toLocaleString("ar-SA"));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ───────── Animation Helpers ───────── */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/* ───────── Data ───────── */
const MARQUEE_ITEMS = [
  "ذكاء قانوني",
  "تحليل العقود",
  "حماية شاملة",
  "دقة متناهية",
  "استشارات فورية",
  "صياغة احترافية",
  "بحث متقدم",
  "أمان مطلق",
];

interface ServiceData {
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  subservices: string[];
}

const SERVICES: ServiceData[] = [
  {
    num: "001",
    title: "استشارات قانونية فورية",
    description:
      "احصل على استشارات قانونية دقيقة ومتوافقة مع الأنظمة واللوائح السعودية خلال ثوانٍ معدودة",
    icon: MessageSquare,
    subservices: [
      "استشارات تجارية",
      "استشارات عقارية",
      "استشارات عمالية",
      "استشارات أسرية",
      "استشارات جزائية",
    ],
  },
  {
    num: "002",
    title: "تحليل ومراجعة العقود",
    description:
      "احصل على تحليل شامل للبنود والمخاطر القانونية مع توصيات مفصلة لحماية حقوقك",
    icon: FileSearch,
    subservices: [
      "تحليل بنود العقد",
      "كشف المخاطر",
      "اقتراحات التعديل",
      "مقارنة النسخ",
    ],
  },
  {
    num: "003",
    title: "بحث في الأنظمة واللوائح",
    description:
      "ابحث في أكثر من 2,000 نظام ولائحة سعودية مع ربط تلقائي بالمواد ذات الصلة",
    icon: Brain,
    subservices: [
      "بحث بالكلمات المفتاحية",
      "ربط المواد المتصلة",
      "إشارات مرجعية",
      "تتبع التعديلات",
    ],
  },
  {
    num: "004",
    title: "صياغة المستندات القانونية",
    description:
      "أنشئ مستندات قانونية احترافية باستخدام قوالب متوافقة مع الأنظمة المحلية",
    icon: FileText,
    subservices: [
      "عقود تجارية",
      "خطابات رسمية",
      "مذكرات قانونية",
      "وثائق تأسيس",
    ],
  },
  {
    num: "005",
    title: "حماية البيانات والخصوصية",
    description:
      "تشفير متقدم لجميع البيانات والمحادثات مع التزام كامل بأنظمة حماية البيانات",
    icon: Lock,
    subservices: [
      "تشفير شامل",
      "التوافق مع نظام حماية البيانات",
      "حذف آمن",
      "تقارير الخصوصية",
    ],
  },
  {
    num: "006",
    title: "تقارير وتحليلات",
    description:
      "لوحة تحكم شاملة مع تحليلات عميقة تساعد في اتخاذ قرارات مبنية على بيانات دقيقة",
    icon: Sparkles,
    subservices: [
      "لوحة تحكم متقدمة",
      "تقارير تنفيذية",
      "إحصائيات الاستخدام",
      "رؤى استباقية",
    ],
  },
  {
    num: "007",
    title: "التخطيط القانوني الاستراتيجي",
    description:
      "حدد وأدر أهدافك القانونية للأفراد والشركات مع خطة مخصصة لتحقيقها",
    icon: Zap,
    subservices: [
      "تحديد الأهداف القانونية",
      "خطط الامتثال",
      "إدارة المخاطر",
      "التقييم الدوري",
    ],
  },
];

const STORIES = [
  {
    category: "عقود تجارية",
    title: "مراجعة عقد شراكة تجارية دولية",
    desc: "كشف 12 مخاطرة قانونية في عقد بقيمة 5 مليون ريال وتقديم توصيات حماية شاملة",
  },
  {
    category: "استشارات عقارية",
    title: "تحليل عقد إيجار تجاري طويل المدى",
    desc: "تحسين بنود العقد وحماية حقوق المستأجر مع ضمان التوافق مع نظام الإيجار",
  },
  {
    category: "نزاعات عمالية",
    title: "حل نزاع عمالي معقد لشركة ناشئة",
    desc: "تقديم استشارة شاملة حول حقوق وواجبات الأطراف وفقًا لنظام العمل السعودي",
  },
  {
    category: "تأسيس شركات",
    title: "إعداد وثائق تأسيس شركة تقنية",
    desc: "صياغة عقد التأسيس والنظام الأساسي بالتوافق مع نظام الشركات الجديد",
  },
  {
    category: "ملكية فكرية",
    title: "حماية علامة تجارية سعودية في الخليج",
    desc: "استراتيجية شاملة لتسجيل وحماية العلامة التجارية في دول مجلس التعاون",
  },
  {
    category: "أحوال شخصية",
    title: "استشارة في قضايا الحضانة والنفقة",
    desc: "تحليل قانوني متكامل وفقًا لنظام الأحوال الشخصية الجديد",
  },
];

const BLOG_POSTS = [
  {
    date: "15 يناير 2025",
    title: "كيف يغيّر الذكاء الاصطناعي مستقبل المحاماة في السعودية",
    excerpt:
      "استكشاف أثر التقنيات الحديثة على الممارسة القانونية وكيف يستفيد المحامون من أدوات الذكاء الاصطناعي",
  },
  {
    date: "8 يناير 2025",
    title: "5 أخطاء شائعة في العقود التجارية وكيفية تجنبها",
    excerpt:
      "دليل عملي للشركات الناشئة حول أهم البنود التي يجب مراجعتها قبل توقيع أي عقد تجاري",
  },
  {
    date: "2 يناير 2025",
    title: "دليلك الشامل لنظام حماية البيانات الشخصية",
    excerpt:
      "شرح مبسط لأهم أحكام النظام والتزامات الجهات المعالجة للبيانات في المملكة",
  },
];

/* ───────── Sub-Components ───────── */

function MarqueeBanner() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-zinc-200 border-b bg-zinc-50 py-3 dark:border-zinc-800 dark:bg-zinc-950">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        className="flex gap-8 whitespace-nowrap"
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <span
            className="font-medium text-sm text-zinc-500 dark:text-zinc-400"
            key={i}
          >
            {item}{" "}
            <span className="mx-4 text-zinc-300 dark:text-zinc-700">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function ServiceItem({
  service,
  isOpen,
  onToggle,
}: {
  service: ServiceData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;
  return (
    <div className="border-zinc-200 border-b dark:border-zinc-800">
      <button
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-right transition-colors hover:bg-zinc-50 md:py-8 dark:hover:bg-zinc-900/50"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <span className="font-mono text-sm text-zinc-400">{service.num}</span>
          <Icon className="h-5 w-5 text-zinc-400" />
          <span className="font-semibold text-lg text-zinc-900 md:text-xl dark:text-zinc-100">
            {service.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="pr-16 pb-6 md:pr-20 md:pb-8">
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.subservices.map((sub) => (
                  <span
                    className="rounded-full bg-zinc-100 px-3 py-1 font-medium text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    key={sub}
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───────── Main Component ───────── */
export function HomeContent() {
  const [openService, setOpenService] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
      dir="rtl"
    >
      {/* Marquee */}
      <MarqueeBanner />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-40">
        <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2">
          {[400, 500, 600, 700].map((size) => (
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50"
              key={size}
              style={{ width: size, height: size }}
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
            محامي فيصل — مستشارك القانوني الذكي
          </motion.div>

          <motion.h1
            animate="visible"
            className="mb-6 font-bold text-4xl text-zinc-900 leading-tight tracking-tight md:text-6xl lg:text-7xl dark:text-white"
            custom={0.1}
            initial="hidden"
            variants={fadeUp}
          >
            حيث يلتقي القانون
            <br />
            <span className="bg-gradient-to-l from-zinc-400 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-500 dark:to-white">
              بالذكاء.
            </span>
          </motion.h1>

          <motion.p
            animate="visible"
            className="mx-auto mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            استشارات قانونية فورية مدعومة بالذكاء الاصطناعي ومتوافقة مع الأنظمة
            السعودية. صُمّم لرجال الأعمال والشركات الناشئة والأفراد.
          </motion.p>

          <motion.div
            animate="visible"
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            custom={0.3}
            initial="hidden"
            variants={fadeUp}
          >
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 font-medium text-sm text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              href="/login"
            >
              ابدأ مجانًا
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-8 py-3.5 font-medium text-sm text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
              href="/features"
            >
              اكتشف المزيد
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stories / Projects */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 text-center"
            custom={0}
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              قصص نجاح
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              مشاريع حققنا فيها الفرق
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {STORIES.map((story, i) => (
              <motion.div
                className="group rounded-2xl bg-zinc-100 p-6 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                key={i}
                variants={staggerItem}
              >
                <span className="mb-3 inline-block rounded-full bg-zinc-200 px-3 py-1 font-medium text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {story.category}
                </span>
                <h3 className="mb-2 font-semibold text-lg">{story.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                  {story.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-zinc-200 border-y px-6 py-16 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 font-medium text-sm text-zinc-400 uppercase tracking-widest">
            موثوق من قبل
          </p>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                className="flex h-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900"
                key={i}
              >
                <span className="text-xs text-zinc-400">شريك {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-12 text-center"
            custom={0}
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              خدماتنا
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              كل ما تحتاجه قانونيًا
            </h2>
          </motion.div>

          <div className="border-zinc-200 border-t dark:border-zinc-800">
            {SERVICES.map((service, i) => (
              <ServiceItem
                isOpen={openService === i}
                key={service.num}
                onToggle={() => setOpenService(openService === i ? null : i)}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Stats */}
      <section className="bg-zinc-950 px-6 py-20 text-white md:py-28 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-16 text-center"
            custom={0}
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-500">
              لماذا محامي فيصل
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              أرقام تتحدث عن نفسها
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: 2000, suffix: "+", label: "نظام ولائحة سعودية" },
              { value: 50_000, suffix: "+", label: "استشارة تم تقديمها" },
              { value: 98, suffix: "%", label: "نسبة رضا العملاء" },
            ].map((stat, i) => (
              <motion.div
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-800/50"
                custom={i * 0.1}
                initial="hidden"
                key={i}
                variants={fadeUp}
                viewport={{ once: true }}
                whileInView="visible"
              >
                <div className="mb-2 font-bold text-4xl md:text-5xl">
                  <AnimatedCounter suffix={stat.suffix} target={stat.value} />
                </div>
                <p className="text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "دعم على مدار الساعة",
              "تحديثات أسبوعية",
              "واجهة عربية بالكامل",
              "تصدير PDF احترافي",
            ].map((feature) => (
              <div
                className="flex items-center gap-2 rounded-xl border border-zinc-800 px-4 py-3 text-sm text-zinc-300 dark:border-zinc-700"
                key={feature}
              >
                <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Quote */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="rounded-3xl bg-zinc-950 p-10 text-center text-white md:p-16 dark:bg-zinc-900"
            custom={0}
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Shield className="mx-auto mb-6 h-10 w-10 text-zinc-500" />
            <blockquote className="mb-6 font-semibold text-xl leading-relaxed md:text-2xl">
              &ldquo;هدفنا تمكين كل شخص في المملكة من الوصول إلى المعرفة
              القانونية بسهولة وسرعة ودقة &mdash; بلا حواجز.&rdquo;
            </blockquote>
            <p className="text-sm text-zinc-400">
              فريق محامي فيصل &mdash; الرياض، المملكة العربية السعودية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section className="border-zinc-200 border-t px-6 py-20 md:py-28 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 flex items-end justify-between"
            custom={0}
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div>
              <span className="mb-2 block font-mono text-sm text-zinc-400">
                المدونة
              </span>
              <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
                آخر المقالات
              </h2>
            </div>
            <Link
              className="hidden font-medium text-sm text-zinc-500 transition-colors hover:text-zinc-900 sm:block dark:hover:text-white"
              href="/blog"
            >
              عرض الكل
            </Link>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                className="group rounded-2xl border border-zinc-200 p-6 transition-all hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                key={i}
                variants={staggerItem}
              >
                <time className="text-xs text-zinc-400">{post.date}</time>
                <h3 className="mt-3 mb-2 font-semibold text-lg leading-snug transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-zinc-50 px-6 py-20 md:py-28 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            custom={0}
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="mb-2 block font-mono text-sm text-zinc-400">
              تواصل معنا
            </span>
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              نسعد بخدمتك
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            <motion.form
              className="space-y-4 lg:col-span-3"
              custom={0.1}
              initial="hidden"
              onSubmit={(e) => e.preventDefault()}
              variants={fadeUp}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  aria-label="الاسم الكامل"
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-zinc-500"
                  placeholder="الاسم الكامل"
                  type="text"
                />
                <input
                  aria-label="البريد الإلكتروني"
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-zinc-500"
                  placeholder="البريد الإلكتروني"
                  type="email"
                />
              </div>
              <input
                aria-label="رقم الجوال"
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-zinc-500"
                placeholder="رقم الجوال"
                type="tel"
              />
              <textarea
                aria-label="رسالتك"
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-zinc-500"
                placeholder="رسالتك"
                rows={5}
              />
              <button
                className="w-full rounded-xl bg-zinc-900 py-3.5 font-medium text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                type="submit"
              >
                إرسال الرسالة
              </button>
            </motion.form>

            <motion.div
              className="flex flex-col gap-4 lg:col-span-2"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true }}
              whileInView="visible"
            >
              {[
                {
                  icon: MessageSquare,
                  title: "محادثة مباشرة",
                  desc: "تحدث مع فريقنا عبر الواتساب",
                },
                {
                  icon: FileText,
                  title: "قاعدة المعرفة",
                  desc: "اطلع على الأسئلة الشائعة والأدلة",
                },
                {
                  icon: Sparkles,
                  title: "النشرة البريدية",
                  desc: "احصل على تحديثات قانونية أسبوعية",
                },
              ].map((card) => (
                <motion.div
                  className="flex items-start gap-4 rounded-xl border border-zinc-200 p-5 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800/50"
                  key={card.title}
                  variants={staggerItem}
                >
                  <card.icon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" />
                  <div>
                    <h4 className="font-semibold text-sm">{card.title}</h4>
                    <p className="text-xs text-zinc-500">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

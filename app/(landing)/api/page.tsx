import { BookOpen, CheckCircle, Code, Copy, Shield, Zap } from "lucide-react";

export default function APIPage() {
  const features = [
    {
      icon: Zap,
      title: "سريع وموثوق",
      description: "استجابة في أقل من 100 ميلي ثانية مع وقت تشغيل 99.9%",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Shield,
      title: "آمن ومحمي",
      description: "مصادقة API Key وتشفير end-to-end لجميع الطلبات",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Code,
      title: "سهل التكامل",
      description: "مكتبات جاهزة لجميع اللغات البرمجية الشائعة",
      color: "from-green-600 to-green-500",
    },
    {
      icon: BookOpen,
      title: "توثيق شامل",
      description: "أمثلة وأدلة تفصيلية لمساعدتك على البدء بسرعة",
      color: "from-green-600 to-green-500",
    },
  ];

  const endpoints = [
    {
      method: "POST",
      path: "/api/chat/completions",
      description: "إرسال رسالة والحصول على رد من AI",
      color:
        "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      method: "GET",
      path: "/api/models",
      description: "الحصول على قائمة النماذج المتاحة",
      color:
        "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      method: "POST",
      path: "/api/upload",
      description: "رفع ملف للمعالجة أو التحليل",
      color:
        "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      method: "GET",
      path: "/api/history",
      description: "الحصول على سجل المحادثات السابقة",
      color:
        "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
  ];

  const codeExample = `// تثبيت المكتبة
npm install @chatbot/sdk

// مثال بسيط باستخدام JavaScript/TypeScript
import { ChatBot } from '@chatbot/sdk';

const chatbot = new ChatBot({
  apiKey: 'your-api-key-here',
});

// إرسال رسالة
const response = await chatbot.chat.create({
  messages: [
    { role: 'user', content: 'مرحباً! كيف يمكنك مساعدتي؟' }
  ],
  model: 'claude-sonnet-4.5',
});

console.log(response.content);`;

  const pricingTiers = [
    {
      name: "مطور",
      price: "مجاناً",
      requests: "1,000 طلب/شهر",
      features: ["نماذج أساسية", "دعم المجتمع", "توثيق كامل"],
    },
    {
      name: "احترافي",
      price: "$49",
      requests: "50,000 طلب/شهر",
      features: [
        "جميع النماذج",
        "دعم فني",
        "تحليلات متقدمة",
        "Rate limit أعلى",
      ],
    },
    {
      name: "شركات",
      price: "مخصص",
      requests: "غير محدود",
      features: ["SLA مضمون", "دعم مخصص", "نماذج مخصصة", "خوادم خاصة"],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-green-700/10 via-green-600/10 to-green-500/10 dark:from-green-700/5 dark:via-green-600/5 dark:to-green-500/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-600 text-sm dark:bg-green-900/30 dark:text-green-400">
              <Code className="h-4 w-4" />
              API Documentation
            </div>
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="text-gray-900 dark:text-white">
                واجهة برمجية قوية
              </span>
              <br />
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                للمطورين
              </span>
            </h1>
            <p className="mb-8 text-gray-600 text-xl leading-relaxed dark:text-gray-400">
              دمج الذكاء الاصطناعي في تطبيقاتك بسطور قليلة من الكود
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-l from-green-700 via-green-600 to-green-500 px-8 py-4 font-semibold text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="#get-started"
              >
                ابدأ الآن
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 text-lg transition-all hover:border-green-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-green-400"
                href="#documentation"
              >
                التوثيق
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div
                  className={`h-14 w-14 rounded-xl bg-linear-to-br ${feature.color} mx-auto mb-4 flex items-center justify-center`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900 text-lg dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section
        className="bg-white py-20 dark:bg-gray-950"
        dir="rtl"
        id="get-started"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
                ابدأ في دقائق
              </h2>
              <p className="text-gray-600 text-lg dark:text-gray-400">
                مثال بسيط لإرسال أول رسالة عبر API
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8">
              <div className="absolute top-4 left-4">
                <button className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20">
                  <Copy className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="mr-4 text-gray-400 text-sm">example.js</span>
              </div>

              <pre className="overflow-x-auto text-gray-300 text-sm">
                <code>{codeExample}</code>
              </pre>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-green-50 p-6 text-center dark:bg-green-900/20">
                <p className="mb-2 font-semibold text-green-600 dark:text-green-400">
                  الخطوة 1
                </p>
                <p className="text-gray-900 text-sm dark:text-white">
                  احصل على API Key
                </p>
              </div>
              <div className="rounded-2xl bg-green-50 p-6 text-center dark:bg-green-900/20">
                <p className="mb-2 font-semibold text-green-600 dark:text-green-400">
                  الخطوة 2
                </p>
                <p className="text-gray-900 text-sm dark:text-white">
                  ثبّت المكتبة
                </p>
              </div>
              <div className="rounded-2xl bg-green-50 p-6 text-center dark:bg-green-900/20">
                <p className="mb-2 font-semibold text-green-600 dark:text-green-400">
                  الخطوة 3
                </p>
                <p className="text-gray-900 text-sm dark:text-white">
                  أرسل أول طلب!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20" dir="rtl" id="documentation">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
                نقاط النهاية (Endpoints)
              </h2>
              <p className="text-gray-600 text-lg dark:text-gray-400">
                الـ API endpoints الأساسية المتاحة
              </p>
            </div>

            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                  key={index}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`rounded-lg px-3 py-1 font-mono font-semibold text-sm ${endpoint.color}`}
                    >
                      {endpoint.method}
                    </span>
                    <div className="flex-1">
                      <code className="mb-2 block font-mono text-gray-900 text-sm dark:text-white">
                        {endpoint.path}
                      </code>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        {endpoint.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                className="inline-flex items-center gap-2 font-semibold text-green-600 transition-all hover:gap-3 dark:text-green-400"
                href="/docs/api"
              >
                عرض التوثيق الكامل
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
              أسعار الـ API
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              اختر الباقة المناسبة لحجم استخدامك
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <div
                className={`rounded-3xl border-2 bg-white p-8 dark:bg-gray-900 ${
                  index === 1
                    ? "border-green-600 shadow-xl dark:border-green-500"
                    : "border-gray-200 dark:border-gray-800"
                }`}
                key={index}
              >
                <h3 className="mb-2 font-bold text-2xl text-gray-900 dark:text-white">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="font-bold text-4xl text-gray-900 dark:text-white">
                    {tier.price}
                  </span>
                  {tier.price !== "مجاناً" && tier.price !== "مخصص" && (
                    <span className="text-gray-600 dark:text-gray-400">
                      /شهر
                    </span>
                  )}
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {tier.requests}
                </p>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li className="flex gap-3 text-sm" key={fIndex}>
                      <CheckCircle className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-xl py-3 font-semibold transition-all ${
                    index === 1
                      ? "bg-linear-to-l from-green-700 to-green-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  }`}
                >
                  {index === 2 ? "تواصل معنا" : "ابدأ الآن"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-green-700 via-green-600 to-green-500 py-20">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl text-white">جاهز للبدء؟</h2>
            <p className="mb-8 text-green-100 text-xl">
              احصل على API key مجاناً وابدأ في بناء تطبيقات ذكية اليوم
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-green-600 text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                href="/register"
              >
                إنشاء حساب مطور
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-green-500/20 px-8 py-4 font-semibold text-lg text-white transition-all hover:bg-green-500/30"
                href="/contact"
              >
                تحدث مع فريق المبيعات
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

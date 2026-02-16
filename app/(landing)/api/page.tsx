import { Code, Zap, Shield, BookOpen, Copy, CheckCircle } from "lucide-react";

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
      color: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      method: "GET",
      path: "/api/models",
      description: "الحصول على قائمة النماذج المتاحة",
      color: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      method: "POST",
      path: "/api/upload",
      description: "رفع ملف للمعالجة أو التحليل",
      color: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      method: "GET",
      path: "/api/history",
      description: "الحصول على سجل المحادثات السابقة",
      color: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
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
      features: ["جميع النماذج", "دعم فني", "تحليلات متقدمة", "Rate limit أعلى"],
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
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-700/10 via-green-600/10 to-green-500/10 dark:from-green-700/5 dark:via-green-600/5 dark:to-green-500/5" />
        
        <div className="container mx-auto px-4 relative" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Code className="w-4 h-4" />
              API Documentation
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">
                واجهة برمجية قوية
              </span>
              <br />
              <span className="bg-linear-to-l from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                للمطورين
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              دمج الذكاء الاصطناعي في تطبيقاتك بسطور قليلة من الكود
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-linear-to-l from-green-700 via-green-600 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                ابدأ الآن
              </a>
              <a
                href="#documentation"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:border-green-600 dark:hover:border-green-400 transition-all"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section id="get-started" className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                ابدأ في دقائق
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                مثال بسيط لإرسال أول رسالة عبر API
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  <Copy className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="mr-4 text-gray-400 text-sm">example.js</span>
              </div>
              
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">الخطوة 1</p>
                <p className="text-gray-900 dark:text-white text-sm">احصل على API Key</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">الخطوة 2</p>
                <p className="text-gray-900 dark:text-white text-sm">ثبّت المكتبة</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">الخطوة 3</p>
                <p className="text-gray-900 dark:text-white text-sm">أرسل أول طلب!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section id="documentation" className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                نقاط النهاية (Endpoints)
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                الـ API endpoints الأساسية المتاحة
              </p>
            </div>

            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className={`px-3 py-1 rounded-lg font-mono text-sm font-semibold ${endpoint.color}`}>
                      {endpoint.method}
                    </span>
                    <div className="flex-1">
                      <code className="text-gray-900 dark:text-white font-mono text-sm mb-2 block">
                        {endpoint.path}
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {endpoint.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/docs/api"
                className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all"
              >
                عرض التوثيق الكامل
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white dark:bg-gray-950" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              أسعار الـ API
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              اختر الباقة المناسبة لحجم استخدامك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 ${
                  index === 1 
                    ? 'border-green-600 dark:border-green-500 shadow-xl' 
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {tier.price}
                  </span>
                  {tier.price !== "مجاناً" && tier.price !== "مخصص" && (
                    <span className="text-gray-600 dark:text-gray-400">/شهر</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {tier.requests}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    index === 1
                      ? 'bg-linear-to-l from-green-700 to-green-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {index === 2 ? 'تواصل معنا' : 'ابدأ الآن'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-green-700 via-green-600 to-green-500">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-green-100 mb-8">
              احصل على API key مجاناً وابدأ في بناء تطبيقات ذكية اليوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                إنشاء حساب مطور
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-500/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-500/30 transition-all"
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

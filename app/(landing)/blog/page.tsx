import { BookOpen, FileText, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "كيف تستفيد من الذكاء الاصطناعي في عملك اليومي",
      description: "دليل شامل لزيادة إنتاجيتك باستخدام أدوات الذكاء الاصطناعي",
      category: "إنتاجية",
      date: "15 ديسمبر 2024",
      author: "فريق التحرير",
      readTime: "5 دقائق",
      icon: Lightbulb,
      color: "from-green-600 to-green-500",
    },
    {
      title: "مستقبل الذكاء الاصطناعي في 2025",
      description: "توقعات واتجاهات تقنية الذكاء الاصطناعي للعام القادم",
      category: "تقنية",
      date: "10 ديسمبر 2024",
      author: "أحمد الخبير",
      readTime: "8 دقائق",
      icon: TrendingUp,
      color: "from-green-700 to-green-600",
    },
    {
      title: "أفضل الممارسات لكتابة البرومبتات الفعالة",
      description: "تعلم كيف تحصل على أفضل النتائج من محادثاتك مع AI",
      category: "إرشادات",
      date: "5 ديسمبر 2024",
      author: "سارة المحترفة",
      readTime: "6 دقائق",
      icon: FileText,
      color: "from-green-600 to-green-500",
    },
    {
      title: "قصص نجاح: كيف غيّر AI حياة مستخدمينا",
      description: "شهادات حقيقية من مستخدمين استفادوا من خدماتنا",
      category: "قصص نجاح",
      date: "1 ديسمبر 2024",
      author: "فريق العملاء",
      readTime: "10 دقائق",
      icon: BookOpen,
      color: "from-green-800 to-green-700",
    },
  ];

  const categories = ["الكل", "إنتاجية", "تقنية", "إرشادات", "قصص نجاح"];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-600/10 via-green-500/10 to-green-400/10 dark:from-green-600/5 dark:via-green-500/5 dark:to-green-400/5" />
        
        <div className="container mx-auto px-4 relative" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">
                مدونة
              </span>
              <br />
              <span className="bg-linear-to-l from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                الذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              آخر الأخبار والنصائح والإرشادات حول عالم الذكاء الاصطناعي
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? 'bg-linear-to-l from-green-600 to-green-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-green-600 dark:hover:border-green-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${post.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <post.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-600 to-green-500" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  
                  <button className="text-green-600 dark:text-green-400 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                    اقرأ المزيد
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-linear-to-br from-green-700 via-green-600 to-green-500">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="text-xl text-green-100 mb-8">
              احصل على آخر المقالات والنصائح مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-green-100 focus:outline-none focus:border-white transition-all"
              />
              <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-3xl p-8">
            <p className="text-green-800 dark:text-green-300 text-lg">
              💡 المزيد من المقالات قادمة قريباً! تابعنا لتبقى على اطلاع بآخر المستجدات.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

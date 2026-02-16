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
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-green-600/10 via-green-500/10 to-green-400/10 dark:from-green-600/5 dark:via-green-500/5 dark:to-green-400/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="text-gray-900 dark:text-white">مدونة</span>
              <br />
              <span className="bg-linear-to-l from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                الذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed dark:text-gray-400">
              آخر الأخبار والنصائح والإرشادات حول عالم الذكاء الاصطناعي
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  index === 0
                    ? "bg-linear-to-l from-green-600 to-green-500 text-white shadow-lg"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-green-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-green-400"
                }`}
                key={index}
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
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {posts.map((post, index) => (
              <article
                className="group cursor-pointer rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                key={index}
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${post.color} mb-6 flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <post.icon className="h-8 w-8 text-white" />
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="font-semibold text-green-600 text-sm dark:text-green-400">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm dark:text-gray-500">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mb-3 font-bold text-2xl text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                  {post.title}
                </h2>

                <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-400">
                  {post.description}
                </p>

                <div className="flex items-center justify-between border-gray-200 border-t pt-4 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-linear-to-br from-green-600 to-green-500" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-gray-500 text-xs dark:text-gray-500">
                        {post.date}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-1 font-semibold text-green-600 transition-all group-hover:gap-2 dark:text-green-400">
                    اقرأ المزيد
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
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-linear-to-br from-green-700 via-green-600 to-green-500 py-20">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl text-white">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="mb-8 text-green-100 text-xl">
              احصل على آخر المقالات والنصائح مباشرة في بريدك الإلكتروني
            </p>
            <div className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
              <input
                className="flex-1 rounded-xl border-2 border-white/30 bg-white/20 px-6 py-4 text-white backdrop-blur-sm transition-all placeholder:text-green-100 focus:border-white focus:outline-none"
                placeholder="بريدك الإلكتروني"
                type="email"
              />
              <button className="rounded-xl bg-white px-8 py-4 font-semibold text-green-600 transition-all hover:scale-105 hover:shadow-xl">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
            <p className="text-green-800 text-lg dark:text-green-300">
              💡 المزيد من المقالات قادمة قريباً! تابعنا لتبقى على اطلاع بآخر
              المستجدات.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

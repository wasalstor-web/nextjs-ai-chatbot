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
      color: "from-amber-500 to-amber-400",
    },
    {
      title: "مستقبل الذكاء الاصطناعي في 2025",
      description: "توقعات واتجاهات تقنية الذكاء الاصطناعي للعام القادم",
      category: "تقنية",
      date: "10 ديسمبر 2024",
      author: "أحمد الخبير",
      readTime: "8 دقائق",
      icon: TrendingUp,
      color: "from-amber-600 to-amber-500",
    },
    {
      title: "أفضل الممارسات لكتابة البرومبتات الفعالة",
      description: "تعلم كيف تحصل على أفضل النتائج من محادثاتك مع AI",
      category: "إرشادات",
      date: "5 ديسمبر 2024",
      author: "سارة المحترفة",
      readTime: "6 دقائق",
      icon: FileText,
      color: "from-amber-500 to-amber-400",
    },
    {
      title: "قصص نجاح: كيف غيّر AI حياة مستخدمينا",
      description: "شهادات حقيقية من مستخدمين استفادوا من خدماتنا",
      category: "قصص نجاح",
      date: "1 ديسمبر 2024",
      author: "فريق العملاء",
      readTime: "10 دقائق",
      icon: BookOpen,
      color: "from-amber-700 to-amber-600",
    },
  ];

  const categories = ["الكل", "إنتاجية", "تقنية", "إرشادات", "قصص نجاح"];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/80 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-amber-400/10 to-amber-300/10 dark:from-amber-500/5 dark:via-amber-400/5 dark:to-amber-300/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="text-slate-900 dark:text-white">مدونة</span>
              <br />
              <span className="bg-linear-to-l from-amber-500 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                الذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed dark:text-slate-400">
              آخر الأخبار والنصائح والإرشادات حول عالم الذكاء الاصطناعي
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  category === "الكل"
                    ? "bg-linear-to-l from-amber-500 to-amber-400 text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-amber-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-amber-300"
                }`}
                key={category}
                type="button"
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
            {posts.map((post) => (
              <article
                className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                key={post.title}
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${post.color} mb-6 flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <post.icon className="h-8 w-8 text-white" />
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="font-semibold text-amber-500 text-sm dark:text-amber-300">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm dark:text-slate-500">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mb-3 font-bold text-2xl text-slate-900 transition-colors group-hover:text-amber-500 dark:text-white dark:group-hover:text-amber-300">
                  {post.title}
                </h2>

                <p className="mb-6 text-slate-600 leading-relaxed dark:text-slate-400">
                  {post.description}
                </p>

                <div className="flex items-center justify-between border-slate-200 border-t pt-4 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-500 to-amber-400" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-slate-500 text-xs dark:text-slate-500">
                        {post.date}
                      </p>
                    </div>
                  </div>

                  <button
                    className="flex items-center gap-1 font-semibold text-amber-500 transition-all group-hover:gap-2 dark:text-amber-300"
                    type="button"
                  >
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
      <section className="bg-linear-to-br from-amber-600 via-amber-500 to-amber-400 py-20">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl text-white">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="mb-8 text-amber-50 text-xl">
              احصل على آخر المقالات والنصائح مباشرة في بريدك الإلكتروني
            </p>
            <div className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
              <input
                className="flex-1 rounded-xl border-2 border-white/30 bg-white/20 px-6 py-4 text-white backdrop-blur-sm transition-all placeholder:text-amber-50 focus:border-white focus:outline-none"
                placeholder="بريدك الإلكتروني"
                type="email"
              />
              <button
                className="rounded-xl bg-white px-8 py-4 font-semibold text-amber-500 transition-all hover:scale-105 hover:shadow-xl"
                type="button"
              >
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-amber-100 bg-amber-50/80 p-8 text-center dark:border-amber-700 dark:bg-amber-900/20">
            <p className="text-amber-700 text-lg dark:text-amber-200">
              💡 المزيد من المقالات قادمة قريباً! تابعنا لتبقى على اطلاع بآخر
              المستجدات.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

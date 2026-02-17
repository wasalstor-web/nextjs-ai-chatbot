import { Database, Eye, FileText, Lock, Shield, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "جمع البيانات",
      content: [
        "نقوم بجمع البيانات التي تقدمها لنا مباشرة عند التسجيل في الخدمة، بما في ذلك الاسم والبريد الإلكتروني.",
        "نجمع أيضاً معلومات عن كيفية استخدامك للخدمة، مثل المحادثات والملفات التي ترفعها.",
        "نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك وتذكر تفضيلاتك.",
      ],
    },
    {
      icon: Lock,
      title: "استخدام البيانات",
      content: [
        "نستخدم بياناتك لتوفير وتحسين خدماتنا وتخصيص تجربتك.",
        "نستخدم المعلومات لإرسال إشعارات وتحديثات مهمة عن الخدمة.",
        "يتم استخدام البيانات لتدريب وتحسين نماذج الذكاء الاصطناعي (بشكل مجهول).",
        "لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة للأغراض التسويقية.",
      ],
    },
    {
      icon: Shield,
      title: "حماية البيانات",
      content: [
        "نستخدم تشفير SSL/TLS لحماية جميع البيانات المنقولة بين جهازك وخوادمنا.",
        "يتم تخزين البيانات في مراكز بيانات آمنة مع نسخ احتياطية منتظمة.",
        "نقوم بمراجعة أمنية دورية لأنظمتنا لضمان أعلى مستوى من الحماية.",
        "فريقنا مدرب على أفضل ممارسات الأمان والخصوصية.",
      ],
    },
    {
      icon: Eye,
      title: "الوصول إلى البيانات",
      content: [
        "يمكنك الوصول إلى بياناتك الشخصية وتعديلها في أي وقت من صفحة الإعدادات.",
        "يمكنك طلب نسخة من جميع بياناتك المخزنة لدينا.",
        "لديك الحق في حذف حسابك وجميع البيانات المرتبطة به في أي وقت.",
      ],
    },
    {
      icon: UserCheck,
      title: "حقوقك",
      content: [
        "حق الوصول: يمكنك الوصول إلى بياناتك الشخصية في أي وقت.",
        "حق التصحيح: يمكنك تصحيح أي معلومات غير دقيقة.",
        "حق الحذف: يمكنك طلب حذف بياناتك الشخصية.",
        "حق الاعتراض: يمكنك الاعتراض على معالجة بياناتك لأغراض معينة.",
        "حق نقل البيانات: يمكنك الحصول على نسخة من بياناتك بتنسيق قابل للقراءة.",
      ],
    },
    {
      icon: FileText,
      title: "ملفات تعريف الارتباط",
      content: [
        "نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الخدمة.",
        "ملفات تعريف الارتباط التحليلية لفهم كيفية استخدام الخدمة.",
        "يمكنك تعطيل ملفات تعريف الارتباط في إعدادات المتصفح، لكن قد يؤثر ذلك على بعض الوظائف.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/80 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-amber-600/10 via-amber-500/10 to-amber-400/10 dark:from-amber-600/5 dark:via-amber-500/5 dark:to-amber-400/5" />

        <div className="container relative mx-auto px-4" dir="rtl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-amber-500 to-amber-400">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 font-bold text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                سياسة الخصوصية
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed dark:text-slate-400">
              نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية
            </p>
            <p className="mt-4 text-slate-500 text-sm dark:text-slate-500">
              آخر تحديث: ديسمبر 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
                مقدمة
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed dark:text-slate-400">
                مرحباً بك في سياسة الخصوصية الخاصة بنا. هذه الوثيقة توضح كيف نجمع
                ونستخدم ونحمي معلوماتك الشخصية عند استخدامك لخدماتنا.
              </p>
              <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                باستخدامك لخدماتنا، فإنك توافق على هذه السياسة. إذا كان لديك أي
                أسئلة أو مخاوف، يرجى التواصل معنا.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section) => (
                <div
                  className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
                  key={section.title}
                >
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-amber-400">
                      <section.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-2xl text-slate-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {section.content.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <span className="mt-1 shrink-0 text-amber-500 dark:text-amber-300">
                          •
                        </span>
                        <span className="text-slate-600 leading-relaxed dark:text-slate-400">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* GDPR Compliance */}
            <div className="mt-8 rounded-3xl bg-linear-to-br from-amber-600 via-amber-500 to-amber-400 p-8 text-white">
              <h2 className="mb-4 font-bold text-2xl">
                الامتثال للوائح العامة لحماية البيانات (GDPR)
              </h2>
              <p className="mb-4 text-amber-50 leading-relaxed">
                نحن ملتزمون بالامتثال للوائح العامة لحماية البيانات (GDPR) وجميع
                القوانين المحلية والدولية ذات الصلة بحماية البيانات.
              </p>
              <p className="text-amber-50 leading-relaxed">
                إذا كنت مقيماً في الاتحاد الأوروبي، لديك حقوق إضافية بموجب GDPR،
                بما في ذلك الحق في الاعتراض على معالجة بياناتك والحق في نقل
                البيانات.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mt-8 rounded-3xl border-2 border-amber-200 bg-amber-50 p-8 dark:border-amber-800 dark:bg-amber-900/20">
              <h2 className="mb-4 font-bold text-2xl text-amber-900 dark:text-amber-300">
                خصوصية الأطفال
              </h2>
              <p className="text-amber-800 leading-relaxed dark:text-amber-400">
                خدماتنا غير موجهة للأطفال دون سن 13 عاماً. لا نجمع عن قصد معلومات
                شخصية من الأطفال. إذا علمنا أننا جمعنا بيانات من طفل دون سن 13،
                سنحذف هذه البيانات فوراً.
              </p>
            </div>

            {/* Updates */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
                تحديثات السياسة
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed dark:text-slate-400">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي
                تغييرات جوهرية عبر البريد الإلكتروني أو إشعار بارز على الخدمة.
              </p>
              <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                نوصي بمراجعة هذه السياسة بشكل دوري للبقاء على اطلاع بكيفية حماية
                معلوماتك.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
                هل لديك أسئلة؟
              </h2>
              <p className="mb-6 text-slate-600 leading-relaxed dark:text-slate-400">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ممارسات البيانات
                لدينا، لا تتردد في التواصل معنا.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-l from-amber-600 via-amber-500 to-amber-400 px-8 py-4 font-semibold text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  href="/contact"
                >
                  تواصل معنا
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-8 py-4 font-semibold text-slate-900 text-lg transition-all hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                  href="mailto:privacy@mubassatlaw.com"
                >
                  privacy@mubassatlaw.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

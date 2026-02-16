"use client";

import { RefreshCw, WifiOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileOfflinePage() {
  const router = useRouter();

  const handleRetry = () => {
    if (navigator.onLine) {
      router.push("/mobile");
      router.refresh();
    } else {
      alert("لا يزال الجهاز غير متصل بالإنترنت");
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-950"
      dir="rtl"
    >
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
          <WifiOff className="h-16 w-16 text-gray-500 dark:text-gray-400" />
        </div>

        {/* Message */}
        <h1 className="mb-4 font-bold text-3xl text-gray-900 dark:text-white">
          غير متصل بالإنترنت
        </h1>
        <p className="mb-8 text-gray-600 leading-relaxed dark:text-gray-400">
          يبدو أن جهازك غير متصل بالإنترنت. تحقق من اتصالك وحاول مرة أخرى.
        </p>

        {/* Retry Button */}
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-green-700 to-green-500 px-8 py-4 font-medium text-white shadow-lg transition-all hover:shadow-xl"
          onClick={handleRetry}
        >
          <RefreshCw className="h-5 w-5" />
          إعادة المحاولة
        </button>

        {/* Tips */}
        <div className="mt-12 rounded-2xl bg-white p-6 text-right dark:bg-gray-800">
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
            نصائح:
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm dark:text-gray-400">
            <li>• تحقق من اتصال Wi-Fi أو بيانات الهاتف</li>
            <li>• حاول تفعيل وضع الطيران ثم إيقافه</li>
            <li>• أعد تشغيل جهاز الراوتر</li>
            <li>• اقترب من مصدر الإشارة</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

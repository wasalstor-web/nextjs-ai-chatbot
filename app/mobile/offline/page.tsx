"use client";

import { WifiOff, RefreshCw } from "lucide-react";
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
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center p-4" dir="rtl">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
          <WifiOff className="w-16 h-16 text-gray-500 dark:text-gray-400" />
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          غير متصل بالإنترنت
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          يبدو أن جهازك غير متصل بالإنترنت. تحقق من اتصالك وحاول مرة أخرى.
        </p>

        {/* Retry Button */}
        <button
          onClick={handleRetry}
          className="inline-flex items-center gap-2 bg-linear-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
        >
          <RefreshCw className="w-5 h-5" />
          إعادة المحاولة
        </button>

        {/* Tips */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 text-right">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            نصائح:
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
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

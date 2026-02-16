"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MobileSplashPage() {
  const router = useRouter();

  useEffect(() => {
    // Register Service Worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => console.log("SW registered:", registration))
        .catch((error) => console.log("SW registration failed:", error));
    }

    // Redirect after animation
    const timer = setTimeout(() => {
      router.push("/mobile");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-green-600 via-green-600 to-green-500">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="flex h-32 w-32 animate-bounce items-center justify-center rounded-3xl bg-white shadow-2xl">
            <span className="text-6xl">🤖</span>
          </div>
          <div className="absolute inset-0 h-32 w-32 animate-ping rounded-3xl bg-white/20" />
        </div>

        {/* App Name */}
        <h1 className="mb-2 animate-fade-in font-bold text-4xl text-white">
          مساعد ذكي
        </h1>
        <p className="mb-8 animate-fade-in-delay text-green-100 text-lg">
          محادثة ذكية بقوة الذكاء الاصطناعي
        </p>

        {/* Loading Indicator */}
        <div className="flex items-center justify-center gap-2 text-white">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-sm">جاري التحميل...</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}

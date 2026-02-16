"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function MobileSplashPage() {
  const router = useRouter();

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('SW registered:', registration))
        .catch((error) => console.log('SW registration failed:', error));
    }

    // Redirect after animation
    const timer = setTimeout(() => {
      router.push('/mobile');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-600 via-green-600 to-green-500 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center animate-bounce">
            <span className="text-6xl">🤖</span>
          </div>
          <div className="absolute inset-0 w-32 h-32 bg-white/20 rounded-3xl animate-ping" />
        </div>

        {/* App Name */}
        <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
          مساعد ذكي
        </h1>
        <p className="text-green-100 text-lg mb-8 animate-fade-in-delay">
          محادثة ذكية بقوة الذكاء الاصطناعي
        </p>

        {/* Loading Indicator */}
        <div className="flex items-center justify-center gap-2 text-white">
          <Loader2 className="w-5 h-5 animate-spin" />
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

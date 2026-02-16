"use client";

import { ArrowRight, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function MobileLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      } else {
        router.push("/mobile");
        router.refresh();
      }
    } catch (err) {
      setError("حدث خطأ أثناء تسجيل الدخول");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-linear-to-br from-green-600 via-green-600 to-green-500 p-4"
      dir="rtl"
    >
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-2xl">
            <span className="text-4xl">🤖</span>
          </div>
          <h1 className="mb-2 font-bold text-3xl text-white">مساعد ذكي</h1>
          <p className="text-green-100">تسجيل الدخول للمتابعة</p>
        </div>

        {/* Login Form */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-2">
              <label className="block font-medium text-gray-700 text-sm">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 text-gray-400" />
                <input
                  className="w-full rounded-xl border border-gray-300 py-3 pr-11 pl-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  type="email"
                  value={email}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block font-medium text-gray-700 text-sm">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 text-gray-400" />
                <input
                  className="w-full rounded-xl border border-gray-300 py-3 pr-11 pl-11 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                />
                <button
                  className="-translate-y-1/2 absolute top-1/2 left-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-left">
              <Link
                className="font-medium text-green-600 text-sm hover:text-green-700"
                href="/mobile/forgot-password"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* Submit Button */}
            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-green-700 to-green-500 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  جاري تسجيل الدخول...
                </>
              ) : (
                <>
                  تسجيل الدخول
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-gray-300 border-t" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">أو</span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              ليس لديك حساب؟{" "}
              <Link
                className="font-medium text-green-600 hover:text-green-700"
                href="/mobile/register"
              >
                إنشاء حساب جديد
              </Link>
            </p>
          </div>

          {/* Guest Mode */}
          <div className="mt-4">
            <Link
              className="block w-full rounded-xl border border-gray-300 py-3 text-center font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="/mobile"
            >
              المتابعة كزائر
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-white opacity-80">
          <p>محمي بواسطة تشفير من طرف إلى طرف 🔒</p>
        </div>
      </div>
    </div>
  );
}

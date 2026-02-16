"use client";

import {
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("كلمات المرور غير متطابقة");
      return;
    }

    if (formData.password.length < 8) {
      setError("يجب أن تكون كلمة المرور 8 أحرف على الأقل");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "فشل إنشاء الحساب");
      }

      router.push("/mobile/login");
    } catch (err: any) {
      setError(err.message || "حدث خطأ أثناء إنشاء الحساب");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-linear-to-br from-green-700 via-green-600 to-green-500 p-4"
      dir="rtl"
    >
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-2xl">
            <span className="text-4xl">🤖</span>
          </div>
          <h1 className="mb-2 font-bold text-3xl text-white">
            إنشاء حساب جديد
          </h1>
          <p className="text-green-100">انضم إلى مساعدك الذكي الآن</p>
        </div>

        {/* Register Form */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Name Input */}
            <div className="space-y-2">
              <label className="block font-medium text-gray-700 text-sm">
                الاسم الكامل
              </label>
              <div className="relative">
                <User className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 text-gray-400" />
                <input
                  className="w-full rounded-xl border border-gray-300 py-3 pr-11 pl-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="أحمد محمد"
                  required
                  type="text"
                  value={formData.name}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="block font-medium text-gray-700 text-sm">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 text-gray-400" />
                <input
                  className="w-full rounded-xl border border-gray-300 py-3 pr-11 pl-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="example@email.com"
                  required
                  type="email"
                  value={formData.email}
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
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

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block font-medium text-gray-700 text-sm">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <Lock className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 text-gray-400" />
                <input
                  className="w-full rounded-xl border border-gray-300 py-3 pr-11 pl-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                />
              </div>
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
                  جاري إنشاء الحساب...
                </>
              ) : (
                <>
                  إنشاء الحساب
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            {/* Terms */}
            <p className="text-center text-gray-500 text-xs">
              بإنشاء حساب، أنت توافق على{" "}
              <Link className="text-green-600 hover:underline" href="/terms">
                الشروط والأحكام
              </Link>{" "}
              و
              <Link className="text-green-600 hover:underline" href="/privacy">
                {" "}
                سياسة الخصوصية
              </Link>
            </p>
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

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              لديك حساب بالفعل؟{" "}
              <Link
                className="font-medium text-green-600 hover:text-green-700"
                href="/mobile/login"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

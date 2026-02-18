"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { AuthForm } from "@/components/auth-form";
import { SubmitButton } from "@/components/submit-button";
import { toast } from "@/components/toast";

export default function Page() {
  const router = useRouter();
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast({ type: "error", description: "أدخل البريد وكلمة المرور" });
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast({ type: "error", description: "بيانات الدخول غير صحيحة!" });
      } else {
        setIsSuccessful(true);
        router.push("/chat");
      }
    } catch {
      toast({ type: "error", description: "حدث خطأ، حاول مرة ثانية" });
    }
  };

  return (
    <div className="flex h-dvh w-screen items-start justify-center bg-background pt-12 md:items-center md:pt-0">
      <div className="flex w-full max-w-md flex-col gap-12 overflow-hidden rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 shadow-lg shadow-zinc-950/10 dark:bg-zinc-100">
            <svg
              className="h-6 w-6 text-white dark:text-zinc-950"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352a5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl dark:text-zinc-50">تسجيل الدخول</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            سجّل دخولك للوصول إلى استشاراتك القانونية
          </p>
        </div>
        <AuthForm action={handleSubmit} defaultEmail="">
          <SubmitButton isSuccessful={isSuccessful}>تسجيل الدخول</SubmitButton>
          <p
            className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400"
            dir="rtl"
          >
            ليس لديك حساب؟{" "}
            <Link
              className="font-semibold text-zinc-900 hover:underline dark:text-zinc-200"
              href="/register"
            >
              أنشئ حساباً مجانياً
            </Link>
          </p>
        </AuthForm>
      </div>
    </div>
  );
}

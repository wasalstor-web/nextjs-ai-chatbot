"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useActionState, useEffect, useState } from "react";

import { AuthForm } from "@/components/auth-form";
import { SubmitButton } from "@/components/submit-button";
import { toast } from "@/components/toast";
import { type LoginActionState, login } from "../actions";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, formAction] = useActionState<LoginActionState, FormData>(
    login,
    {
      status: "idle",
    }
  );

  const { update: updateSession } = useSession();

  // biome-ignore lint/correctness/useExhaustiveDependencies: router and updateSession are stable refs
  useEffect(() => {
    if (state.status === "failed") {
      toast({
        type: "error",
        description: "بيانات الدخول غير صحيحة!",
      });
    } else if (state.status === "invalid_data") {
      toast({
        type: "error",
        description: "تعذّر التحقق من البيانات!",
      });
    } else if (state.status === "success") {
      setIsSuccessful(true);
      updateSession();
      router.refresh();
    }
  }, [state.status]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <div className="flex h-dvh w-screen items-start justify-center bg-background pt-12 md:items-center md:pt-0">
      <div className="flex w-full max-w-md flex-col gap-12 overflow-hidden rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-amber-600 shadow-amber-500/20 shadow-lg">
            <svg className="h-6 w-6 text-slate-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
          </div>
          <h3 className="font-bold text-xl dark:text-zinc-50">تسجيل الدخول</h3>
          <p className="text-slate-500 text-sm dark:text-zinc-400">
            سجّل دخولك للوصول إلى استشاراتك القانونية
          </p>
        </div>
        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton isSuccessful={isSuccessful}>تسجيل الدخول</SubmitButton>
          <p className="mt-4 text-center text-slate-600 text-sm dark:text-zinc-400" dir="rtl">
            ليس لديك حساب؟{" "}
            <Link
              className="font-semibold text-amber-600 hover:underline dark:text-amber-400"
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

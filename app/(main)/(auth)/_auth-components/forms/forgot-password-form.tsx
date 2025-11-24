"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AppInput from "@/app/(main)/_common/AppInput";
import AppImage from "@/app/(main)/_common/AppImage";
import {
  forgotPasswordFormData,
  forgotPasswordSchema,
} from "@/app/_schema/forgrtPasswordSchema";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();

  type FormValues = forgotPasswordFormData & { remember?: boolean };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema as any),
    mode: "onChange",
    defaultValues: { remember: false },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Submitted email:", data.email);
    router.push("/email-confirmation");
    // TODO: Call your API to send password reset email
    // Example: await api.sendResetEmail(data.email);
  };

  const handleResend = () => {
    console.log("Resend code clicked");
    // TODO: Call API to resend the code
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <AppInput
        label="Email"
        type="email"
        rightIcon
        icon={
          <AppImage src={"/icons/Help.svg"} className="size-4" alt="icon" />
        }
        placeholder="your@email.com"
        register={register("email")}
        error={errors.email?.message || ""}
      />

      <div className="w-full flex items-center justify-center">
        <span className=" text-sm text-primary mr-2"> Didn't get a code?</span>
        <button
          type="button"
          onClick={handleResend}
          className="text-sm cursor-pointer  text-primary font-normal underline hover:text-gray-700 transition"
        >
          Click to resend.
        </button>
      </div>

      <div className="gap-4 grid md:grid-cols-2 grid-cols-1 pt-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 rounded-md border border-gray-200 bg-white h-12 text-base text-gray-700 font-bold hover:bg-gray-50 transition focus:outline-none"
        >
          Go back
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="min-w-[260px] flex-1 rounded-md bg-primary text-white font-bold text-base h-12 shadow-sm hover:bg-primary transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

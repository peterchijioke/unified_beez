"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignUpComponent from "../SignUpComponent";
import { SigninFormData, signinSchema } from "@/app/_schema/signinSchema";
import AppInput from "@/app/(main)/_common/AppInput";
import Link from "next/link";

export default function SigninForm() {
  // include remember in the form type so it's typed even if your schema doesn't have it
  type FormValues = SigninFormData & { remember?: boolean };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signinSchema as any),
    mode: "onChange",
    defaultValues: { remember: false },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // handle login
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <AppInput
        label="Email"
        type="email"
        placeholder="your@email.com"
        register={register("email")}
        error={errors.email?.message as unknown as string}
      />

      <AppInput
        label="Password"
        type="password"
        placeholder="Enter password"
        register={register("password")}
        error={errors.password?.message as unknown as string}
      />

      <div className="w-full py-3">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              {...register("remember")}
              className="w-5 h-5 rounded-sm border-2 border-gray-300 focus:ring-0 accent-primary hover:accent-primary"
              aria-label="Remember me"
            />
            <span className="text-sm font-medium text-gray-700">
              Remember me
            </span>
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-medium underline underline-offset-4 decoration-2 decoration-[#1f5f3d] text-[#1f5f3d] hover:opacity-90"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-teal-900 transition-colors"
      >
        Login
      </button>

      <SignUpComponent orWith="or sign in with" />
    </form>
  );
}

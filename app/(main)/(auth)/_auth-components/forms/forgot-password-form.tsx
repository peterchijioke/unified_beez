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

export default function ForgotPasswordForm() {
  type FormValues = forgotPasswordFormData & { remember?: boolean };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema as any),
    mode: "onChange",
    defaultValues: { remember: false },
  });

  const onSubmit = (data: FormValues) => {};

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <AppInput
        label="Email"
        type="email"
        rightIcon
        icon={
          <AppImage src={"/icons/Help.svg"} className=" size-4 " alt="icon" />
        }
        placeholder="your@email.com"
        register={register("email")}
        error={errors.email?.message as unknown as string}
      />

      <div className=" w-full flex items-center justify-center ">
        <span className=" text-sm text-[#545859] font-normal">
          Didn't get a code? Click to resend.
        </span>
      </div>

      <div className=" gap-4 grid md:grid-cols-2 grid-cols-1  pt-6 ">
        <button
          type="button"
          className=" flex-1 rounded-md border border-gray-200 bg-white h-12 text-base text-gray-700 font-bold   hover:bg-gray-50 transition focus:outline-none"
        >
          Go back
        </button>
        <button
          type="button"
          className="min-w-[260px] rounded-md flex-1 bg-primary text-white font-bold text-base h-12 shadow-sm hover:bg-primary transition focus:outline-none"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

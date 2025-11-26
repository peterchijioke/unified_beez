"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Ticket, X } from "lucide-react";
import SignUpComponent from "../SignUpComponent";
import { SignupFormData, signupSchema } from "@/app/_schema/signupSchema";
import AppInput from "@/app/(main)/_common/AppInput";
import AppImage from "@/app/(main)/_common/AppImage";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const password = watch("password") || "";

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&#]/.test(password);

  const onSubmit = (data: SignupFormData) => {
    console.log("Form submitted:", data);
    route.push("/basic-account-setup");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <AppInput
        label="Email"
        placeholder="your@email.com"
        type="email"
        rightIcon
        icon={
          <AppImage src={"/icons/Help.svg"} className="size-4" alt="icon" />
        }
        register={register("email")}
        error={errors.email?.message}
      />

      <AppInput
        label="Password"
        placeholder="Enter password"
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />

      <AppInput
        label="Confirm Password"
        placeholder="Confirm password"
        type="password"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <div className="space-y-2 text-sm">
        {[
          { label: "At least 8 characters", valid: hasMinLength },
          { label: "At least one uppercase letter", valid: hasUppercase },
          { label: "At least one lowercase letter", valid: hasLowercase },
          { label: "At least one digit", valid: hasDigit },
          { label: "At least one special character", valid: hasSpecialChar },
        ].map((req, idx) => (
          <div
            key={idx}
            className={`flex items-center ${
              req.valid ? "text-primary" : "text-gray-400"
            }`}
          >
            <span className="mr-2">
              {req.valid ? <Check size={16} /> : <X size={16} />}
            </span>
            <span>{req.label}</span>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-teal-900 transition-colors"
      >
        Create account
      </button>

      <SignUpComponent />
    </form>
  );
}

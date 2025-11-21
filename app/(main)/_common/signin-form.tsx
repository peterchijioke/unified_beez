"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Ticket, X } from "lucide-react";
import SignUpComponent from "../(auth)/_auth-componets/SignUpComponent";
import { SignupFormData, signupSchema } from "@/app/_schema/signupSchema";

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 border-2 border-primary rounded-xl placeholder:text-[#545859] text-[#545859] focus:ring-4 focus:ring-[#053D2733] focus:border-[#053D2733] bg-white"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className="w-full px-4 py-3 border-2 border-primary placeholder:text-[#545859] text-[#545859] rounded-xl focus:ring-4 focus:ring-[#053D2733] focus:border-[#053D2733] bg-white"
            placeholder="Enter password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
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

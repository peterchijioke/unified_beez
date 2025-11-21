"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

interface AppInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register?: any;
  icon?: React.ReactNode;
  className?: string;
  rightIcon?: boolean;
}

export default function AppInput({
  label,
  type = "text",
  rightIcon,
  placeholder,
  error,
  register,
  icon,
  className = "",
}: AppInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register}
          className={`w-full px-4 py-3 border-2 h-12 border-primary rounded-xl 
            ${icon && !rightIcon ? "pl-10" : icon && rightIcon ? "pr-10" : ""} 
            placeholder:text-[#545859] text-[#545859] 
            focus:ring-4 focus:ring-[#053D2733] focus:border-[#053D2733] 
            bg-white ${className}`}
        />

        {/* Left Icon */}
        {icon && !rightIcon && (
          <span
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400`}
          >
            {icon}
          </span>
        )}
        {icon && rightIcon && (
          <span
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400`}
          >
            {icon}
          </span>
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

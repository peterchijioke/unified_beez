"use client";

import { useState } from "react";
import AppImage from "../../_common/AppImage";
import SignupForm from "./forms/signup-form";
import SigninForm from "./forms/signin-form";

export default function RightSection({ pinIcons = false }) {
  const [isSignUp, setIsSignup] = useState(true);

  return (
    <div className="flex flex-col w-full md:w-full lg:w-1/2 min-h-screen">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-auto pt-8 px-4 md:px-8 lg:px-0">
        <div
          className="
            w-full h-fit max-w-full md:max-w-full lg:max-w-xl
            bg-inherit md:bg-gradient-to-b md:border md:border-[#D0D5DD]
            from-[#E6FAF2] to-[#E3CF9B] md:rounded-3xl p-6 md:p-8 lg:p-8 mb-4
          "
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <AppImage
              alt="logo"
              className="size-auto"
              src={"/icons/UNIFIEDBEEZ LOGO PRIMARY 1 1.svg"}
            />
          </div>

          {/* Toggle Buttons */}
          <div className="flex mb-8 bg-[#F6F6F6] rounded-md p-2">
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 px-4 text-nowrap rounded-md font-medium transition ${
                isSignUp ? "bg-white text-gray-800 shadow" : "text-gray-400"
              }`}
            >
              Create Account
            </button>
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 px-4 text-nowrap rounded-md font-medium transition ${
                !isSignUp ? "bg-white text-gray-800 shadow" : "text-gray-400"
              }`}
            >
              Log In
            </button>
          </div>

          {/* Forms */}
          {isSignUp ? <SignupForm /> : <SigninForm />}
        </div>
      </div>

      {/* Social icons at bottom */}
      <div className="w-full flex flex-wrap items-center justify-center gap-3 p-5 md:p-8 border-t border-gray-200">
        {socialIcons.map((item, index) => (
          <AppImage
            key={index}
            alt=""
            className="w-10 h-10 md:w-12 md:h-12 lg:w-auto lg:h-auto"
            src={item}
          />
        ))}
      </div>
    </div>
  );
}

// Social icons list
const socialIcons = [
  "/icons/whatapp.svg",
  "/icons/facebook.svg",
  "/icons/instagram.svg",
  "/icons/Calendly.svg",
  "/icons/edidi.svg",
  "/icons/zill.svg",
  "/icons/Slack.svg",
  "/icons/shopify.svg",
  "/icons/paypal.svg",
];

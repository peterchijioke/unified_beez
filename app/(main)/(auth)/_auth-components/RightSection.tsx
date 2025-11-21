"use client";

import { useState } from "react";
import AppImage from "../../_common/AppImage";
import SignupForm from "./forms/signup-form";
import SigninForm from "./forms/signin-form";

export default function RightSection({ pinIcons = false }) {
  const [isSignUp, setIsSignup] = useState(true);

  return (
    <div className="flex flex-col w-full lg:w-1/2 min-h-screen overflow-auto">
      {/* Form container */}
      <div className="flex flex-col md:flex-1 items-center justify-center w-full pt-8 px-4 md:px-8 lg:px-12">
        <div
          className="
            w-full max-w-md md:max-w-full lg:max-w-xl
            bg-inherit md:bg-gradient-to-b md:border md:border-[#D0D5DD]
            from-[#E6FAF2] to-[#E3CF9B] md:rounded-3xl p-6 md:p-8 mb-4
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
      <div className="w-full flex flex-wrap items-end  justify-center gap-3 p-5 md:p-8">
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

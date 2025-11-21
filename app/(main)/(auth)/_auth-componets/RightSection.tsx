"use client";
import { useState } from "react";
import AppImage from "../../_common/AppImage";
import SignupForm from "../../_common/signup-form";
import SigninForm from "../../_common/signin-form";

const uploadedScreenshot = "/mnt/data/iPhone-13-PRO-localhost.png";

export default function RightSection({ pinIcons = false }) {
  const [isSignUp, setIsSignup] = useState(true);

  return (
    <div className="h-dvh overflow-auto md:w-1/2 w-full flex md:justify-center justify-start items-center flex-col pt-8">
      <div className="flex flex-col h-full w-full items-center justify-center">
        <div
          className="
            w-full h-fit md:mx-auto  max-w-full md:max-w-xl
            bg-inherit md:bg-gradient-to-b md:border md:border-[#D0D5DD]
            from-[#E6FAF2] to-[#E3CF9B] md:rounded-3xl p-8 md:mb-4
          "
        >
          <div className="flex justify-center mb-8">
            <AppImage
              alt="logo"
              className="size-auto"
              src={"/icons/UNIFIEDBEEZ LOGO PRIMARY 1 1.svg"}
            />
          </div>

          <div className="flex mb-8 bg-[#F6F6F6] rounded-md p-2">
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 px-4 rounded-md font-medium ${
                isSignUp ? "bg-white text-gray-800 shadow" : "text-gray-400"
              }`}
            >
              Create Account
            </button>
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 px-4 rounded-md font-medium ${
                !isSignUp ? "bg-white text-gray-800 shadow" : "text-gray-400"
              }`}
            >
              Log In
            </button>
          </div>

          {isSignUp ? <SignupForm /> : <SigninForm />}
          <div className="max-w-xl mx-auto flex md:hidden pb-5 items-center justify-center gap-3 flex-wrap">
            {socialIcons.map((item, index) => (
              <AppImage key={index} alt="" className="size-10" src={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mx-auto hidden md:flex pb-5 items-center justify-center gap-3">
        {socialIcons.map((item, index) => (
          <AppImage key={index} alt="" className="size-auto" src={item} />
        ))}
      </div>
    </div>
  );
}

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

"use client";

import AppImage from "../../_common/AppImage";
import EmailVerification from "../_auth-components/forms/EmailVerification";
import ForgotPasswordForm from "../_auth-components/forms/forgot-password-form";

export default function EmailVerificationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2E9DE]">
      <div className="flex-1 overflow-auto flex justify-center  md:px-0 py-8">
        <div className="w-full max-w-full md:max-w-xl flex items-center justify-center">
          <div
            className="
              w-full h-fit
              bg-inherit md:bg-gradient-to-br md:border md:border-[#D0D5DD]
              from-[#E6FAF2] to-[#E3CF9B] md:rounded-3xl p-8
            "
          >
            <div className="flex justify-center mb-5">
              <AppImage
                alt="logo"
                className="size-auto"
                src={"/icons/email.svg"}
              />
            </div>

            <div className="flex flex-col items-center gap-2 pb-6">
              <span className="text-xl text-black font-semibold">
                Please check your email.
              </span>
              <span className="text-sm text-[#0B1012B2] text-center">
                We've sent a code to brian@unifiedbeez.com
              </span>
            </div>

            <EmailVerification />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-3 p-5">
        {socialIcons.map((item, index) => (
          <AppImage
            key={index}
            alt=""
            className="size-10 md:size-auto"
            src={item}
          />
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

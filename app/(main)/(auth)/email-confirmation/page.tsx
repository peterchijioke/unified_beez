"use client";

import AppImage from "../../_common/AppImage";
import { SetupHeader } from "../../_common/SetupHeader";
import EmailVerification from "../_auth-components/forms/EmailVerification";

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
            <SetupHeader
              imagePath="/icons/email.svg"
              title=" Please check your email."
              caption="We've sent a code to brian@unifiedbeez.com"
            />

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

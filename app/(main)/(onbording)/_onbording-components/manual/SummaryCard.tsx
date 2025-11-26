import AppImage from "@/app/(main)/_common/AppImage";
import React from "react";

export function SummaryCard({ compact = false }) {
  return (
    <div
      className={`bg-[#f9fafb] rounded-2xl p-3 border border-[#dde2e8] ${
        compact ? "" : "lg:sticky lg:top-8"
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Icon area */}
        <AppImage
          className=" size-auto"
          src={"/icons/portmanto.svg"}
          alt="logo"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-[#0B1012] font-semibold leading-tight">
              Business Plan
            </span>
            <span className="text-xs bg-[#829E93] px-3 py-1 rounded-full text-primary font-medium">
              Your Plan
            </span>
          </div>
          <div className="text-sm text-[#545859] mt-2">
            The most important features of your plan.{" "}
            <a className="underline text-primary cursor-pointer">
              Compare plans
            </a>
          </div>
        </div>
        <span className="md:text-2xl text-lg font-bold text-primary tracking-tight">
          £219.2
          <span className="text-base font-normal text-[#545859]">
            /per month
          </span>
        </span>
      </div>

      <div className=" grid py-5 md:grid-cols-2 grid-cols-1 gap-4 ">
        <div className=" grid gap-2">
          <button className=" rounded-md bg-gray-300 w-fit p-1 text-sm">
            Add on
          </button>
          <div className=" flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-[#232d17] text-base">
              <span className="w-5 h-5 bg-[#36bb80] rounded-full flex items-center justify-center text-white mr-1">
                ✓
              </span>
              3 Extra Seats
            </div>
            <div className="flex items-center gap-2 text-[#232d17] text-base">
              <span className="w-5 h-5 bg-[#36bb80] rounded-full flex items-center justify-center text-white mr-1">
                ✓
              </span>
              2 Extra AI Assistant
            </div>
            <div className="flex items-center gap-2 text-[#232d17] text-base">
              <span className="w-5 h-5 bg-[#36bb80] rounded-full flex items-center justify-center text-white mr-1">
                ✓
              </span>
              2 Extra Whatsapp Channel
            </div>
          </div>{" "}
        </div>

        <div className="mt-5 flex gap-2 justify-end h-fit">
          <button className="px-6 cursor-pointer py-1 rounded-lg bg-primary text-white font-semibold">
            Upgrade Plan
          </button>
          <button className="px-3 py-1 cursor-pointer rounded-lg bg-white border border-[#dde2e8]">
            <span className="text-xl font-bold text-[#676c6d]">...</span>
          </button>
        </div>
      </div>
    </div>
  );
}

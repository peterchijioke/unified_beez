import React from "react";
import { SummaryCard } from "./SummaryCard";
import { AccountSummaryForm } from "./AccountSummaryForm";
import { Play, X } from "lucide-react";

export function MainContent() {
  return (
    <main className="flex-1 ">
      <div className="flex items-center justify-between mb-6">
        <div className=" md:flex hidden" />
        <div className="flex gap-2">
          <button className="text-sm cursor-pointer flex items-center text-nowrap gap-2 px-3 py-1 border rounded-md">
            <Play className=" text-primary text-base size-3" /> Play Tutorial
          </button>
          <button className=" flex cursor-pointer items-center gap-2 text-sm px-3 py-1 border rounded-md text-red-600">
            <X className=" text-red-500 size-3" /> Exit
          </button>
        </div>
      </div>

      <div className="bg-green-50/60 rounded-2xl p-6 md:p-10 flex flex-col gap-3   justify-center items-center">
        <div
          className=" rounded-lg shadow mb-6  bg-gradient-to-br 
              from-[#FFFFFF] p-2 via-[#FCEDC6] to-[#FCEDC6]"
        >
          Step 01/08
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Account Summary
        </h1>
        <p className="text-center text-sm text-slate-600 mb-6">
          Choose your preferred login method and plan to begin setting up your
          UnifiedBeez experience.
        </p>

        <div className="grid w-full ">
          <AccountSummaryForm />
        </div>
      </div>
    </main>
  );
}

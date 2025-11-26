import React from "react";
import { SummaryCard } from "./SummaryCard";
import { AccountSummaryForm } from "./AccountSummaryForm";

export function MainContent() {
  return (
    <main className="flex-1 ">
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
          Step 01/08
        </div>
        <div className="flex gap-2">
          <button className="text-sm px-3 py-1 border rounded-md">
            Play Tutorial
          </button>
          <button className="text-sm px-3 py-1 border rounded-md text-red-600">
            Exit
          </button>
        </div>
      </div>

      <div className="bg-green-50/60 rounded-xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Account Summary
        </h1>
        <p className="text-center text-sm text-slate-600 mb-6">
          Choose your preferred login method and plan to begin setting up your
          UnifiedBeez experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <AccountSummaryForm />
          </div>

          {/* Right: Summary panel */}
          <div className="lg:col-span-1">
            <SummaryCard />
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-white border border-slate-200 py-3 rounded-md">
            Go back
          </button>
          <button className="flex-1 bg-emerald-900 text-white py-3 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

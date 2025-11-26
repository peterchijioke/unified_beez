import React from "react";
export function SummaryCard({ compact = false }) {
  return (
    <div
      className={`bg-white rounded-xl p-4 shadow-sm border border-slate-100 ${
        compact ? "" : "lg:sticky lg:top-8"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
          📦
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-semibold">Business Plan</div>
            <div className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-500">
              Your Plan
            </div>
          </div>
          <div className="text-xs text-slate-400 mt-1">
            The most important features of your plan.{" "}
            <a className="underline text-slate-700">Compare plans</a>
          </div>
        </div>
        <div className="text-2xl font-bold">£219.2</div>
      </div>

      <div className="mt-4 border-t pt-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />{" "}
          3 Extra Seats
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />{" "}
          2 Extra AI Assistant
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />{" "}
          2 Extra Whatsapp Channel
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <button className="py-2 px-3 rounded-md border">Upgrade Plan</button>
        <button className="py-2 px-3 rounded-full border bg-slate-50">
          ...
        </button>
      </div>
    </div>
  );
}

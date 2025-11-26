import React from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export default function UnifiedBeenzOnboarding() {
  return (
    <div className=" text-slate-800">
      <div className=" mx-auto py-8 px-4 lg:px-6">
        <div className="overflow-hidden flex flex-col gap-4 lg:flex-row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

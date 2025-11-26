"use client";

import AppImage from "../../_common/AppImage";
import { SetupHeader } from "../../_common/SetupHeader";
import CopilotLayout from "../_onbording-components/copilot/CopilotLayout";
import BasicAccountSetupForms from "../_onbording-components/forms/BasicAccountSetupForms";

export default function CopilotAccountSetupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2E9DE]">
      <div className="flex-1 overflow-auto flex justify-center  md:px-0 py-8">
        <div className="w-full max-w-full md:max-w-xl flex items-center justify-center">
          <CopilotLayout />
        </div>
      </div>
    </div>
  );
}

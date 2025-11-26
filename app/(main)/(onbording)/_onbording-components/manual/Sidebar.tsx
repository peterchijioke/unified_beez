import AppImage from "@/app/(main)/_common/AppImage";
import { StepList } from "./StepList";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-72 bg-white overflow-hidden rounded-xl border border-[#D0D5DD80] ">
      <div
        className="flex py-3 px-2 items-center gap-3  bg-gradient-to-br 
              from-[#053D27] via-[#053D27] to-[#FAB403]"
      >
        <AppImage src={"/ICONS/beeName.svg"} alt="" className=" size-auto" />
      </div>

      <nav className="text-xs p-4 ">
        <StepList />
      </nav>
    </aside>
  );
}

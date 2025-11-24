import React from "react";
import { SetupHeader } from "../../_common/SetupHeader";
import AppImage from "../../_common/AppImage";

type Props = {
  close: () => void;
};

export default function ModalContent({ close }: Props) {
  return (
    <div
      className="
                     w-full h-fit
                     md:border md:border-[#D0D5DD]
                     bg-white md:rounded-3xl md:max-w-2xl p-8
                   "
    >
      <SetupHeader
        imagePath="/icons/BEEWhite.svg"
        title="Welcome to UnifiedBeez "
        caption="Welcome to UnifiedBeez. Let's get your AI assistant and communication channels set up. It only takes a few minutes"
      />

      <div className=" w-full gap-3 flex flex-col ">
        <button className=" w-full h-12 cursor-pointer hover:shadow rounded-lg text-base gap-2 bg-primary font-semibold items-center justify-center flex">
          Start Setup
        </button>
        <button className=" w-full h-12 bg-[#FAB4031A] cursor-pointer hover:shadow rounded-lg gap-2 font-semibold text-primary text-base items-center justify-center flex">
          Skip & Explore Dashboard
          <AppImage
            src={"/icons/chevron-right.svg"}
            alt="bee"
            className=" size-4"
          />
        </button>
        <button
          onClick={close}
          className=" w-full h-12 bg-white border border-[#D0D5DD] mt-2 cursor-pointer hover:shadow rounded-lg gap-2 font-semibold text-[#344054] text-base items-center justify-center flex"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

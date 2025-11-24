"use client";
import React, { Fragment, useState } from "react";
import AppImage from "../../_common/AppImage";
import Modal from "../../_common/Modal";
import { SetupHeader } from "../../_common/SetupHeader";
import ModalContent from "./ModalContent";

export default function ActionButtons() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => setModalOpen(true);
  return (
    <Fragment>
      <div className=" grid gap-3 mt-5">
        <button
          onClick={handleButtonClick}
          className=" w-full h-12 cursor-pointer hover:shadow rounded-lg text-base gap-2 bg-primary font-semibold items-center justify-center flex"
        >
          Let BeeZora Set Everything Up For Me
          <AppImage src={"/icons/bee-icon.svg"} alt="bee" className=" size-4" />
        </button>
        <button
          onClick={handleButtonClick}
          className=" w-full h-12 bg-[#FAB403] cursor-pointer hover:shadow rounded-lg gap-2 font-semibold text-primary text-base items-center justify-center flex"
        >
          Customize It Myself Instead
          <AppImage
            src={"/icons/chevron-right.svg"}
            alt="bee"
            className=" size-4"
          />
        </button>
        <button className=" w-full h-12 bg-white border border-[#D0D5DD] mt-2 cursor-pointer hover:shadow rounded-lg gap-2 font-semibold text-[#344054] text-base items-center justify-center flex">
          Go back
        </button>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalContent close={() => setModalOpen(false)} />
      </Modal>
    </Fragment>
  );
}

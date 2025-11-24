"use client";
import AppImage from "@/app/(main)/_common/AppImage";
import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  imageUrl?: string;
};

export function ProfileImageUploader({ imageUrl }: Props) {
  const { register, setValue } = useFormContext();
  const [preview, setPreview] = useState<string | undefined>(imageUrl);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file); // zod expects File instance
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function triggerFileInput() {
    fileInputRef.current?.click();
  }

  // Placeholder if no image
  const avatar = preview || "https://github.com/evilrabbit.png";

  return (
    <div className="flex gap-4 items-center mb-4">
      <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
        <img
          src={avatar}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div>
        <div className="font-semibold mb-1 text-black">
          Profile Image{" "}
          <span className="text-xs text-gray-500">(Optional)</span>
        </div>
        <div className="text-sm text-[#545859] mb-2">
          The image is displayed on your UnifiedBeez account.
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={triggerFileInput}
            className="px-4 py-2 bg-gray-100 hover:shadow cursor-pointer text-[#545859] rounded-lg flex items-center gap-1"
          >
            <AppImage src={"/icons/upload.svg"} alt="" /> Upload photo
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 cursor-pointer hover:shadow text-[#545859] rounded-lg flex items-center gap-1"
          >
            <AppImage src={"/icons/camera.svg"} alt="" /> Take a photo
          </button>
        </div>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={(e) => {
            fileInputRef.current = e;
            register("image").ref(e);
          }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

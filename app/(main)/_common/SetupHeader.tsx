import React from "react";

interface SetupHeaderProps {
  imagePath: string;
  title: string;
  caption: string;
  imageAlt?: string;
  imageClassName?: string;
}

export const SetupHeader: React.FC<SetupHeaderProps> = ({
  imagePath,
  title,
  caption,
  imageAlt = "Header image",
  imageClassName = "size-auto",
}) => {
  return (
    <>
      <div className="flex justify-center mb-5">
        <img alt={imageAlt} className={imageClassName} src={imagePath} />
      </div>

      <div className="flex flex-col items-center gap-2 pb-6">
        <span className="text-xl text-black font-semibold">{title}</span>
        <span className="text-sm text-[#0B1012B2] text-center">{caption}</span>
      </div>
    </>
  );
};

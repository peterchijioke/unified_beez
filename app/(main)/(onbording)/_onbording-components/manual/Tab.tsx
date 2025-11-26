import classNames from "classnames";
import React, { useState } from "react";

type Props = {
  data: any;
  i: number;
  parent: number;
  setParent: (i: number) => void;
  childList: string;
  setChildList: (child: string) => void;
};

export default function Tab({
  data,
  i,
  parent,
  setParent,
  childList,
  setChildList,
}: Props) {
  const s = data;

  return (
    <div className="flex items-start cursor-pointer gap-3 p-2 rounded-md">
      <div className="flex-1">
        <button
          onClick={() => setParent(i)}
          className={classNames(
            " text-wrap text-start text-[#C5C6C9] font-bold line-clamp-2 truncate cursor-pointer  text-sm w-full",
            parent === i
              ? "border-l-2 border-primary pl-2 text-primary "
              : "border-l-0"
          )}
        >
          {s.title}
        </button>

        {Array.isArray(s.children) && parent === i && (
          <div className="flex-col gap-3 flex w-full mt-2">
            {s.children.map((child: any, index: number) => {
              return (
                <button
                  key={index}
                  onClick={() => setChildList(child)}
                  className={classNames(
                    "font-medium gap-3 py-2 text-[#C5C6C9] line-clamp-2 truncate px-3 flex flex-row items-center justify-between text-start cursor-pointer rounded-lg text-sm",
                    childList === child
                      ? "bg-gradient-to-br text-primary font-semibold border border-primary from-[#FFFFFF] via-[#FFFFFF] to-[#FCEDC6]"
                      : "border-none"
                  )}
                >
                  <span className="flex-1 text-wrap line-clamp-2 truncate">
                    {child}
                  </span>
                  <div
                    className={classNames(
                      "rounded-full size-5 border-2",
                      childList === child
                        ? "border-primary"
                        : "border-[#B2B4B1B2]"
                    )}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import { useTabStore } from "@/app/(main)/app-state/useTabStore";
import classNames from "classnames";
import React from "react";

interface TabData {
  title: string;
  children?: string[];
}

interface TabProps {
  data: TabData;
  i: number;
}

export default function Tab({ data, i }: TabProps) {
  const { parent, setParent, childList, setChildList } = useTabStore();

  const isParentActive = parent === i;
  const hasChildren = Array.isArray(data.children);

  return (
    <div className="flex items-start cursor-pointer gap-3 p-2 rounded-md">
      <div className="flex-1">
        <button
          onClick={() => setParent(i)}
          className={classNames(
            "text-wrap text-start text-[#C5C6C9] font-bold line-clamp-2 truncate cursor-pointer text-sm w-full",
            isParentActive
              ? "border-l-2 border-primary pl-2 text-primary"
              : "border-l-0 hover:text-primary"
          )}
        >
          {data.title}
        </button>

        {hasChildren && isParentActive && (
          <div className="flex-col gap-3 flex w-full mt-2">
            {data.children!.map((child: string, index: number) => {
              const isChildActive = childList === child;

              return (
                <button
                  key={index}
                  onClick={() => setChildList(child)}
                  className={classNames(
                    "font-medium gap-3 py-2 text-[#C5C6C9] line-clamp-2 truncate px-3 flex flex-row items-center  justify-between text-start cursor-pointer rounded-lg text-sm",
                    isChildActive
                      ? "bg-gradient-to-br text-primary font-semibold border border-primary from-[#FFFFFF] via-[#FFFFFF] to-[#FCEDC6]"
                      : "border-none hover:text-primary"
                  )}
                >
                  <span className="flex-1 text-wrap line-clamp-2 truncate">
                    {child}
                  </span>
                  <div
                    className={classNames(
                      "rounded-full size-5 border-2",
                      isChildActive ? "border-primary" : "border-[#B2B4B1B2]"
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

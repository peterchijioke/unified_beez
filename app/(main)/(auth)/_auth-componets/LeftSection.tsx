"use client";
import React, { useState, useEffect } from "react";
import AppImage from "../../_common/AppImage";

const sliderContent = [
  {
    id: 1,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-1 4.svg",
    caption:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
    },
  },
  {
    id: 2,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-2 1.svg",
    caption:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
    },
  },
  {
    id: 3,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-3 1.svg",
    caption:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
    },
  },
  {
    id: 4,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-4 1.svg",
    caption:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
    },
  },
];

export function LeftSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const item = sliderContent[currentSlide];

  return (
    <div className="w-full h-full md:w-1/2 bg-[url('/images/background.png')] bg-cover relative bg-center text-white p-8 md:p-20 hidden md:flex flex-col justify-between min-h-screen transition-all duration-500">
      <AppImage
        src={item.image}
        className="size-auto absolute top-0 bottom-0 self-center opacity-10"
        alt=""
      />
      {/* indicator */}
      <div className="w-full justify-between flex gap-2 items-center py-5">
        {sliderContent.map((_, idx) => (
          <div
            key={idx}
            className={`flex-1 h-1 rounded-full ${
              idx === currentSlide ? "bg-white" : "bg-[#FAB40333]"
            }`}
          />
        ))}
      </div>

      <div className="space-y-4 flex-1 flex-col flex pt-20">
        <div className="flex-1">
          <h2 className="text-lg md:text-2xl font-semibold mb-6">
            {item.title}
          </h2>
          <p className="text-blue-100">{item.caption}</p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <p className="text-[#545859] mb-4">{item.testimonial.text}</p>
          <div className="flex items-center gap-3">
            <AppImage
              alt="profile"
              className="rounded-full size-10"
              src={item.testimonial.profileImage}
            />
            <div>
              <p className="font-semibold text-[#053D27]">
                {item.testimonial.name}
              </p>
              <p className="text-sm text-[#545859]">{item.testimonial.tag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

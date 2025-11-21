"use client";
import React, { useState, useEffect } from "react";
import AppImage from "../../_common/AppImage";

// Slide data
const sliderContent = [
  {
    id: 1,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-1 4.svg",
    caption:
      "UnifiedBeez helps businesses simplify and supercharge customer communication through AI, automation, and multi-channel messaging.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers.",
    },
  },
  {
    id: 2,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-2 1.svg",
    caption:
      "UnifiedBeez helps businesses simplify and supercharge customer communication through AI, automation, and multi-channel messaging.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers.",
    },
  },
  {
    id: 3,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-3 1.svg",
    caption:
      "UnifiedBeez helps businesses simplify and supercharge customer communication through AI, automation, and multi-channel messaging.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers.",
    },
  },
  {
    id: 4,
    title:
      "Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.",
    image: "/icons/slide-4 1.svg",
    caption:
      "UnifiedBeez helps businesses simplify and supercharge customer communication through AI, automation, and multi-channel messaging.",
    testimonial: {
      name: "Ariana Grande",
      tag: "Visual Designer, Google",
      profileImage: "https://github.com/shadcn.png",
      text: "Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers.",
    },
  },
];

export function LeftSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const item = sliderContent[currentSlide];

  return (
    <div className="hidden lg:flex w-full lg:w-1/2 h-full bg-[url('/images/background.png')] bg-cover relative bg-center text-white p-8 lg:p-20 flex-col justify-between min-h-screen transition-all duration-500">
      {/* Background image overlay */}
      <AppImage
        src={item.image}
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 w-1/2 lg:w-auto"
        alt=""
      />

      {/* Slide indicators */}
      <div className="w-full flex justify-between gap-2 items-center py-5">
        {sliderContent.map((_, idx) => (
          <div
            key={idx}
            className={`flex-1 h-1 rounded-full ${
              idx === currentSlide ? "bg-white" : "bg-[#FAB40333]"
            }`}
          />
        ))}
      </div>

      {/* Slide content */}
      <div className="space-y-4 flex-1 flex flex-col pt-20">
        <div className="flex-1">
          <h2 className="text-lg lg:text-4xl font-semibold mb-6">
            {item.title}
          </h2>
          <p className="text-blue-100 text-sm lg:text-base">{item.caption}</p>
        </div>

        {/* Testimonial card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-[#545859] mb-4 text-sm lg:text-base">
            {item.testimonial.text}
          </p>
          <div className="flex items-center gap-3">
            <AppImage
              alt="profile"
              className="rounded-full w-10 h-10 lg:w-12 lg:h-12"
              src={item.testimonial.profileImage}
            />
            <div>
              <p className="font-semibold text-[#053D27] text-sm lg:text-base">
                {item.testimonial.name}
              </p>
              <p className="text-xs lg:text-sm text-[#545859]">
                {item.testimonial.tag}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

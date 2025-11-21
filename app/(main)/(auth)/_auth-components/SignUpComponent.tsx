import React from "react";
import AppImage from "../../_common/AppImage";

export default function SignUpComponent({
  orWith = "or sign up with",
}: {
  orWith?: string;
}) {
  return (
    <div className=" w-full py-6">
      <div className="w-full max-w-2xl">
        {/* Divider with text */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-400"></div>
          <span className="text-gray-600 text-sm">{orWith}</span>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Auth buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Google button */}
          <button className="bg-white rounded-md cursor-pointer h-11 flex-1 py-1 px-6 flex items-center justify-center gap-1 hover:shadow-md">
            <AppImage
              alt="google"
              className=" size-5"
              src={"/icons/google.svg"}
            />
            <span className="text-gray-800 font-medium">Google</span>
          </button>

          <button className="bg-white rounded-md flex-1 h-11  py-1 px-6 flex items-center cursor-pointer justify-center gap-2 hover:shadow-md">
            <AppImage
              alt="google"
              className=" size-5"
              src={"/icons/apple.svg"}
            />
            <span className="text-gray-800 font-medium text-nowrap">Apple</span>
          </button>
          <button className="bg-white rounded-md flex-1 h-11  py-1 px-6 flex items-center cursor-pointer justify-center gap-2 hover:shadow-md">
            <AppImage
              alt="google"
              className=" size-5"
              src={"/icons/microsoft.svg"}
            />
            <span className="text-gray-800 font-medium text-nowrap">
              Microsoft
            </span>
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          By continuing, you agree to UnifiedBeez's Terms of Service and
          acknowledge that you've read our Privacy Policy.
        </p>
      </div>
    </div>
  );
}

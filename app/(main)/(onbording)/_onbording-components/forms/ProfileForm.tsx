import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ProfileFormValues, profileSchema } from "@/app/_schema/profileSchema";
import AppInput from "@/app/(main)/_common/AppInput";
import AppImage from "@/app/(main)/_common/AppImage";
import { ProfileImageUploader } from "./ProfileImageUploader";
import { useRouter } from "next/navigation";

export function ProfileForm() {
  const route = useRouter();
  const methods = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data, "===========DATA");

    route.push("/step-one-welcome");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <ProfileImageUploader />

        <div className=" flex flex-col gap-4">
          <AppInput
            label="First Name"
            rightIcon
            icon={
              <AppImage src={"/icons/Help.svg"} className="size-4" alt="icon" />
            }
            register={register("firstName")}
            error={errors.firstName?.message as unknown as string}
          />
          <AppInput
            label="Last Name"
            icon={
              <AppImage src={"/icons/Help.svg"} className="size-4" alt="icon" />
            }
            rightIcon
            register={register("lastName")}
            error={errors.lastName?.message as unknown as string}
          />

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Phone Number
            </label>
            <PhoneInput
              value={control._formValues.phoneNumber}
              onChange={(value) => setValue("phoneNumber", value ?? "")}
              defaultCountry="GB"
              international
              className="placeholder:text-[#545859] text-[#545859] border-[#c6c9cb] 
            focus:ring-4 focus:ring-[#053D2733] focus-visible:outline-primary 
            bg-white w-full px-4 py-3 border h-12 focus:outline-none rounded-xl "
            />
            <span className="text-sm text-red-400">
              {errors.phoneNumber?.message}
            </span>
          </div>
        </div>

        <div className="flex w-full gap-3 pt-5">
          <button
            type="button"
            className="px-4 text-[#0B1012B2] cursor-pointer hover:shadow h-12 py-2 bg-white flex-1 rounded-xl"
          >
            Go back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary cursor-pointer hover:shadow h-12 flex-1 text-white rounded-xl"
          >
            Continue
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

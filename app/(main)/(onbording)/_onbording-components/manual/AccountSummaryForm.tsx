import React from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input/input";
import { SummaryCard } from "./SummaryCard";
import AppInput from "../../../_common/AppInput";
import AppImage from "../../../_common/AppImage";

const accountSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name is too long" }),

  email: z.string().email({ message: "Please enter a valid email" }),
  phoneNumber: z
    .string()
    .min(5, { message: "Please enter a valid phone number" }),
});

type AccountFormValues = z.infer<typeof accountSchema>;

export function AccountSummaryForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AccountFormValues>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: AccountFormValues) {
    // TODO: Replace with your API call / flow
    console.log("Form submitted:", values);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <section>
        <h3 className="font-semibold mb-3 text-[#0B1012]">Personal details</h3>

        <div className="space-y-4">
          {/* First name */}
          <AppInput
            label="First Name"
            rightIcon
            icon={
              <AppImage src={"/icons/Help.svg"} className="size-4" alt="icon" />
            }
            register={register("firstName")}
            error={errors.firstName?.message as unknown as string}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className=" flex-1">
              <AppInput
                label="Email"
                rightIcon
                // icon={
                //   <AppImage
                //     src={"/icons/Help.svg"}
                //     className="size-4"
                //     alt="icon"
                //   />
                // }
                register={register("email")}
                error={errors.email?.message as unknown as string}
                type="email"
              />
            </div>
            <div className="mb-4 flex-1 ">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>

              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value ?? ""}
                    onChange={(val) => {
                      const v = val ?? "";
                      onChange(v);
                      setValue("phoneNumber", v, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
                    }}
                    country="GB"
                    international
                    className="placeholder:text-[#545859] text-[#545859] border-[#c6c9cb] focus:ring-4 focus:ring-[#053D2733] focus-visible:outline-primary bg-white w-full px-4 py-3 border h-12 focus:outline-none rounded-xl"
                  />
                )}
              />

              <span className="text-sm text-red-400">
                {errors.phoneNumber?.message}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-semibold mb-3">Summary</h3>
        <div className=" w-full">
          <SummaryCard />
        </div>
      </section>

      <div className="flex gap-3 mt-9">
        <button
          type="button"
          className="flex-1 h-12 bg-white border border-slate-200 py-3 rounded-md"
          onClick={() => {
            console.log("to-do");
          }}
        >
          Go back
        </button>

        <button
          type="submit"
          className="flex-1 h-12 bg-primary text-white py-3 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Continue"}
        </button>
      </div>
    </form>
  );
}

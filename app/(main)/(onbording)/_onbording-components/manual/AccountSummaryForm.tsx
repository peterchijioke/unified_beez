import React from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input/input";
import { SummaryCard } from "./SummaryCard";
import AppInput from "../../../_common/AppInput";
import AppImage from "../../../_common/AppImage";

// Zod schema
const accountSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name is too long" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name is too long" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phoneNumber: z
    .string()
    .min(5, { message: "Please enter a valid phone number" }), // basic check, you can add regex or refine
});

// Type inferred from Zod
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
      lastName: "",
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
        <h3 className="font-semibold mb-3">Personal details</h3>

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

          {/* Last name / Email / Phone in grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <AppInput
                label="Last Name"
                rightIcon
                icon={
                  <AppImage
                    src={"/icons/Help.svg"}
                    className="size-4"
                    alt="icon"
                  />
                }
                register={register("lastName")}
                error={errors.lastName?.message as unknown as string}
              />
            </div>

            <div className="sm:col-span-1">
              <AppInput
                label="Email"
                rightIcon
                icon={
                  <AppImage
                    src={"/icons/Help.svg"}
                    className="size-4"
                    alt="icon"
                  />
                }
                register={register("email")}
                error={errors.email?.message as unknown as string}
                type="email"
              />
            </div>

            <div className="mb-4 sm:col-span-1">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>

              {/* Use Controller for react-phone-number-input */}
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
                    country="GB" // keep this if you want the country fixed
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
        <p className="text-sm text-slate-500 mb-4">
          A quick summary of your chosen plan and add-ons.
        </p>

        {/* On small screens show the summary card inline so user sees it */}
        <div className="block lg:hidden">
          <SummaryCard compact />
        </div>

        <div className="hidden lg:block" />
      </section>

      <div className="flex gap-3 mt-2">
        <button
          type="button"
          className="flex-1 bg-white border border-slate-200 py-3 rounded-md"
          onClick={() => {
            /* implement back navigation if needed */
          }}
        >
          Go back
        </button>

        <button
          type="submit"
          className="flex-1 bg-emerald-900 text-white py-3 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Continue"}
        </button>
      </div>
    </form>
  );
}

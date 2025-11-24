
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().refine(isValidPhoneNumber, {
    message: "Please enter a valid phone number (include the country code).",
  }),
  image: z.instanceof(File).optional(), // For image upload
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

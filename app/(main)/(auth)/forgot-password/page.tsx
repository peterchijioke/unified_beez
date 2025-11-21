import AppImage from "../../_common/AppImage";
import ForgotPasswordForm from "../_auth-components/forms/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <div className=" h-screen bg-[#F2E9DE]">
      <div className="w-full h-full flex bg-gradient-to-br overflow-auto from-[#FFFFFF]  to-[#FCEDC6]">
        <div className="flex flex-col h-full w-full items-center justify-center">
          <div
            className="
                    w-full h-fit md:mx-auto  max-w-full md:max-w-xl
                    bg-inherit md:bg-gradient-to-br md:border md:border-[#D0D5DD]
                    from-[#E6FAF2] to-[#E3CF9B] md:rounded-3xl p-8 md:mb-4
                  "
          >
            <div className="flex justify-center mb-5">
              <AppImage
                alt="logo"
                className="size-auto"
                src={"/icons/bee.svg"}
              />
            </div>

            <div className=" w-full items-center justify-center flex-col flex gap-2 pb-6 ">
              <span className=" text-xl text-black font-semibold">
                Reset Password
              </span>
              <span className=" text-sm text-[#0B1012B2]">
                We'll email you a link to reset password
              </span>
            </div>

            <ForgotPasswordForm />

            <div className="max-w-xl mx-auto mt-12 flex md:hidden pb-5 items-center justify-center gap-3 flex-wrap">
              {socialIcons.map((item, index) => (
                <AppImage key={index} alt="" className="size-10" src={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const socialIcons = [
  "/icons/whatapp.svg",
  "/icons/facebook.svg",
  "/icons/instagram.svg",
  "/icons/Calendly.svg",
  "/icons/edidi.svg",
  "/icons/zill.svg",
  "/icons/Slack.svg",
  "/icons/shopify.svg",
  "/icons/paypal.svg",
];

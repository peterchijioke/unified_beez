import { LeftSection } from "./_auth-componets/LeftSection";
import RightSection from "./_auth-componets/RightSection";

export default function AuthPage() {
  return (
    <div className=" h-screen bg-[#F2E9DE]">
      <div className="w-full h-full flex bg-gradient-to-b overflow-auto from-white  to-[#FCEDC6]">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

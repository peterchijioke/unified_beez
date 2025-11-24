import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export default function EmailVerification() {
  const route = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError(false);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      } else {
        // Clear current input
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setFocusedIndex(index - 1);
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
      setFocusedIndex(index + 1);
    } else if (e.key === "Enter") {
      handleVerify();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...code];

    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i];
      }
    }

    setCode(newCode);
    const lastFilledIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastFilledIndex]?.focus();
    setFocusedIndex(lastFilledIndex);
  };

  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode.length !== 6) {
      setError(true);
    } else {
      setError(false);
      route.push("/basic-account-setup");
      alert("Code verified successfully!");
    }
  };

  const handleResend = () => {
    setCode(["", "", "", "", "", ""]);
    setError(false);
    inputRefs.current[0]?.focus();
    setFocusedIndex(0);
    // Add resend logic here
    console.log("Resending code...");
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center gap-3 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) {
                  inputRefs.current[index] = el;
                }
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              onFocus={() => setFocusedIndex(index)}
              className={`w-12 h-12 md:h-16 md:w-16 aspect-square text-xl md:text-2xl font-semibold text-center rounded-lg transition-all focus:ring-4   focus-visible:outline-none ${
                error
                  ? "border-2 border-red-500 bg-white"
                  : " border-2 border-[#0B1012] focus:ring-[#053D2733] bg-white text-primary"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                error ? "focus:ring-red-500" : "focus:ring-0"
              }`}
            />
          ))}
        </div>

        <div className="text-base mb-16 text-primary">
          Didn't get a code?{" "}
          <button
            onClick={handleResend}
            className="underline hover:no-underline cursor-pointer transition-all"
          >
            Click to resend.
          </button>
        </div>

        <div className="flex justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => console.log("Going back...")}
            className="flex-1 h-12 px-8 text-base  font-semibold rounded-md transition-all hover:opacity-80"
            style={{
              backgroundColor: "white",
              color: "#4a5a4a",
              border: "2px solid #e0e0e0",
            }}
          >
            Go back
          </button>

          <button
            onClick={handleVerify}
            className="flex-1 h-12 bg-primary text-white px-8 text-base font-semibold rounded-md transition-all hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

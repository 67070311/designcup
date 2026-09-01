"use client";

import { X } from "lucide-react";

type LoginProps = {
  onCreateAccount: () => void;
  onClose: () => void;
};

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.91h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.37Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.4l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.39 13.92A6.02 6.02 0 0 1 6.08 12c0-.67.12-1.32.31-1.92v-2.6H3.05A10 10 0 0 0 2 12c0 1.62.39 3.16 1.05 4.52l3.34-2.6Z" />
      <path fill="#EA4335" d="M12 5.95c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.6C7.18 7.71 9.39 5.95 12 5.95Z" />
    </svg>
  );
}

export default function Login({ onCreateAccount, onClose }: LoginProps) {
  return (
    <section className="relative w-[min(1080px,calc(100vw-40px))] rounded-[20px] bg-white p-[26px] text-[16px] shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-[30px]">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close login"
        className="absolute right-[22px] top-[22px] z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF0FF] text-[#287CFF] transition hover:bg-[#DEE8FF]"
      >
        <X size={20} strokeWidth={2} />
      </button>

      <div className="grid min-h-[536px] grid-cols-1 gap-8 lg:grid-cols-[493px_1fr] lg:gap-[54px]">
        {/* Replace this block with the login illustration later. */}
        <div className="min-h-[320px] rounded-[20px] bg-[#FFE180] lg:min-h-[536px]" />

        <div className="flex items-center justify-center px-5 py-12 lg:px-[34px] lg:py-[40px] lg:pr-[50px]">
          <div className="w-full max-w-[432px]">
            <h1 className="text-center text-[32px] font-semibold tracking-[-0.6px] text-black">
              Log In
            </h1>

            <div className="mt-[37px] space-y-[10px]">
              <input
                type="email"
                placeholder="Email Address"
                className="h-[52px] w-full rounded-[7px] border border-[#DDE2EE] bg-white px-[12px] text-[16px] text-[#31384D] outline-none transition placeholder:text-[#596583] focus:border-[#287CFF]"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-[52px] w-full rounded-[7px] border border-[#DDE2EE] bg-white px-[12px] text-[16px] text-[#31384D] outline-none transition placeholder:text-[#596583] focus:border-[#287CFF]"
              />
            </div>

            <div className="mt-[14px] text-right">
              <button type="button" className="text-[16px] font-normal text-[#287CFF] hover:underline">
                Forgot Password?
              </button>
            </div>

            <div className="mt-[28px] flex items-center gap-[20px] text-[16px] text-black">
              <span className="h-px flex-1 bg-[#ECECEC]" />
              <span>Or</span>
              <span className="h-px flex-1 bg-[#ECECEC]" />
            </div>

            <button
              type="button"
              className="mt-[34px] flex h-[52px] w-full items-center justify-center gap-[16px] rounded-[7px] bg-[#287CFF] text-[16px] font-semibold text-white transition hover:bg-[#176DE8]"
            >
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-white">
                <GoogleIcon />
              </span>
              Continue with Google
            </button>

            <div className="mt-[28px] h-px w-full bg-[#ECECEC]" />

            <p className="mt-[38px] text-center text-[16px] text-[#8D8D8D]">
              Don’t have an Account?{" "}
              <button
                type="button"
                onClick={onCreateAccount}
                className="font-medium text-[#287CFF] underline underline-offset-2"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

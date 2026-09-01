"use client";

import { CloudUpload, Sparkles, X } from "lucide-react";

type SubmitPopupProps = {
  isSubmitting: boolean;
  submitSuccess: boolean;
  onClose: () => void;
};

const confetti = [
  { left: "9%", top: "16%", rotate: "18deg", delay: "0s" },
  { left: "18%", top: "31%", rotate: "-22deg", delay: "0.08s" },
  { left: "30%", top: "11%", rotate: "42deg", delay: "0.16s" },
  { left: "67%", top: "12%", rotate: "-38deg", delay: "0.1s" },
  { left: "81%", top: "25%", rotate: "26deg", delay: "0.18s" },
  { left: "91%", top: "13%", rotate: "-14deg", delay: "0.04s" },
];

export default function SubmitPopup({
  isSubmitting,
  submitSuccess,
  onClose,
}: SubmitPopupProps) {
  if (!isSubmitting && !submitSuccess) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F172A]/55 px-5 py-8 backdrop-blur-[9px]">
      {isSubmitting && (
        <div className="popup-in w-full max-w-[390px] rounded-[28px] border border-white/70 bg-white px-8 py-9 shadow-[0_30px_90px_rgba(15,23,42,0.24)]">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-[92px] w-[150px]">
              <div className="loading-card loading-card-1 absolute left-[15px] top-[18px] h-[60px] w-[44px] rounded-[10px] border border-[#DDE6F4] bg-[#F8FAFD] shadow-sm" />
              <div className="loading-card loading-card-2 absolute left-1/2 top-[10px] h-[72px] w-[52px] -translate-x-1/2 rounded-[11px] border border-[#CFE0FA] bg-white shadow-[0_8px_24px_rgba(40,124,255,0.10)]">
                <div className="mx-auto mt-[9px] h-[6px] w-[28px] rounded-full bg-[#DCE9FF]" />
                <div className="mx-auto mt-[7px] h-[24px] w-[36px] rounded-[7px] bg-[#287CFF]/10" />
                <div className="mx-auto mt-[7px] h-[5px] w-[30px] rounded-full bg-[#E7ECF4]" />
              </div>
              <div className="loading-card loading-card-3 absolute right-[15px] top-[18px] h-[60px] w-[44px] rounded-[10px] border border-[#DDE6F4] bg-[#F8FAFD] shadow-sm" />

              <div className="loading-orbit absolute left-1/2 top-1/2 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#287CFF] text-white shadow-[0_8px_22px_rgba(40,124,255,0.28)]">
                <CloudUpload size={20} strokeWidth={1.9} />
              </div>
            </div>

            <h2 className="mt-4 text-[24px] font-semibold tracking-[-0.45px] text-[#141A24]">
              Sending your design
            </h2>
            <p className="mt-2 text-[14px] leading-6 text-[#7A8492]">
              Preparing your screens and publishing the submission.
            </p>

            <div className="mt-7 flex items-center gap-[7px]">
              <span className="loading-dot loading-dot-1 h-[7px] w-[7px] rounded-full bg-[#287CFF]" />
              <span className="loading-dot loading-dot-2 h-[7px] w-[7px] rounded-full bg-[#287CFF]" />
              <span className="loading-dot loading-dot-3 h-[7px] w-[7px] rounded-full bg-[#287CFF]" />
            </div>
          </div>
        </div>
      )}

      {submitSuccess && (
        <div className="success-pop relative w-full max-w-[520px] overflow-hidden rounded-[34px] bg-[#F8FBFF] shadow-[0_36px_110px_rgba(13,25,48,0.34)]">
          <div className="absolute inset-x-0 top-0 h-[235px] overflow-hidden bg-[linear-gradient(145deg,#DDEEFF_0%,#B6D8FF_44%,#8EBEFF_100%)]">
            <div className="success-light absolute left-1/2 top-[-100px] h-[310px] w-[310px] -translate-x-1/2 rounded-full bg-white/50 blur-[36px]" />

            {confetti.map((item, index) => (
              <span
                key={index}
                className={`confetti confetti-${(index % 3) + 1} absolute h-[12px] w-[6px] rounded-[2px]`}
                style={{
                  left: item.left,
                  top: item.top,
                  rotate: item.rotate,
                  animationDelay: item.delay,
                }}
              />
            ))}

            <Sparkles className="sparkle-one absolute left-[13%] top-[44%] text-white" size={23} />
            <Sparkles className="sparkle-two absolute right-[13%] top-[33%] text-white" size={18} />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/70 text-[#546174] backdrop-blur-md transition hover:bg-white hover:text-[#111827]"
          >
            <X size={18} />
          </button>

          <div className="relative z-10 px-7 pb-7 pt-[64px] sm:px-9 sm:pb-9">
            <div className="design-reveal mx-auto w-[230px] rounded-[24px] border-[6px] border-white bg-white p-[10px] shadow-[0_24px_55px_rgba(39,91,170,0.25)]">
              <div className="relative overflow-hidden rounded-[15px] bg-[#F4F7FB] p-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-[4px]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#FF8A65]" />
                    <span className="h-[5px] w-[5px] rounded-full bg-[#FFC857]" />
                    <span className="h-[5px] w-[5px] rounded-full bg-[#44D7A8]" />
                  </div>
                  <span className="rounded-full bg-[#E5F7ED] px-[8px] py-[4px] text-[9px] font-bold tracking-[0.08em] text-[#159455]">
                    LIVE
                  </span>
                </div>

                <div className="mt-[10px] grid grid-cols-3 gap-[6px]">
                  <div className="mock-screen mock-1 h-[105px] rounded-[8px] bg-[linear-gradient(180deg,#EEF5FF_0%,#D5E8FF_100%)] p-[6px]">
                    <div className="h-[18px] rounded-[5px] bg-white/80" />
                    <div className="mt-[6px] h-[42px] rounded-[6px] bg-[#83B8FF]" />
                    <div className="mt-[6px] h-[5px] w-[80%] rounded-full bg-white/80" />
                    <div className="mt-[4px] h-[5px] w-[55%] rounded-full bg-white/70" />
                  </div>
                  <div className="mock-screen mock-2 h-[105px] rounded-[8px] bg-[linear-gradient(180deg,#FFF0E4_0%,#FFE0CA_100%)] p-[6px]">
                    <div className="h-[34px] rounded-[6px] bg-[#FFAD72]" />
                    <div className="mt-[6px] h-[6px] rounded-full bg-white/80" />
                    <div className="mt-[5px] h-[24px] rounded-[5px] bg-white/70" />
                    <div className="mt-[5px] h-[12px] rounded-[5px] bg-[#FF9150]/70" />
                  </div>
                  <div className="mock-screen mock-3 h-[105px] rounded-[8px] bg-[linear-gradient(180deg,#EAF9F2_0%,#D2F1E3_100%)] p-[6px]">
                    <div className="mx-auto h-[28px] w-[28px] rounded-full bg-[#65D3A3]" />
                    <div className="mt-[7px] h-[5px] rounded-full bg-white/80" />
                    <div className="mt-[5px] h-[5px] w-[70%] rounded-full bg-white/80" />
                    <div className="mt-[8px] h-[24px] rounded-[5px] bg-white/70" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#287CFF]">
                Submission published
              </p>
              <h2 className="mt-2 text-[31px] font-semibold tracking-[-0.8px] text-[#101828]">
                You&apos;re officially in.
              </h2>
              <p className="mx-auto mt-3 max-w-[390px] text-[15px] leading-6 text-[#687386]">
                Your design is now on the challenge board and ready to be seen by the community.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#DDE5F0]" />
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#97A1B0]">
                DesignCup
              </span>
              <div className="h-px flex-1 bg-[#DDE5F0]" />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 flex h-[54px] w-full items-center justify-center rounded-[17px] bg-[#287CFF] px-6 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(40,124,255,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#176DE8]"
            >
              View my submission
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes popupIn {
          from { opacity: 0; transform: translateY(10px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cardWave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(1.5deg); }
        }
        @keyframes cardWaveLeft {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(4px) rotate(-5deg); }
        }
        @keyframes cardWaveRight {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(4px) rotate(5deg); }
        }
        @keyframes uploadPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -55%) scale(1.06); }
        }
        @keyframes dotPulse {
          0%, 80%, 100% { opacity: .25; transform: scale(.75); }
          40% { opacity: 1; transform: scale(1); }
        }
        @keyframes successPop {
          0% { opacity: 0; transform: translateY(18px) scale(.95); }
          65% { transform: translateY(-3px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes designReveal {
          0% { opacity: 0; transform: translateY(34px) rotate(-3deg) scale(.86); }
          70% { transform: translateY(-4px) rotate(1deg) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) rotate(0) scale(1); }
        }
        @keyframes confettiDrop {
          0% { opacity: 0; transform: translateY(-18px) rotate(0deg) scale(.4); }
          55% { opacity: 1; }
          100% { opacity: .9; transform: translateY(58px) rotate(150deg) scale(1); }
        }
        @keyframes sparkleFloat {
          0%, 100% { opacity: .55; transform: translateY(0) rotate(0deg) scale(.9); }
          50% { opacity: 1; transform: translateY(-6px) rotate(10deg) scale(1.1); }
        }
        @keyframes screenIn {
          from { opacity: 0; transform: translateY(10px) scale(.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lightBreathe {
          0%, 100% { opacity: .45; transform: translateX(-50%) scale(.92); }
          50% { opacity: .8; transform: translateX(-50%) scale(1.06); }
        }

        .popup-in { animation: popupIn .3s cubic-bezier(.16,1,.3,1) both; }
        .loading-card-1 { transform: rotate(-8deg); animation: cardWaveLeft 1.8s ease-in-out infinite; }
        .loading-card-2 { animation: cardWave 1.65s ease-in-out infinite; }
        .loading-card-3 { transform: rotate(8deg); animation: cardWaveRight 1.8s ease-in-out .12s infinite; }
        .loading-orbit { animation: uploadPulse 1.35s ease-in-out infinite; }
        .loading-dot { animation: dotPulse 1.3s ease-in-out infinite; }
        .loading-dot-2 { animation-delay: .16s; }
        .loading-dot-3 { animation-delay: .32s; }

        .success-pop { animation: successPop .52s cubic-bezier(.16,1,.3,1) both; }
        .design-reveal { animation: designReveal .75s cubic-bezier(.16,1,.3,1) .06s both; }
        .confetti { animation: confettiDrop 1.15s cubic-bezier(.16,1,.3,1) both; }
        .confetti-1 { background: #287CFF; }
        .confetti-2 { background: #FF8A5B; }
        .confetti-3 { background: #FFD35C; }
        .sparkle-one, .sparkle-two { animation: sparkleFloat 2.2s ease-in-out infinite; }
        .sparkle-two { animation-delay: .35s; }
        .mock-screen { animation: screenIn .5s cubic-bezier(.16,1,.3,1) both; }
        .mock-1 { animation-delay: .32s; }
        .mock-2 { animation-delay: .43s; }
        .mock-3 { animation-delay: .54s; }
        .success-light { animation: lightBreathe 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, FileText, ImageIcon, Send, UploadCloud } from "lucide-react";

const steps = [
  {
    number: 1,
    label: "Upload",
    icon: UploadCloud,
  },
  {
    number: 2,
    label: "Details",
    icon: FileText,
  },
  {
    number: 3,
    label: "Preview",
    icon: ImageIcon,
  },
  {
    number: 4,
    label: "Submit",
    icon: Send,
  },
];

export default function UploadDesignHero() {
  const activeStep = 1;

  return (
    <section className="w-full bg-white px-[56px] pb-[48px] pt-[58px]">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h1 className="text-[34px] font-semibold tracking-[-0.7px] text-[#171717]">
            Upload Your Design
          </h1>

          <p className="mt-[9px] text-[14px] leading-[1.65] text-[#737B87]">
            Compete with the world&apos;s best for a spot in the Top 5 and
            exclusive rewards.
          </p>
        </motion.div>

        {/* PROGRESS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 26,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-[58px]"
        >
          <div className="relative flex items-center justify-between">
            {steps.map((step, index) => {
              const isActive = step.number === activeStep;
              const isCompleted = step.number < activeStep;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative z-10 flex min-w-0 flex-1 items-center"
                >
                  {/* STEP */}
                  <div className="flex items-center gap-[12px]">
                    <motion.div
                      whileHover={{
                        scale: 1.06,
                      }}
                      className={`
                        flex
                        h-[44px]
                        w-[44px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "border-[#287CFF] bg-[#287CFF] text-white shadow-[0_7px_20px_rgba(40,124,255,0.20)]"
                            : isCompleted
                              ? "border-[#287CFF] bg-[#EAF2FF] text-[#287CFF]"
                              : "border-[#E4E8EF] bg-[#F4F5F7] text-[#A5ABB4]"
                        }
                      `}
                    >
                      {isCompleted ? (
                        <Check size={18} strokeWidth={2.2} />
                      ) : (
                        <span className="text-[14px] font-semibold">
                          {step.number}
                        </span>
                      )}
                    </motion.div>

                    <div className="hidden sm:block">
                      <p
                        className={`
                          text-[13px]
                          font-medium
                          ${
                            isActive
                              ? "text-[#287CFF]"
                              : isCompleted
                                ? "text-[#171717]"
                                : "text-[#A5ABB4]"
                          }
                        `}
                      >
                        {step.label}
                      </p>

                      <div className="mt-[3px] flex items-center gap-[4px] text-[10px] text-[#B1B7C0]">
                        <Icon size={11} strokeWidth={1.8} />
                        Step {step.number}
                      </div>
                    </div>
                  </div>

                  {/* CONNECTOR */}
                  {index < steps.length - 1 && (
                    <div className="mx-[18px] h-[2px] min-w-[30px] flex-1 overflow-hidden rounded-full bg-[#E6E9EE]">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: isCompleted ? "100%" : "0%",
                        }}
                        transition={{
                          duration: 0.65,
                          delay: 0.25 + index * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full bg-[#287CFF]"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

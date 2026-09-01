"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gavel, WandSparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Read the Brief",
    description: "Understand the challenge and requirements.",
  },
  {
    number: "02",
    title: "Create Your Design",
    description: "Design your 3 mobile screens.",
  },
  {
    number: "03",
    title: "Upload Your Work",
    description: "Submit your design before the deadline.",
  },
  {
    number: "04",
    title: "Get Votes",
    description: "Share your design and get votes.",
  },
  {
    number: "05",
    title: "Become a Winner",
    description: "Top 5 winners will be featured.",
  },
];

const criteria = [
  {
    title: "Visual Design",
    value: 30,
    color: "#FF8A2A",
  },
  {
    title: "Usability",
    value: 25,
    color: "#287CFF",
  },
  {
    title: "Creativity",
    value: 20,
    color: "#8065E4",
  },
  {
    title: "Brief Accuracy",
    value: 15,
    color: "#24C875",
  },
  {
    title: "Presentation",
    value: 10,
    color: "#F5B800",
  },
];

export default function HowToJoin() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-[56px] py-[76px]">
      {/* SOFT SECTION BACKGROUND */}
      <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[420px] w-[420px] rounded-full bg-[#EDF4FF]/70 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#FFF3E7]/70 blur-[130px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto w-full max-w-[1280px]"
      >
        <div className="grid grid-cols-1 items-center gap-[52px] xl:grid-cols-[1fr_370px_1fr]">
          {/* =========================
              LEFT : HOW TO JOIN
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* HEADER */}
            <div className="flex items-center gap-[11px]">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px] bg-[#FFF0E8] text-[#FF7A3D]">
                <WandSparkles size={19} strokeWidth={2} />
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#FF7A3D]">
                  How to Join
                </span>

                <h2 className="mt-[2px] text-[22px] font-semibold tracking-[-0.4px] text-[#171717]">
                  Start in 5 simple steps
                </h2>
              </div>
            </div>

            {/* STEPS */}
            <div className="relative mt-[34px]">
              {/* CONNECTING LINE */}
              <motion.div
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height: "calc(100% - 48px)",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-[19px] top-[25px] w-px bg-[#DCE7F8]"
              />

              <div className="space-y-[24px]">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08 + index * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative flex items-start gap-[16px]"
                  >
                    {/* NUMBER */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#287CFF] text-[12px] font-semibold text-white shadow-[0_6px_16px_rgba(40,124,255,0.16)]"
                    >
                      {step.number}
                    </motion.div>

                    {/* TEXT */}
                    <div className="pt-[2px]">
                      <h3 className="text-[13px] font-semibold text-[#171717] transition-colors duration-300 group-hover:text-[#287CFF]">
                        {step.title}
                      </h3>

                      <p className="mt-[4px] text-[11px] leading-[1.55] text-[#7F8793]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =========================
              CENTER IMAGE
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-h-[410px] items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-[390px] w-full"
            >
              <Image
                src="/challenge/how-to-join.webp"
                alt="How to join challenge illustration"
                fill
                sizes="370px"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT : JUDGING
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* HEADER */}
            <div className="flex items-center gap-[11px]">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px] bg-[#EAF2FF] text-[#287CFF]">
                <Gavel size={18} strokeWidth={2} />
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#287CFF]">
                  Judging Criteria
                </span>

                <h2 className="mt-[2px] text-[22px] font-semibold tracking-[-0.4px] text-[#171717]">
                  How your work is scored
                </h2>
              </div>
            </div>

            {/* CRITERIA */}
            <div className="mt-[38px] space-y-[28px]">
              {criteria.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + index * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* LABEL */}
                  <div className="mb-[9px] flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[#171717]">
                      {item.title}
                    </span>

                    <span
                      className="text-[12px] font-semibold"
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.value}%
                    </span>
                  </div>

                  {/* PROGRESS */}
                  <div className="relative h-[9px] w-full overflow-hidden rounded-full bg-[#EDF1F7]">
                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileInView={{
                        width: `${item.value}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.18 + index * 0.09,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative h-full rounded-full"
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      <div className="absolute inset-y-0 right-0 w-[22px] rounded-full bg-white/20" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlarmClock,
  CheckCircle2,
  Clock3,
  CloudUpload,
  Trophy,
  Vote,
  XCircle,
} from "lucide-react";

const timeline = [
  {
    title: "Submission Opens",
    date: "Aug 1, 2026",
    icon: CheckCircle2,
    color: "#25C866",
    bg: "#EAFBF0",
  },
  {
    title: "Submission Close",
    date: "Aug 14, 2026",
    icon: XCircle,
    color: "#FF4D4F",
    bg: "#FFF0F0",
  },
  {
    title: "Community Voting",
    date: "Aug 15 – Aug 21, 2026",
    icon: Vote,
    color: "#287CFF",
    bg: "#EAF2FF",
  },
  {
    title: "Winners Announced",
    date: "Aug 22, 2026",
    icon: Trophy,
    color: "#F2B400",
    bg: "#FFF8DA",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ChallengeTimeline() {
  return (
    <section className="w-full bg-white px-[56px] py-[64px]">
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.99,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mx-auto w-full max-w-[1280px]"
      >
        {/* HEADER */}
        <motion.div
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
            duration: 0.65,
          }}
          className="inline-flex items-center gap-[10px] rounded-full bg-[#EAF2FF] px-[15px] py-[8px]"
        >
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#D9E8FF] text-[#287CFF]">
            <AlarmClock size={16} strokeWidth={2} />
          </div>

          <span className="text-[14px] font-semibold tracking-[0.4px] text-[#171717]">
            CHALLENGE TIMELINE
          </span>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="relative mt-[46px]"
        >
          {/* BASE LINE */}
          <div className="absolute left-[9%] right-[9%] top-[41px] hidden h-[3px] rounded-full bg-[#E8EDF5] md:block" />

          {/* PROGRESS LINE */}
          <motion.div
            initial={{
              width: "0%",
            }}
            whileInView={{
              width: "36%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-[9%] top-[41px] hidden h-[3px] rounded-full bg-[linear-gradient(90deg,#25C866_0%,#F2B400_100%)] md:block"
          />

          <div className="relative grid grid-cols-1 gap-[18px] md:grid-cols-4">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.06,
                    }}
                    className="relative z-10"
                  >
                    <div
                      className="flex h-[82px] w-[82px] items-center justify-center rounded-full border-[6px] border-white shadow-[0_10px_28px_rgba(30,50,90,0.07)]"
                      style={{
                        backgroundColor: item.bg,
                        color: item.color,
                      }}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>

                    {index === 1 && (
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.3, 0.05, 0.3],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-[-8px] -z-10 rounded-full border"
                        style={{
                          borderColor: item.color,
                        }}
                      />
                    )}
                  </motion.div>

                  {/* STEP */}
                  <span className="mt-[14px] text-[10px] font-semibold uppercase tracking-[1.2px] text-[#A0A7B2]">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TITLE */}
                  <h3 className="mt-[5px] text-[15px] font-semibold text-[#171717]">
                    {item.title}
                  </h3>

                  {/* DATE */}
                  <p
                    className="mt-[7px] max-w-[170px] text-[13px] font-medium leading-[1.5]"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.date}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* COUNTDOWN PANEL */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            delay: 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-[52px] overflow-hidden rounded-[22px] border border-[#E6EDF7] bg-[#F8FAFF] px-[28px] py-[28px]"
        >
          {/* BACKGROUND GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8F2FF] blur-[75px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-[24px] lg:flex-row">
            {/* LEFT */}
            <div className="flex items-center gap-[14px]">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[#287CFF] text-white shadow-[0_8px_20px_rgba(40,124,255,0.2)]">
                <Clock3 size={23} strokeWidth={2} />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[1px] text-[#9199A5]">
                  Time left until submission ends
                </p>

                <h3 className="mt-[4px] text-[18px] font-semibold tracking-[-0.3px] text-[#171717]">
                  Submit before the deadline
                </h3>
              </div>
            </div>

            {/* COUNTDOWN */}
            <div className="flex items-center gap-[10px]">
              {[
                { value: "14", label: "Days" },
                { value: "28", label: "Hours" },
                { value: "45", label: "Minutes" },
              ].map((time, index) => (
                <div key={time.label} className="flex items-center gap-[10px]">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.32 + index * 0.08,
                    }}
                    className="flex min-w-[76px] flex-col items-center rounded-[14px] bg-white px-[14px] py-[12px] shadow-[0_6px_20px_rgba(40,70,120,0.05)]"
                  >
                    <span className="text-[28px] font-semibold leading-none text-[#287CFF]">
                      {time.value}
                    </span>

                    <span className="mt-[6px] text-[10px] font-medium uppercase tracking-[0.8px] text-[#8D96A4]">
                      {time.label}
                    </span>
                  </motion.div>

                  {index < 2 && (
                    <span className="text-[18px] text-[#C6CFDC]">:</span>
                  )}
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-[10px]">
              <Link
                href="/challenge/upload-design"
                className="group flex h-[44px] items-center gap-[8px] rounded-full bg-[#287CFF] px-[18px] text-[12px] font-medium text-white shadow-[0_8px_20px_rgba(40,124,255,0.2)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#176DE8]"
              >
                <CloudUpload
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-[2px]"
                />
                Upload your design
              </Link>

              <Link
                href="/challenge/active/brief"
                className="flex h-[44px] items-center rounded-full border border-[#DCE6F4] bg-white px-[16px] text-[12px] font-medium text-[#287CFF] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#C8D8F0]"
              >
                Read Brief
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

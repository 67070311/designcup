"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Flag,
  LayoutTemplate,
  MonitorSmartphone,
  PanelsTopLeft,
} from "lucide-react";

const requirements = [
  {
    title: "Category",
    value: "Mobile App",
    icon: MonitorSmartphone,
    iconBg: "#EAF2FF",
    iconColor: "#287CFF",
  },
  {
    title: "Difficulty",
    value: "Intermediate",
    icon: Flag,
    iconBg: "#FFF0E8",
    iconColor: "#FF7B24",
  },
  {
    title: "Submission format",
    value: "3 Mobile Screens",
    icon: PanelsTopLeft,
    iconBg: "#EAFBF0",
    iconColor: "#20C95A",
  },
  {
    title: "Canvas Size",
    value: "390 × 844 px",
    icon: LayoutTemplate,
    iconBg: "#E8FAFF",
    iconColor: "#00B8D9",
  },
  {
    title: "Deadline",
    value: "August 14, 2026",
    secondValue: "11:59 PM (UTC)",
    icon: CalendarDays,
    iconBg: "#F1EBFF",
    iconColor: "#6C55F5",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ChallengeBrief() {
  return (
    <section className="w-full bg-white px-[56px] pb-[78px] pt-[14px]">
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
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[22px] border border-[#E7EEF8] bg-[#FBFCFF] shadow-[0_14px_45px_rgba(46,72,120,0.07)]"
      >
        {/* TOP ACCENT */}
        <div className="absolute left-0 top-0 h-[3px] w-full bg-[#EDF3FF]">
          <motion.div
            initial={{
              width: "0%",
            }}
            whileInView={{
              width: "34%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="h-full rounded-r-full bg-[#287CFF]"
          />
        </div>

        {/* SOFT LIGHT */}
        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#E8F2FF] blur-[100px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.7fr]">
          {/* LEFT — BRIEF */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border-b border-[#E9EEF6] px-[34px] py-[34px] lg:border-b-0 lg:border-r"
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-[8px] rounded-full border border-[#DCE8FA] bg-white px-[12px] py-[7px] shadow-[0_5px_16px_rgba(40,124,255,0.05)]">
              <MonitorSmartphone
                size={15}
                strokeWidth={2}
                className="text-[#287CFF]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#6C7482]">
                Challenge Brief
              </span>
            </div>

            <h2 className="mt-[18px] text-[24px] font-semibold tracking-[-0.4px] text-[#171717]">
              What you need to design
            </h2>

            <p className="mt-[14px] max-w-[470px] text-[14px] font-normal leading-[1.75] text-[#646B76]">
              Design a modern food delivery mobile app that helps users discover
              restaurants, browse menus, and place orders quickly.
            </p>

            <div className="mt-[18px] rounded-[16px] border border-[#E7EEF8] bg-white px-[18px] py-[16px]">
              <p className="text-[11px] font-semibold uppercase tracking-[1px] text-[#98A2B1]">
                Main Goal
              </p>

              <p className="mt-[7px] text-[14px] leading-[1.65] text-[#444B55]">
                Make the ordering journey feel simple, clear, and enjoyable from
                discovering food to confirming the order.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — REQUIREMENTS */}
          <div className="px-[34px] py-[34px]">
            <motion.div
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
                duration: 0.6,
                delay: 0.08,
              }}
              className="flex items-end justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-[7px]">
                  <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[#FFF0F0] text-[#FF4343]">
                    <Flag size={15} strokeWidth={2} />
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#FF4343]">
                    Design Requirements
                  </span>
                </div>

                <h3 className="mt-[10px] text-[21px] font-semibold tracking-[-0.3px] text-[#171717]">
                  Submission details
                </h3>
              </div>

              <span className="hidden text-[11px] text-[#A0A8B4] md:block">
                Make sure your design follows these requirements
              </span>
            </motion.div>

            {/* REQUIREMENT GRID */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                staggerChildren: 0.08,
              }}
              className="mt-[26px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-5"
            >
              {requirements.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    className="group relative min-h-[158px] rounded-[16px] border border-[#E8EEF6] bg-white px-[16px] py-[16px] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(44,72,120,0.08)]"
                  >
                    {/* ICON */}
                    <div
                      className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px]"
                      style={{
                        backgroundColor: item.iconBg,
                        color: item.iconColor,
                      }}
                    >
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    {/* TITLE */}
                    <p className="mt-[17px] text-[11px] font-medium uppercase tracking-[0.7px] text-[#969EAA]">
                      {item.title}
                    </p>

                    {/* VALUE */}
                    <p
                      className="mt-[6px] text-[14px] font-semibold leading-[1.45]"
                      style={{
                        color: item.iconColor,
                      }}
                    >
                      {item.value}
                    </p>

                    {item.secondValue && (
                      <p
                        className="mt-[4px] text-[12px] font-medium"
                        style={{
                          color: item.iconColor,
                        }}
                      >
                        {item.secondValue}
                      </p>
                    )}

                    {/* HOVER LINE */}
                    <div
                      className="absolute bottom-0 left-[16px] right-[16px] h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                      style={{
                        backgroundColor: item.iconColor,
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

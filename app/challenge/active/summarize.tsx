"use client";

import { motion } from "framer-motion";
import { Clock3, Palette, Send } from "lucide-react";

const stats = [
  {
    title: "Participants",
    value: "412",
    suffix: "Designers",
    icon: Palette,
    highlight: false,
  },
  {
    title: "Submissions",
    value: "286",
    suffix: "Designs",
    icon: Send,
    highlight: false,
  },
  {
    title: "8 Days Left",
    value: "08 : 14 : 32 : 47",
    suffix: "Time Left",
    icon: Clock3,
    highlight: true,
  },
];

export default function Summarize() {
  return (
    <section className="w-full bg-white px-[56px] py-[54px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 26,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className={`
                  group
                  relative
                  min-h-[126px]
                  overflow-hidden
                  rounded-[18px]
                  border
                  px-[22px]
                  py-[20px]
                  transition-all
                  duration-300
                  ${
                    item.highlight
                      ? "border-[#287CFF] bg-[#287CFF] text-white hover:bg-[#1F73F5]"
                      : "border-[#D9E6FF] bg-white hover:border-[#287CFF]"
                  }
                `}
              >
                {/* TOP */}
                <div className="flex items-center gap-[11px]">
                  <motion.div
                    whileHover={{
                      rotate: -7,
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[11px]
                      ${
                        item.highlight
                          ? "bg-white/15 text-white"
                          : "bg-[#EEF5FF] text-[#287CFF]"
                      }
                    `}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </motion.div>

                  <h3
                    className={`
                      text-[16px]
                      font-semibold
                      tracking-[-0.2px]
                      ${item.highlight ? "text-white" : "text-[#287CFF]"}
                    `}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* VALUE */}
                <div className="mt-[18px] flex items-baseline gap-[7px]">
                  <span
                    className={`
                      font-medium
                      tracking-[-0.3px]
                      ${
                        item.highlight
                          ? "text-[16px] text-white"
                          : "text-[22px] text-[#171717]"
                      }
                    `}
                  >
                    {item.value}
                  </span>

                  <span
                    className={`
                      text-[13px]
                      ${item.highlight ? "text-white/75" : "text-[#7B7B7B]"}
                    `}
                  >
                    {item.suffix}
                  </span>
                </div>

                {/* HOVER LINE */}
                {!item.highlight && (
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#287CFF] transition-all duration-500 group-hover:w-full" />
                )}

                {/* HIGHLIGHT DECORATION */}
                {item.highlight && (
                  <>
                    <motion.div
                      animate={{
                        scale: [1, 1.06, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -right-[22px] -top-[22px] h-[82px] w-[82px] rounded-full border border-white/10"
                    />

                    <motion.div
                      animate={{
                        scale: [1, 0.94, 1],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -right-[4px] -top-[4px] h-[46px] w-[46px] rounded-full border border-white/10"
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

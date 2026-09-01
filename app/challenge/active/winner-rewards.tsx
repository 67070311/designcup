"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CloudUpload,
  Crown,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";

const rewards = [
  {
    number: "01",
    title: "1st Place Winner",
    label: "Grand Winner",
    description:
      "Receive the highest recognition in the DesignCup community with a featured homepage spot, exclusive Winner Badge, Hall of Fame placement, and a featured designer profile.",
    icon: Crown,
    color: "#F5B800",
    background: "#FFF8DC",
    border: "#FFE18A",
    cardBackground: "#FFFDF6",
  },
  {
    number: "02",
    title: "Top 2 – Top 5",
    label: "Finalists",
    description:
      "The top five finalists receive a special achievement badge, placement in the Winners Gallery, and portfolio recognition to showcase their work.",
    icon: Medal,
    color: "#287CFF",
    background: "#EAF2FF",
    border: "#C9DCFF",
    cardBackground: "#F8FBFF",
  },
  {
    number: "03",
    title: "Editor's Pick",
    label: "Featured Selection",
    description:
      "Exceptional designs selected by the editorial team receive the Editor's Pick Badge and additional exposure in the Explore section.",
    icon: Sparkles,
    color: "#FF7A3D",
    background: "#FFF0E8",
    border: "#FFD1BB",
    cardBackground: "#FFF9F6",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function WinnerRewards() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFF] px-[56px] py-[72px]">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute left-[-130px] top-[180px] h-[320px] w-[320px] rounded-full bg-[#E5EEFF]/70 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[340px] w-[340px] rounded-full bg-[#FFF0DF]/80 blur-[120px]" />

      {/* SMALL DECORATIONS */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[205px] text-[#F7BE28]/60"
      >
        <Sparkles size={23} strokeWidth={1.7} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 7, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[7%] top-[190px] text-[#7CA7FF]/45"
      >
        <Sparkles size={21} strokeWidth={1.7} />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.99,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.12,
        }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto w-full max-w-[1280px]"
      >
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          {/* WINNER REWARDS BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            className="
              inline-flex
              items-center
              gap-[9px]
              rounded-full
              border
              border-[#FFD8C1]
              bg-[#FFF7F1]
              px-[15px]
              py-[8px]
            "
          >
            <motion.div
              whileHover={{
                rotate: -8,
                scale: 1.08,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                flex
                h-[28px]
                w-[28px]
                items-center
                justify-center
                rounded-full
                bg-[#FF7A3D]
                text-white
              "
            >
              <Trophy size={15} strokeWidth={2} />
            </motion.div>

            <span className="text-[13px] font-semibold uppercase tracking-[1px] text-[#FF6C32]">
              Winner Rewards
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-[18px] text-[32px] font-semibold tracking-[-0.8px] text-[#171717]"
          >
            Your creativity deserves{" "}
            <span className="bg-gradient-to-r from-[#287CFF] via-[#7367F0] to-[#FF7A3D] bg-clip-text text-transparent">
              recognition
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-[10px] max-w-[650px] text-[14px] leading-[1.7] text-[#808895]"
          >
            Stand out in the community, earn recognition, and unlock more
            visibility for your work.
          </motion.p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-[46px] grid grid-cols-1 gap-[26px] xl:grid-cols-[1fr_390px]">
          {/* LEFT REWARD CARDS */}
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3 xl:grid-cols-1">
            {rewards.map((reward, index) => {
              const Icon = reward.icon;

              return (
                <motion.div
                  key={reward.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    px-[22px]
                    py-[20px]
                    shadow-[0_10px_28px_rgba(45,70,110,0.045)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_18px_38px_rgba(45,70,110,0.09)]
                    xl:flex
                    xl:items-center
                    xl:gap-[18px]
                  "
                  style={{
                    borderColor: reward.border,
                    backgroundColor: reward.cardBackground,
                  }}
                >
                  {/* SUBTLE CARD COLOR */}
                  <div
                    className="pointer-events-none absolute left-[-30px] top-1/2 h-[120px] w-[120px] -translate-y-1/2 rounded-full opacity-[0.12] blur-[40px]"
                    style={{
                      backgroundColor: reward.color,
                    }}
                  />

                  {/* NUMBER */}
                  <span
                    className="absolute right-[18px] top-[12px] text-[36px] font-semibold opacity-[0.08]"
                    style={{
                      color: reward.color,
                    }}
                  >
                    {reward.number}
                  </span>

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: -7,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[15px]
                    "
                    style={{
                      backgroundColor: reward.background,
                      color: reward.color,
                    }}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </motion.div>

                  {/* TEXT */}
                  <div className="relative z-10 mt-[16px] xl:mt-0">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        px-[9px]
                        py-[4px]
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[1px]
                      "
                      style={{
                        color: reward.color,
                        backgroundColor: reward.background,
                      }}
                    >
                      {reward.label}
                    </span>

                    <h3 className="mt-[7px] text-[17px] font-semibold tracking-[-0.2px] text-[#171717]">
                      {reward.title}
                    </h3>

                    <p className="mt-[7px] max-w-[680px] text-[12px] leading-[1.65] text-[#707986]">
                      {reward.description}
                    </p>
                  </div>

                  {/* BOTTOM HOVER LINE */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                    style={{
                      backgroundColor: reward.color,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT VISUAL CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -4,
            }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#D8E5FF]
              bg-white
              px-[26px]
              pb-[24px]
              pt-[24px]
              shadow-[0_14px_38px_rgba(42,70,120,0.07)]
            "
          >
            {/* CARD BACKGROUND COLORS */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,#FFFFFF_0%,#F7FAFF_48%,#FFF5EB_100%)]" />

            <div className="pointer-events-none absolute bottom-[-80px] right-[-70px] h-[230px] w-[230px] rounded-full bg-[#FFD8B5]/35 blur-[70px]" />

            <div className="pointer-events-none absolute left-[-80px] top-[120px] h-[220px] w-[220px] rounded-full bg-[#D8E7FF]/55 blur-[70px]" />

            {/* MINI HEADER */}
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#7367F0]">
                  DesignCup Awards
                </span>

                <h3 className="mt-[4px] text-[19px] font-semibold tracking-[-0.3px] text-[#171717]">
                  Make your work stand out
                </h3>
              </div>

              <motion.div
                animate={{
                  rotate: [0, -6, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFF1B9]
                  text-[#F5B800]
                "
              >
                <Crown size={20} strokeWidth={2} />
              </motion.div>
            </div>

            {/* SMALL SPARKLE */}
            <motion.div
              animate={{
                scale: [1, 1.18, 1],
                rotate: [0, 12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[24px] top-[88px] z-10 text-[#FF9B5D]"
            >
              <Sparkles size={19} strokeWidth={1.8} />
            </motion.div>

            {/* IMAGE */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto mt-[8px] h-[285px] w-full"
            >
              <Image
                src="/challenge/Business win.gif"
                alt="Winner rewards illustration"
                fill
                sizes="390px"
                className="object-contain"
              />
            </motion.div>

            {/* DESCRIPTION */}
            <p className="relative z-10 mx-auto mt-[2px] max-w-[290px] text-center text-[11px] leading-[1.6] text-[#7F8998]">
              Winners will be featured across DesignCup and receive exclusive
              community recognition.
            </p>

            {/* BUTTON */}
            <div className="relative z-10 mt-[18px] flex justify-center">
              <Link
                href="/challenge/upload-design"
                className="
                  group
                  flex
                  h-[44px]
                  items-center
                  gap-[8px]
                  rounded-full
                  bg-[linear-gradient(90deg,#287CFF_0%,#6366F1_100%)]
                  px-[18px]
                  text-[12px]
                  font-medium
                  text-white
                  shadow-[0_8px_22px_rgba(40,124,255,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:shadow-[0_12px_28px_rgba(40,124,255,0.28)]
                "
              >
                <CloudUpload
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-[2px]
                  "
                />

                <span>Upload your design</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-[2px]
                    group-hover:translate-x-[2px]
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

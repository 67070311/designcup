"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CloudUpload } from "lucide-react";

export default function ActiveChallengeHero() {
  return (
    <section className="w-full bg-white px-[56px] py-[72px]">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          mx-auto
          min-h-[500px]
          w-full
          max-w-[1280px]
          overflow-hidden
          rounded-[22px]
          bg-[#EFFBFF]
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 flex min-h-[500px] w-[53%] flex-col justify-center px-[52px] py-[44px]">
          {/* STATUS */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.55,
            }}
            className="flex items-center gap-[14px]"
          >
            <div className="flex h-[44px] items-center justify-center rounded-[8px] bg-[#287CFF] px-[18px] text-[13px] font-medium tracking-[0.4px] text-white">
              SUBMISSION OPEN
            </div>

            <div className="flex h-[44px] items-center justify-center rounded-[8px] border border-[#D5DCE8] bg-white/80 px-[20px] text-[13px] font-medium text-[#111111]">
              AUG 1 - AUG 14, 2026
            </div>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mt-[38px] text-[40px] font-semibold leading-[1.3] tracking-[-1.2px] text-black"
          >
            Design a Food
            <br />
            Delivery App
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="mt-[16px] max-w-[520px] text-[14px] font-normal leading-[1.65] text-[#565656]"
          >
            Create a modern food delivery mobile app that helps users discover
            restaurants, browse menus, and place orders quickly with a smooth
            and enjoyable experience
          </motion.p>

          {/* ACTIONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-[30px] flex items-center gap-[30px]"
          >
            <Link
              href="/challenge/upload-design"
              className="
                group
                flex
                h-[50px]
                min-w-[205px]
                items-center
                justify-center
                gap-[9px]
                rounded-full
                border-[2px]
                border-[#287CFF]
                bg-[#287CFF]
                px-[20px]
                text-[14px]
                font-medium
                text-white
                ring-[4px]
                ring-[#DDEBFF]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:bg-[#1769E8]
                hover:shadow-[0_10px_26px_rgba(40,124,255,0.18)]
              "
            >
              <CloudUpload
                size={19}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-[2px]"
              />
              Upload your design!
            </Link>

            <Link
              href="/challenge/active/brief"
              className="group flex items-center gap-[6px] text-[14px] font-medium text-[#287CFF] underline underline-offset-[5px]"
            >
              Read Brief
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </Link>
          </motion.div>
        </div>

        {/* EXTRA DECOR IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none absolute left-[48%] top-[108px] z-20"
        >
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[72px] w-[72px]"
          >
            <Image
              src="/challenge/Pencil.gif"
              alt=""
              fill
              sizes="72px"
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute bottom-0 right-[20px] top-0 w-[48%]"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/challenge/hero.webp"
              alt="Food delivery mobile app challenge"
              fill
              priority
              sizes="46vw"
              className="object-contain object-center"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

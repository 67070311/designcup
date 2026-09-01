"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const designers = [
  "/challenge/current-submission/current-1.webp",
  "/challenge/current-submission/current-2.webp",
  "/challenge/current-submission/current-3.webp",
];

export default function Complete() {
  return (
    <section className="w-full bg-white px-[24px] py-[56px] md:px-[48px] xl:px-[144px]">
      <motion.div
        initial={{
          opacity: 0,
          y: 28,
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
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          grid
          w-full
          grid-cols-[1.05fr_1fr]
          overflow-hidden
          rounded-[28px]
          border
          border-[#E8EBF1]
          bg-white
        "
      >
        {/* IMAGE */}
        <div className="relative min-h-[520px] overflow-hidden">
          <motion.div
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src="/challenge/current-submission/current-1.webp"
              alt="Food Delivery Mobile App Ecosystem"
              fill
              sizes="55vw"
              className="object-cover"
            />
          </motion.div>
          {/* subtle hover */}
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 hover:bg-black/[0.02]" />
        </div>

        {/* CONTENT */}
        <div className="flex min-h-[520px] flex-col justify-center px-[56px] py-[46px]">
          {/* TOP META */}
          <div className="flex items-center gap-[10px]">
            <span className="rounded-full bg-[#EAF3FF] px-[14px] py-[7px] text-[14px] font-medium text-[#1267D6]">
              Featured
            </span>

            <span className="text-[15px] font-normal text-[#525865]">
              Completed April 2026
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-[22px] max-w-[520px] text-[38px] font-semibold leading-[1.18] tracking-[-1.1px] text-[#222222]">
            Food Delivery Mobile
            <br />
            App Ecosystem
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-[22px] max-w-[590px] text-[16px] font-normal leading-[1.65] text-[#505666]">
            Rethinking the end-to-end culinary journey for a post-digital world.
            This challenge focused on accessibility, micro-interactions, and
            visual storytelling.
          </p>

          {/* STATS */}
          <div className="mt-[34px] flex items-start gap-[46px]">
            <div>
              <p className="text-[18px] font-medium text-[#287CFF]">412</p>
              <p className="mt-[4px] text-[11px] font-medium tracking-[1.1px] text-[#5F6570]">
                PARTICIPANTS
              </p>
            </div>

            <div>
              <p className="text-[18px] font-medium text-[#287CFF]">Top 5</p>
              <p className="mt-[4px] text-[11px] font-medium tracking-[1.1px] text-[#5F6570]">
                FINALISTS SELECTED
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-[34px] h-px w-full bg-[#E7EAF0]" />

          {/* BOTTOM */}
          <div className="flex items-center justify-between">
            {/* USERS */}
            <div className="flex items-center">
              {designers.map((image, index) => (
                <motion.div
                  key={image}
                  whileHover={{
                    y: -4,
                    zIndex: 20,
                  }}
                  className={`relative h-[42px] w-[42px] overflow-hidden rounded-full border-[3px] border-white ${
                    index !== 0 ? "-ml-[10px]" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt="Designer"
                    fill
                    sizes="42px"
                    className="object-cover"
                  />
                </motion.div>
              ))}

              <div className="-ml-[10px] flex h-[42px] w-[42px] items-center justify-center rounded-full border-[3px] border-white bg-[#ECEEF2] text-[12px] font-semibold text-[#31343A]">
                +2
              </div>
            </div>

            {/* LINK */}
            <Link
              href="/challenge/complete-design/food-delivery-mobile-app"
              className="group flex items-center gap-[7px] text-[14px] font-medium text-[#287CFF]"
            >
              View Challenge
              <span className="transition-transform duration-300 group-hover:translate-x-[3px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

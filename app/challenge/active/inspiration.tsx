"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";

const inspirationImages = [
  {
    src: "/challenge/inspiration1.webp",
    alt: "Food delivery inspiration 1",
  },
  {
    src: "/challenge/inspiration2.webp",
    alt: "Food delivery inspiration 2",
  },
  {
    src: "/challenge/inspiration3.webp",
    alt: "Food delivery inspiration 3",
  },
  {
    src: "/challenge/inspiration4.webp",
    alt: "Food delivery inspiration 4",
  },
];

const colors = [
  {
    name: "Primary",
    hex: "#FB6609",
  },
  {
    name: "Fresh",
    hex: "#19C931",
  },
  {
    name: "Accent",
    hex: "#8065E4",
  },
  {
    name: "Highlight",
    hex: "#FFCF0F",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const imageVariants = {
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

export default function Inspiration() {
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
          className="flex items-center gap-[14px]"
        >
          <div className="inline-flex h-[44px] items-center gap-[9px] rounded-full bg-[#EAF2FF] px-[16px]">
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#D6E6FF] text-[#287CFF]">
              <Palette size={16} strokeWidth={2.1} />
            </div>

            <span className="text-[15px] font-semibold tracking-[0.3px] text-[#171717]">
              DESIGN INSPIRATION
            </span>
          </div>

          <span className="text-[13px] font-normal text-[#969696]">
            Optional
          </span>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-[34px] grid grid-cols-1 gap-[28px] xl:grid-cols-[1fr_310px]">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4"
          >
            {inspirationImages.map((item, index) => (
              <motion.div
                key={item.src}
                variants={imageVariants}
                whileHover={{
                  y: -7,
                  scale: 1.015,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative h-[330px] overflow-hidden rounded-[18px] border border-[#E8EDF5] bg-[#F7F8FC] shadow-[0_8px_24px_rgba(39,67,112,0.05)]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                />

                {/* TOP NUMBER */}
                <div className="absolute left-[12px] top-[12px] flex h-[28px] min-w-[28px] items-center justify-center rounded-full border border-white/50 bg-white/85 px-[8px] text-[10px] font-semibold text-[#5D6674] shadow-[0_4px_14px_rgba(0,0,0,0.06)] backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* BOTTOM SHADE */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[85px] bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* SPARK */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="absolute bottom-[14px] right-[14px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#287CFF] shadow-[0_6px_18px_rgba(0,0,0,0.1)]"
                >
                  <Sparkles size={16} strokeWidth={1.9} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* COLOR PALETTE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
              duration: 0.75,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-[22px] border border-[#E7EDF7] bg-white px-[24px] py-[24px] shadow-[0_12px_34px_rgba(42,70,120,0.07)]"
          >
            {/* SOFT BG */}
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[200px] w-[200px] rounded-full bg-[#EAF2FF] blur-[70px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-[8px]">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#EAF2FF] text-[#287CFF]">
                  <Palette size={16} strokeWidth={2} />
                </div>

                <div>
                  <h3 className="text-[17px] font-semibold text-[#287CFF]">
                    Color Palette
                  </h3>

                  <p className="mt-[1px] text-[10px] text-[#9AA2AD]">
                    Optional guideline
                  </p>
                </div>
              </div>

              <div className="mt-[26px] grid grid-cols-2 gap-x-[18px] gap-y-[24px]">
                {colors.map((color, index) => (
                  <motion.div
                    key={color.hex}
                    initial={{
                      opacity: 0,
                      y: 18,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    className="group flex flex-col items-center"
                  >
                    {/* COLOR CIRCLE */}
                    <div className="relative">
                      <motion.div
                        whileHover={{
                          scale: 1.06,
                        }}
                        className="h-[88px] w-[88px] rounded-full border-[5px] border-white shadow-[0_10px_25px_rgba(32,50,90,0.10)]"
                        style={{
                          backgroundColor: color.hex,
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/[0.04]" />
                    </div>

                    {/* NAME */}
                    <span className="mt-[12px] text-[10px] font-medium uppercase tracking-[0.9px] text-[#A0A7B2]">
                      {color.name}
                    </span>

                    {/* HEX */}
                    <span className="mt-[3px] text-[13px] font-semibold text-[#171717]">
                      {color.hex}
                    </span>

                    {/* HOVER LINE */}
                    <div
                      className="mt-[8px] h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-[42px]"
                      style={{
                        backgroundColor: color.hex,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM INFO */}
              <div className="mt-[24px] rounded-[13px] bg-[#F8FAFD] px-[13px] py-[11px]">
                <p className="text-center text-[10px] leading-[1.55] text-[#8F97A3]">
                  Colors are optional. You can create your own palette while
                  keeping the overall food delivery experience visually clear.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

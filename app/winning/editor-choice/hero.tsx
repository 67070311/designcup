"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function EditorChoiceHero() {
  return (
    <section className="w-full overflow-hidden bg-white px-[24px] pb-[72px] pt-[72px] md:px-[48px] xl:px-[145px]">
      <div className="relative overflow-hidden rounded-[32px] border border-[#E7EBF3] bg-[linear-gradient(135deg,#F8FAFF_0%,#F1F5FF_55%,#FFF8E8_100%)] px-[70px] py-[76px]">
        {/* decorative */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[9%] top-[14%] flex h-[90px] w-[90px] items-center justify-center rounded-[26px] bg-white shadow-[0_18px_60px_rgba(40,124,255,0.10)]"
        >
          <Star
            size={38}
            strokeWidth={1.8}
            className="text-[#287CFF]"
            fill="#287CFF"
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute bottom-[16%] right-[18%] h-[20px] w-[20px] rounded-full bg-[#FFD769]"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[4%] top-[48%] h-[12px] w-[12px] rounded-full bg-[#8CB9FF]"
        />

        <div className="relative z-10 max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-flex h-[42px] items-center gap-[9px] rounded-full border border-[#DDE6F5] bg-white px-[16px]"
          >
            <Sparkles size={17} strokeWidth={1.8} className="text-[#287CFF]" />

            <span className="text-[14px] font-medium text-[#287CFF]">
              CURATED BY DESIGNCUP EDITORS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-[28px] max-w-[700px] text-[54px] font-semibold leading-[1.08] tracking-[-2px] text-[#111111]"
          >
            Exceptional work,
            <br />
            <span className="text-[#287CFF]">chosen with intention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.16,
            }}
            className="mt-[24px] max-w-[650px] text-[17px] font-normal leading-[1.8] text-[#6A7180]"
          >
            A curated collection of standout projects selected for their
            originality, craft, usability, and ability to push design forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.24,
            }}
            className="mt-[34px] flex items-center gap-[14px]"
          >
            <Link
              href="#editor-picks"
              className="group flex h-[52px] items-center justify-center gap-[9px] rounded-full bg-[#111111] px-[24px] text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#287CFF]"
            >
              Explore editor picks
              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-[4px]"
              />
            </Link>

            <div className="flex h-[52px] items-center gap-[10px] rounded-full border border-[#DCE2EC] bg-white px-[20px]">
              <Star
                size={17}
                strokeWidth={1.8}
                className="text-[#F4B400]"
                fill="#F4B400"
              />

              <span className="text-[15px] font-medium text-[#202020]">
                64 curated projects
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

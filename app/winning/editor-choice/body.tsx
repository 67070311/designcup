"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  MoveUpRight,
  Sparkles,
  Star,
} from "lucide-react";

const featuredPicks = [
  {
    id: 1,
    title: "Luma Finance",
    category: "FINTECH / MOBILE APP",
    description:
      "A beautifully restrained finance experience that turns complex financial data into a calm, intuitive interface.",
    image: "/winning/editor-choice/editor-1.webp",
    designer: "Maya Chen",
    reason: "Exceptional Visual System",
  },
  {
    id: 2,
    title: "Kawaii Coffee",
    category: "BRANDING / MOBILE",
    description:
      "Playful personality, thoughtful interactions, and a visual language that feels distinctive without sacrificing usability.",
    image: "/winning/editor-choice/editor-2.webp",
    designer: "Daniel Kim",
    reason: "Editorial Mastery",
  },
  {
    id: 3,
    title: "Habit Together",
    category: "HEALTH / PRODUCT DESIGN",
    description:
      "A warm and approachable product experience that transforms everyday habit tracking into something genuinely engaging.",
    image: "/winning/editor-choice/editor-3.webp",
    designer: "Sarah Lee",
    reason: "Human-Centered Design",
  },
];

const morePicks = [
  {
    id: 1,
    title: "Nova Banking",
    category: "FINTECH",
    image: "/winning/editor-choice/pick-1.webp",
    designer: "Alex Rivera",
  },
  {
    id: 2,
    title: "Orbit Workspace",
    category: "SAAS UI",
    image: "/winning/editor-choice/pick-2.webp",
    designer: "Emma Wilson",
  },
  {
    id: 3,
    title: "Mori Store",
    category: "E-COMMERCE",
    image: "/winning/editor-choice/pick-3.webp",
    designer: "Noah Kim",
  },
  {
    id: 4,
    title: "Aura Wellness",
    category: "MOBILE APP",
    image: "/winning/editor-choice/pick-4.webp",
    designer: "Sophia Park",
  },
];

export default function EditorChoiceBody() {
  return (
    <main className="w-full bg-white">
      {/* =========================================================
          FEATURED EDITOR PICKS
      ========================================================== */}
      <section className="mx-auto w-full max-w-[1600px] px-[70px] pb-[100px] pt-[90px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-end justify-between"
        >
          <div>
            <div className="mb-[14px] flex items-center gap-[9px]">
              <Sparkles size={17} strokeWidth={2} className="text-[#287CFF]" />

              <span className="text-[13px] font-semibold tracking-[1.5px] text-[#287CFF]">
                CURATED SELECTION
              </span>
            </div>

            <h2 className="text-[38px] font-semibold tracking-[-1.2px] text-[#171717]">
              Featured by our editors.
            </h2>
          </div>

          <p className="max-w-[440px] text-right text-[15px] leading-[1.8] text-[#737A8D]">
            A closer look at the projects our editorial team believes push
            design forward.
          </p>
        </motion.div>

        {/* FEATURED CARDS */}
        <div className="mt-[55px] flex flex-col gap-[30px]">
          {featuredPicks.map((item, index) => (
            <motion.article
              key={item.id}
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
                margin: "-80px",
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group grid min-h-[470px] grid-cols-[1.15fr_0.85fr] overflow-hidden rounded-[28px] border border-[#E8EBF2] bg-white transition-all duration-500 hover:-translate-y-[4px] hover:shadow-[0_22px_60px_rgba(28,55,100,0.10)]"
            >
              {/* IMAGE */}
              <div
                className={`relative min-h-[470px] overflow-hidden bg-[#F3F5F9] ${
                  index % 2 === 1 ? "order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* NUMBER */}
                <div className="absolute left-[28px] top-[28px] flex h-[42px] min-w-[42px] items-center justify-center rounded-full border border-white/60 bg-white/90 px-[13px] text-[13px] font-semibold text-[#181818] shadow-sm backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* OPEN */}
                <div className="absolute bottom-[28px] right-[28px] flex h-[48px] w-[48px] translate-y-[8px] items-center justify-center rounded-full bg-white text-[#171717] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} strokeWidth={1.8} />
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`flex flex-col justify-between px-[52px] py-[48px] ${
                  index % 2 === 1 ? "order-1" : ""
                }`}
              >
                <div>
                  {/* CATEGORY */}
                  <div className="flex items-center gap-[10px]">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#287CFF]" />

                    <span className="text-[12px] font-semibold tracking-[1.3px] text-[#287CFF]">
                      {item.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-[22px] max-w-[450px] text-[36px] font-semibold leading-[1.15] tracking-[-1px] text-[#191919]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-[20px] max-w-[470px] text-[15px] leading-[1.85] text-[#686F7F]">
                    {item.description}
                  </p>

                  {/* EDITOR REASON */}
                  <div className="mt-[35px] border-l-[2px] border-[#287CFF] pl-[18px]">
                    <p className="text-[11px] font-semibold tracking-[1.2px] text-[#9AA1AF]">
                      EDITOR&apos;S NOTE
                    </p>

                    <p className="mt-[7px] text-[15px] font-medium text-[#252525]">
                      {item.reason}
                    </p>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-[45px] flex items-center justify-between border-t border-[#E8EBF1] pt-[24px]">
                  <div>
                    <p className="text-[11px] font-medium tracking-[1px] text-[#9AA1AF]">
                      DESIGNED BY
                    </p>

                    <p className="mt-[5px] text-[15px] font-medium text-[#252525]">
                      {item.designer}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={`Save ${item.title}`}
                    className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#DFE4ED] text-[#687084] transition-all duration-300 hover:border-[#287CFF] hover:bg-[#F4F8FF] hover:text-[#287CFF]"
                  >
                    <Bookmark size={17} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================================
          EDITORIAL STATEMENT
      ========================================================== */}
      <section className="w-full bg-[#F6F8FC]">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[0.75fr_1.25fr] gap-[100px] px-[70px] py-[100px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#287CFF] text-white">
              <Star size={20} fill="currentColor" strokeWidth={1.5} />
            </div>

            <p className="mt-[24px] text-[12px] font-semibold tracking-[1.6px] text-[#287CFF]">
              OUR PERSPECTIVE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
          >
            <h2 className="max-w-[820px] text-[42px] font-medium leading-[1.35] tracking-[-1.3px] text-[#1D1D1F]">
              Great design isn&apos;t just about how something looks.
              <span className="text-[#9BA2B1]">
                {" "}
                It&apos;s about the clarity, intention, and emotion behind every
                decision.
              </span>
            </h2>

            <div className="mt-[38px] flex items-center gap-[13px]">
              <div className="h-px w-[35px] bg-[#287CFF]" />

              <p className="text-[13px] font-medium text-[#666E7D]">
                DesignCup Editorial Team
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MORE PICKS
      ========================================================== */}
      <section className="mx-auto w-full max-w-[1600px] px-[70px] py-[100px]">
        {/* HEADER */}
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[12px] font-semibold tracking-[1.5px] text-[#287CFF]">
              MORE TO DISCOVER
            </p>

            <h2 className="mt-[13px] text-[36px] font-semibold tracking-[-1px] text-[#191919]">
              More editor&apos;s picks
            </h2>
          </motion.div>

          <Link
            href="/explore"
            className="group flex items-center gap-[9px] text-[14px] font-medium text-[#287CFF]"
          >
            View all
            <MoveUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </Link>
        </div>

        {/* GRID */}
        <div className="mt-[42px] grid grid-cols-4 gap-[22px]">
          {morePicks.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1.15/1] overflow-hidden rounded-[20px] bg-[#F1F3F7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.08]" />

                <div className="absolute right-[16px] top-[16px] flex h-[40px] w-[40px] translate-y-[-5px] items-center justify-center rounded-full bg-white text-[#202020] opacity-0 shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* INFO */}
              <div className="pt-[20px]">
                <div className="flex items-center justify-between gap-[15px]">
                  <span className="text-[11px] font-semibold tracking-[1.2px] text-[#287CFF]">
                    {item.category}
                  </span>

                  <button
                    type="button"
                    aria-label={`Bookmark ${item.title}`}
                    className="text-[#A0A7B5] transition-colors hover:text-[#287CFF]"
                  >
                    <Bookmark size={16} strokeWidth={1.8} />
                  </button>
                </div>

                <h3 className="mt-[10px] text-[20px] font-semibold tracking-[-0.3px] text-[#202020]">
                  {item.title}
                </h3>

                <div className="mt-[12px] flex items-center justify-between">
                  <p className="text-[13px] text-[#737A88]">
                    by {item.designer}
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="translate-x-[-4px] text-[#287CFF] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* EXPLORE BUTTON */}
        <div className="mt-[54px] flex justify-center">
          <Link
            href="/explore"
            className="group flex h-[52px] items-center justify-center gap-[10px] rounded-full border border-[#DDE2EB] bg-white px-[27px] text-[14px] font-medium text-[#252525] transition-all duration-300 hover:border-[#287CFF] hover:bg-[#F7FAFF] hover:text-[#287CFF]"
          >
            Discover more projects
            <ArrowRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-[4px]"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

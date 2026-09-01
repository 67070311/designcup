"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Heart } from "lucide-react";

const submissions = [
  {
    id: 1,
    title: "FoodieGo",
    designer: "Jane Doe",
    image: "/challenge/current-submission/current-1.webp",
    avatar: "https://i.pravatar.cc/160?img=47",
    likes: 128,
    views: "1,489",
  },
  {
    id: 2,
    title: "QuickBite App",
    designer: "Alex Chen",
    image: "/challenge/current-submission/current-2.webp",
    avatar: "https://i.pravatar.cc/160?img=12",
    likes: 128,
    views: "1,489",
  },
  {
    id: 3,
    title: "NomNom Delivery",
    designer: "Sarah Kim",
    image: "/challenge/current-submission/current-3.webp",
    avatar: "https://i.pravatar.cc/160?img=32",
    likes: 128,
    views: "1,489",
  },
  {
    id: 4,
    title: "EatEasy",
    designer: "Mila Nguyen",
    image: "/challenge/current-submission/current-4.webp",
    avatar: "https://i.pravatar.cc/160?img=44",
    likes: 128,
    views: "1,489",
  },
  {
    id: 5,
    title: "Yummy App",
    designer: "Cend Lee",
    image: "/challenge/current-submission/current-5.webp",
    avatar: "https://i.pravatar.cc/160?img=5",
    likes: 128,
    views: "1,489",
  },
  {
    id: 6,
    title: "Deliveroo Concept",
    designer: "Emma Wilson",
    image: "/challenge/current-submission/current-6.webp",
    avatar: "https://i.pravatar.cc/160?img=25",
    likes: 128,
    views: "1,489",
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
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CurrentSubmissions() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFF] px-[56px] py-[72px]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-[-140px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#E9F1FF]/70 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-130px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#FFF0E5]/60 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-end justify-between"
        >
          <div className="flex items-end gap-[14px]">
            <h2 className="text-[24px] font-semibold tracking-[-0.5px] text-[#171717]">
              Current Submissions
            </h2>

            <span className="mb-[2px] text-[13px] text-[#9299A4]">
              See what designers are creating
            </span>
          </div>

          <Link
            href="/challenge/active/submissions"
            className="group flex items-center gap-[6px] text-[13px] font-medium text-[#287CFF]"
          >
            View All
            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-[3px]"
            />
          </Link>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            staggerChildren: 0.08,
          }}
          className="mt-[30px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {submissions.map((submission) => (
            <motion.div
              key={submission.id}
              variants={cardVariants}
              whileHover={{
                y: -7,
              }}
              className="h-full"
            >
              <Link
                href={`/challenge/submission/${submission.id}`}
                className="
                  group
                  relative
                  block
                  h-full
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#E8EDF5]
                  bg-white
                  shadow-[0_8px_24px_rgba(41,65,110,0.05)]
                  transition-all
                  duration-300
                  hover:border-[#D6E3FA]
                  hover:shadow-[0_18px_38px_rgba(40,75,135,0.10)]
                "
              >
                {/* ========================= */}
                {/* SUBMISSION IMAGE */}
                {/* ========================= */}

                <div className="relative h-[205px] w-full overflow-hidden bg-[#F1F4F9]">
                  <Image
                    src={submission.image}
                    alt={`${submission.title} submission`}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-[1.045]
                    "
                  />

                  {/* HOVER OVERLAY */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.03]" />

                  {/* ARROW */}
                  <div
                    className="
                      absolute
                      right-[10px]
                      top-[10px]
                      flex
                      h-[32px]
                      w-[32px]
                      translate-y-[-5px]
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      text-[#171717]
                      opacity-0
                      shadow-[0_5px_14px_rgba(0,0,0,0.08)]
                      backdrop-blur
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ArrowRight size={15} strokeWidth={1.8} />
                  </div>
                </div>

                {/* ========================= */}
                {/* CONTENT */}
                {/* ========================= */}

                <div className="px-[14px] pb-[14px] pt-[14px]">
                  {/* DESIGNER */}
                  <div className="flex min-w-0 items-center gap-[10px]">
                    {/* PROFILE IMAGE */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        relative
                        h-[40px]
                        w-[40px]
                        shrink-0
                        overflow-hidden
                        rounded-full
                        border-[2px]
                        border-white
                        bg-[#EEF2F7]
                        shadow-[0_3px_10px_rgba(30,55,90,0.14)]
                      "
                    >
                      <img
                        src={submission.avatar}
                        alt={`${submission.designer} profile`}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                      />
                    </motion.div>

                    {/* TITLE + DESIGNER */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          truncate
                          text-[14px]
                          font-semibold
                          tracking-[-0.1px]
                          text-[#171717]
                          transition-colors
                          duration-300
                          group-hover:text-[#287CFF]
                        "
                      >
                        {submission.title}
                      </h3>

                      <p className="mt-[2px] truncate text-[11px] text-[#A0A6AF]">
                        by {submission.designer}
                      </p>
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="my-[13px] h-px w-full bg-[#EEF1F5]" />

                  {/* ========================= */}
                  {/* STATS */}
                  {/* ========================= */}

                  <div className="flex items-center gap-[18px]">
                    {/* LIKES */}
                    <div className="flex items-center gap-[6px]">
                      <motion.div
                        whileHover={{
                          scale: 1.15,
                        }}
                      >
                        <Heart
                          size={16}
                          strokeWidth={1.8}
                          className="text-[#FF4D5E]"
                        />
                      </motion.div>

                      <span className="text-[11px] font-medium text-[#3D434B]">
                        {submission.likes}
                      </span>
                    </div>

                    {/* VIEWS */}
                    <div className="flex items-center gap-[6px]">
                      <Eye
                        size={16}
                        strokeWidth={1.8}
                        className="text-[#287CFF]"
                      />

                      <span className="text-[11px] font-medium text-[#3D434B]">
                        {submission.views}
                      </span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM HOVER LINE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    rounded-r-full
                    bg-[#287CFF]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

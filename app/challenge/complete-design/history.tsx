"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const challenges = [
  {
    category: "SAAS UI",
    date: "Feb 2026",
    title: "Future Bank Dashboard",
    image: "/challenge/current-submission/current-1.webp",
    designer: "Alex Rivera",
    avatar: "/challenge/current-submission/current-2.webp",
    entries: "286 Entries",
    href: "/challenge/complete-design/future-bank-dashboard",
  },
  {
    category: "BRANDING",
    date: "Jan 2026",
    title: "Eco-Essence Rebrand",
    image: "/challenge/current-submission/current-2.webp",
    designer: "Sarah Chen",
    avatar: "/challenge/current-submission/current-3.webp",
    entries: "195 Entries",
    href: "/challenge/complete-design/eco-essence-rebrand",
  },
  {
    category: "LANDING PAGE",
    date: "Dec 2025",
    title: "Nexus Architecture",
    image: "/challenge/current-submission/current-3.webp",
    designer: "Marcus Thorne",
    avatar: "/challenge/current-submission/current-4.webp",
    entries: "342 Entries",
    href: "/challenge/complete-design/nexus-architecture",
  },
  {
    category: "SAAS UI",
    date: "Feb 2026",
    title: "Future Bank Dashboard",
    image: "/challenge/current-submission/current-4.webp",
    designer: "Alex Rivera",
    avatar: "/challenge/current-submission/current-5.webp",
    entries: "286 Entries",
    href: "/challenge/complete-design/future-bank-dashboard-2",
  },
];

export default function History() {
  return (
    <section className="w-full bg-white px-[24px] py-[60px] md:px-[48px] xl:px-[144px]">
      <div className="w-full">
        {/* HEAD */}
        <motion.div
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
            duration: 0.55,
          }}
          className="mb-[38px] flex items-center justify-between"
        >
          <h2 className="text-[24px] font-semibold tracking-[-0.5px] text-[#222222]">
            Explore All History
          </h2>

          <Link
            href="/challenge/complete-design/history"
            className="group flex items-center gap-[6px] text-[15px] font-normal text-[#287CFF]"
          >
            View All
            <span className="opacity-0 transition-all duration-300 group-hover:translate-x-[3px] group-hover:opacity-100">
              →
            </span>
          </Link>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-[24px]">
          {challenges.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{
                opacity: 0,
                y: 26,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="group overflow-hidden rounded-[22px] border border-[#E2E6EE] bg-white transition-shadow duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.07)]"
            >
              <Link href={item.href} className="block">
                {/* IMAGE */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* CONTENT */}
                <div className="px-[24px] pb-[24px] pt-[22px]">
                  {/* META */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-[1.1px] text-[#1268D6]">
                      {item.category}
                    </span>

                    <span className="text-[13px] text-[#59606E]">
                      {item.date}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-[18px] truncate text-[20px] font-medium text-[#222222] transition-colors duration-300 group-hover:text-[#287CFF]">
                    {item.title}
                  </h3>

                  {/* BOTTOM */}
                  <div className="mt-[28px] flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <div className="relative h-[38px] w-[38px] overflow-hidden rounded-full">
                        <Image
                          src={item.avatar}
                          alt={item.designer}
                          fill
                          sizes="38px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-[5px]">
                        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#FFC928] text-white">
                          <Trophy size={10} strokeWidth={2.3} />
                        </div>

                        <span className="text-[13px] font-normal text-[#303238]">
                          {item.designer}
                        </span>
                      </div>
                    </div>

                    <span className="text-[13px] font-normal text-[#555C69]">
                      {item.entries}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

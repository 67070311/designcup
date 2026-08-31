"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, CloudUpload, MonitorSmartphone } from "lucide-react";

const screens = [
  {
    number: "01",
    title: "Home",
    description:
      "Design a welcoming home screen where users can discover restaurants and explore featured meals.",
    includes: [
      "Search bar",
      "Promotional banner",
      "Food categories",
      "Restaurant cards",
      "Bottom navigation",
    ],
    note: "You may include additional sections or features to enhance the overall user experience.",
    image: "/challenge/1.webp",
  },
  {
    number: "02",
    title: "Restaurant Detail",
    description:
      "Design a restaurant detail screen that showcases menu items and essential restaurant information.",
    includes: [
      "Restaurant information",
      "Menu categories",
      "Food cards",
      "Add to Cart button",
    ],
    note: "You may add extra details or interactions that improve usability and presentation.",
    image: "/challenge/2.webp",
  },
  {
    number: "03",
    title: "Checkout Screen",
    description:
      "Design a simple and intuitive checkout screen for reviewing and placing an order.",
    includes: [
      "Delivery address",
      "Payment method",
      "Order summary",
      "Place Order button",
    ],
    note: "You may include additional checkout features as long as the experience remains clear and user-friendly.",
    image: "/challenge/3.webp",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function RequireDesign() {
  return (
    <section className="w-full bg-[#F5F7FF] px-[56px] py-[64px]">
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
          amount: 0.15,
        }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[24px] border border-[#E4ECF8] bg-white px-[28px] pb-[26px] pt-[28px] shadow-[0_14px_45px_rgba(44,70,120,0.07)]"
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
          className="flex items-center gap-[11px]"
        >
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[9px] bg-[#EAF2FF] text-[#287CFF]">
            <MonitorSmartphone size={17} strokeWidth={2} />
          </div>

          <h2 className="text-[17px] font-semibold tracking-[-0.2px] text-[#171717]">
            REQUIRED SCREENS (3)
          </h2>
        </motion.div>

        {/* SCREENS GRID */}
        <div className="mt-[28px] grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex flex-col"
            >
              {/* TEXT */}
              <div className="px-[2px]">
                {/* NUMBER + TITLE */}
                <div className="flex items-center gap-[10px]">
                  <span className="text-[14px] font-medium text-[#A5ACB7]">
                    {screen.number}
                  </span>

                  <h3 className="text-[15px] font-semibold text-[#287CFF]">
                    {screen.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-[10px] min-h-[58px] text-[12px] leading-[1.65] text-[#343A43]">
                  {screen.description}
                </p>

                {/* MUST INCLUDE */}
                <p className="mt-[8px] text-[12px] font-medium text-[#171717]">
                  Must Include:
                </p>

                <div className="mt-[7px] min-h-[112px] space-y-[6px]">
                  {screen.includes.map((item) => (
                    <div key={item} className="flex items-start gap-[7px]">
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#171717]" />

                      <span className="text-[12px] leading-[1.45] text-[#343A43]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* NOTE */}
                <p className="mt-[10px] min-h-[46px] text-[10px] leading-[1.6] text-[#A5ABB4]">
                  {screen.note}
                </p>
              </div>

              {/* IMAGE BOX */}
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative mt-[18px] h-[360px] overflow-hidden rounded-[18px] bg-[#F6F7FD]"
              >
                <Image
                  src={screen.image}
                  alt={`${screen.title} required screen`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain object-center p-[16px]"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* UPLOAD BUTTON */}
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
            duration: 0.65,
            delay: 0.3,
          }}
          className="mt-[24px] flex justify-center"
        >
          <Link
            href="/challenge/upload-design"
            className="
              group
              flex
              h-[48px]
              items-center
              gap-[8px]
              rounded-full
              border-[2px]
              border-[#287CFF]
              bg-white
              p-[5px]
              shadow-[0_7px_18px_rgba(40,124,255,0.15)]
              transition-all
              duration-300
              hover:-translate-y-[2px]
            "
          >
            <div className="flex h-[34px] items-center gap-[8px] rounded-full bg-[#287CFF] px-[18px] text-white transition-colors duration-300 group-hover:bg-[#176DE8]">
              <CloudUpload size={16} strokeWidth={2} />

              <span className="text-[12px] font-medium">
                Upload your design!
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const editorChoices = [
  {
    title: "Cosmos Interface V2",
    description:
      "Exceptional use of dark-mode accessibility and spatial hierarchy.",
    label: "Excellence in Motion",
    image: "/challenge/current-submission/current-2.webp",
    href: "/challenge/complete-design/cosmos-interface-v2",
  },
  {
    title: "Vogue Digital Archive",
    description: "Perfect balance of whitespace and high-impact typography.",
    label: "Editorial Mastery",
    image: "/challenge/current-submission/current-3.webp",
    href: "/challenge/complete-design/vogue-digital-archive",
  },
  {
    title: "Aura Health Assistant",
    description:
      "Setting new standards for user empathy in digital healthcare.",
    label: "UI Harmony",
    image: "/challenge/current-submission/current-4.webp",
    href: "/challenge/complete-design/aura-health-assistant",
  },
];

export default function EditorChoose() {
  return (
    <section className="w-full bg-white px-[24px] pb-[110px] pt-[65px] md:px-[48px] xl:px-[144px]">
      <div className="w-full">
        {/* HEAD */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-[42px] flex items-center gap-[12px]"
        >
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#1268D6] text-white">
            <Star size={15} fill="white" strokeWidth={0} />
          </div>

          <h2 className="text-[24px] font-semibold tracking-[-0.5px] text-[#222222]">
            Editor&apos;s Choice
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-[22px]">
          {editorChoices.map((item, index) => (
            <motion.article
              key={item.title}
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
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <Link href={item.href}>
                {/* IMAGE */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative h-[340px] overflow-hidden rounded-[24px] bg-[#F4F6FA]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  {/* dark bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                  {/* LABEL */}
                  <motion.div
                    initial={false}
                    whileHover={{
                      x: 3,
                    }}
                    className="absolute bottom-[24px] left-[26px] rounded-full bg-[#1268D6] px-[16px] py-[7px] text-[16px] font-normal text-white"
                  >
                    {item.label}
                  </motion.div>
                </motion.div>

                {/* TEXT */}
                <h3 className="mt-[16px] text-[19px] font-medium text-[#222222] transition-colors duration-300 group-hover:text-[#287CFF]">
                  {item.title}
                </h3>

                <p className="mt-[8px] text-[15px] font-normal leading-[1.6] text-[#555B68]">
                  {item.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Can I submit more than one design?",
    answer:
      "Yes. You can submit more than one design as long as each submission is your own work and follows all challenge requirements.",
  },
  {
    question: "Can I use Figma or Adobe XD?",
    answer:
      "Yes. You can use Figma, Adobe XD, Sketch, or any other design tool you prefer. Your final submission should still match the required screen size and format.",
  },
  {
    question: "Can I use AI-generated images?",
    answer:
      "AI-generated supporting visuals may be used, but the overall UI design, layout, interaction decisions, and final presentation should represent your own creative work.",
  },
  {
    question: "Can I edit my submission?",
    answer:
      "Yes. You can update your submission while the challenge is still open. Once the submission deadline passes, editing will be disabled.",
  },
  {
    question: "What happens after the deadline?",
    answer:
      "After submissions close, eligible entries move into the community voting and judging period. Finalists and winners are announced after the review process is complete.",
  },
  {
    question: "How are winners selected?",
    answer:
      "Submissions are evaluated based on visual design, usability, creativity, brief accuracy, and presentation. Community engagement may also contribute depending on the challenge format.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-white px-[56px] py-[72px]">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* HEADER */}
        <motion.div
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center gap-[12px]"
        >
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px] bg-[#EAF2FF] text-[#287CFF]">
            <HelpCircle size={19} strokeWidth={2} />
          </div>

          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#287CFF]">
              Need help?
            </span>

            <h2 className="mt-[2px] text-[26px] font-semibold tracking-[-0.5px] text-[#171717]">
              Frequently Asked Questions
            </h2>
          </div>
        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            staggerChildren: 0.07,
          }}
          className="mt-[34px] space-y-[14px]"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className={`
                  overflow-hidden
                  rounded-[18px]
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#CFE0FF] bg-white shadow-[0_12px_30px_rgba(40,70,120,0.06)]"
                      : "border-transparent bg-[#F6F8FD]"
                  }
                `}
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-[20px] px-[22px] py-[20px] text-left"
                >
                  <div className="flex items-center gap-[14px]">
                    <div
                      className={`
                        flex
                        h-[30px]
                        w-[30px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[11px]
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-[#287CFF] text-white"
                            : "bg-[#EAF2FF] text-[#287CFF]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span
                      className={`
                        text-[15px]
                        font-medium
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-[#287CFF]"
                            : "text-[#171717] group-hover:text-[#287CFF]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      flex
                      h-[32px]
                      w-[32px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-colors
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#287CFF] text-white"
                          : "bg-white text-[#596273]"
                      }
                    `}
                  >
                    <ChevronDown size={17} strokeWidth={2} />
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        },
                        opacity: {
                          duration: 0.22,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-[66px] pb-[20px]">
                        <div className="h-px w-full bg-[#E9EEF6]" />

                        <p className="max-w-[950px] pt-[14px] text-[12px] leading-[1.75] text-[#6F7783]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

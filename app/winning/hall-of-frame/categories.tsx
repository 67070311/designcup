"use client";

import Image from "next/image";
import { Eye, Medal, X } from "lucide-react";
import { useState } from "react";

type Winner = {
  name: string;
  project: string;
  score: string;
};

type Challenge = {
  title: string;
  date: string;
  image: string;
  accent: string;
  accentText: string;
  description: string;
  winners: Winner[];
};

const challenges: Challenge[] = [
  {
    title: "Food Delivery App",
    date: "Sep 2026",
    image: "/challenge/voting-submissions/food-delivery-mobile.webp",
    accent: "bg-[#EEF6FF]",
    accentText: "text-[#287CFF]",
    description: "Five standout concepts that made ordering food feel simpler and more delightful.",
    winners: [
      { name: "Elena Vance", project: "BiteFlow", score: "9.82" },
      { name: "Maya Chen", project: "Daily Dish", score: "9.41" },
      { name: "Noah Kim", project: "Drop & Dine", score: "9.12" },
      { name: "Ava Martin", project: "FreshGo", score: "8.79" },
      { name: "Leo Parker", project: "MealMate", score: "8.35" },
    ],
  },
  {
    title: "Education Platform",
    date: "Aug 2026",
    image: "/winning/hall-of-frame/covers/education-platform.webp",
    accent: "bg-[#F5F0FF]",
    accentText: "text-[#7C4DFF]",
    description: "Top learning experiences that turned complex lessons into clear, engaging journeys.",
    winners: [
      { name: "Sofia Reyes", project: "LearnLoop", score: "9.74" },
      { name: "Nora Bell", project: "Classroom+", score: "9.31" },
      { name: "Ethan Cole", project: "SkillSpring", score: "9.08" },
      { name: "Lina Brooks", project: "StudyNest", score: "8.91" },
      { name: "Kai Morgan", project: "Mentorly", score: "8.62" },
    ],
  },
  {
    title: "Mobile Commerce",
    date: "Jul 2026",
    image: "/winning/hall-of-frame/covers/mobile-commerce.webp",
    accent: "bg-[#ECFAF7]",
    accentText: "text-[#149A7D]",
    description: "Five mobile concepts that rethought browsing, discovery, and checkout on the go.",
    winners: [
      { name: "Maya Chen", project: "Night Owl", score: "9.68" },
      { name: "Elena Vance", project: "Cartly", score: "9.28" },
      { name: "Ava Martin", project: "Pocket Store", score: "8.97" },
      { name: "Kai Morgan", project: "Nova Shop", score: "8.73" },
      { name: "Noah Kim", project: "Flow Cart", score: "8.51" },
    ],
  },
  {
    title: "Social Connection App",
    date: "Jun 2026",
    image: "/winning/hall-of-frame/covers/social-connection.webp",
    accent: "bg-[#EEF7FF]",
    accentText: "text-[#3F7FEA]",
    description: "Concepts that bring people closer through simple, meaningful interactions.",
    winners: [
      { name: "Leo Parker", project: "NewLife", score: "9.63" },
      { name: "Nora Bell", project: "Circle", score: "9.19" },
      { name: "Maya Chen", project: "SideBySide", score: "8.94" },
      { name: "Sofia Reyes", project: "SmallTalk", score: "8.72" },
      { name: "Lina Brooks", project: "Meetly", score: "8.44" },
    ],
  },
  {
    title: "Tennis Action App",
    date: "May 2026",
    image: "/winning/hall-of-frame/covers/tennis-action.webp",
    accent: "bg-[#F1FBEA]",
    accentText: "text-[#5B9E2D]",
    description: "Smart match tracking, live scores, and insights designed for every tennis fan.",
    winners: [
      { name: "Ethan Cole", project: "Tennis World", score: "9.71" },
      { name: "Noah Kim", project: "Matchday", score: "9.22" },
      { name: "Elena Vance", project: "Court Pulse", score: "8.96" },
      { name: "Ava Martin", project: "Live Set", score: "8.75" },
      { name: "Kai Morgan", project: "Ace Track", score: "8.39" },
    ],
  },
];

export default function HallCategories() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  return (
    <section className="bg-[#F8FAFD] px-[24px] py-[104px] md:px-[48px] xl:px-[144px]">
      <div className="mx-auto w-full max-w-[1640px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#287CFF]">
              Past Challenges
            </p>
            <h2 className="mt-2 text-[38px] font-semibold leading-[1.12] tracking-[-1.2px] text-[#181A20] md:text-[46px]">
              Every challenge has its own top five.
            </h2>
          </div>
          <p className="max-w-[520px] text-[16px] leading-7 text-[#747D8D] lg:text-right">
            Open a challenge to see all five projects and the designers behind them.
          </p>
        </div>

        <div className="mt-[42px] grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className={`overflow-hidden rounded-[30px] border border-[#E3E9F2] ${challenge.accent} shadow-[0_12px_30px_rgba(36,52,88,0.05)]`}
            >
              <div className="relative h-[230px] overflow-hidden bg-white p-3">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  quality={100}
                  sizes="(max-width:1280px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <p className={`text-[13px] font-bold uppercase tracking-[0.11em] ${challenge.accentText}`}>
                  {challenge.date}
                </p>
                <h3 className="mt-2 text-[27px] font-semibold tracking-[-0.5px] text-[#171A21]">
                  {challenge.title}
                </h3>
                <p className="mt-3 min-h-[48px] text-[15px] leading-6 text-[#6F7888]">
                  {challenge.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedChallenge(challenge)}
                  className="mt-6 flex h-[54px] w-full items-center justify-center gap-2 rounded-[16px] border border-[#D6DFEC] bg-white text-[15px] font-semibold text-[#283140] shadow-[0_4px_12px_rgba(40,50,70,0.04)] transition-colors hover:border-[#287CFF] hover:text-[#287CFF]"
                >
                  <Eye size={18} />
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedChallenge && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101828]/38 px-5 py-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedChallenge(null);
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-[1120px] overflow-y-auto rounded-[30px] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:p-8">
            <button
              type="button"
              onClick={() => setSelectedChallenge(null)}
              aria-label="Close challenge details"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#F1F4F8] text-[#46505F] transition hover:bg-[#E6EBF2]"
            >
              <X size={20} />
            </button>

            <div className="pr-14">
              <p className={`text-[13px] font-bold uppercase tracking-[0.11em] ${selectedChallenge.accentText}`}>
                {selectedChallenge.date} · Final ranking
              </p>
              <h3 className="mt-2 text-[34px] font-semibold tracking-[-0.8px] text-[#171A21] md:text-[40px]">
                {selectedChallenge.title}
              </h3>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {selectedChallenge.winners.map((winner, index) => (
                <article
                  key={`${selectedChallenge.title}-${winner.name}`}
                  className={`rounded-[22px] border p-4 ${index === 0 ? "border-[#F0D77B] bg-[#FFFDF7]" : "border-[#E7EBF1] bg-white"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold ${index === 0 ? "bg-[#FFF0B8] text-[#9B7000]" : "bg-[#EEF2F6] text-[#515A68]"}`}>
                      #{index + 1}
                    </div>
                    {index === 0 && <Medal size={19} className="text-[#E7A900]" />}
                  </div>

                  <p className="mt-5 text-[13px] font-semibold text-[#287CFF]">{winner.name}</p>
                  <h4 className="mt-1 text-[17px] font-semibold leading-[1.3] text-[#1D2128]">{winner.project}</h4>

                  <div className="mt-5 flex items-center justify-between border-t border-[#EEF1F5] pt-3">
                    <span className="text-[12px] text-[#8992A0]">Jury score</span>
                    <span className="text-[15px] font-semibold text-[#252A33]">{winner.score}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

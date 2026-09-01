"use client";

import Image from "next/image";
import { ArrowRight, Award, Crown, Trophy } from "lucide-react";

const podium = [
  {
    rank: "2",
    name: "Maya Chen",
    title: "Night Owl Shopping App",
    image: "/explore/night-owl-shopping-app.webp",
    className: "lg:translate-y-[42px]",
  },
  {
    rank: "1",
    name: "Elena Vance",
    title: "Designjoy Studio",
    image: "/explore/designjoy-studio.webp",
    className: "",
  },
  {
    rank: "3",
    name: "Noah Kim",
    title: "Blue Map Mobile UI",
    image: "/explore/blue-map-mobile-ui.webp",
    className: "lg:translate-y-[66px]",
  },
];

export default function HallOfFrameHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FAFF_0%,#FFFFFF_100%)] px-[24px] pb-[86px] pt-[72px] md:px-[48px] xl:px-[144px]">
      <div className="pointer-events-none absolute left-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#DCEBFF] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-100px] top-[80px] h-[360px] w-[360px] rounded-full bg-[#FFF0C9] blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-[1640px] gap-[56px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E5FF] bg-white px-4 py-2 text-[14px] font-semibold text-[#287CFF] shadow-[0_8px_24px_rgba(40,124,255,0.08)]">
            <Award size={17} />
            DESIGNCUP HALL OF FAME
          </div>

          <h1 className="mt-[24px] text-[48px] font-semibold leading-[1.08] tracking-[-1.7px] text-[#17181C] md:text-[62px]">
            Where great design
            <span className="block text-[#287CFF]">becomes legacy.</span>
          </h1>

          <p className="mt-[24px] max-w-[560px] text-[17px] leading-[1.75] text-[#697386]">
            A permanent home for DesignCup champions, breakthrough ideas, and the designers whose work raised the bar for everyone.
          </p>

          <div className="mt-[34px] flex flex-wrap gap-3">
            <button className="inline-flex h-[52px] items-center gap-2 rounded-full bg-[#17181C] px-6 text-[15px] font-semibold text-white transition hover:-translate-y-0.5">
              Explore champions
              <ArrowRight size={18} />
            </button>
            <div className="inline-flex h-[52px] items-center gap-3 rounded-full border border-[#E3E7EF] bg-white px-5 text-[14px] text-[#5E6675]">
              <Trophy size={18} className="text-[#F3B62D]" />
              <span><strong className="text-[#1F2430]">128</strong> winning projects</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAF2FF] blur-[60px]" />

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-end">
            {podium.map((winner) => (
              <article
                key={winner.rank}
                className={`group relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-3 shadow-[0_24px_70px_rgba(24,39,75,0.14)] transition duration-300 hover:-translate-y-2 ${winner.className}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#F1F4F9]">
                  <Image
                    src={winner.image}
                    alt={winner.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 "
                  />

                  <div className="absolute left-3 top-3 flex h-10 min-w-10 items-center justify-center rounded-full bg-white px-3 text-[15px] font-bold text-[#17181C] shadow-sm">
                    #{winner.rank}
                  </div>

                  {winner.rank === "1" && (
                    <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2C6] text-[#D59B00]">
                      <Crown size={19} />
                    </div>
                  )}
                </div>

                <div className="px-2 pb-2 pt-4">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#8A93A4]">
                    {winner.name}
                  </p>
                  <h3 className="mt-1 text-[17px] font-semibold leading-[1.35] text-[#1A1D24]">
                    {winner.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

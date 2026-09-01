"use client";

import Image from "next/image";
import { Award, Crown, Trophy } from "lucide-react";

export default function RecentWinner() {
  return (
    <section className="bg-white px-[24px] py-[72px] md:px-[48px] xl:px-[144px]">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#287CFF]">
              Latest Champion
            </p>
            <h2 className="mt-2 text-[34px] font-semibold tracking-[-1px] text-[#181A20] md:text-[42px]">
              The newest name in the Hall.
            </h2>
          </div>
          <p className="max-w-[500px] text-[16px] leading-7 text-[#747D8D] md:text-right">
            The latest DesignCup challenge just closed. Here&apos;s the project that took the top spot.
          </p>
        </div>

        <article className="mx-auto mt-[30px] max-w-[1320px] overflow-hidden rounded-[28px] border border-[#E8EDF5] bg-[#F8FAFD] shadow-[0_16px_48px_rgba(24,39,75,0.07)]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-[#ECECF2] p-5 md:min-h-[400px] lg:min-h-[460px]">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[22px] bg-[#E8E8EE] md:min-h-[360px] lg:min-h-[420px]">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[22px] bg-[#E8E8EE] md:min-h-[360px] lg:min-h-[420px]">
                <Image
                  src="/winning/hall-of-frame/purple-car-rental-winner.webp"
                  alt="Purple car rental mobile app winning project"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width:1024px) 100vw, 56vw"
                  className="object-contain"
                />
              </div>

                <Crown size={16} className="text-[#E7A900]" />
                GRAND CHAMPION
              </div>

              <div className="absolute bottom-7 left-7 right-7 flex flex-wrap items-center justify-between gap-3 rounded-[18px] bg-[#1D1F24]/84 px-5 py-3.5 text-white backdrop-blur-md">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">
                    Challenge
                  </p>
                  <p className="mt-1 text-[16px] font-semibold">Food Delivery App · September 2026</p>
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-white/80">
                  <Trophy size={16} className="text-[#FFD44F]" />
                  1st of 412 designers
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-[28px] md:p-[36px] lg:p-[42px]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-[15px] bg-[#FFF2C8] text-[#D69A00]">
                <Award size={21} />
              </div>

              <p className="mt-[22px] text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8992A3]">
                Winning project
              </p>
              <h3 className="mt-2 text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] text-[#171A21]">
                Designjoy Studio
              </h3>
              <p className="mt-2 text-[17px] font-medium text-[#287CFF]">Elena Vance</p>

              <p className="mt-[20px] text-[15px] leading-7 text-[#687283]">
                A confident, polished digital product system that balanced visual personality with a clear user journey. Judges highlighted its hierarchy, restraint, and consistency across the entire experience.
              </p>

              <div className="mt-[24px] grid grid-cols-3 gap-3">
                <div className="rounded-[16px] bg-white p-3.5">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#929AA8]">Jury score</p>
                  <p className="mt-2 text-[21px] font-semibold text-[#1A1D24]">9.6</p>
                </div>
                <div className="rounded-[16px] bg-white p-3.5">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#929AA8]">Votes</p>
                  <p className="mt-2 text-[21px] font-semibold text-[#1A1D24]">3.8K</p>
                </div>
                <div className="rounded-[16px] bg-white p-3.5">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#929AA8]">Rank</p>
                  <p className="mt-2 text-[21px] font-semibold text-[#1A1D24]">#1</p>
                </div>
              </div>

              <div className="mt-[26px] rounded-[16px] border border-[#E4EAF4] bg-white px-4 py-3.5">
                <p className="text-[14px] leading-6 text-[#667183]">
                  This project is now permanently archived in the DesignCup Hall of Fame.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

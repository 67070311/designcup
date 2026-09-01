"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, UploadCloud } from "lucide-react";

export default function VotingHero() {
  return (
    <section className="bg-white pt-[44px]">
      <div className="w-full px-[24px] md:px-[48px] xl:px-[144px]">
        <div className="grid grid-cols-1 gap-[36px] lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.02em] text-[#176BDB]">
              Exhibition Phase
            </p>

            <h1 className="mt-[14px] text-[42px] font-semibold tracking-[-1.2px] text-[#202124]">
              Community Voting
            </h1>

            <p className="mt-[28px] text-[17px] text-[#676767]">
              Or upload your design
            </p>

            <div className="mt-[12px] flex flex-wrap items-center gap-[14px]">
              <Link
                href="/challenge/upload-design"
                className="inline-flex h-[52px] items-center justify-center gap-[10px] rounded-full bg-[#2D7BFF] px-[24px] text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(45,123,255,0.16)] transition hover:-translate-y-[1px] hover:bg-[#1B6CEC]"
              >
                <UploadCloud size={22} strokeWidth={2} />
                Upload your design!
              </Link>

              <Link
                href="/challenge/active"
                className="text-[16px] font-medium text-[#2D7BFF] underline underline-offset-4 transition hover:text-[#176BDB]"
              >
                Read Brief
              </Link>
            </div>
          </div>

          <div className="lg:pt-[8px]">
            <p className="ml-auto max-w-[720px] text-right text-[18px] leading-[1.65] text-[#656565]">
              Browse every submission and choose the three designs you believe deserve to
              win. Your voice helps shape the future of digital product design.
            </p>

            <div className="ml-auto mt-[18px] grid max-w-[610px] grid-cols-3 overflow-hidden rounded-[24px] bg-[#F4F6FD] px-[22px] py-[20px]">
              <div className="text-center">
                <p className="text-[13px] uppercase tracking-[0.02em] text-[#6E6E72]">
                  Submission
                </p>
                <p className="mt-[7px] text-[16px] font-medium text-[#2D7BFF]">
                  Food Delivery App
                </p>
              </div>

              <div className="border-x border-[#D7DBE7] text-center">
                <p className="text-[13px] uppercase tracking-[0.02em] text-[#6E6E72]">
                  Participants
                </p>
                <p className="mt-[7px] text-[16px] font-medium text-[#2D7BFF]">
                  412 Designers
                </p>
              </div>

              <div className="text-center">
                <p className="text-[13px] uppercase tracking-[0.02em] text-[#6E6E72]">
                  Time Left
                </p>
                <p className="mt-[7px] text-[16px] font-semibold text-[#0B59C7]">
                  5 Days
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[46px] flex h-[82px] w-full items-center rounded-full bg-[#F5F7FE] p-[12px]">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#2D7BFF] text-white">
            <Search size={28} strokeWidth={2} />
          </div>

          <input
            type="text"
            placeholder="Search assets"
            className="h-full min-w-0 flex-1 bg-transparent px-[22px] text-[17px] text-[#394150] outline-none placeholder:text-[#5B6681]"
          />

          <button
            type="button"
            className="flex h-[56px] shrink-0 items-center justify-center gap-[10px] rounded-[16px] border border-[#CBD2E3] bg-white px-[26px] text-[17px] font-medium text-[#434B5A] shadow-[0_5px_14px_rgba(36,47,73,0.04)] transition hover:border-[#B7C0D4] hover:bg-[#FBFCFF]"
          >
            <SlidersHorizontal size={20} strokeWidth={1.9} />
            Most Recent
          </button>
        </div>
      </div>
    </section>
  );
}

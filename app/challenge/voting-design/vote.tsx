"use client";

import { ArrowRight, Check, X } from "lucide-react";

import type { Submission } from "./body";

type VoteTrayProps = {
  selected: Submission[];
  onRemove: (id: number) => void;
};

export default function VoteTray({ selected, onRemove }: VoteTrayProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[18px] z-[80] px-[16px]">
      <div className="pointer-events-auto mx-auto w-full max-w-[620px] rounded-[24px] border border-[#DCE3EF] bg-white/98 p-[12px] shadow-[0_20px_55px_rgba(21,34,58,0.22)] backdrop-blur-[16px]">
        <div className="flex items-center gap-[14px]">
          <div className="flex min-w-[126px] items-center gap-[14px] pr-[14px]">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#4B5565]">
                My Picks
              </p>
              <div className="mt-[3px] flex items-end gap-[4px]">
                <span className="text-[36px] font-semibold leading-none text-[#111827]">
                  {selected.length}
                </span>
                <span className="pb-[2px] text-[26px] font-medium leading-none text-[#B8C0D4]">
                  / 3
                </span>
              </div>
            </div>

            <div className="h-[56px] w-px bg-[#E3E8F1]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-[10px]">
              <p className="text-[13px] font-semibold text-[#20252D]">
                {selected.length} Saved {selected.length === 1 ? "Design" : "Designs"}
              </p>

              {selected.length > 0 && (
                <div className="flex items-center gap-[5px]">
                  {selected.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onRemove(item.id)}
                      title={`Remove ${item.name}`}
                      className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border border-[#DDE3ED] bg-[#F7F9FC] text-[10px] font-bold text-[#4B5A70] transition hover:border-[#FFB5B5] hover:bg-[#FFF2F2] hover:text-[#C93B3B]"
                    >
                      {item.id}
                      <span className="absolute -right-[4px] -top-[4px] hidden h-[15px] w-[15px] items-center justify-center rounded-full bg-[#20242A] text-white shadow-sm group-hover:flex">
                        <X size={9} strokeWidth={2.7} />
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              disabled={selected.length === 0}
              className={`mt-[8px] flex h-[44px] w-full items-center justify-center gap-[10px] rounded-[14px] px-[20px] text-[14px] font-semibold transition-all ${
                selected.length === 0
                  ? "cursor-not-allowed bg-[#E9ECF2] text-[#9AA3B2]"
                  : selected.length === 3
                    ? "bg-[#16191D] text-white shadow-[0_8px_18px_rgba(22,25,29,0.18)] hover:-translate-y-[1px] hover:bg-black"
                    : "bg-[#287CFF] text-white shadow-[0_8px_18px_rgba(40,124,255,0.24)] hover:-translate-y-[1px] hover:bg-[#176DE8]"
              }`}
            >
              {selected.length === 3 && <Check size={16} strokeWidth={2.4} />}
              Review My Picks
              <ArrowRight size={17} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

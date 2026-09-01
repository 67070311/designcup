"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

const categories = ["All", "Landing Page", "Mobile App", "E-commerce", "Poster", "Branding"];

type ExploreHeroProps = {
  category: string;
  search: string;
  sort: string;
  onCategoryChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export default function ExploreHero({ category, search, sort, onCategoryChange, onSearchChange, onSortChange }: ExploreHeroProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const sortLabel = sort === "recent" ? "Most Recent" : sort === "oldest" ? "Oldest" : "A-Z";

  return (
    <section className="bg-white px-[24px] pb-[22px] pt-[52px] md:px-[48px] xl:px-[144px]">
      <h1 className="text-[32px] font-semibold tracking-[-0.7px] text-[#202124] md:text-[36px]">Explore Design Categories</h1>

      <div className="mt-[28px] flex flex-wrap items-center gap-[10px]">
        {categories.map((item) => {
          const active = category === item;
          return (
            <button key={item} type="button" onClick={() => onCategoryChange(item)} className={`h-[48px] rounded-full border px-[26px] text-[15px] font-medium transition-all duration-200 ${active ? "border-[#BBD5FF] bg-[#EEF5FF] text-[#287CFF]" : "border-transparent bg-[#F4F5F7] text-[#515765] hover:bg-[#ECEEF2]"}`}>
              {item}
            </button>
          );
        })}
      </div>

      <div className="mt-[26px] flex h-[76px] items-center rounded-full bg-[#F5F7FE] p-[10px]">
        <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#287CFF] text-white shadow-[0_8px_20px_rgba(40,124,255,0.18)]">
          <Search size={25} strokeWidth={2} />
        </div>

        <input value={search} onChange={(event) => onSearchChange(event.target.value)} type="text" placeholder="Search assets" className="h-full min-w-0 flex-1 bg-transparent px-[22px] text-[16px] text-[#22262D] outline-none placeholder:text-[#68738D]" />

        <div className="relative">
          <button type="button" onClick={() => setSortOpen((current) => !current)} className="flex h-[54px] min-w-[184px] items-center justify-center gap-[10px] rounded-full border border-[#C8D0E0] bg-white px-[22px] text-[16px] font-medium text-[#4B5260] transition hover:border-[#AEB9CE]">
            <SlidersHorizontal size={18} strokeWidth={1.9} />
            {sortLabel}
            <ChevronDown size={15} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
          </button>

          {sortOpen && (
            <div className="absolute right-0 top-[62px] z-40 w-[190px] overflow-hidden rounded-[16px] border border-[#E3E7EF] bg-white p-[6px] shadow-[0_16px_36px_rgba(26,36,56,0.13)]">
              {[["recent", "Most Recent"], ["oldest", "Oldest"], ["title", "A-Z"]].map(([value, label]) => (
                <button key={value} type="button" onClick={() => { onSortChange(value); setSortOpen(false); }} className={`block w-full rounded-[11px] px-[13px] py-[10px] text-left text-[14px] transition ${sort === value ? "bg-[#EEF5FF] font-medium text-[#287CFF]" : "text-[#404652] hover:bg-[#F5F6F8]"}`}>
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

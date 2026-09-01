"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Trophy,
  Palette,
  Users,
  Heart,
} from "lucide-react";

const categories = [
  {
    label: "All Categories",
    value: "all",
  },
  {
    label: "Landing Page",
    value: "landing-page",
  },
  {
    label: "Mobile App",
    value: "mobile-app",
  },
  {
    label: "Branding",
    value: "branding",
  },
  {
    label: "SaaS UI",
    value: "saas-ui",
  },
];

const stats = [
  {
    label: "CHALLENGES",
    value: "142",
    icon: Trophy,
  },
  {
    label: "DESIGNS",
    value: "18,432",
    icon: Palette,
  },
  {
    label: "DESIGNERS",
    value: "5,201",
    icon: Users,
  },
  {
    label: "VOTES",
    value: "248K",
    icon: Heart,
  },
];

export default function CompleteDesignHero() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("recent");
  const [sortOpen, setSortOpen] = useState(false);

  const updateUrl = (
    nextSearch: string,
    nextCategory: string,
    nextSort: string,
  ) => {
    const params = new URLSearchParams();

    if (nextSearch.trim()) {
      params.set("q", nextSearch.trim());
    }

    if (nextCategory !== "all") {
      params.set("category", nextCategory);
    }

    if (nextSort !== "recent") {
      params.set("sort", nextSort);
    }

    const query = params.toString();

    router.push(
      query
        ? `/challenge/complete-design?${query}`
        : "/challenge/complete-design",
    );
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateUrl(search, category, sort);
    setSortOpen(false);
  };

  const handleCategory = (value: string) => {
    setCategory(value);

    updateUrl(search, value, sort);
  };

  const handleSort = (value: string) => {
    setSort(value);
    setSortOpen(false);

    updateUrl(search, category, value);
  };

  return (
    <section className="w-full bg-white px-[24px] pb-[54px] pt-[58px] md:px-[48px] xl:px-[144px]">
      <div className="w-full">
        {/* TOP */}
        <div className="grid grid-cols-1 items-end gap-[50px] xl:grid-cols-[1fr_600px] xl:gap-[80px]">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-[14px] font-semibold tracking-[0.3px] text-[#1468D8]">
              EXHIBITION PHASE
            </p>

            <h1 className="mt-[18px] text-[42px] font-semibold leading-[1.15] tracking-[-1.4px] text-[#222222]">
              Completed Challenges
            </h1>

            <p className="mt-[20px] max-w-[560px] text-[16px] font-normal leading-[1.8] text-[#666666]">
              Explore the hall of excellence. A definitive gallery of past
              design triumphs, community favorites, and industry-defining work
              from our creative ecosystem.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid h-[108px] grid-cols-4 rounded-[24px] bg-[#F5F7FF] px-[20px]"
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`group relative flex flex-col items-center justify-center ${
                    index !== stats.length - 1
                      ? "after:absolute after:right-0 after:top-1/2 after:h-[58px] after:w-px after:-translate-y-1/2 after:bg-[#CBD3E3]"
                      : ""
                  }`}
                >
                  <div className="mb-[7px] flex items-center gap-[6px]">
                    <Icon
                      size={14}
                      strokeWidth={1.8}
                      className="text-[#A1A9B9] transition-colors group-hover:text-[#287CFF]"
                    />

                    <span className="text-[13px] font-medium tracking-[0.2px] text-[#5C5F67]">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-[17px] font-semibold text-[#287CFF]">
                    {item.value}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* SEARCH */}
        <motion.form
          onSubmit={handleSearch}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
          className="relative mt-[70px] flex h-[66px] w-full items-center rounded-full bg-[#F5F7FF] p-[8px]"
        >
          {/* SEARCH BUTTON */}
          <button
            type="submit"
            aria-label="Search completed challenges"
            className="group flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#287CFF] text-white transition-all duration-300 hover:scale-[1.05] hover:bg-[#176CE8] active:scale-[0.96]"
          >
            <Search
              size={23}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* INPUT */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search assets"
            className="h-full min-w-0 flex-1 bg-transparent px-[20px] text-[16px] font-normal text-[#252525] outline-none placeholder:text-[#69718A]"
          />

          {/* SORT */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((current) => !current)}
              className="group flex h-[50px] min-w-[174px] items-center justify-center gap-[10px] rounded-full border border-[#C8D0E0] bg-white px-[22px] text-[16px] font-normal text-[#454B59] transition-all duration-300 hover:border-[#287CFF] hover:text-[#287CFF]"
            >
              <SlidersHorizontal
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:rotate-[-5deg]"
              />

              {sort === "recent"
                ? "Most Recent"
                : sort === "popular"
                  ? "Most Popular"
                  : "Most Voted"}
            </button>

            {sortOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.18,
                }}
                className="absolute right-0 top-[58px] z-30 w-[190px] rounded-[16px] border border-[#E5E8F0] bg-white p-[7px] shadow-[0_14px_35px_rgba(0,0,0,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => handleSort("recent")}
                  className={`block w-full rounded-[10px] px-[14px] py-[11px] text-left text-[14px] transition ${
                    sort === "recent"
                      ? "bg-[#F1F5FF] text-[#287CFF]"
                      : "text-[#333333] hover:bg-[#F7F8FC]"
                  }`}
                >
                  Most Recent
                </button>

                <button
                  type="button"
                  onClick={() => handleSort("popular")}
                  className={`block w-full rounded-[10px] px-[14px] py-[11px] text-left text-[14px] transition ${
                    sort === "popular"
                      ? "bg-[#F1F5FF] text-[#287CFF]"
                      : "text-[#333333] hover:bg-[#F7F8FC]"
                  }`}
                >
                  Most Popular
                </button>

                <button
                  type="button"
                  onClick={() => handleSort("votes")}
                  className={`block w-full rounded-[10px] px-[14px] py-[11px] text-left text-[14px] transition ${
                    sort === "votes"
                      ? "bg-[#F1F5FF] text-[#287CFF]"
                      : "text-[#333333] hover:bg-[#F7F8FC]"
                  }`}
                >
                  Most Voted
                </button>
              </motion.div>
            )}
          </div>
        </motion.form>

        {/* CATEGORY FILTER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.28,
          }}
          className="mt-[24px] flex flex-wrap items-center gap-[10px]"
        >
          {categories.map((item) => {
            const active = category === item.value;

            return (
              <motion.button
                key={item.value}
                type="button"
                onClick={() => handleCategory(item.value)}
                whileTap={{
                  scale: 0.97,
                }}
                className={`h-[46px] rounded-full border px-[28px] text-[16px] font-normal transition-all duration-300 ${
                  active
                    ? "border-[#1268D6] bg-[#1268D6] text-white"
                    : "border-[#C8D0E0] bg-white text-[#4B5260] hover:border-[#287CFF] hover:bg-[#F7FAFF] hover:text-[#287CFF]"
                }`}
              >
                {item.label}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

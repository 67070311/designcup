"use client";

import Image from "next/image";
import { ArrowUpRight, Bookmark, ChevronRight, Medal, Star } from "lucide-react";

const featured = [
  {
    title: "Designjoy Studio",
    designer: "Elena Vance",
    category: "Landing Page",
    year: "2026",
    image: "/explore/designjoy-studio.webp",
    badge: "Grand Champion",
  },
  {
    title: "Perfect Learning",
    designer: "Sofia Reyes",
    category: "Poster",
    year: "2026",
    image: "/explore/perfect-learning-education.webp",
    badge: "People’s Choice",
  },
  {
    title: "Night Owl Shopping App",
    designer: "Maya Chen",
    category: "E-commerce",
    year: "2026",
    image: "/explore/night-owl-shopping-app.webp",
    badge: "Jury Selection",
  },
];

const archive = [
  { title: "Overcooked Game Site", designer: "Ava Martin", image: "/explore/overcooked-game-site.webp", year: "2026" },
  { title: "Kids Coding Platform", designer: "Leo Parker", image: "/explore/kids-coding-platform.webp", year: "2026" },
  { title: "Nike Football Experience", designer: "Ethan Cole", image: "/explore/nike-football-landing.webp", year: "2025" },
  { title: "Pickleball Community", designer: "Lina Brooks", image: "/explore/pickleball-community-site.webp", year: "2025" },
  { title: "World of Languages", designer: "Nora Bell", image: "/explore/language-learning-app.webp", year: "2025" },
  { title: "Kids Math Game", designer: "Kai Morgan", image: "/explore/kids-math-game.webp", year: "2024" },
];

const collections = [
  {
    eyebrow: "PRODUCT DESIGN",
    title: "Interfaces that changed the brief",
    description: "Award-winning mobile products with memorable interaction and clarity.",
    image: "/explore/blue-map-mobile-ui.webp",
    bg: "bg-[#E9F2FF]",
  },
  {
    eyebrow: "BRAND SYSTEMS",
    title: "Bold identities, built to last",
    description: "Visual systems that became recognizable far beyond the challenge.",
    image: "/explore/samokat-grocery-branding.webp",
    bg: "bg-[#FFF1F6]",
  },
  {
    eyebrow: "DIGITAL EXPERIENCES",
    title: "Ideas people wanted to explore",
    description: "Immersive web experiences selected for craft, story, and originality.",
    image: "/explore/pickleball-community-site.webp",
    bg: "bg-[#EAF8EF]",
  },
  {
    eyebrow: "RISING STARS",
    title: "The names to remember next",
    description: "Breakthrough designers who made their first DesignCup win unforgettable.",
    image: "/explore/language-learning-app.webp",
    bg: "bg-[#FFF8DE]",
  },
];

export default function HallOfFrameBody() {
  return (
    <div className="bg-white px-[24px] pb-[110px] md:px-[48px] xl:px-[144px]">
      <section className="mx-auto w-full max-w-[1640px] pt-[84px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.11em] text-[#287CFF]">
              Featured Champions
            </p>
            <h2 className="mt-2 text-[36px] font-semibold tracking-[-1px] text-[#181A20]">
              This season’s defining work
            </h2>
            <p className="mt-3 max-w-[620px] text-[16px] leading-7 text-[#747D8D]">
              Three projects that stood out for concept, execution, and the way they pushed the challenge forward.
            </p>
          </div>

          <button className="inline-flex h-12 items-center gap-2 self-start rounded-full border border-[#DDE3ED] px-5 text-[14px] font-semibold text-[#2A303A] transition hover:bg-[#F7F9FC] md:self-auto">
            View all winners
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="mt-[34px] grid gap-5 lg:grid-cols-3">
          {featured.map((item, index) => (
            <article key={item.title} className="group overflow-hidden rounded-[28px] border border-[#E9EDF4] bg-white shadow-[0_16px_45px_rgba(24,39,75,0.07)]">
              <div className="relative aspect-[1.22/1] overflow-hidden bg-[#F3F5F8]">
                <Image src={item.image} alt={item.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[12px] font-semibold text-[#22262D] shadow-sm backdrop-blur">
                  <Medal size={15} className={index === 0 ? "text-[#E9A900]" : "text-[#287CFF]"} />
                  {item.badge}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#181B22]">{item.title}</h3>
                    <p className="mt-1 text-[14px] text-[#7A8393]">{item.designer} · {item.category}</p>
                  </div>
                  <button aria-label={`Open ${item.title}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F5FA] text-[#303641] transition hover:bg-[#287CFF] hover:text-white">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#EEF1F5] pt-4">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9AA2AF]">DesignCup {item.year}</span>
                  <div className="flex items-center gap-1 text-[13px] font-semibold text-[#F0AA17]"><Star size={15} fill="currentColor" /> Hall selection</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1640px] pt-[108px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.11em] text-[#287CFF]">Hall Archive</p>
            <h2 className="mt-2 text-[36px] font-semibold tracking-[-1px] text-[#181A20]">Every win leaves a mark.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All years", "2026", "2025", "2024"].map((year, index) => (
              <button key={year} className={`rounded-full px-4 py-2 text-[14px] font-medium transition ${index === 0 ? "bg-[#287CFF] text-white" : "bg-[#F3F5F8] text-[#596171] hover:bg-[#E9EDF4]"}`}>{year}</button>
            ))}
          </div>
        </div>

        <div className="mt-[32px] grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {archive.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[1.4/1] overflow-hidden rounded-[22px] bg-[#F2F4F7]">
                <Image src={item.image} alt={item.title} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
                <div className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur">{item.year}</div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[17px] font-semibold text-[#1B1F27]">{item.title}</h3>
                  <p className="mt-1 text-[14px] text-[#858D9B]">Winner · {item.designer}</p>
                </div>
                <button aria-label={`Save ${item.title}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E1E5EC] text-[#606878] transition hover:border-[#287CFF] hover:text-[#287CFF]"><Bookmark size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1640px] pt-[116px]">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.11em] text-[#287CFF]">Curated from the Hall</p>
          <h2 className="mt-2 text-[36px] font-semibold tracking-[-1px] text-[#181A20]">Explore the work that keeps inspiring.</h2>
        </div>

        <div className="mt-[34px] grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => (
            <article key={item.title} className={`group overflow-hidden rounded-[26px] ${item.bg} p-5`}>
              <div className="relative h-[220px] overflow-hidden rounded-[20px] bg-white/50">
                <Image src={item.image} alt={item.title} fill sizes="(max-width:1280px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="pt-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.11em] text-[#287CFF]">{item.eyebrow}</p>
                <h3 className="mt-2 text-[20px] font-semibold leading-[1.3] text-[#1A1D24]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#687182]">{item.description}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1E252F]">Explore collection <ArrowUpRight size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";

import ExploreHero from "./hero";
import ExploreBody, { type ExploreWork } from "./body";

const works: ExploreWork[] = [
  { id: 1, title: "Samokat Grocery Branding", category: "Branding", image: "/explore/samokat-grocery-branding.webp", width: 650, height: 1535 },
  { id: 2, title: "Kids Coding Platform", category: "Landing Page", image: "/explore/kids-coding-platform.webp", width: 650, height: 1537 },
  { id: 3, title: "Designjoy Studio", category: "Landing Page", image: "/explore/designjoy-studio.webp", width: 650, height: 1535 },
  { id: 4, title: "Night Owl Shopping App", category: "E-commerce", image: "/explore/night-owl-shopping-app.webp", width: 650, height: 424 },
  { id: 5, title: "Blue Map Mobile UI", category: "Mobile App", image: "/explore/blue-map-mobile-ui.webp", width: 650, height: 424 },
  { id: 6, title: "Nike Football Experience", category: "Landing Page", image: "/explore/nike-football-landing.webp", width: 650, height: 1058 },
  { id: 7, title: "Plopp Focus App", category: "Mobile App", image: "/explore/focus-task-app.webp", width: 650, height: 1058 },
  { id: 8, title: "Overcooked Game Site", category: "Landing Page", image: "/explore/overcooked-game-site.webp", width: 650, height: 1476 },
  { id: 9, title: "Perfect Learning", category: "Poster", image: "/explore/perfect-learning-education.webp", width: 650, height: 1476 },
  { id: 10, title: "World of Languages", category: "Mobile App", image: "/explore/language-learning-app.webp", width: 650, height: 428 },
  { id: 11, title: "Kids Math Game", category: "Mobile App", image: "/explore/kids-math-game.webp", width: 650, height: 428 },
  { id: 12, title: "Newlife Social Journey", category: "Mobile App", image: "/explore/newlife-social-app.webp", width: 650, height: 1049 },
  { id: 13, title: "Walking Rewards", category: "Mobile App", image: "/explore/walking-rewards-app.webp", width: 650, height: 1058 },
  { id: 14, title: "Daily Check-in", category: "Mobile App", image: "/explore/daily-checkin-modal.webp", width: 650, height: 1058 },
  { id: 15, title: "O Pay September Campaign", category: "Poster", image: "/explore/opay-september-promo.webp", width: 650, height: 1058 },
  { id: 16, title: "Pickleball Community", category: "Landing Page", image: "/explore/pickleball-community-site.webp", width: 650, height: 1535 },
  { id: 17, title: "Habit Tracker", category: "Mobile App", image: "/explore/habit-tracker-app.webp", width: 650, height: 428 },
  { id: 18, title: "Kids Toy Shopping", category: "E-commerce", image: "/explore/kids-toy-shopping-app.webp", width: 650, height: 428 },
  { id: 19, title: "Waste Management Journey", category: "Mobile App", image: "/explore/waste-management-app.webp", width: 1048, height: 684 },
  { id: 20, title: "Maths With Fun", category: "Mobile App", image: "/explore/maths-with-fun.webp", width: 902, height: 2048 },
  { id: 21, title: "Theme Park Companion", category: "Mobile App", image: "/explore/theme-park-app.webp", width: 1040, height: 1692 },
];

export default function ExplorePage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");

  const filteredWorks = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const filtered = works.filter((work) => {
      const matchesCategory = category === "All" || work.category === category;
      const matchesSearch =
        !normalizedSearch ||
        work.title.toLowerCase().includes(normalizedSearch) ||
        work.category.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });

    if (sort === "title") return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "oldest") return [...filtered].reverse();
    return filtered;
  }, [category, search, sort]);

  return (
    <main className="min-h-screen bg-white">
      <ExploreHero
        category={category}
        search={search}
        sort={sort}
        onCategoryChange={setCategory}
        onSearchChange={setSearch}
        onSortChange={setSort}
      />
      <ExploreBody works={filteredWorks} />
    </main>
  );
}

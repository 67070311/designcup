"use client";

import { useMemo, useState } from "react";

import VotingHero from "./hero";
import VotingBody, { type Submission } from "./body";
import VoteTray from "./vote";

const submissions: Submission[] = [
  {
    id: 1,
    image: "/challenge/voting-submissions/recipe-fridge.webp",
    name: "Elena Vance",
    role: "Pro Designer",
  },
  {
    id: 2,
    image: "/challenge/voting-submissions/cooking-recipes.webp",
    name: "Maya Chen",
    role: "UI Designer",
  },
  {
    id: 3,
    image: "/challenge/voting-submissions/sushi-community.webp",
    name: "Noah Kim",
    role: "Product Designer",
  },
  {
    id: 4,
    image: "/challenge/voting-submissions/smart-recipes-ai.webp",
    name: "Ava Martin",
    role: "UX Designer",
  },
  {
    id: 5,
    image: "/challenge/voting-submissions/pizza-delivery.webp",
    name: "Leo Parker",
    role: "Visual Designer",
  },
  {
    id: 6,
    image: "/challenge/voting-submissions/burger-ordering.webp",
    name: "Sofia Reyes",
    role: "UI Designer",
  },
  {
    id: 7,
    image: "/challenge/voting-submissions/laresto-food-ui.webp",
    name: "Ethan Cole",
    role: "Product Designer",
  },
  {
    id: 8,
    image: "/challenge/voting-submissions/grocery-market.webp",
    name: "Lina Brooks",
    role: "UX Designer",
  },
  {
    id: 9,
    image: "/challenge/voting-submissions/fresh-grocery.webp",
    name: "Oliver Stone",
    role: "UI Designer",
  },
  {
    id: 10,
    image: "/challenge/voting-submissions/fast-food-yellow.webp",
    name: "Emma Woods",
    role: "Visual Designer",
  },
  {
    id: 11,
    image: "/challenge/voting-submissions/healthy-food.webp",
    name: "Lucas Gray",
    role: "Product Designer",
  },
  {
    id: 12,
    image: "/challenge/voting-submissions/food-delivery-mobile.webp",
    name: "Nora Bennett",
    role: "Pro Designer",
  },
];

export default function VotingDesignPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, id];
    });
  };

  const selectedSubmissions = useMemo(
    () => submissions.filter((submission) => selectedIds.includes(submission.id)),
    [selectedIds],
  );

  return (
    <main className="min-h-screen bg-white">
      <VotingHero />

      <VotingBody
        submissions={submissions}
        selectedIds={selectedIds}
        onToggle={handleToggle}
      />

      <VoteTray
        selected={selectedSubmissions}
        onRemove={(id) =>
          setSelectedIds((current) => current.filter((item) => item !== id))
        }
      />
    </main>
  );
}

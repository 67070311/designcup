import HallCategories from "./categories";
import HallOfFrameHero from "./hero";
import RecentWinner from "./recent-winner";
import WinCTA from "./win-cta";

export default function HallOfFramePage() {
  return (
    <main className="min-h-screen bg-white">
      <HallOfFrameHero />
      <RecentWinner />
      <HallCategories />
      <WinCTA />
    </main>
  );
}

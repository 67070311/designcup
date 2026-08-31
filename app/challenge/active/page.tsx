import Hero from "./hero";
import Summarize from "./summarize";
import ChallengeBrief from "./challenge-brief";
import RequireDesign from "./require-design";

export default function ActiveChallengePage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Summarize />
      <ChallengeBrief />
      <RequireDesign />
    </main>
  );
}

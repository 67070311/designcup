import Hero from "./hero";
import Summarize from "./summarize";
import ChallengeBrief from "./challenge-brief";
import RequireDesign from "./require-design";
import Inspiration from "./inspiration";
import ChallengeTimeline from "./challenge-timeline";
import WinnerRewards from "./winner-rewards";
import HowToJoin from "./how-to-join";
import CurrentSubmissions from "./current-submissions";
import FAQ from "./faq";

import Join from "../../home/join/page";

export default function ActiveChallengePage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Summarize />
      <ChallengeBrief />
      <RequireDesign />
      <Inspiration />
      <ChallengeTimeline />
      <WinnerRewards />
      <HowToJoin />
      <CurrentSubmissions />
      <FAQ />
      <Join />
    </main>
  );
}

import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

export default function WinCTA() {
  return (
    <section className="bg-white px-[24px] py-[104px] md:px-[48px] xl:px-[144px]">
      <div className="mx-auto w-full max-w-[1640px]">
        <div className="relative overflow-hidden rounded-[34px] bg-[#171A21] px-7 py-12 text-white md:px-12 md:py-14 lg:px-[70px] lg:py-[68px]">
          <div className="pointer-events-none absolute -right-[80px] -top-[120px] h-[360px] w-[360px] rounded-full bg-[#287CFF]/35 blur-[90px]" />
          <div className="pointer-events-none absolute bottom-[-160px] left-[18%] h-[320px] w-[320px] rounded-full bg-[#8B5CF6]/25 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[850px]">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white/80">
                YOUR TURN COULD BE NEXT
              </div>

              <h2 className="mt-5 text-[40px] font-semibold leading-[1.08] tracking-[-1.2px] md:text-[54px]">
                Want your name
                <span className="block text-[#79AFFF]">inside the Hall?</span>
              </h2>

              <p className="mt-5 max-w-[700px] text-[16px] leading-7 text-white/65">
                Every champion on this page started with one submission. Join the next challenge, put your best work in front of the community, and give yourself a shot at the podium.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[250px]">
              <Link
                href="/challenge/active"
                className="inline-flex h-[56px] items-center justify-center gap-2 rounded-full bg-[#287CFF] px-7 text-[16px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#176DE8]"
              >
                Enter next challenge
                <ArrowRight size={18} />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[13px] text-white/55">
                <Trophy size={15} className="text-[#FFD75A]" />
                Your next win starts here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

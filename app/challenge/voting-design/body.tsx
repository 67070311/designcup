"use client";

import Image from "next/image";

export type Submission = {
  id: number;
  image: string;
  name: string;
  role: string;
};

type VotingBodyProps = {
  submissions: Submission[];
  selectedIds: number[];
  onToggle: (id: number) => void;
};

export default function VotingBody({
  submissions,
  selectedIds,
  onToggle,
}: VotingBodyProps) {
  return (
    <section className="bg-white pb-[220px] pt-[28px]">
      <div className="w-full px-[24px] md:px-[48px] xl:px-[144px]">
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {submissions.map((submission) => {
            const selected = selectedIds.includes(submission.id);

            return (
              <article
                key={submission.id}
                className={`group overflow-hidden rounded-[18px] border bg-white shadow-[0_8px_24px_rgba(33,46,74,0.06)] transition-all duration-300 ${
                  selected
                    ? "border-[#2D7BFF] ring-2 ring-[#2D7BFF]/10"
                    : "border-[#EDF0F5] hover:-translate-y-[3px] hover:shadow-[0_14px_32px_rgba(33,46,74,0.10)]"
                }`}
              >
                <div className="relative aspect-[1/1.13] overflow-hidden bg-[#F4F5F7]">
                  <Image
                    src={submission.image}
                    alt={`${submission.name} submission`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-center justify-between px-[14px] py-[13px]">
                  <div className="flex min-w-0 items-center gap-[10px]">
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#DDE7FF,#F7D9FF)] text-[12px] font-semibold text-[#37517C]">
                      EV
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-[#22252A]">
                        {submission.name}
                      </p>
                      <p className="mt-[2px] truncate text-[10px] uppercase tracking-[0.04em] text-[#9AA2AE]">
                        {submission.role}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={selected ? "Selected" : "Select design"}
                    onClick={() => onToggle(submission.id)}
                    className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[4px] border-2 transition-all ${
                      selected
                        ? "border-[#2D7BFF] bg-[#2D7BFF]"
                        : "border-[#2D7BFF] bg-white hover:bg-[#EEF5FF]"
                    }`}
                  >
                    {selected && (
                      <span className="h-[8px] w-[8px] rounded-[2px] bg-white" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

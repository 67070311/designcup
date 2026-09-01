"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Bookmark, Check, MoreHorizontal, Share2 } from "lucide-react";

export type ExploreWork = {
  id: number;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
};

type ExploreBodyProps = {
  works: ExploreWork[];
};

function WorkCard({ work }: { work: ExploreWork }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/explore#work-${work.id}`;

    try {
      if (navigator.share) {
        await navigator.share({ title: work.title, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }
    } catch {
      // User cancelled the native share sheet.
    }

    setMenuOpen(false);
  };

  return (
    <article id={`work-${work.id}`} className="mb-[24px] break-inside-avoid">
      <div className="group overflow-hidden rounded-[8px] bg-[#F4F5F7]">
        <Image
          src={work.image}
          alt={work.title}
          width={work.width}
          height={work.height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>

      <div className="relative mt-[9px] flex items-start justify-between gap-[10px]" ref={menuRef}>
        <div className="min-w-0">
          <h2 className="truncate text-[13px] font-medium text-[#25272B]">{work.title}</h2>
          <p className="mt-[2px] text-[11px] text-[#8A909B]">{work.category}</p>
        </div>

        <button
          type="button"
          aria-label={`Options for ${work.title}`}
          onClick={() => setMenuOpen((current) => !current)}
          className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full transition ${menuOpen ? "bg-[#EEF1F5] text-[#1F2329]" : "text-[#34383F] hover:bg-[#F2F3F5]"}`}
        >
          <MoreHorizontal size={18} strokeWidth={2} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-[32px] z-40 w-[154px] rounded-[14px] border border-[#E5E8EE] bg-white p-[6px] shadow-[0_14px_34px_rgba(28,37,54,0.14)]">
            <button
              type="button"
              onClick={() => {
                setSaved((current) => !current);
                setMenuOpen(false);
              }}
              className="flex w-full items-center gap-[10px] rounded-[9px] px-[10px] py-[9px] text-left text-[13px] text-[#333840] transition hover:bg-[#F5F6F8]"
            >
              {saved ? <Check size={16} /> : <Bookmark size={16} />}
              {saved ? "Saved" : "Save"}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="flex w-full items-center gap-[10px] rounded-[9px] px-[10px] py-[9px] text-left text-[13px] text-[#333840] transition hover:bg-[#F5F6F8]"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>
        )}

        {copied && (
          <div className="absolute right-0 top-[34px] z-50 rounded-full bg-[#1E2228] px-[11px] py-[6px] text-[11px] font-medium text-white shadow-lg">
            Link copied
          </div>
        )}
      </div>
    </article>
  );
}

export default function ExploreBody({ works }: ExploreBodyProps) {
  return (
    <section className="bg-white px-[24px] pb-[100px] pt-[12px] md:px-[48px] xl:px-[144px]">
      {works.length > 0 ? (
        <div className="columns-1 gap-[18px] sm:columns-2 lg:columns-3 xl:columns-5">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[320px] items-center justify-center rounded-[24px] border border-dashed border-[#DDE2EA] bg-[#FAFBFC] px-[20px] text-center">
          <div>
            <p className="text-[18px] font-semibold text-[#2A2E35]">No designs found</p>
            <p className="mt-[6px] text-[14px] text-[#7B8492]">Try another search or category.</p>
          </div>
        </div>
      )}
    </section>
  );
}

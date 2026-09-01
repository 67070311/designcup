"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronDown,
  ImagePlus,
  Lightbulb,
  Save,
  Send,
  UploadCloud,
} from "lucide-react";

import SubmitPopup from "./popup";

/* =========================================================
   TYPES
========================================================= */

type ToolName = "Figma" | "Adobe XD" | "Sketch" | "Framer" | "Other";

type UploadCardProps = {
  title: string;
  file: File | null;
  onChange: (file: File | null) => void;
};

/* =========================================================
   TOOL LOGOS
========================================================= */

function FigmaLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 3H12V9H8C6.343 9 5 7.657 5 6C5 4.343 6.343 3 8 3Z"
        fill="#F24E1E"
      />

      <path
        d="M12 3H16C17.657 3 19 4.343 19 6C19 7.657 17.657 9 16 9H12V3Z"
        fill="#FF7262"
      />

      <path
        d="M8 9H12V15H8C6.343 15 5 13.657 5 12C5 10.343 6.343 9 8 9Z"
        fill="#A259FF"
      />

      <path
        d="M12 9H16C17.657 9 19 10.343 19 12C19 13.657 17.657 15 16 15C14.343 15 13 13.657 13 12C13 10.343 14.343 9 16 9H12Z"
        fill="#1ABCFE"
      />

      <path
        d="M8 15H12V18C12 19.657 10.657 21 9 21C7.343 21 6 19.657 6 18C6 16.343 7.343 15 9 15H8Z"
        fill="#0ACF83"
      />
    </svg>
  );
}

function AdobeXDLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#470137" />

      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#FF61F6"
      >
        Xd
      </text>
    </svg>
  );
}

function SketchLogo() {
  return (
    <svg width="24" height="22" viewBox="0 0 26 24" fill="none">
      <path d="M13 22L2 9L6 3H20L24 9L13 22Z" fill="#FDB300" />

      <path d="M2 9H24L13 22L2 9Z" fill="#EA6C00" />

      <path d="M6 3L9 9H2L6 3Z" fill="#FFE36E" />

      <path d="M20 3L17 9H24L20 3Z" fill="#FFE36E" />

      <path d="M9 9L13 3L17 9H9Z" fill="#FFD23F" />

      <path d="M9 9H17L13 22L9 9Z" fill="#FFAE00" />
    </svg>
  );
}

function FramerLogo() {
  return (
    <svg width="20" height="22" viewBox="0 0 22 24" fill="none">
      <path d="M3 2H19V9H11L19 16H11V22L3 15V2Z" fill="#111111" />
    </svg>
  );
}

function OtherLogo() {
  return (
    <div className="flex h-[22px] w-[22px] items-center justify-center text-[22px] font-semibold text-[#687386]">
      +
    </div>
  );
}

/* =========================================================
   TOOLS
========================================================= */

const tools = [
  {
    name: "Figma" as ToolName,
    description: "UI/UX & interface design",
    color: "#7C3AED",
    softColor: "#F3EEFF",
    icon: <FigmaLogo />,
  },

  {
    name: "Adobe XD" as ToolName,
    description: "Interface & prototype design",
    color: "#E92BC5",
    softColor: "#FFF0FB",
    icon: <AdobeXDLogo />,
  },

  {
    name: "Sketch" as ToolName,
    description: "Digital product design",
    color: "#E89B00",
    softColor: "#FFF7DB",
    icon: <SketchLogo />,
  },

  {
    name: "Framer" as ToolName,
    description: "Interactive web design",
    color: "#111111",
    softColor: "#F1F1F1",
    icon: <FramerLogo />,
  },

  {
    name: "Other" as ToolName,
    description: "Another design tool",
    color: "#687386",
    softColor: "#F0F2F5",
    icon: <OtherLogo />,
  },
];

/* =========================================================
   UPLOAD CARD
========================================================= */

function UploadCard({ title, file, onChange }: UploadCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);

    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <div className="rounded-[20px] border border-[#E8ECF3] bg-white p-[12px] shadow-[0_10px_28px_rgba(32,55,92,0.055)]">
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={(event) => {
          const selectedFile = event.target.files?.[0] ?? null;

          onChange(selectedFile);
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative flex aspect-[390/590] w-full items-center justify-center overflow-hidden rounded-[15px] bg-[#F8F9FC]"
      >
        {!preview && (
          <div className="pointer-events-none absolute inset-[1px] rounded-[15px] border border-dashed border-[#BFCBE0]" />
        )}

        {preview ? (
          <>
            <img
              src={preview}
              alt={`${title} preview`}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100">
              <div className="flex items-center gap-[8px] rounded-full bg-white px-[16px] py-[9px] text-[16px] font-medium text-[#171717] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                <UploadCloud size={17} />
                Replace
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#EAF2FF] text-[#287CFF] transition-transform duration-300 group-hover:-translate-y-[4px]">
              <ImagePlus size={25} strokeWidth={1.8} />
            </div>

            <span className="mt-[14px] text-[16px] text-[#8D96A4]">
              Upload Screen
            </span>
          </div>
        )}
      </button>

      <div className="mt-[12px] flex min-h-[26px] items-center justify-between px-[1px]">
        <span className="truncate pr-[10px] text-[16px] font-medium text-[#242424]">
          {title}
        </span>

        {file ? (
          <CheckCircle2
            size={19}
            strokeWidth={2}
            className="shrink-0 text-[#287CFF]"
          />
        ) : (
          <AlertCircle
            size={19}
            strokeWidth={2}
            className="shrink-0 text-[#E31B23]"
          />
        )}
      </div>
    </div>
  );
}

/* =========================================================
   COVER UPLOAD
========================================================= */

function CoverUpload({
  file,
  onChange,
}: {
  file: File | null;
  onChange: (file: File | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);

    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={(event) => {
          onChange(event.target.files?.[0] ?? null);
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative mt-[24px] flex aspect-[390/560] w-full items-center justify-center overflow-hidden rounded-[22px] border-[5px] border-[#287CFF] bg-[#FAFBFD] transition-all duration-300 hover:border-[#176DE8]"
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="Cover preview"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100">
              <div className="flex items-center gap-[8px] rounded-full bg-white px-[16px] py-[9px] text-[16px] font-medium text-[#171717] shadow-xl">
                <UploadCloud size={17} />
                Replace
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] bg-[#EAF2FF] text-[#287CFF] transition-transform duration-300 group-hover:-translate-y-[4px]">
              <ImagePlus size={26} strokeWidth={1.8} />
            </div>

            <span className="mt-[14px] text-[16px] text-[#939BA8]">
              Upload Screen
            </span>
          </div>
        )}
      </button>
    </>
  );
}

/* =========================================================
   TOOL DROPDOWN
========================================================= */

function ToolDropdown({
  value,
  onChange,
}: {
  value: ToolName;
  onChange: (value: ToolName) => void;
}) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  const selectedTool = tools.find((item) => item.name === value) ?? tools[0];

  return (
    <div ref={dropdownRef} className="relative z-[100]">
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className={`flex h-[48px] w-full items-center justify-between rounded-[10px] border bg-white px-[12px] transition-all duration-200 ${
          open
            ? "border-[#287CFF] shadow-[0_0_0_3px_rgba(40,124,255,0.09)]"
            : "border-[#D8E0EC] hover:border-[#B8C8E1]"
        }`}
      >
        <div className="flex min-w-0 items-center gap-[10px]">
          <div
            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px]"
            style={{
              backgroundColor: selectedTool.softColor,
            }}
          >
            {selectedTool.icon}
          </div>

          <span className="truncate text-[16px] font-medium text-[#242830]">
            {selectedTool.name}
          </span>
        </div>

        <ChevronDown
          size={17}
          className={`shrink-0 text-[#778292] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[56px] z-[120] w-full overflow-hidden rounded-[16px] border border-[#E3E9F2] bg-white p-[7px] shadow-[0_20px_50px_rgba(31,50,81,0.16)]">
          <div className="space-y-[3px]">
            {tools.map((item) => {
              const selected = item.name === value;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    onChange(item.name);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-[11px] px-[9px] py-[8px] text-left transition-all duration-200 hover:bg-[#F7F9FC]"
                  style={{
                    backgroundColor: selected ? item.softColor : undefined,
                  }}
                >
                  <div className="flex min-w-0 items-center gap-[11px]">
                    <div
                      className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px]"
                      style={{
                        backgroundColor: selected ? "#FFFFFF" : item.softColor,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p
                        className="truncate text-[16px] font-semibold"
                        style={{
                          color: selected ? item.color : "#24272C",
                        }}
                      >
                        {item.name}
                      </p>

                      <p className="mt-[1px] truncate text-[16px] text-[#929BA8]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {selected && (
                    <div
                      className="ml-[10px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full text-white"
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN FORM
========================================================= */

export default function UploadDesignForm() {
  const [homeScreen, setHomeScreen] = useState<File | null>(null);

  const [restaurantScreen, setRestaurantScreen] = useState<File | null>(null);

  const [checkoutScreen, setCheckoutScreen] = useState<File | null>(null);

  const [coverScreen, setCoverScreen] = useState<File | null>(null);

  const [projectTitle, setProjectTitle] = useState("");

  const [tool, setTool] = useState<ToolName>("Figma");

  const [description, setDescription] = useState("");

  const [prototypeLink, setPrototypeLink] = useState("");

  const [tags, setTags] = useState("");

  const [confirmed, setConfirmed] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const uploadedCount = [homeScreen, restaurantScreen, checkoutScreen].filter(
    Boolean,
  ).length;

  const uploadProgress = (uploadedCount / 3) * 100;

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = () => {
    if (isSubmitting) return;

    setSubmitSuccess(false);
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1800);
  };

  return (
    <>
      <section className="mx-auto w-full max-w-[1280px] px-[32px] pb-[100px] pt-[54px] md:px-[48px]">
        <div className="grid grid-cols-1 gap-[72px] xl:grid-cols-[minmax(0,1fr)_270px]">
          {/* =====================================================
              LEFT
          ====================================================== */}

          <div className="min-w-0">
            <div className="flex flex-col gap-[24px] lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 className="text-[22px] font-semibold tracking-[-0.3px] text-[#171717]">
                  Upload the three required screens below.
                </h1>

                <p className="mt-[12px] text-[16px] text-[#777F8B]">
                  PNG or JPG • 390 × 844 px • Maximum 10 MB per image
                </p>
              </div>

              <Link
                href="/challenge/active"
                className="flex h-[48px] w-full shrink-0 items-center justify-center rounded-[7px] bg-[#287CFF] px-[36px] text-[16px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#176DE8] lg:w-[180px]"
              >
                Read Brief
              </Link>
            </div>

            {/* UPLOADS */}

            <div className="mt-[38px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              <UploadCard
                title="Home Screen"
                file={homeScreen}
                onChange={setHomeScreen}
              />

              <UploadCard
                title="Restaurant Detail"
                file={restaurantScreen}
                onChange={setRestaurantScreen}
              />

              <UploadCard
                title="Checkout"
                file={checkoutScreen}
                onChange={setCheckoutScreen}
              />
            </div>

            {/* DESIGN INFO */}

            <div className="mt-[42px] rounded-[22px] border border-[#E8ECF3] bg-white px-[28px] py-[28px] shadow-[0_12px_35px_rgba(31,54,91,0.045)]">
              <h2 className="text-[26px] font-semibold tracking-[-0.4px] text-[#171717]">
                Design Information
              </h2>

              <p className="mt-[6px] text-[16px] text-[#969EAA]">
                Give the community a little context about your work.
              </p>

              <div className="mt-[26px] grid grid-cols-1 gap-x-[22px] gap-y-[22px] md:grid-cols-2">
                <div>
                  <label className="mb-[8px] block text-[16px] font-semibold text-[#566174]">
                    PROJECT TITLE
                  </label>

                  <input
                    value={projectTitle}
                    onChange={(event) => setProjectTitle(event.target.value)}
                    placeholder="e.g. FreshBite Delivery App"
                    className="h-[48px] w-full rounded-[10px] border border-[#D8E0EC] bg-white px-[14px] text-[16px] text-[#242830] outline-none transition focus:border-[#287CFF] focus:ring-[3px] focus:ring-[#287CFF]/10"
                  />
                </div>

                <div>
                  <label className="mb-[8px] block text-[16px] font-semibold text-[#566174]">
                    PRIMARY TOOL
                  </label>

                  <ToolDropdown value={tool} onChange={setTool} />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-[8px] block text-[16px] font-semibold text-[#566174]">
                    DESCRIPTION
                  </label>

                  <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Briefly describe your design approach and the problem you solved..."
                    className="min-h-[110px] w-full resize-none rounded-[10px] border border-[#D8E0EC] bg-white px-[14px] py-[13px] text-[16px] text-[#242830] outline-none transition focus:border-[#287CFF] focus:ring-[3px] focus:ring-[#287CFF]/10"
                  />
                </div>

                <div>
                  <label className="mb-[8px] block text-[16px] font-semibold text-[#566174]">
                    FIGMA / PROTOTYPE LINK
                  </label>

                  <input
                    value={prototypeLink}
                    onChange={(event) => setPrototypeLink(event.target.value)}
                    placeholder="https://figma.com/file/..."
                    className="h-[48px] w-full rounded-[10px] border border-[#D8E0EC] bg-white px-[14px] text-[16px] text-[#242830] outline-none transition focus:border-[#287CFF] focus:ring-[3px] focus:ring-[#287CFF]/10"
                  />
                </div>

                <div>
                  <label className="mb-[8px] block text-[16px] font-semibold text-[#566174]">
                    TAGS (MAX 5)
                  </label>

                  <input
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                    placeholder="UI, UX, Food, Delivery..."
                    className="h-[48px] w-full rounded-[10px] border border-[#D8E0EC] bg-white px-[14px] text-[16px] text-[#242830] outline-none transition focus:border-[#287CFF] focus:ring-[3px] focus:ring-[#287CFF]/10"
                  />
                </div>
              </div>
            </div>

            {/* CONFIRM */}

            <div className="mt-[34px] flex items-start gap-[11px]">
              <button
                type="button"
                onClick={() => setConfirmed((previous) => !previous)}
                className={`mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[4px] border transition-all ${
                  confirmed
                    ? "border-[#287CFF] bg-[#287CFF] text-white"
                    : "border-[#C8D2E1] bg-white"
                }`}
              >
                {confirmed && <Check size={13} strokeWidth={3} />}
              </button>

              <p className="text-[16px] leading-[1.6] text-[#626D7D]">
                I confirm that this design is my original work and complies with
                the{" "}
                <Link
                  href="/competition-rules"
                  className="font-medium text-[#287CFF]"
                >
                  Competition Rules
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="font-medium text-[#287CFF]">
                  Terms of Service.
                </Link>
              </p>
            </div>

            {/* BUTTONS */}

            <div className="mt-[24px] flex flex-wrap gap-[12px]">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex h-[48px] min-w-[174px] items-center justify-center gap-[8px] rounded-[11px] px-[24px] text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(40,124,255,0.18)] transition-all duration-300 ${
                  isSubmitting
                    ? "cursor-wait bg-[#75A9F8]"
                    : "bg-[#287CFF] hover:-translate-y-[2px] hover:bg-[#176DE8]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-[17px] w-[17px] animate-spin rounded-full border-[2px] border-white/40 border-t-white" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Submit Design
                  </>
                )}
              </button>

              <button
                type="button"
                className="flex h-[48px] min-w-[138px] items-center justify-center gap-[8px] rounded-[11px] bg-[#F3F5F8] px-[22px] text-[16px] font-medium text-[#4C5562] transition hover:bg-[#EAEFF5]"
              >
                <Save size={17} />
                Save Draft
              </button>
            </div>
          </div>

          {/* =====================================================
              RIGHT
          ====================================================== */}

          <aside className="min-w-0">
            <h3 className="text-[18px] font-semibold text-[#171717]">
              Cover Screen
            </h3>

            <p className="mt-[7px] text-[16px] text-[#9AA2AE]">
              PNG OR JPG • 390 × 844 PX
            </p>

            <CoverUpload file={coverScreen} onChange={setCoverScreen} />

            <div className="mt-[24px] flex items-start gap-[11px] rounded-[17px] bg-[#FFF0E8] px-[15px] py-[15px]">
              <Lightbulb
                size={19}
                strokeWidth={1.8}
                className="mt-[2px] shrink-0 text-[#FF7A3D]"
              />

              <p className="text-[16px] leading-[1.55] text-[#754C39]">
                Designs with clear case study descriptions typically rank higher
                in community voting.
              </p>
            </div>

            <div className="mt-[22px]">
              <div className="flex items-center justify-between text-[16px]">
                <span className="font-medium text-[#606A79]">
                  Required screens
                </span>

                <span className="font-semibold text-[#287CFF]">
                  {uploadedCount}/3
                </span>
              </div>

              <div className="mt-[9px] h-[5px] overflow-hidden rounded-full bg-[#E9EEF6]">
                <div
                  className="h-full rounded-full bg-[#287CFF] transition-all duration-500"
                  style={{
                    width: `${uploadProgress}%`,
                  }}
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          POPUP แยกไป popup.tsx แล้ว
      ====================================================== */}

      <SubmitPopup
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
        onClose={() => setSubmitSuccess(false)}
      />
    </>
  );
}

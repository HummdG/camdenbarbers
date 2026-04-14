"use client";

import { getNext14Days, formatDateShort } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface StepDateProps {
  selectedDate: string | null;
  onSelect: (date: string) => void;
  onBack: () => void;
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDayLabel(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short" });
}

function getDayNum(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").getDate().toString();
}

function getMonth(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-GB", {
    month: "short",
  });
}

function isToday(dateStr: string): boolean {
  const today = new Date();
  const d = new Date(dateStr + "T00:00:00");
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}

export default function StepDate({
  selectedDate,
  onSelect,
  onBack,
}: StepDateProps) {
  const dates = getNext14Days();

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-cream-50 mb-1">
          Choose a Date
        </h2>
        <p className="text-sm text-cream-100/50 font-sans">
          Select your preferred date. We&apos;re open Monday – Saturday.
        </p>
      </div>

      {/* Day header */}
      <div className="hidden sm:grid grid-cols-6 gap-2 mb-1 px-0.5">
        {DAY_LABELS.map((d) => (
          <div
            key={d}
            className="text-center text-[10px] font-sans uppercase tracking-widest text-cream-100/30"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {dates.map((date) => {
          const isSelected = selectedDate === date;
          const today = isToday(date);

          return (
            <button
              key={date}
              onClick={() => onSelect(date)}
              className={cn(
                "flex flex-col items-center justify-center py-3 px-2 rounded-sm border text-center transition-all duration-150",
                isSelected
                  ? "bg-gold-500 border-gold-500 text-navy-950 shadow-gold-glow"
                  : "bg-navy-800 border-navy-600/50 text-cream-100/70 hover:border-gold-500/50 hover:bg-navy-700"
              )}
            >
              <span
                className={cn(
                  "text-[10px] font-sans uppercase tracking-wide",
                  isSelected ? "text-navy-950/70" : "text-cream-100/40"
                )}
              >
                {getDayLabel(date)}
              </span>
              <span
                className={cn(
                  "font-sans font-semibold text-xl leading-tight",
                  isSelected ? "text-navy-950" : "text-cream-50"
                )}
              >
                {getDayNum(date)}
              </span>
              <span
                className={cn(
                  "text-[10px] font-sans",
                  isSelected ? "text-navy-950/60" : "text-cream-100/35"
                )}
              >
                {today ? "Today" : getMonth(date)}
              </span>
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <p className="mt-4 text-sm text-cream-100/50 font-sans text-center">
          Selected:{" "}
          <span className="text-gold-400 font-medium">
            {formatDateShort(selectedDate)}
          </span>
        </p>
      )}

      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-2 text-sm text-cream-100/40 hover:text-cream-100/70 font-sans transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
    </div>
  );
}

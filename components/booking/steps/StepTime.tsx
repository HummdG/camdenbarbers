"use client";

import { getAvailableSlots } from "@/lib/availability";
import { cn } from "@/lib/utils";

interface StepTimeProps {
  barberId: string;
  date: string;
  selectedTime: string | null;
  onSelect: (time: string) => void;
  onBack: () => void;
}

export default function StepTime({
  barberId,
  date,
  selectedTime,
  onSelect,
  onBack,
}: StepTimeProps) {
  const slots = getAvailableSlots(date, barberId);
  const morning = slots.filter((s) => parseInt(s.time) < 12);
  const afternoon = slots.filter((s) => parseInt(s.time) >= 12);

  const SlotGroup = ({
    label,
    group,
  }: {
    label: string;
    group: typeof slots;
  }) => (
    <div className="mb-6">
      <p className="text-xs font-sans uppercase tracking-widest text-cream-100/40 mb-3">
        {label}
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {group.map((slot) => {
          const isSelected = selectedTime === slot.time;
          return (
            <button
              key={slot.time}
              onClick={() => slot.available && onSelect(slot.time)}
              disabled={!slot.available}
              className={cn(
                "py-2.5 rounded-sm border text-sm font-sans font-medium transition-all duration-150",
                isSelected &&
                  "bg-gold-500 border-gold-500 text-navy-950 shadow-gold-glow",
                !isSelected &&
                  slot.available &&
                  "bg-navy-800 border-navy-600/50 text-cream-100/80 hover:border-gold-500/50 hover:bg-navy-700",
                !slot.available &&
                  "bg-navy-900/50 border-navy-700/30 text-cream-100/20 cursor-not-allowed line-through"
              )}
            >
              {slot.time}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-cream-50 mb-1">
          Choose a Time
        </h2>
        <p className="text-sm text-cream-100/50 font-sans">
          Available slots for your selected date and barber.
        </p>
      </div>

      <SlotGroup label="Morning" group={morning} />
      <SlotGroup label="Afternoon" group={afternoon} />

      <div className="flex items-center gap-4 mt-2 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-navy-800 border border-navy-600/50" />
          <span className="text-xs text-cream-100/40 font-sans">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-gold-500" />
          <span className="text-xs text-cream-100/40 font-sans">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-navy-900/50 border border-navy-700/30" />
          <span className="text-xs text-cream-100/40 font-sans">Unavailable</span>
        </div>
      </div>

      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-cream-100/40 hover:text-cream-100/70 font-sans transition-colors"
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

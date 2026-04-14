"use client";

import { BARBERS } from "@/lib/data";
import type { Barber } from "@/types";
import { cn } from "@/lib/utils";

interface StepBarberProps {
  selectedBarberId: string | null;
  onSelect: (barber: Barber) => void;
  onBack: () => void;
}

export default function StepBarber({
  selectedBarberId,
  onSelect,
  onBack,
}: StepBarberProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-cream-50 mb-1">
          Choose Your Barber
        </h2>
        <p className="text-sm text-cream-100/50 font-sans">
          Have a preference? Or let us match you with who&apos;s available.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {BARBERS.map((barber) => {
          const isSelected = selectedBarberId === barber.id;
          return (
            <button
              key={barber.id}
              onClick={() => onSelect(barber)}
              className={cn(
                "text-left p-5 rounded-sm border transition-all duration-200 flex flex-col gap-3",
                barber.isAny && "sm:col-span-1",
                isSelected
                  ? "bg-navy-700 border-gold-500 ring-1 ring-gold-500/30 shadow-gold-glow"
                  : "bg-navy-800 border-navy-600/50 hover:border-gold-500/40 hover:bg-navy-700/60"
              )}
            >
              {/* Avatar initial */}
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-lg border transition-colors",
                    isSelected
                      ? "bg-gold-500 text-navy-950 border-gold-500"
                      : "bg-navy-700 text-cream-100/60 border-navy-600"
                  )}
                >
                  {barber.isAny ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    barber.name.charAt(0)
                  )}
                </div>
                <div>
                  <p
                    className={cn(
                      "font-sans font-semibold text-sm",
                      isSelected ? "text-cream-50" : "text-cream-100/80"
                    )}
                  >
                    {barber.name}
                  </p>
                  <p className="text-xs text-cream-100/40 font-sans">
                    {barber.speciality}
                  </p>
                </div>
              </div>
              <p className="text-xs text-cream-100/50 font-sans leading-relaxed">
                {barber.bio}
              </p>
              {isSelected && (
                <div className="flex items-center gap-1.5 mt-auto">
                  <svg
                    className="w-3.5 h-3.5 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs text-gold-500 font-sans font-medium">
                    Selected
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

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

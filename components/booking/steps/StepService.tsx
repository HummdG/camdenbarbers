"use client";

import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface StepServiceProps {
  selectedServiceId: string | null;
  onSelect: (service: Service) => void;
}

export default function StepService({
  selectedServiceId,
  onSelect,
}: StepServiceProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-cream-50 mb-1">
          Choose Your Service
        </h2>
        <p className="text-sm text-cream-100/50 font-sans">
          Select the service you&apos;d like to book.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {SERVICES.map((service) => {
          const isSelected = selectedServiceId === service.id;
          return (
            <button
              key={service.id}
              onClick={() => onSelect(service)}
              className={cn(
                "text-left w-full p-5 rounded-sm border transition-all duration-200 group",
                isSelected
                  ? "bg-navy-700 border-gold-500 ring-1 ring-gold-500/30 shadow-gold-glow"
                  : "bg-navy-800 border-navy-600/50 hover:border-gold-500/40 hover:bg-navy-700/60"
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Selection indicator */}
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors",
                      isSelected
                        ? "border-gold-500 bg-gold-500"
                        : "border-navy-600 group-hover:border-gold-500/50"
                    )}
                  >
                    {isSelected && (
                      <div className="w-full h-full rounded-full bg-navy-950 scale-[0.4]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "font-sans font-semibold text-sm leading-tight",
                        isSelected ? "text-cream-50" : "text-cream-100/80"
                      )}
                    >
                      {service.name}
                    </p>
                    <p className="text-xs text-cream-100/40 font-sans mt-0.5">
                      {service.durationDisplay}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span
                    className={cn(
                      "font-sans font-semibold text-lg",
                      isSelected ? "text-gold-400" : "text-cream-100/70"
                    )}
                  >
                    {service.priceDisplay}
                  </span>
                </div>
              </div>
              {/* Description — shown on selected */}
              {isSelected && (
                <p className="mt-3 ml-7 text-xs text-cream-100/55 font-sans leading-relaxed">
                  {service.description}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {selectedServiceId && (
        <p className="mt-4 text-xs text-cream-100/40 font-sans text-center">
          Tap again to deselect
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { BookingStep } from "@/types";

const STEPS: { key: BookingStep; label: string }[] = [
  { key: "service", label: "Service" },
  { key: "barber", label: "Barber" },
  { key: "date", label: "Date" },
  { key: "time", label: "Time" },
  { key: "contact", label: "Details" },
  { key: "confirmation", label: "Confirmed" },
];

interface StepIndicatorProps {
  currentStep: BookingStep;
  completedSteps: BookingStep[];
}

export default function StepIndicator({
  currentStep,
  completedSteps,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-0 overflow-x-auto pb-2">
      {STEPS.map((step, idx) => {
        const isCompleted = completedSteps.includes(step.key);
        const isCurrent = currentStep === step.key;
        const isPending = !isCompleted && !isCurrent;

        return (
          <div key={step.key} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5 px-1 sm:px-2">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-semibold transition-all duration-200 border",
                  isCompleted &&
                    "bg-gold-500 border-gold-500 text-navy-950",
                  isCurrent &&
                    "bg-transparent border-gold-500 text-gold-500 ring-2 ring-gold-500/30",
                  isPending &&
                    "bg-transparent border-navy-600 text-cream-100/30"
                )}
              >
                {isCompleted ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  idx + 1
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-sans uppercase tracking-wider hidden sm:block",
                  isCurrent ? "text-gold-500 font-semibold" : "text-cream-100/30"
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {idx < STEPS.length - 1 && (
              <div
                className={cn(
                  "h-px w-6 sm:w-10 transition-colors duration-200 mb-5",
                  isCompleted ? "bg-gold-500" : "bg-navy-600/60"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

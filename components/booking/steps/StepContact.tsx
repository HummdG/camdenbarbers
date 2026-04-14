"use client";

import { useState } from "react";
import type { BookingFormState } from "@/types";
import { cn } from "@/lib/utils";

interface StepContactProps {
  name: string;
  phone: string;
  notes: string;
  onChange: (
    patch: Partial<Pick<BookingFormState, "name" | "phone" | "notes">>
  ) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export default function StepContact({
  name,
  phone,
  notes,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
  error,
}: StepContactProps) {
  const [touched, setTouched] = useState({ name: false, phone: false });

  const nameError = touched.name && !name.trim() ? "Name is required." : null;
  const phoneError =
    touched.phone && !/^[\d\s+().\-]{10,15}$/.test(phone.trim())
      ? "Please enter a valid UK phone number."
      : null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    if (!name.trim() || !/^[\d\s+().\-]{10,15}$/.test(phone.trim())) return;
    onSubmit();
  }

  const inputBase =
    "w-full bg-navy-700 border rounded-sm px-4 py-3 text-sm font-sans text-cream-50 placeholder-cream-100/30 outline-none transition-colors focus:ring-1";
  const inputNormal = "border-navy-600/60 focus:border-gold-500 focus:ring-gold-500/30";
  const inputError = "border-red-500/60 focus:border-red-500 focus:ring-red-500/30";

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-cream-50 mb-1">
          Your Details
        </h2>
        <p className="text-sm text-cream-100/50 font-sans">
          We&apos;ll use these to confirm your booking. No spam, ever.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-sm">
          <p className="text-sm text-red-400 font-sans">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-sans font-semibold text-cream-100/60 uppercase tracking-widest mb-2">
            Full Name <span className="text-gold-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => onChange({ name: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            placeholder="e.g. James Anderson"
            autoComplete="name"
            className={cn(inputBase, nameError ? inputError : inputNormal)}
          />
          {nameError && (
            <p className="mt-1.5 text-xs text-red-400 font-sans">{nameError}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-sans font-semibold text-cream-100/60 uppercase tracking-widest mb-2">
            Phone Number <span className="text-gold-500">*</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            placeholder="e.g. 07700 900 123"
            autoComplete="tel"
            className={cn(inputBase, phoneError ? inputError : inputNormal)}
          />
          {phoneError && (
            <p className="mt-1.5 text-xs text-red-400 font-sans">
              {phoneError}
            </p>
          )}
          <p className="mt-1.5 text-xs text-cream-100/30 font-sans">
            We&apos;ll only contact you about your booking.
          </p>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-sans font-semibold text-cream-100/60 uppercase tracking-widest mb-2">
            Notes{" "}
            <span className="text-cream-100/30 normal-case tracking-normal font-normal">
              (optional)
            </span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => onChange({ notes: e.target.value })}
            placeholder="Any preferences, reference photos, or special requests…"
            rows={3}
            className={cn(inputBase, inputNormal, "resize-none")}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center bg-gold-500 text-navy-950 font-sans font-semibold text-sm px-6 py-3.5 rounded-sm hover:bg-gold-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-gold-glow hover:shadow-none tracking-wide"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Confirming…
              </span>
            ) : (
              "Confirm Booking"
            )}
          </button>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center gap-2 text-sm text-cream-100/40 hover:text-cream-100/70 font-sans transition-colors px-4"
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
      </form>
    </div>
  );
}

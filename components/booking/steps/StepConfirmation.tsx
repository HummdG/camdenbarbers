"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { generateICS } from "@/lib/utils";
import { BUSINESS } from "@/lib/data";
import type { Booking, Service, Barber } from "@/types";

interface StepConfirmationProps {
  booking: Booking;
  service: Service;
  barber: Barber;
  onReset: () => void;
}

export default function StepConfirmation({
  booking,
  service,
  barber,
  onReset,
}: StepConfirmationProps) {
  const calendarLink = generateICS({
    title: `Camden Barbers — ${service.name}`,
    date: booking.date,
    time: booking.timeSlot,
    durationMins: service.durationMins,
    location: BUSINESS.address,
    description: `Booking reference: ${booking.id}. Barber: ${barber.name}.`,
  });

  return (
    <div className="text-center">
      {/* Success icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gold-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <h2 className="font-serif text-3xl font-bold text-cream-50 mb-2">
        You&apos;re Booked!
      </h2>
      <p className="text-cream-100/55 font-sans text-sm mb-8 max-w-sm mx-auto">
        See you soon, {booking.name.split(" ")[0]}. We&apos;ve noted your
        appointment — see the details below.
      </p>

      {/* Booking summary card */}
      <div className="bg-navy-800 border border-navy-600/50 rounded-sm p-6 text-left mb-6 shadow-card">
        {/* Reference */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-navy-600/40">
          <span className="text-xs font-sans uppercase tracking-widest text-cream-100/40">
            Booking Reference
          </span>
          <span className="font-sans font-semibold text-gold-400 text-lg tracking-wider">
            {booking.id}
          </span>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex justify-between gap-4">
            <span className="text-sm text-cream-100/50 font-sans">Service</span>
            <span className="text-sm text-cream-50 font-sans font-medium text-right">
              {service.name}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-sm text-cream-100/50 font-sans">Barber</span>
            <span className="text-sm text-cream-50 font-sans font-medium">
              {barber.isAny ? "Any Available" : barber.name}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-sm text-cream-100/50 font-sans">Date</span>
            <span className="text-sm text-cream-50 font-sans font-medium">
              {formatDate(booking.date)}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-sm text-cream-100/50 font-sans">Time</span>
            <span className="text-sm text-cream-50 font-sans font-medium">
              {booking.timeSlot}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-sm text-cream-100/50 font-sans">
              Duration
            </span>
            <span className="text-sm text-cream-50 font-sans font-medium">
              {service.durationDisplay}
            </span>
          </div>
          <div className="flex justify-between gap-4 pt-3 border-t border-navy-600/40">
            <span className="text-sm text-cream-100/50 font-sans">Price</span>
            <span className="text-lg font-sans font-semibold text-gold-400">
              {service.priceDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* Address reminder */}
      <div className="bg-navy-700/50 border border-navy-600/40 rounded-sm px-4 py-3 text-left mb-6">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gold-500 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="text-xs text-cream-100/50 font-sans">We&apos;re at</p>
            <a
              href={BUSINESS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream-50 font-sans hover:text-gold-400 transition-colors"
            >
              {BUSINESS.address}
            </a>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={calendarLink}
          download="camden-barbers-booking.ics"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-navy-700 border border-navy-600/60 text-cream-50 font-sans font-medium text-sm px-5 py-3 rounded-sm hover:border-gold-500/40 hover:bg-navy-600 transition-all duration-200"
        >
          <svg
            className="w-4 h-4 text-gold-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Add to Calendar
        </a>
        <button
          onClick={onReset}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-navy-600/50 text-cream-100/60 hover:text-cream-50 hover:border-navy-600 font-sans font-medium text-sm px-5 py-3 rounded-sm transition-all duration-200"
        >
          Book Another Appointment
        </button>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-1.5 mt-6 text-sm text-cream-100/30 hover:text-cream-100/60 font-sans transition-colors"
      >
        <svg
          className="w-3.5 h-3.5"
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
        Back to home
      </Link>
    </div>
  );
}

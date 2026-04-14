import { Suspense } from "react";
import type { Metadata } from "next";
import BookingFlow from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "Book an Appointment | Camden Barbers",
  description:
    "Book your haircut, fade, beard trim or full grooming package at Camden Barbers. Online booking in under 2 minutes.",
};

interface BookPageProps {
  searchParams: { service?: string };
}

export default function BookPage({ searchParams }: BookPageProps) {
  const serviceId = searchParams.service ?? null;

  return (
    <div className="min-h-screen bg-navy-900 py-12 px-4">
      {/* Page header */}
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-500 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
            Online Booking
          </span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-cream-50 mb-3">
          Book Your Appointment
        </h1>
        <p className="text-cream-100/50 font-sans text-base max-w-md mx-auto">
          Choose your service, pick your barber and select a time. Takes less
          than two minutes.
        </p>
      </div>

      {/* Booking flow */}
      <Suspense>
        <BookingFlow initialServiceId={serviceId} />
      </Suspense>

      {/* Contact fallback */}
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <p className="text-sm text-cream-100/30 font-sans">
          Prefer to call?{" "}
          <a
            href="tel:02036625328"
            className="text-gold-500 hover:text-gold-400 transition-colors"
          >
            020 3662 5328
          </a>
        </p>
      </div>
    </div>
  );
}

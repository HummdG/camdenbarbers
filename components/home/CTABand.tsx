import Link from "next/link";
import { BUSINESS } from "@/lib/data";

export default function CTABand() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gold-gradient opacity-90" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,17,10,1) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,10,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-navy-950/40" />
          <span className="text-navy-950/60 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
            Ready?
          </span>
          <div className="h-px w-8 bg-navy-950/40" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-950 leading-tight mb-4">
          Book Your Appointment Today
        </h2>
        <p className="text-navy-950/65 font-sans text-lg mb-10 max-w-lg mx-auto">
          Online booking takes under two minutes. Choose your service, pick your
          barber, and select a time that works for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-navy-950 text-cream-50 font-sans font-semibold text-sm px-8 py-4 rounded-sm hover:bg-navy-800 transition-all duration-200 tracking-wide shadow-lg"
          >
            Book Online — It&apos;s Free
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center bg-transparent text-navy-950 border-2 border-navy-950/30 font-sans font-medium text-sm px-8 py-4 rounded-sm hover:border-navy-950/60 hover:bg-navy-950/10 transition-all duration-200 tracking-wide"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Us: {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

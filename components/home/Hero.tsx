import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
      {/* Decorative geometric elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gold accent circle */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-gold-500/4 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-500 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
              Camden, London
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 leading-[1.08] mb-6">
            Sharp Cuts.{" "}
            <span className="block text-gold-gradient">Clean Finishes.</span>
            <span className="block">Camden&apos;s Go-To Barbers.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-cream-100/65 text-lg font-sans font-light leading-relaxed mb-10 max-w-lg">
            Skilled barbers, a friendly atmosphere, and results you can count
            on — every single visit. Walk in or book ahead.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-gold-500 text-navy-950 font-sans font-semibold text-sm px-8 py-4 rounded-sm hover:bg-gold-400 transition-all duration-200 shadow-gold-glow hover:shadow-none tracking-wide"
            >
              Book Appointment
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
              href="#services"
              className="inline-flex items-center justify-center bg-transparent text-cream-50 border border-cream-50/20 font-sans font-medium text-sm px-8 py-4 rounded-sm hover:border-cream-50/40 hover:bg-white/5 transition-all duration-200 tracking-wide"
            >
              View Services &amp; Prices
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-navy-600/40">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-cream-100/60 font-sans">
                5-star rated
              </span>
            </div>
            <div className="w-px h-4 bg-navy-600" />
            <span className="text-sm text-cream-100/60 font-sans">
              10+ years serving Camden
            </span>
            <div className="w-px h-4 bg-navy-600" />
            <span className="text-sm text-cream-100/60 font-sans">
              Walk-ins welcome
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}

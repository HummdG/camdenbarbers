import Link from "next/link";

function ScissorsSVG() {
  return (
    <svg
      viewBox="0 0 200 400"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* === BLADES === */}
      {/* Left blade — outer cutting edge */}
      <path
        d="M 34 12 C 50 50 72 110 94 185"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Left blade — back spine */}
      <path
        d="M 52 22 C 66 58 80 115 96 187"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Left blade — shimmer highlight */}
      <path
        d="M 38 16 C 54 54 74 112 94 185"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        className="blade-shimmer"
        opacity="0.3"
      />

      {/* Right blade — outer cutting edge */}
      <path
        d="M 166 12 C 150 50 128 110 106 185"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Right blade — back spine */}
      <path
        d="M 148 22 C 134 58 120 115 104 187"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Right blade — shimmer highlight */}
      <path
        d="M 162 16 C 146 54 126 112 106 185"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        className="blade-shimmer"
        opacity="0.3"
      />

      {/* === PIVOT === */}
      <circle cx="100" cy="190" r="18" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="100" cy="190" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="100" cy="190" r="4" fill="currentColor" />
      {/* Screw cross detail */}
      <line x1="100" y1="183" x2="100" y2="197" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="93" y1="190" x2="107" y2="190" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      {/* === SHANKS === */}
      {/* Left shank */}
      <path
        d="M 88 206 C 80 228 68 248 56 264"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 93 208 C 85 230 75 250 65 265"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Right shank */}
      <path
        d="M 112 206 C 120 228 132 248 144 264"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 107 208 C 115 230 125 250 135 265"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* === FINGER RINGS === */}
      {/* Left ring — outer */}
      <ellipse cx="46" cy="312" rx="38" ry="44" stroke="currentColor" strokeWidth="4" />
      {/* Left ring — inner (smaller) */}
      <ellipse cx="46" cy="312" rx="24" ry="29" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Left ring — finger rest detail */}
      <path
        d="M 24 330 Q 46 348 68 330"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Right ring — outer */}
      <ellipse cx="154" cy="312" rx="38" ry="44" stroke="currentColor" strokeWidth="4" />
      {/* Right ring — inner */}
      <ellipse cx="154" cy="312" rx="24" ry="29" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Right ring — finger rest detail */}
      <path
        d="M 132 330 Q 154 348 176 330"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* === TIP DETAILS === */}
      {/* Left tip accent */}
      <circle cx="34" cy="14" r="3" fill="currentColor" opacity="0.6" />
      {/* Right tip accent */}
      <circle cx="166" cy="14" r="3" fill="currentColor" opacity="0.6" />

      {/* Blade edge tick marks (depth detail) */}
      {[40, 55, 70, 85, 100, 120, 140, 160].map((y, i) => {
        const xLeft = 34 + (i / 8) * 60;
        const xRight = 166 - (i / 8) * 60;
        return (
          <g key={y} opacity="0.2">
            <line
              x1={xLeft - 4}
              y1={y}
              x2={xLeft}
              y2={y + 4}
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1={xRight + 4}
              y1={y}
              x2={xRight}
              y2={y + 4}
              stroke="currentColor"
              strokeWidth="1"
            />
          </g>
        );
      })}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient noise-overlay">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Gold radial glow — richer on mobile */}
        <div className="absolute top-0 right-0 w-80 h-80 md:w-[700px] md:h-[700px] rounded-full bg-gold-500/[0.08] md:bg-gold-500/[0.04] blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full bg-gold-500/[0.06] md:bg-gold-500/[0.03] blur-3xl translate-y-1/4 -translate-x-1/4" />
        {/* Vertical accent line — desktop only */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden xl:block" style={{ left: '8%' }} />
      </div>

      {/* === SCISSORS — mobile watermark (behind content) === */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-[40%] w-[72vw] max-w-[300px] lg:hidden text-gold-500/[0.11] pointer-events-none scissors-float"
        aria-hidden="true"
      >
        <ScissorsSVG />
      </div>

      {/* === CIRCULAR BADGE — mobile only === */}
      <div
        className="absolute top-5 right-5 w-20 h-20 lg:hidden pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold-500/30">
          {/* Outer ring */}
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Inner ring */}
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
          {/* Circular text path */}
          <defs>
            <path id="badgeArc" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
          </defs>
          <text fontSize="8.5" fill="currentColor" letterSpacing="3.2" fontFamily="sans-serif" fontWeight="600">
            <textPath href="#badgeArc" startOffset="5%">
              CAMDEN · LONDON ·  BARBERS ·
            </textPath>
          </text>
          {/* Centre scissors mini icon */}
          <line x1="44" y1="44" x2="56" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
          <line x1="56" y1="44" x2="44" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
          <circle cx="50" cy="50" r="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8"/>
        </svg>
      </div>

      {/* === SCISSORS DECORATION — desktop only === */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[46%] hidden lg:flex items-center justify-end pointer-events-none pr-8 xl:pr-16"
        aria-hidden="true"
      >
        {/* Outer glow ring */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-gold-500/8" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gold-500/5" />
        {/* The scissors */}
        <div className="scissors-float w-56 xl:w-72 text-gold-500/30">
          <ScissorsSVG />
        </div>
        {/* Decorative vertical label */}
        <div
          className="absolute bottom-24 right-8 xl:right-16"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-[9px] font-sans uppercase tracking-[0.35em] text-gold-500/25 rotate-180">
            Camden Barbers — Est. London
          </span>
        </div>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="max-w-xl lg:max-w-[52%]">
          {/* Location overline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-gold-500" />
            <span className="text-gold-500 text-[10px] font-sans font-bold uppercase tracking-[0.28em]">
              Camden, London
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[64px] xl:text-7xl font-bold text-cream-50 leading-[1.06] mb-6">
            Sharp Cuts.{" "}
            <em className="not-italic block text-gold-gradient">
              Clean Finishes.
            </em>
            <span className="block">Camden&apos;s</span>
            <span className="block">Go-To Barbers.</span>
          </h1>

          {/* Sub */}
          <p className="text-cream-100/60 text-base md:text-lg font-sans font-light leading-relaxed mb-10 max-w-md">
            Skilled hands, a welcoming chair, and the kind of consistency that
            keeps clients coming back for years. Walk in or book ahead.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center bg-gold-500 text-navy-950 font-sans font-semibold text-sm px-8 py-4 rounded-sm hover:bg-gold-400 active:bg-gold-600 transition-all duration-200 shadow-gold-glow hover:shadow-none tracking-wide"
            >
              Book Appointment
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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
              className="inline-flex items-center justify-center bg-transparent text-cream-50 border border-cream-50/20 font-sans font-medium text-sm px-8 py-4 rounded-sm hover:border-gold-500/50 hover:text-gold-300 transition-all duration-200 tracking-wide"
            >
              View Services &amp; Prices
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-5 mt-12 pt-8 border-t border-navy-600/40">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-3.5 h-3.5 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-cream-100/55 font-sans">5-star rated</span>
            </div>
            <div className="w-px h-3.5 bg-navy-600" />
            <span className="text-xs text-cream-100/55 font-sans">10+ years serving Camden</span>
            <div className="w-px h-3.5 bg-navy-600" />
            <span className="text-xs text-cream-100/55 font-sans">Walk-ins welcome</span>
          </div>

          {/* Mobile-only decorative footer — fills empty space with personality */}
          <div className="mt-10 lg:hidden" aria-hidden="true">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/25" />
              <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-gold-500/35">
                Est. Camden
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/25" />
            </div>
            <div
              className="h-8 rounded-sm overflow-hidden"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 7px, rgba(212,160,23,0.07) 7px, rgba(212,160,23,0.07) 14px)",
                border: "1px solid rgba(212,160,23,0.12)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Diagonal SVG cut at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-20" aria-hidden="true">
        <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,16 100,3 100,16" fill="#0d1224" />
        </svg>
      </div>
    </section>
  );
}

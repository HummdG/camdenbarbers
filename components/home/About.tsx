const stats = [
  { value: "10+", label: "Years in Camden" },
  { value: "5★", label: "Google Reviews" },
  { value: "Walk-ins", label: "Always Welcome" },
];

/* ── Inline SVG illustrations ── */

function ScissorsSmall() {
  return (
    <svg viewBox="0 0 160 320" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M 28 10 C 40 42 58 90 76 148" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 40 18 C 50 48 66 93 78 150" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M 132 10 C 120 42 102 90 84 148" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 120 18 C 110 48 94 93 82 150" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <circle cx="80" cy="153" r="14" stroke="currentColor" strokeWidth="2"/>
      <circle cx="80" cy="153" r="7" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <circle cx="80" cy="153" r="3" fill="currentColor"/>
      <path d="M 72 165 C 66 184 56 200 46 212" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 88 165 C 94 184 104 200 114 212" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      <ellipse cx="38" cy="248" rx="30" ry="35" stroke="currentColor" strokeWidth="3"/>
      <ellipse cx="38" cy="248" rx="19" ry="22" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
      <ellipse cx="122" cy="248" rx="30" ry="35" stroke="currentColor" strokeWidth="3"/>
      <ellipse cx="122" cy="248" rx="19" ry="22" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
    </svg>
  );
}

function StraightRazor() {
  return (
    <svg viewBox="0 0 240 80" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Blade */}
      <path
        d="M 10 32 L 10 48 L 175 52 L 205 40 L 175 28 L 10 32 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Blade edge highlight */}
      <path
        d="M 12 34 L 175 36 L 200 40 L 175 44 L 12 46"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.3"
      />
      {/* Blade tip */}
      <path d="M 175 28 L 205 40 L 175 52" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      {/* Handle (folded open) */}
      <rect x="164" y="16" width="65" height="48" rx="24" stroke="currentColor" strokeWidth="2"/>
      {/* Handle detail lines */}
      <line x1="178" y1="22" x2="178" y2="58" stroke="currentColor" strokeWidth="0.75" opacity="0.35"/>
      <line x1="192" y1="20" x2="192" y2="60" stroke="currentColor" strokeWidth="0.75" opacity="0.35"/>
      {/* Hinge */}
      <circle cx="174" cy="40" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="174" cy="40" r="2" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

function Comb() {
  return (
    <svg viewBox="0 0 220 60" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Spine */}
      <rect x="2" y="2" width="216" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      {/* Wide teeth (left side) */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={`wide-${i}`}
          x={8 + i * 18}
          y="20"
          width="8"
          height="34"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
      {/* Fine teeth (right side) */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={`fine-${i}`}
          x={120 + i * 12}
          y="20"
          width="4"
          height="32"
          rx="2"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.8"
        />
      ))}
      {/* Spine detail */}
      <line x1="2" y1="12" x2="218" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: copy ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 leading-tight mb-6">
              Craftsmanship You Can Count On
            </h2>
            <div className="space-y-4 text-navy-700/70 font-sans text-base leading-relaxed">
              <p>
                Camden Barbers has been a fixture on Camden Road for over a
                decade. We&apos;ve built our reputation one cut at a time —
                through attention to detail, a genuine passion for the craft,
                and a commitment to making every client feel at ease.
              </p>
              <p>
                Whether you&apos;re after a clean skin fade, a precision beard
                shape, a classic cut, or the full treatment, you&apos;ll leave
                looking sharp and feeling like yourself — just a better version
                of it.
              </p>
              <p>
                Our barbers take the time to listen, understand what you want,
                and deliver it consistently. That&apos;s why so many of our
                clients have been coming back for years.
              </p>
            </div>

            {/* Stats row under copy */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="border-t-2 border-gold-500/40 pt-4"
                >
                  <div className="font-serif text-2xl font-bold text-gold-600 mb-0.5">
                    {value}
                  </div>
                  <div className="text-xs font-sans text-navy-600/60 uppercase tracking-wide leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: tools illustration panel ── */}
          <div className="relative">

            {/* Main panel */}
            <div className="relative bg-white border border-gray-200 rounded-sm overflow-hidden noise-overlay shadow-card-light">

              {/* Diagonal stripe background */}
              <div className="absolute inset-0 barber-stripe opacity-100" aria-hidden="true" />

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

              {/* Tools composition */}
              <div className="relative z-10 p-8 space-y-6">

                {/* Header label */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-5 bg-gold-500/40" />
                  <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-gold-500/50">
                    The Tools of the Trade
                  </span>
                </div>

                {/* Scissors — main feature */}
                <div className="flex items-center gap-6">
                  <div className="w-16 text-gold-500/70 flex-shrink-0">
                    <ScissorsSmall />
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-navy-900 mb-0.5">
                      Barber Scissors
                    </p>
                    <p className="text-xs font-sans text-navy-600/60 leading-relaxed">
                      Precision-sharpened, balanced for hours of cutting.
                      The tool every good barber swears by.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100" />

                {/* Straight razor */}
                <div className="flex flex-col gap-2">
                  <div className="w-full text-gold-500/60">
                    <StraightRazor />
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-navy-900 mb-0.5">
                      Straight Razor
                    </p>
                    <p className="text-xs font-sans text-navy-600/60 leading-relaxed">
                      For the cleanest line-up and the smoothest hot towel shave you&apos;ll ever have.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100" />

                {/* Comb */}
                <div className="flex flex-col gap-2">
                  <div className="w-full text-gold-500/55">
                    <Comb />
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-navy-900 mb-0.5">
                      Barber Comb
                    </p>
                    <p className="text-xs font-sans text-navy-600/60 leading-relaxed">
                      Every cut starts with structure. The comb sets the guide — the blade does the rest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            </div>

            {/* Pull-quote — sits below the panel */}
            <div className="relative mt-5 pl-5 border-l-2 border-gold-500/40">
              <p className="font-serif text-base text-navy-800/80 leading-relaxed italic">
                &ldquo;We don&apos;t rush. We don&apos;t cut corners. Every
                client gets the same care and attention — whether it&apos;s
                your first visit or your five hundredth.&rdquo;
              </p>
              <p className="mt-2 text-xs text-gold-500 font-sans font-semibold uppercase tracking-widest">
                Mo — Head Barber
              </p>
            </div>

            {/* Corner bracket decoration */}
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

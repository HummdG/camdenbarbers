const stats = [
  { value: "10+", label: "Years in Camden" },
  { value: "5★", label: "Google Reviews" },
  { value: "Walk-ins", label: "Always Welcome" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-6">
              Craftsmanship You Can Count On
            </h2>
            <div className="space-y-4 text-cream-100/65 font-sans text-base leading-relaxed">
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
          </div>

          {/* Right: stats + decorative */}
          <div>
            {/* Decorative box */}
            <div className="relative mb-8">
              <div className="bg-navy-700 border border-navy-600/60 rounded-sm p-8">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-500 rounded-tl-sm -translate-x-2 -translate-y-2" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-500 rounded-br-sm translate-x-2 translate-y-2" />
                <blockquote className="font-serif text-xl text-cream-50 leading-relaxed italic">
                  &ldquo;We don&apos;t rush. We don&apos;t cut corners. Every
                  client gets the same care and attention — whether it&apos;s
                  your first visit or your five hundredth.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-gold-500 font-sans font-medium">
                  — Mo, Head Barber
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-navy-700/60 border border-navy-600/40 rounded-sm p-4 text-center"
                >
                  <div className="font-serif text-3xl font-bold text-gold-400 mb-1">
                    {value}
                  </div>
                  <div className="text-xs font-sans text-cream-100/50 uppercase tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

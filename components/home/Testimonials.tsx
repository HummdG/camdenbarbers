import { TESTIMONIALS } from "@/lib/data";
import type { Testimonial } from "@/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-gold-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white border border-gray-100 rounded-sm p-5 mx-3 shadow-card-light">
      <StarRating rating={testimonial.rating} />
      <p className="mt-3 text-sm text-navy-700/70 font-sans leading-relaxed line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <p className="mt-3 text-xs font-sans font-semibold text-navy-900">
        {testimonial.reviewer}
      </p>
      <p className="text-xs text-navy-500/55 font-sans">Google Review</p>
    </div>
  );
}

// Split testimonials into two rows
const row1 = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
const row2 = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-500 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
            What Clients Say
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
            Don&apos;t Take Our Word For It
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className="w-5 h-5 text-gold-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-navy-600/65 font-sans">
              Based on Google Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee pause-on-hover">
          {/* Duplicate for seamless loop */}
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-reverse pause-on-hover">
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

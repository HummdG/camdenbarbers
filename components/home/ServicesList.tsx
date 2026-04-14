import Link from "next/link";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";

function ServiceCard({ service }: { service: Service }) {
  const categoryIcons: Record<Service["category"], string> = {
    haircut: "M9.5 3.5l-5 9h10l-5-9z M9.5 3.5v13",
    beard: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    shave: "M19.5 4.5l-15 15M4.5 4.5l15 15",
    package: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  };

  return (
    <div className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 p-6 bg-white border border-gray-100 rounded-sm hover:border-gold-500/40 hover:bg-green-50/30 transition-all duration-200 shadow-card-light">
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-green-50 border border-green-100 flex items-center justify-center group-hover:border-gold-500/40 transition-colors">
        <svg
          className="w-5 h-5 text-gold-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          {service.category === "haircut" && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.241-.106l.802.215"
            />
          )}
          {service.category === "beard" && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            />
          )}
          {service.category === "shave" && (
            <>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </>
          )}
          {service.category === "package" && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          )}
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="font-sans font-semibold text-navy-900 text-base leading-tight">
            {service.name}
          </h3>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-xs text-navy-600/65 font-sans bg-gray-50 px-2.5 py-1 rounded-sm border border-gray-200">
              {service.durationDisplay}
            </span>
            <span className="text-lg font-sans font-semibold text-gold-600">
              {service.priceDisplay}
            </span>
          </div>
        </div>
        <p className="text-sm text-navy-700/65 font-sans leading-relaxed mb-4">
          {service.description}
        </p>
        <Link
          href={`/book?service=${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-gold-500 hover:text-gold-400 transition-colors group-hover:gap-3"
        >
          Select &amp; Book
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
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
      </div>
    </div>
  );
}

export default function ServicesList() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-500 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
              What We Offer
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
              Services &amp; Pricing
            </h2>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-gold-500 hover:text-gold-400 transition-colors self-start md:self-auto"
            >
              Book any service online
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/data";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-navy-950 border-b border-navy-600/40 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between text-xs text-cream-100/60 font-sans">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 text-gold-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{BUSINESS.address}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 text-gold-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{BUSINESS.hoursDisplay}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-navy-950/95 backdrop-blur-md border-navy-600/60 shadow-lg"
            : "bg-navy-950 border-navy-600/30"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl font-bold text-cream-50 tracking-tight leading-none">
              Camden
            </span>
            <span className="font-serif text-xl font-bold text-gold-500 tracking-tight leading-none">
              Barbers
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-sans text-cream-100/70 hover:text-cream-50 transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="text-sm font-sans text-cream-100/70 hover:text-cream-50 transition-colors tracking-wide flex items-center gap-1.5"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {BUSINESS.phone}
            </a>
            <Link
              href="/book"
              className="bg-gold-500 text-navy-950 text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-gold-400 transition-colors shadow-gold-glow hover:shadow-none tracking-wide"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-cream-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-950 border-t border-navy-600/40 px-6 pb-4">
            <div className="flex flex-col gap-4 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream-100/70 hover:text-cream-50 transition-colors font-sans"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="text-cream-100/70 hover:text-cream-50 transition-colors font-sans flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {BUSINESS.phone}
              </a>
              <Link
                href="/book"
                className="bg-gold-500 text-navy-950 text-sm font-medium px-5 py-3 rounded-sm hover:bg-gold-400 transition-colors text-center tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a0e1a",
          900: "#0d1224",
          800: "#111827",
          700: "#1a2235",
          600: "#243049",
        },
        gold: {
          300: "#f5d78e",
          400: "#e8c060",
          500: "#d4a017",
          600: "#b8860b",
        },
        cream: {
          50: "#faf8f3",
          100: "#f0ece0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0a0e1a 0%, #111827 60%, #1a2235 100%)",
        "gold-gradient":
          "linear-gradient(90deg, #d4a017 0%, #e8c060 50%, #d4a017 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(212, 160, 23, 0.25)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        marquee: "marquee 50s linear infinite",
        "marquee-reverse": "marqueeReverse 50s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

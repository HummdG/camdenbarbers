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
        // Dark forest green — replaces navy
        navy: {
          950: "#07110a",
          900: "#0b1a10",
          800: "#102318",
          700: "#163322",
          600: "#1f4530",
        },
        // Vivid emerald green — replaces gold
        gold: {
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
        },
        // Near-white with faint green tint — replaces cream
        cream: {
          50: "#f0fdf4",
          100: "#dcfce7",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #07110a 0%, #102318 60%, #163322 100%)",
        "gold-gradient":
          "linear-gradient(90deg, #22c55e 0%, #4ade80 50%, #22c55e 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(34, 197, 94, 0.3)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-light": "0 1px 12px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
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

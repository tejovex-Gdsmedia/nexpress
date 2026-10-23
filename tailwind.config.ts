import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1A3A8F",
        sky: "#1E7FD8",
        "light-blue": "#5BB8F5",
        "off-white": "#F4F8FF",
        "dark-navy": "#0D1F5C",
        "text-body": "#374151",
        "text-muted": "#6B7280",
        "border-blue": "#DBEAFE",
        success: "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0D1F5C 0%, #1A3A8F 50%, #1E7FD8 100%)",
        "card-gradient": "linear-gradient(135deg, #1E7FD8 0%, #5BB8F5 100%)",
        "cta-gradient": "linear-gradient(90deg, #1A3A8F, #1E7FD8)",
        "network-gradient": "linear-gradient(180deg, #0D1F5C 0%, #1A3A8F 100%)",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(-8px)" },
          "50%": { transform: "translateY(8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 56px" },
        },
        "truck-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        bob: "bob 3s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        "pulse-ring": "pulse-ring 2s ease infinite",
        "grid-drift": "grid-drift 2.5s linear infinite",
        "truck-bob": "truck-bob 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

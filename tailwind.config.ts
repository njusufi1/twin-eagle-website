import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#F8FAFC",
        brand: "#E5E7EB",
        soft: "#111111",
        line: "#2A2A2A",
        gold: "#C9A15A",
        sable: "#6C8EBF",
        sage: "#4FA88C",
      },
      boxShadow: {
        subtle: "0 18px 50px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseSlow: "pulseSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

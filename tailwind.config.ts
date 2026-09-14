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
      },
      boxShadow: {
        subtle: "0 18px 50px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

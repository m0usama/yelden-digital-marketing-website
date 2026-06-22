import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yelden: {
          yellow: "#ffd21e",
          gold: "#ffb800",
          black: "#020202",
          panel: "#090909",
          line: "#242424"
        }
      },
      boxShadow: {
        glow: "0 0 55px rgba(255, 210, 30, 0.16)"
      }
    },
  },
  plugins: [],
};

export default config;

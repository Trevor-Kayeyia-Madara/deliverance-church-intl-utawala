import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A1F1F",   // Deep brown
        gold: "#C9A24D",      // Gold accent
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};

export default config;

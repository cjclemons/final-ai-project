import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 5s linear infinite",
        "spin-slowest": "spin 85s linear infinite",
      },
    },
  },
};

export default config;
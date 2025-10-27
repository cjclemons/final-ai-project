import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 3s linear infinite",
        spinSlower: "spin 5s linear infinite",
        spinSlowest: "spin 85s linear infinite",
      },
    },
  },
};

export default config;
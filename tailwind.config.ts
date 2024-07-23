import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"],
        inter: ["Inter", "serif"],
        outfitsubtext: ["Outfit", "Inter", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/app/assets/images/heroImageSection.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

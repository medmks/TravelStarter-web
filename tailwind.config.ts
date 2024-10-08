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
        "hero-pattern2": "url('/app/assets/images/image1.jpg')",
        "hero-pattern3": "url('/app/assets/images/img2.jpg')",
        "hero-pattern4": "url('/app/assets/images/img3.jpg')",
        "hero-pattern5": "url('/app/assets/images/patern.jpg')",
        "service-pattern": "url('/app/assets/images/service1.jpg')",
        "service-pattern1": "url('/app/assets/images/service2.jpg')",
        "service-pattern2": "url('/app/assets/images/patern2.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

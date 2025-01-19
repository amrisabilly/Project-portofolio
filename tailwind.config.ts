import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ["Poppins", "sans-serif"]
      },
      backgroundColor:{
        "primary": "#FFFFFF",
        "secondary": "#660066",
        "black": "#1B1B1B",
        "natural": "#FFC400",
        "accent": "#FF9500",
      },
      textColor:{
        "primary": "#FFFFFF",
        "secondary": "#660066",
        "black": "#1B1B1B",
      }
    },
  },
  plugins: [],
} satisfies Config;

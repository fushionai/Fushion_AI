import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryWhite: "#ffffff",
        secondaryWhite: "#F4F5FF",
        primaryBlack: "#000000",
        primaryBlue: "#2B00FF",
        primaryLightBlue: "#F4F5FF",
        secondaryGray: "#77818A",
        darkGray: "#222222",
        darkBlue: "#161527",
        snowWhite: "#FDFDFD",
        gradientWhiteLight: "linear-gradient(90deg, #FFFFFF, #DCDCDC)",
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero_bg.jpg')",
        "gradient-secondary": "linear-gradient(90deg, #4620FF, #5A38FF)",
        "gradient-secondary-light": "linear-gradient(90deg, #FFFFFF, #DCDCDC)",
      },
      fontFamily: {
        istok: ["Istok Web", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

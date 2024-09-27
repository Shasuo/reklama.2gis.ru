import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suisse: ["Suisse", "Arial", "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "18px",
        menuXl: "20px",
        xl: "24px",
        "2xl": "36px",
        "3xl": "44px",
        "4xl": "56px",
        "5xl": "64px",
      },
      colors: {
        primary: "#1a1a1a",
        gisGreen: "#19aa1e",
      },
      screens: {
        mobile: { max: "1199px" },
        dangerMobile: { max: "350px" },
      },
      maxWidth: {
        mobileWidth: "344px",
        desktopWidth: "1168px",
        "10-px-borders": "calc(100% - 20px)",
      },
      minWidth: {
        mobileWidth: "344px",
        desktopWidth: "1168px",
      },
      margin: {
        mobileHiddenBorders: "calc((100% - 344px) / 2)",
        standardSectionMargin: "112px",
      },
    },
  },
  plugins: [],
};

export default config;

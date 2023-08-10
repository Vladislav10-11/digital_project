import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "375px",
        md: "1024px",
        lg: "1280px",
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },
      colors: {
        primaryColor: "#333333",
        secondaryColor: "#bdbdbd",
        greyColor: "#fbfbfb",
        textColor: "#000000",
        bgColor: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;

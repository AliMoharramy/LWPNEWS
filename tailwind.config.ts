import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.07);",
      },
      blur: {
        xs: "1.5px",
      },
      height: {
        "128": "25rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      secondary: "#FC4308",
      Black75: "#3E3232",
      Gray: "#F5F5F5",
      Black: "#3E3232",
      White: "#FFFFFF",
      White75: "rgba(255,255,255,0.75)",
      Dark75: "rgba(0,0,0,0.75)",
      Dark50: "rgba(0,0,0,0.5)",
      BoxShodow: "rgba(0,0,0,0.07)",
      Primary: "#F81539",
    },
  },
  plugins: [],
};
export default config;

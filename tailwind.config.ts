import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "100": "100",
      },
      blur: {
        xs: "1.5px",
      },
      height: {
        "128": "25rem",
      },
      width: {
        "128": "40rem",
        video: "80rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      secondary: "#FC4308",
      Black75: "rgba(62, 50, 50, 0.75)",
      Black50: "rgba(62, 50, 50, 0.5)",
      Black5: "rgba(62, 50, 50, 0.05)",
      Gray: "#F5F5F5",
      Black: "#3E3232",
      White: "#FFFFFF",
      White75: "rgba(255,255,255,0.75)",
      Dark75: "rgba(0,0,0,0.75)",
      Dark50: "rgba(0,0,0,0.5)",
      BoxShodow: "rgba(0,0,0,0.07)",
      Primary: "#F81539",
      Primary75: "rgba(248, 21, 57, 0.75)",
      Blue: "#2F5C9F",
      Red: "#AA3034",
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mainColor': 'rgb(230, 230, 230)',
        'secondColor': 'rgb(255, 255, 255)',
        'hoverColor': 'rgb(27, 122, 35)',
      },
      fontSize: {
        base:'16px'
      }
    },
  },
  plugins: [],
};
export default config;

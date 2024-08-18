import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1400px",
    },
    extend: {
     colors: {
      deepGray: "#3A4F7A",
      warmOrange: "#FF8C38",
     }
    },
  },
  plugins: [],
};
export default config;

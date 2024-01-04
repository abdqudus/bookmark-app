/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallest: { max: "350px" },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", display: "flex" },
          "100%": { opacity: "1", display: "flex" },
        },
        fadeOut: {
          "0%": { opacity: "1", display: "flex" },
          "99%": { opacity: ".1", display: "flex" },
          "100%": { opacity: "0", display: "none" },
        },
      },
      animation: {
        fadeIn: "fadeIn .4s ease-in ",
        fadeOut: "fadeOut .3s ease-in forwards",
      },
    },
  },
  plugins: [],
};

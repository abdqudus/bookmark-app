/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallest: { max: "350px" },
        medium: { max: "500px" },
      },
      keyframes: {
        slideBkIn: {
          to: { top: "15%" },
        },
        slideBkOut: {
          to: { top: "-100%" },
        },
        slideIn: {
          from: { transform: "translateX(500px)" },
        },
        "fade-in": { to: { opacity: 1 } },
      },
      animation: {
        "fade-in": "fade-in .2s linear .3s forwards",
        // slideIn: "slideIn .3s ease-in ",
        // slideOut: "slideOut .3s ease-in forwards",
        // slideBkIn: "slideBkIn ease-in",
        // slideBkOut: "slideBkOut ease-in forwards",
      },
    },
  },
  plugins: [],
};

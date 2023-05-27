/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "576px",

      tablet: "960px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {
      backgroundColor: {
        // bgPrimary: "#091D36",
        // bgPrimary: "#212130",
        bgPrimary: "#161719",

        bgSecond: "#1E2533",
        // bgSecond: "#4c4e6d",

        // #0B2442
        // bgThird: "#165782",
      },
      colors: {
        fnPrimary: "",

        fnSencond: "",

        fnThird: "",
      },
      fontFamily: {
        fnRobot: ["Roboto", "sans-serif"],

        fnGaramond: ["Gramond", "serif"],

        fnBodoni: ["Bodoni Moda", "serif"],
      },
      animation: {
        carrouselIcon: "carrousel 21s linear  infinite",
      },
      keyframes: {
        carrousel: {
          " 0%": { transform: "translateX(1500px)" },
          " 100% ": { transform: "translateX(calc(-200px * 6))" },
        },
      },
    },
  },
  plugins: [],
}

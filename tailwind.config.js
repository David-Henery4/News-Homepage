/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      softOrange: "hsl(35, 77%, 62%)",
      softRed: "hsl(5, 85%, 63%)",
      offWhite: "hsl(36, 100%, 99%)",
      grayishBlue: "hsl(233, 8%, 79%)",
      darkGrayishBlue: "hsl(236, 13%, 42%)",
      veryDarkBlue: "hsl(240, 100%, 5%)",
      silver: "hsl(236, 8%, 79%)",
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      inter: ["Inter, sans-serif"],
    },
    extend: {
      spacing: {
        one: "1px",
        35: "35px",
        46: "185px"
      },
      letterSpacing: {
        btn: "4px"
      },
      fontSize: {
        basic: "15px"
      },
      gridTemplateColumns: {
        bleed: "16px repeat(10, 1fr) 16px",
        trend: "100px repeat(3, 1fr)"
      },
      transitionDuration: {
        1: "1s"
      }
    },
  },
  plugins: [],
};

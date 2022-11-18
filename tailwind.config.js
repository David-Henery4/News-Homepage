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
      screens: {
        lrgMob: "26.56em",
        lrgLap: "80.31em",
      },
      spacing: {
        one: "1px",
        35: "35px",
        46: "185px",
        22: "89px",
        17: "71px",
      },
      letterSpacing: {
        btn: "4px",
        header: "56px",
      },
      lineHeight: {
        header: "56px",
        text: "26px",
      },
      fontSize: {
        basic: "15px",
        lrgHead: "56px",
      },
      gridTemplateColumns: {
        bleed: "16px repeat(10, 1fr) 16px",
        tabBleed: "82px repeat(10, 1fr) 82px",
        deskBleed: "165px repeat(10, 1fr) 165px",
        trend: "100px repeat(3, 1fr)",
      },
      transitionDuration: {
        1: "1s",
      },
      maxWidth: {
        lrgWidth: "1440px",
      }
    },
  },
  plugins: [],
};

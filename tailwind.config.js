const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./dist/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    //   "2xl": "1280px",
    // },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
      },
    },
    // fontSize: {
    //   xs: ["10px"],
    //   sm: ["14px"],
    //   base: ["18px"],
    //   lg: ["18px"],
    //   xl: ["36px"],
    //   "1xl": ["78px"],
    //   "2xl": ["120px"],
    // },
    fontFamily: { sans: "Roboto, sans-serif" },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      primary: {
        light: "#9B51E0",
        DEFAULT: "#9F14D0",
      },
      secondary: "#14B8A6",
      gray: {
        lightest: "#F3F3F3",
        light: "#CDD1D4",
        "light-nav": "#BDBDBD",
        DEFAULT: "#828282",
        dark: "#5D6970",
        darken: "#4F4F4F",
        darker: "#2a2a2a",
      },
      blip: "#56CCF2",
      whatsapp: "#6FCF97",
      facebook: "#2F80ED",
      marker: "#ff67ff",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

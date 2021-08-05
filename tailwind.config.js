const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#3cb4ac", dark: "#147b74" },
        secondary: { DEFAULT: colors.red[600] },
        success: { DEFAULT: "#41B883" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

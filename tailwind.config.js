/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#282828",
        },
        secondary: {
          DEFAULT: "#FB432C",
        },
        tertary: {
          DEFAULT: "#737373",
        },
        light: {
          DEFAULT: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};

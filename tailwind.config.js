const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', ...fontFamily.sans],
      },
      backgroundImage: {
        linear: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)"
      }
    },
  },
  plugins: [],
}

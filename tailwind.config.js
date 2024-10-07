/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'star-gold': '#fbbf24',
        'star-disabled': '#888'
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};

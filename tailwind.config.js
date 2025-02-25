/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); // Import Tailwind colors

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {
      colors : {
        'cornell' : '#b32227',
        'cornellLight': "#e57b7e",
        'cornellDark': "#8c1a1e"
      }
    }
  },
  plugins: [],
}
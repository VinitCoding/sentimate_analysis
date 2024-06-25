/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#1D5D9B'
      },
      screens: {
        'lg': {'max': '1834px'},
        'xl': {'max': '1870px'}

      }
    },
  },
  plugins: [],
});


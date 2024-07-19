/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ABF600',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
  },
  plugins: [],}
});
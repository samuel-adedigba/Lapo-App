/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...fontFamily.sans], 
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  
};
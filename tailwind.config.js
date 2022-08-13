/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      skew: {
        '19': '19deg',
      }
    },
  },
  plugins: [],
}
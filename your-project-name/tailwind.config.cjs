/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif']
      },
      dropShadow: {
        '3xl': '0 0 20px 10px rgba(82, 255, 168, 0.7)',
      }
    },
  },
  plugins: [],
}

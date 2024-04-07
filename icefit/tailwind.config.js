/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F245B"
      },
      
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      aldrich: ["Aldrich", "sans-serif"],
    },
  },
  plugins: [],
}
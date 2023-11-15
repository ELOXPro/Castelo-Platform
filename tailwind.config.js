/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        organical: ["organical", "sans-serif"],
        textalk: ["textalk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
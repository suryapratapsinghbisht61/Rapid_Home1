/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6", // Soft off-white
        primary: "#111111", // Deep black for text
        secondary: "#6B7280", // Gray for secondary text
        accent: "#000000", // Pure black for highlights
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

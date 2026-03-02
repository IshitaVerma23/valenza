/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,.12)",
      }
    },
  },
  plugins: [],
};

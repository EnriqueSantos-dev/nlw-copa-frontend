/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-nlw": "url('/assets/bg.png')",
      },
    },
  },
  plugins: [],
};

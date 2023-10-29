/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "Roboto-Slab": ['"Roboto Slab"', "serif"],
      Lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

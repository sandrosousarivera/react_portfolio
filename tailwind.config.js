/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Usa la clase 'dark' para activar el tema oscuro
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Atkinson Hyperlegible Mono"', "sans-serif"],
      },
      colors: {
        // Tema claro
        golden: "#F6B62D",
        carmin: "#9D2D2F",
        silver: "#B6B4B5",
        bottle: "#6B8994",
        blue: "#303E51",

        // Tema oscuro
        "dark-golden": "#F19D05",
        "dark-carmin": "#81020F",
        "dark-blue": "#0B1025",
        "dark-bottle": "#2D6370",
        "dark-silver": "#6E8FB0",
      },
    },
  },
  plugins: [],
};

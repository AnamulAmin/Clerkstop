/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_orange: "#F9843F",
        theme_light_blue: "#F4F8FA",
        theme_black: "#020202",
        theme_heading: "#333333",
        theme_paragraph: "#666666",
      },
    },
    fontFamily: {
      k2D: '"K2D", sans-serif',
      outfit: '"Outfit", sans-serif;',
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins : ['Poppins', ...defaultTheme.fontFamily.sans],
        Inter : ['Inter', ...defaultTheme.fontFamily.sans],
        RobotoC : ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "white-opaque": 'rgba(255, 255, 255, 0.50)'
      },
    },
  },
  plugins: [],
}
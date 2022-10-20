/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins : ['Poppins', ...defaultTheme.fontFamily.sans],
        Opensans : ['Open Sans', ...defaultTheme.fontFamily.sans],
        RobotoC : ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'dex': "url('../images/DexterGordon_HomecomingLiveAtTheVillageVanguard.jpeg')",
      }
    },
  },
  plugins: [],
}
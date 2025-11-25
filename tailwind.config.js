/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        primary: colors.indigo,
        slate: colors.slate,
        zinc: colors.zinc,
        background: {
          light: colors.zinc[50],
          dark: colors.slate[900],
        },
        surface: {
          light: colors.white,
          dark: colors.slate[800],
        },
        text: {
          light: {
            primary: colors.zinc[900],
            secondary: colors.zinc[600],
          },
          dark: {
            primary: colors.slate[50],
            secondary: colors.slate[400],
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.emerald,
      gray: colors.slate,
      orange: colors.amber,
      red: colors.red,
      blue: colors.sky,
      purple: colors.violet,
    },
    extend: {
      colors: {
        primary: {
          500: "#0066ff",
          DEFAULT: "#0066ff"
        },
        secondary: {
          500: "#00cc99",
          DEFAULT: "#00cc99"
        },
        gray: {
          50: "#fafdfc",
          900: '#001a33',
        },
        orange: {
          500: "#ffaa00",
          DEFAULT: "#ffaa00"
        },
        red: {
          500: "#e74c3c",
          DEFAULT: "#e74c3c"
        },
        sky: {
          500: "#1e90ff",
          DEFAULT: "#1e90ff"
        },
        purple: {
          500: "#9b59b6",
          DEFAULT: "#9b59b6"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

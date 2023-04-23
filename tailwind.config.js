/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#828282",
          400: "#BDBDBD",
          700: "#181818",
          800: "#282828",
          900: "#131313",
        },
        green: {
          500: "#32FF83",
        },
        yellow: {
          700: "#ECD55B",
        },
      },
      backgroundColor: {
        gray: {
          600: "#1e1e1e",
          700: "#181818",
          800: "#282828",
          900: "#131313",
        },
        green: {
          500: "#32FF83",
        },
        yellow: {
          700: "#ECD55B",
        },
      },
      borderColor: {
        gray: {
          700: "#181818",
          800: "#282828",
          900: "#131313",
        },
        green: {
          500: "#32FF83",
        },
        yellow: {
          700: "#ECD55B",
        },
        
      },
      backgroundImage: {
        orangelike: "linear-gradient(to bottom, #EA12B0, #FFB40B)",
        // 'leafs'
      },
      fontFamily: {
        "monospace": "monospace",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        stickyNavbar: {
          "0%": {
            transform: "translateY(-40px)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        }
      },
      colors: {
        hero: "rgb(178, 230, 253)",
        button:"#A6DEF7"
      }
    },
  },
  plugins: [],
}


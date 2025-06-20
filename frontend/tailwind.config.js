/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#2F5233",
        leaf: "#A5C9A1",
        earth: "#ECE3CE",
      },
    },
  },
  plugins: [],
}
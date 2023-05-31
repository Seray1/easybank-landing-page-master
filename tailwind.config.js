/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
        DarkBlueTwo: "hsl(213, 19%, 25%)",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        BrightCyan: "hsl(192, 70%, 51%)",
        GrayishBlue: "hsl(233, 8%, 62%)",
        LightGrayishBlue: "hsl(220, 16%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        primaryColor:
          "linear-gradient(to right, hsl(136, 65%, 51%),hsl(192, 70%, 51%))",
      },
    },
    plugins: [],
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#ECE5F0",
      secondary: "#59114D",
      yellow: "#E98A15",
      babyyellow: "#FFFBC1",
      green: "#003B36",
      red : "	#DC143C",
      grey: "#808080",
      silver: "#ecebff",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cRed: "#FF3811",
        tGray: "#737373",
      },
    },
  },
  plugins: [require("daisyui")],
};

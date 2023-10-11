/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#446A73",
        secondary: "#2F80ED",
        lightGreen: "#E8F6EE",
      },
    },
  },
  plugins: [],
};

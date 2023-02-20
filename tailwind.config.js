/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      minWidth: {
        38: "380px",
      },
      screens: {
        xs: "540px", //min-width
        xxs: "393px",
      },
    },
  },
  plugins: [],
};

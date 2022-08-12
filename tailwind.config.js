/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens:{
      lg: '500px',
      sm: '200px'
    },
    extend: {},
  },
  plugins: [],
}

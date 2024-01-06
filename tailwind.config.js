/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white0': '#F3F3F3',
        'white1': '#dcdcdc',
        'purple0': '#4C1E92',
        'red0': '#932432',
        'blue0': '#222E3C'
      }
    }
  },
  plugins: [],
}
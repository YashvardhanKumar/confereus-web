/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Poppins"', "sans-serif"],
      // Add more custom font families as needed
    },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cusblue':'#4477ce',
        'white': '#ffffff',
        'black': '#000000',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    extend: {},
  },
  plugins: [],
}


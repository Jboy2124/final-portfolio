/** @type {import('tailwindcss').Config} */
// import bg from './src/assets/background/backgroundImage.svg'
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif;'],
        jost: ['Jost', 'sans-serif;']
      },
      colors: {
        primary: '#4C3575',
        secondary: '#5B4B8A'
      },
      screens: {
        mobile: { 'min': '320px', 'max': '425px' },
        tablet: { 'min': '426px', 'max': '768px' },
        laptop: { 'min': '769px', 'max': '1024px' },
        desktop: { 'min': '1025px', 'max': '2560px' }
      },
    },
  },
  plugins: [],
}

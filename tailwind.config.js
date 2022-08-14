
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    colors:{
      'darkBg': '#202c37',
      'darkLigth' : '#2b3945',
      'white' : '#fff',
    },
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',        
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
      }, //end of fontFamily
    },
  },
  plugins: [],
}

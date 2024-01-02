




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'leiko':['leiko','sans'],
        'dancingScript':['dancingScript','sans']
      },
      fontSize:{
        '2xs':'0.5rem'
      },
      screens: {
        
        'md2': '480px', // min-width
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
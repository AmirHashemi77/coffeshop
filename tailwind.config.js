




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
      colors:{
        'brown1':'#F8E4BE',
        'brown2':'#9D8781,',
        'brown3': '#997D6C',
        'brown4':'#8D685E',
        'cream1':'#FFF3E0',
        'cream2':'#FFF8E8',
        'cream3':'#DABB9E',
        'gray1':'#D6D6D6'
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#545454",
        secondary:{
          100:"#0095f6",
          200:" #0081d5",
         
        },
        bground:"#890000"
        
      }
    },
  
  },
  plugins: [],
}

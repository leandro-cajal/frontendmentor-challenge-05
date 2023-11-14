/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "main":['"Raleway"', 'sans-serif']      
      },
      colors:{
        //primary
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desaturated-blue": "hsl(238, 22%, 44%)",
        //acent
        "bright-blue": "hsl(224, 93%, 58%)",
        "moderate-cyan": "hsl(170, 45%, 43%)",
        //neutral
        "light-grayish-blue": "hsl(240, 75%, 98%)",
        "light-gray": "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
}


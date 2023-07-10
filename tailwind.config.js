
const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      keyframes: {
        star: {
          '0%':  {opacity: 0,right:'-230px', top: "0vh"},
          '10%': {opacity:1},
          '50%': {opacity:1},
          '60%': {opacity: 0, right: '1000px', top:"0vh"},
          '100%':{opacity: 0, right: '1000px', top: "0vh"}
        }
      },
      animation: {
        'star': 'star 15s linear infinite'
      },
      screens: {
        // I DIDNT KNOW IT WAS MOBILE FIRST... AAAAAAAAAHHHHHHHHHH
        xl: { max: "1280px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "640px" },
        // => @media (max-width: 639px) { ... }
      },
      textShadow: {
        xsm: '1px 1px 0 var(--tw-shadow-color)',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        "rubik": ['var(--font-rubik)'],
        "jb": ['var(--font-jb-mono)'],
        "bs": ['var(--font-big-shoulders)'],
        "oxanium": ['var(--font-oxanium)']
      },
      width: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
      transitionDuration:{
        1200: "1200ms",
        1500: "1500ms",
        2000: "2000ms"
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

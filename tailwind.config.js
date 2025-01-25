/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        
        'light-bg': '#f5f5f5',
        'dark-bg' : '#333333',
        'light-text-primary' : '#222222',
        'light-text-secondary' : '#333333',
        'dark-text-primary' : '#f8f8f8',
        'dark-text-secondary' : '#e0e0e0',

        'primary': {
        '50': '#fff0f0',
        '100': '#ffdddd',
        '200': '#ffc0c0',
        '300': '#ff9494',
        '400': '#ff5757',
        '500': '#ff2323',
        '600': '#ff0000',
        '700': '#d70000',
        '800': '#b10303',
        '900': '#920a0a',
        '950': '#500000',
    },    
  },

  fontFamily:{
    primary : ['Merriweather','serif'],
    secondary : ['Lato','serif'],

  },


    },
  },
  plugins: [],
}


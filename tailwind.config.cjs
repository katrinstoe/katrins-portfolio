const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ['Jetbrains Mono']
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        funpink: '#F488BA',
        crazyorange: '#FF9900',
        groovyblue: '#3A33A4',
        slaywhite: '#fff',
        pastelgreen: '#35C69F',
      }
    }
  },

  plugins: []
};

module.exports = config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0284c7',
        secondary: '#475569',
      },
      fontFamily: {
        montserrat: 'Montserrat',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

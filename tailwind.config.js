/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0284c7',
        secondary: '#475569',
        paragraf: '#64748b',
        darkBg: '#1f2b33',
        secondaryDarkBg: '#323f4b',
        primaryDark: '#cbd2d9',
        secondaryDark: '#9aa5b1',
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

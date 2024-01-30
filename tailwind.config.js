/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        mainBrown: 'rgb(124, 101, 88)',
        mainPink: 'rgb(248, 212, 212)',
        mainBeige: 'rgb(255, 245, 239)',
        mainGreen: 'rgb(135, 195, 142)',
        lightGreen: 'rgb(212, 233, 214)',
        darkGreen: 'rgb(92, 133, 97)',
        lightBrown: 'rgb(169, 144, 144)',
        darkBrown: 'rgb(124, 101, 88, 0.3)'

    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      bitter: ['Bitter', 'serif'],
    },
    fontSize: {
      'sm' : '16px',
      'm': '20px',
      'l': '25px',
      'xl': '31.25px',
      'xxl': '39.1px'
    },
  },
  plugins: []
}, }

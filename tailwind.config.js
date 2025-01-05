/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ['Tangerine', ...defaultTheme.fontFamily.serif],
        sans: ['Ysabeau', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

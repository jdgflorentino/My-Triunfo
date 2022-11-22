/** @type {import('tailwindcss').Config} */
const fs = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    fs,
  ],
};

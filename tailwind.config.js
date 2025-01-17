// tailwind.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui()]
};

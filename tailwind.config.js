/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: { 'main-border': '#F0F0F0', 'sub-text': '#AAAAAA' },
    },
  },
  plugins: [],
};

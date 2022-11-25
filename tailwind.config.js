/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-red': "#D34157",
        'main-red-10': '#D341571A',
        'main-pink': '#F883B8',
        'main-beige': '#FAF3F0',
        'main-border': '#F0F0F0',
        'sub-text': '#AAAAAA',
      },
    },
  },
  plugins: [],
};

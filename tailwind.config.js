/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-red': '#D34157',
        'main-red-10': '#D341571A',
        'main-pink': '#F883B8',
        'main-beige': '#FAF3F0',
        'main-beige-60': '#FAF3F099',
        'main-blue': '#425195',
        'main-border': '#F0F0F0',
        'main-black-40': '#00000066',
        'sub-text': '#AAAAAA',
      },
      keyframes: {
        toggle: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        toggle: 'toggle 0.1s linear',
      },
    },
  },
  plugins: [],
};

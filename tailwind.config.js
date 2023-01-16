/** @type {import('tailwindcss').Config} */
module.exports = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        100: '25rem',
        120: '31.25rem',
      },
      minWidth: {
        120: '31.25rem',
      },
      boxShadow: {
        '3xl': '1px 2px 20px 2px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'main-red': '#D34157',
        'main-red-10': '#D341571A',
        'main-pink': '#F883B8',
        'main-pink-10': '#F883B81A',
        'main-beige': '#FAF3F0',
        'main-beige-10': '#FAF3F01A',
        'main-beige-60': '#FAF3F099',
        'main-blue': '#425195',
        'main-blue-10': '#4251951A',
        'main-border': '#F0F0F0',
        'main-black-40': '#00000066',
        'sub-text': '#AAAAAA',
        'soft-black': '#0E1111',
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

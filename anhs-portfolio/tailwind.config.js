/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        coral: { pink: '#FF8EC6' },
        reef: { teal: '#5EEBC4' },
        deep: { aqua: '#38B2D8' },
        pearl: { white: '#F8FDFF' },
        anemone: { purple: '#C8A8FF' },
        fish: { gold: '#FFE08A' },
        ocean: { deep: '#152D3B' },
        jellyfish: { pink: '#FFB8D8' },
      },
      borderRadius: {
        coral: '20px',
      },
    },
  },
  plugins: [],
};

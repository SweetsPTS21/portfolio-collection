/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FF8EC7',
        'blush-rose': '#FFB6D9',
        'lavender-mist': '#E8D5FF',
        'baby-blue': '#B8D4FF',
        'mint-cream': '#8EECD4',
        'peach-glow': '#FFD4B8',
        'aurora-purple': '#D4A0FF',
        'dream-bg': '#FFF0F5',
        'text-primary': '#3D1F33',
        'text-secondary': '#8A5A72',
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        glass: '24px',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
};

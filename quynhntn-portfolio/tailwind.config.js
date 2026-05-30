/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Legacy pastel tokens (giữ để không break)
        'pastel-pink': '#FF8EC7',
        'blush-rose': '#FFB6D9',
        'lavender-mist': '#E8D5FF',
        'baby-blue': '#B8D4FF',
        'mint-cream': '#8EECD4',
        'peach-glow': '#FFD4B8',
        'aurora-purple': '#D4A0FF',
        'dream-bg': '#FFFFFF',
        'text-primary': '#2D2D2D',      // charcoal
        'text-secondary': '#4A4A4A',    // dark gray

        // Sakura Parchment — Concept A accent tokens
        'accent-rose':  '#D4607E',
        'accent-plum':  '#8B4BAB',
        'accent-teal':  '#3A9A8A',
        'accent-peach': '#D4784A',
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        glass: '24px',
      },
    },
  },
  plugins: [],
};


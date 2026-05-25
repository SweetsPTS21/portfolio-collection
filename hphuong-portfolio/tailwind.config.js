/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'lagoon-mint': '#ECFFFB',
        'kayak-teal': '#27C6C2',
        'water-aqua': '#7CEAFF',
        'leaf-green': '#70E6A8',
        'flower-pink': '#FF7F9E',
        'sun-yellow': '#FFD86B',
        'deep-lagoon': '#123E48',
        'sand-soft': '#FFF0C9',
      },
      fontFamily: {
        heading: ['Quicksand', 'Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        theme: '18px',
      },
    },
  },
  plugins: [],
}

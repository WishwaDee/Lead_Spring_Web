/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#740001',
        'maroon-dark': '#2a0b0b',
        gold: '#D3A625',
        green: '#1A472A',
        parchment: '#F8F4E3',
        ink: '#0E0B00',
        cream: '#fffdf6',
        paper: '#fffdfa',
        thbg: '#efe4c6'
      }
    }
  },
  plugins: []
};
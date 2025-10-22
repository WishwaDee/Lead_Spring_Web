/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050413',
        twilight: '#1a0f2f',
        forest: '#071c1f',
        ember: '#f4c95d',
        'ember-dark': '#d6a43d',
        mist: '#f3edff',
        plume: '#b8a7ff'
      }
    }
  },
  plugins: []
};

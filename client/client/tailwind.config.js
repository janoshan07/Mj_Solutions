/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a',
          blue: '#0b63f6',
          cyan: '#05b8ff',
          mist: '#eef9ff'
        }
      },
      boxShadow: {
        glow: '0 20px 50px rgba(5, 184, 255, 0.18)'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'marine': '#2C5AA0',
        'violet-dark': '#4A1E3A',
        'bordeaux': '#8B1538',
        'electric-blue': '#1E3A8A',
        'cyan-deep': '#0F4C75',
        'anthracite': '#374151',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amplia: {
          green: '#8cc63f',
          dark: '#0f1115',
          light: '#f9fafb',
          gray: '#6b7280',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

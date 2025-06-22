/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#219EBC',
        'dark-accent': '#023047',
        'soft-highlight': '#FFB703',
        'neutral-bg': '#F8F9FA',
        'subtle-text': '#8E9AAF',
      },
      fontFamily: {
        'mono': ['Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#219EBC' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
};
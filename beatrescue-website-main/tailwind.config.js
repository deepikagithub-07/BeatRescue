/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Horizontal infinite scroll
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Vertical infinite scroll (if you need later)
        'marquee-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'hazards-marquee': 'marquee-x 20s linear infinite',
        'hazards-marquee-vertical': 'marquee-y 20s linear infinite',
        'spin-slow': 'spin 8s linear infinite', // your old one
      },
    },
  },
  plugins: [],
};

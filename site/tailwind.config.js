/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4d1f34',
        secondary: '#3778ad',
        accent: '#f0c246',
        text: '#424242',
        darkOverlay: 'rgba(0,0,0,0.6)',
        lightOverlay: 'rgba(255, 255, 255, 0.6)',
        successBackground: 'rgba(74, 222, 128, 0.3)',
        accentBackground: 'rgba(240, 194, 70, 0.3)',
        primaryOverlay: 'rgba(77, 31, 53, 0.85)',
      },
    },
  },
  plugins: [],
};

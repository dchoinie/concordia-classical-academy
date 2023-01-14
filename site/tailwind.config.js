/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4d1f34",
        secondary: "#3778ad",
        accent: "#f0c246",
        text: "#424242",
      },
    },
  },
  plugins: [],
};

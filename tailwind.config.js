/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': "#FCE009",
        'light': "#FFFBEA",
        'dark': "#222222"
      }
    },
  },
  plugins: [],
};

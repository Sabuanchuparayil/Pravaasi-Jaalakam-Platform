/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./App.jsx",
      ],
      theme: {
        extend: {
          fontFamily: {
            'manjari': ['Manjari', 'sans-serif'],
            'amaranth': ['Amaranth', 'sans-serif'],
            'playfair': ['Playfair Display', 'serif'],
            'crimson': ['Crimson Text', 'serif'],
          },
        },
      },
      plugins: [],
    }
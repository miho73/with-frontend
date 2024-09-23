/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html",
  ],
  safelist: [
    'gap-2',
    'gap-3',
    'gap-5'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        salita: ['salita-font', 'monospace'],
        ananda: ['Ananda_Black_Personal_Use', 'monospace'],
        inter_bold: ['Inter-bold','monospace'],
      }
    },
  },
  plugins: [],
}


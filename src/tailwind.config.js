// tailwind.config.js
export default {
    content: [
      "./index.html", // include this if you use index.html in Vite
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#E2621B',
          'primary-dark': '#c65316',
          'navbar-bg': 'rgba(255, 255, 255, 0.08)',
        },
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  
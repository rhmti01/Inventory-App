/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", " ./src/js/app.js "],
  // darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'zz':'700px',
        'ww':'560px',
        'xx':'480px',
        'dd':'365px',
        'ss':'285px',
      },
      colors: {
        // 'main': '#A8763E',
        // 'main':'#fb6f92',
        // 'main':'#0b090a',
        // 'main':'#ba181b',
        // 'main':'#55a630',
        // 'main':'#4361ee',
        // 'main':'#e7bc91',
        // 'main':'#588157',
        // 'main':'#6c757d',
        // 'main':'#b9375e',
        // 'main':'#ffa200',
        'main':'#141E22',
      },
      fontFamily: {
        outfit: ['Outfit'],
        vazir: ['Vazirmatn']
      },
    },
  },
  plugins: [],
}


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '30rem',
      },
      margin: {
        '100': '28rem',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
    }
  },
  plugins: [],
}

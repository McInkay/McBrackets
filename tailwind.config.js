module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: {
        standard: [/^(row|col)-(span|start)/]
      }
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "50v": "50vh",
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

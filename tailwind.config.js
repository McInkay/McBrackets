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
      gridRowStart: {
        '9': '9',
        '11': '11',
        '13': '13',
        '15': '15',
        '17': '17',
        '19': '19',
        '21': '21',
        '23': '23',
        '25': '25',
        '27': '27',
        '29': '29',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-10': 'span 10 / span 10',
        'span-16': 'span 16 / span 16',
        'span-32': 'span 32 / span 32',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

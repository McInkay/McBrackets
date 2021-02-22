module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: {
        standard: [/(row|col|border)-(span|start|r|l)/]
      }
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "50v": "50vh",
      },
      gridTemplateColumns: {
       '13': 'repeat(13, minmax(0, 1fr))',
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
        '31': '31',
        '33': '33',
        '35': '35',
        '37': '37',
        '39': '39',
        '41': '41',
        '43': '43',
        '45': '45',
        '47': '47',
        '49': '49',
        '51': '51',
        '53': '53',
        '55': '55',
        '57': '57',
        '59': '59',
        '61': '61',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-10': 'span 10 / span 10',
        'span-16': 'span 16 / span 16',
        'span-32': 'span 32 / span 32',
        'span-64': 'span 64 / span 64',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

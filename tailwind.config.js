module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'shift-right-3LU1WH-685s': 'shift-right-3LU1WH 685s linear forwards',
        'shift-right-3LU1WH-960s': 'shift-right-3LU1WH 960s linear forwards',
        'shift-right-3LU1WH-1200s': 'shift-right-3LU1WH 1200s linear forwards',
        'shift-right-3LU1WH-1600s': 'shift-right-3LU1WH 1600s linear forwards',
        'shift-right-3LU1WH-2400s': 'shift-right-3LU1WH 2400s linear forwards',
        'shift-right-3LU1WH-4800s': 'shift-right-3LU1WH 4800s linear forwards',
        'hello-2FR9NG': 'hello-2FR9NG 100s linear 180s forwards',
      },
      keyframes: {
        'shift-right-3LU1WH': {
          '0%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          },
          'to': {
            '-webkit-transform': 'translateX(8000px)',
            transform: 'translateX(8000px)'
          }
        },
        'hello-2FR9NG': {
          '0%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)'
          },
          'to': {
            '-webkit-transform': 'translateY(-2000px)',
            transform: 'translateY(-2000px)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shadow: '#ffffff73',
        brand: '#FF8000',
        primary: '#FBF5EE',
        second: '#FFD07F',
        darkfirst: '#2F2C29',
        darksecond: '#383735',
        card: '#FFFFFF',
        textcard: '#595959',
        c1: '#9B39AE',
        c2: '#4C69D1',
        c3: '#43CCBC',
        'ww': '#FFD68A',
        'ivo': '#FFFFF0',
        'ow': '#F1FAFC',
        'io': '#FEFDFE',
      },
      boxShadow: {
        '5xl': '12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset',
        'xxl': 'inset 4px 4px 8px 0 rgba(0, 0, 0, 0.2), inset -1px 0px 0px 0 rgba(255, 255, 255, 0.8)',
        'xxxl': '12px 16px 30px 0 rgba(61, 61, 58, 1.5) inset, -11px -8px 12px 0 rgba(0, 0, 0, .25) inset',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

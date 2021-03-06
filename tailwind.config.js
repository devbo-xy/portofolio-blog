module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    extend: {
      backgroundImage: {
        'hero': 'url(/src/assets/bg.svg)'
      },
      colors: {
        drknav: '#303030',
        drkpage: '#333333',
        shadow: '#ffffff73',
        brand: '#8A1AE4',
        card: '#FFFFFF',
        textcard: '#595959',
        c1: '#9B39AE',
        c2: '#4C69D1',
        c3: '#43CCBC',
        'ww': '#FFD68A',
        'ivo': '#FFFFF0',
        'ow': '#F1FAFC',
        'io': '#FEFDFE',
        'white1': '#FBFBFB',
        'white2': '#FAFAFA',
        'white3': '#F8F8F8',
        'text': '#242424',
        'text2': '#888888',
        'bg': '#F6F6F6',
        'cb': '#F8F8F8',
        'ipt': '#F1F1F1',
      },
      boxShadow: {
        '3xl': '-5px 5px 20px 2px rgba(0, 0, 0, .25)',
        '5xl': '12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset',
        '4xl': '4px 12px 16px 0 rgba(255, 255, 255, 0.3) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset, -5px 5px 20px 2px rgba(0, 0, 0, .25)',
        'xxl': 'inset 4px 4px 8px 0 rgba(0, 0, 0, 0.2), inset -1px 0px 0px 0 rgba(255, 255, 255, 0.8)',
        'xxxl': '12px 16px 30px 0 rgba(61, 61, 58, 1.5) inset, -11px -8px 12px 0 rgba(0, 0, 0, .25) inset',
        '7xl': '4px 12px 16px 0 rgba(255, 255, 255, 0.3) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset',
      },
      borderWidth: {
        DEFAULT: '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',

      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}

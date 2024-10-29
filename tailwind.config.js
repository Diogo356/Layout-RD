/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        'mobile': '600px',
        'tablet': '840px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'WhiteGray': '#f2f1f1',
        'DarkGrenn': '#029e3b',
        'Green1': '#5fe690',
        'Green2': '#01e675',
        'White': '#ffffff',
        'DarkOrange1': '#f47654',
        'DarkOrange2': '#f47a5c',
        'BlackTrans': '#000000bf',
        'BlackOver': '#00000080',
        'BlackCheck': '#000000cc',
        'BlackFooter': '#222',
        'GrayFooter': '#bbb'
      }
    },
  },
  plugins: [],
}

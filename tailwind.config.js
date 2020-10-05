/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#E6ECFD',
          200: '#BFD1FB',
          300: '#99B5F9',
          400: '#4D7DF4',
          500: '#0045EF',
          600: '#003ED7',
          700: '#00298F',
          800: '#001F6C',
          900: '#001548'
        }
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}

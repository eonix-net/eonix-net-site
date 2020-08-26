const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./themes/eonix/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require("tailwindcss")("./themes/eonix/assets/css/tailwind.config.js"),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, require('cssnano')]
      : []
  ]
}
const themeDir = __dirname + '/';
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [themeDir + 'layouts/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import')({ path: [themeDir]}),
    require('tailwindcss')(themeDir + 'tailwind.config.js'),
    require('autoprefixer'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [purgecss, require('cssnano')]
      : [],
  ],
};
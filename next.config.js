
// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([
  '@fullcalendar'
])

module.exports = withTM({
  images: {
    domains: ['badgersnax.s3-us-west-2.amazonaws.com'],
  },
})

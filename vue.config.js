module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/community-pay/'
    : './',
  outputDir: 'docs',
}

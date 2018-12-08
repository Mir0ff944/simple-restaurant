const { environment } = require('@rails/webpacker')
const customConfig = require('./webpack')
// const url = require('./url-loader')

// environment.loaders.prepend('url', url)
environment.config.set('output.filename', '[name].js')
environment.config.merge(customConfig)

module.exports = environment

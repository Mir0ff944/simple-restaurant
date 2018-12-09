process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

environment.config.set('mode', 'production')

module.exports = environment.toWebpackConfig()

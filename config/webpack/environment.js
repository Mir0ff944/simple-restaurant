const { environment } = require('@rails/webpacker')
const customConfig = require('./custom-webpack')

environment.config.merge(customConfig)
module.exports = environment

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

module.exports = {
  mode: 'production',
  entry: '../../app/views/layouts/application.html.erb'
};

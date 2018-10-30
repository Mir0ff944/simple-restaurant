const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {
  entry: [
    './app/javascript/components/reactSections',
  ],

  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, './app/assets/webpack')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, './app/assets/iamges'), // Makes it easier to reference our assets in jsx files
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es6-shim/es6-shim',
            sham: 'es6-shim/es6-sham',
          },
        }
      },
      {
        // The important stuff
        test: /\.(jpg|jpeg|png)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][md6:hash].[ext]', // Name of bundled asset
            outputPath: 'webpack-assets/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
            publicPath: '/assets/webpack-assets/' // Endpoint asset can be found at on Rails server
          }
        }
      }
    ]
  }
};
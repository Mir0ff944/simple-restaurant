const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./app/assets/javascripts/application.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },

          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },

          {
            loader: 'postcss-loader'
          }
        ]
      }

    ]
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
};
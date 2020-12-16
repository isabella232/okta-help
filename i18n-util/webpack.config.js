const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'i18n-util.bundle.[fullhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Okta help',
      filename: 'okta_help.htm'
    })
  ]
};

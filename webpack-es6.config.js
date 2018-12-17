const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'index-es6.js'
  },
  module: {
    rules: [
      {
      test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env',
            {
              targets: {
                "esmodules": true
              },
              debug: true
            }  
            ]]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "../index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/',
        to: path.resolve(__dirname, 'public/js/webcomponentsjs/')
      }
    ]),
    new ScriptExtHtmlWebpackPlugin({
      module: 'js'
    }),
  ],
}
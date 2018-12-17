const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = {
  entry: [
    '@webcomponents/webcomponentsjs/custom-elements-es5-adapter',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'index-es5.js'
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
                browsers: [
                  '>=1%',
                  'not op_mini all',
                ]
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
      template: "./src/index.html",
      filename: "../index.html"
    }),
    new ScriptExtHtmlWebpackPlugin({
      custom: [
        {
          test: /\.js$/,
          attribute: 'nomodule',
        },
      ]
    }),
  ],
}
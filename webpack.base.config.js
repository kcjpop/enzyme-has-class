const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_FOLDER = path.resolve(__dirname, 'src');
const TARGET_FOLDER = path.resolve(__dirname, 'dist');

const config = {
  context: SRC_FOLDER,
  entry: {
    // the entry point of our app
    app: path.resolve(SRC_FOLDER, 'index.jsx'),
    vendors: ['react', 'react-dom']
  },
  output: {
    path: TARGET_FOLDER
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [SRC_FOLDER, 'node_modules'],
    mainFields: ['jsnext:main', 'browser', 'module', 'main']
  }
};

module.exports = { TARGET_FOLDER, SRC_FOLDER, config };

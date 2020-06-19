const { resolve } = require('path');
const webpack = require('webpack');

const PUBLIC_PATH = resolve(__dirname, './templates/html');
const SRC_PATH = resolve(__dirname, 'src');

module.exports = {
  entry: `${SRC_PATH}/index.js`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
          _: 'underscore'
      })
  ],
  devServer: {
    contentBase: PUBLIC_PATH
  },
  resolve: {
    modules: [__dirname + '/node_modules', __dirname + '/app']
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  }
};
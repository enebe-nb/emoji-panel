'use strict';
const webpack = require('webpack');
const path = require('path');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = !__PROD__;

module.exports = {
  devtool: __DEV__ ? 'source-map' : false,
  entry: {
    'emoji-window': [
      './src/emoji-window.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name]${__PROD__ ? '.min' : ''}.js`,
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin({
      __PROD__: JSON.stringify(__PROD__),
      __DEV__: JSON.stringify(__DEV__),
      'process.env': {
        NODE_ENV: JSON.stringify(__PROD__ ? 'production' : 'development')
      }
    })
  ].concat(__PROD__ ? [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ] : []),
  module: {
    preLoaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

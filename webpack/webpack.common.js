const { root } = require('./helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { webpack } = require('webpack');
var path = require('path');
//const { ProvidePlugin } = require('webpack');
// const { jquery } = require('jquery');
// const { $ } = require("jquery")
var CompressionPlugin = require("compression-webpack-plugin");

/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/assets/images', to: 'assets/images' },
      { from: 'src/assets/fonts', to: 'assets/fonts' },
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'assets/css' },
      { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'assets/js' },
      { from: 'node_modules/jquery/dist/jquery.min.js', to: 'assets/js' },
      { from: 'node_modules/bootstrap/dist/fonts', to: 'assets/fonts' },
      {from: 'src/assets', to: 'assets' }
    ])
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
};

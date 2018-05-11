const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
          test:/\.(s*)css$/,
          use: ExtractTextPlugin.extract({
            fallback: ['style-loader'],
            use: ['css-loader', 'sass-loader']
          })
        },
        {
         test: /\.(woff(2)?|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
               name: '[name].[ext]',
               outputPath: 'assets/'
           }
         }]
       }
      ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ]
};

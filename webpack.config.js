// var webpack = require('webpack')
// var path = require('path')
//
// module.exports = {
//   entry: './src/index.js',
//   externals: {
//     'react': 'commonjs react'
//   },
//   output: {
//     filename: '[name].js',
//     chunkFilename: '[id].chunk.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/',
//     libraryTarget: 'commonjs2',
//     library: 'ReactToken'
//   },
//   optimization: {
//     minimize: true
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//     })
//   ],
//   module: {
//     rules: [
//       { test: /\.js?$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }
//     ]
//   }
// }

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'commonjs react'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    port: 8000,
    stats: "minimal"
  }
}

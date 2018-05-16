var webpack = require('webpack')
var path = require('path')

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
}
var reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
}

module.exports = {
  entry: {
    'react-token': './src/index.js',
    'react-token.min': './src/index.js'
  },
  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'commonjs2',
    library: 'ReactToken'
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }
    ]
  }
}

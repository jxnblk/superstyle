
const path = require('path')

module.exports = {
  entry: './docs/entry.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'superstyle': path.join(__dirname, 'src'),
      // 'superstyle/react': path.join(__dirname, 'src/react'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'docs/',
    historyApiFallback: true
  }
}


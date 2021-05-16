const path = require('path');

module.exports = {
  context: __dirname,
  mode: "production",
  entry: {
    ajax: "./src/ajax.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ajax',
    libraryExport: 'ajax',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};
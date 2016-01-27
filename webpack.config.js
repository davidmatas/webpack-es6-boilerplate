var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        query: {
          presets: 'es2015',
        },
      }
    ]
  },
  devServer: {
    inline: true,
    port: 3333
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

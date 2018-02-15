const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
  },

  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname +'/public/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const TerserPlugin = require("terser-webpack-plugin")
const libraryNamePlugin = 'vue3-helloworld-webpack';

const appConfig = {
  entry: {
    'vue3-helloworld-webpack': __dirname + '/src/index.js',
    'vue3-helloworld-webpack.min': __dirname + '/src/index.js'
  },

  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: libraryNamePlugin,
    libraryTarget: 'umd'
  },

  module: {
    rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: 'vue3-helloworld-webpack.min.js',
      }),
    ],
  },
};

module.exports = [appConfig];
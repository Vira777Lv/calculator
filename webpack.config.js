const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
        ]
      },

      { test: /\.(png|gif|jpe?g)(\?[a-z0-9=.]+)?$/, use: 'file-loader' },
      { test: /\.svg$/, loader: 'svg-inline-loader?classPrefix' },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3000
  }
};

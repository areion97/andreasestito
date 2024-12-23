const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: './static/js/main.[contenthash].js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/andreasestito',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './static/css/main.[contenthash].css',
      chunkFilename: './static/css/main.[id].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new WebpackAssetsManifest({
      output: 'asset-manifest.json',
      publicPath: true,
    }),

    new CopyPlugin({
      patterns: [
        {
          from: 'src/files/',
          to: 'static/media',
        },
        {
          from: 'src/images/',
          to: 'static/media',
        },
        {
          from: 'src/css/',
          to: 'static/css',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src/js/'),
        exclude: /src\/images|src\/files/,
        use: { loader: 'babel-loader' },
      },

      {
        test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$|\.pdf$/,
        exclude: /node_modules/,
        use: {
          options: {
            name: './static/media/[name].[ext]',
          },
          loader: 'url-loader?limit=100000',
        },
      },

      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules|src\/images|src\/files/,

        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: ['/andreasestito'],
    static: {
      publicPath: '/andreasestito/',
      directory: path.join(__dirname, 'build'),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1512000,
    maxAssetSize: 1512000,
  },
};

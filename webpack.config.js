const path = require('path');
const { WebpackAssetsManifest } = require('webpack-assets-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: './static/js/main.[contenthash].js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/main.[contenthash].css',
      chunkFilename: 'static/css/main.[id].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),

    new WebpackAssetsManifest({
      output: 'asset-manifest.json',
      publicPath: true,
    }),
    new WebpackManifestPlugin({
        fileName: 'manifest.json', // The output manifest file
        publicPath: '/',
        generate: (seed, files) => {
          return files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
        },
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
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, {loader: 'css-loader' }],
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

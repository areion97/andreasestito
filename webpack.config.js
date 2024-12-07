const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CopyPlugin = require("copy-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "./static/js/main.[contenthash].js",
        path: path.resolve(__dirname, "./build"),
        publicPath: "/andreasestito",
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./static/css/main.[contenthash].css",
            chunkFilename: "./static/css/main.[id].[contenthash].css",
        }),
        new WebpackAssetsManifest({
            output: 'asset-manifest.json',
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },

            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$|\.pdf$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: './static/media/[name].[ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader","sass-loader"],
            },

        ]
    },
    devServer: {
        port: 3000,
        open: ["/andreasestito"],
        static: {
            publicPath: "/andreasestito/",
            directory: path.join(__dirname, 'build'),
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 1512000,
        maxAssetSize: 1512000
    }
};

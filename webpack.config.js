const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./static/js/main.[contenthash].js",
        path: path.resolve(__dirname, "./build"),
    },
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
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },

        ]
    }
};

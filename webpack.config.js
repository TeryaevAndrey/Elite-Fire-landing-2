const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {test: /\.svg$/, use: "svg-inline-loader"},
            {test: /\.s[ac]ss$/, use: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.(js)$/, use: "babel-loader"},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              }
        ]
    },
    plugins: [
        new miniCssExtractPlugin(),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/images"),
                    to: "images"
                },
            ]
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        })
    ]
}
const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new optimizeCssAssetsWebpackPlugin(),
            new terserWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new cleanWebpackPlugin()
    ],
    module: {
        // css-loader take your css & turn it into javascript.
        // style-loader which take javascript & inject css to the DOM with <style>
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader, // extract css into sepreate file
                    "css-loader", // convert css into js
                    "sass-loader" // convert sass into css
                ]
            },
        ]
    }
});
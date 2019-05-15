const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
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
                    "style-loader", // inject style into DOM
                    "css-loader", // convert css into js
                    "sass-loader" // convert sass into css
                ]
            },
        ]
    }
});
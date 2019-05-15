const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require("path");

module.exports = {
    entry: {
       main: "./src/index.js",
       vendor: "./src/vendor.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        // css-loader take your css & turn it into javascript.
        // style-loader which take javascript & inject css to the DOM with <style>
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // inject style into DOM
                    "css-loader", // convert css into js
                    "sass-loader" // convert sass into css
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }

            }
        ]
    }
}
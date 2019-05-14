const path = require("path");
module.exports = {
    mode: "development",
    // devtool: "none",
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        // css-loader take your css & turn it into javascript.
        // style-loader which take javascript & inject css to the DOM with <style>
        rules: [
            {
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
            }
        ]
    }
}
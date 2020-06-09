const {
    resolve
} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/index.js",
        app: "./src/app.js"
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "build")
    },



    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            filename: "app.html",
            chunks: ["app"]
        })
    ]
}
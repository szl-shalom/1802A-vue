const HtmlWebpackPlugin = require("html-webpack-plugin");
const data = require("./mock/data.js");
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
    devServer: {
        before(app) {
            // 监听接口  
            app.get("/api/list", (req, res) => {
                // 返回数据
                res.json(data)
            })
        }
    },
    resolve: {
        alias: {
            // 给src目录配置别名 @
            "@": path.resolve(__dirname, "src")
        }
    }
}


const { resolve } =  require("path");
// 引入生成模板文件插件HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 配置对象
module.exports = {
    // 入口文件
    entry: "./src/main.js",
    // 出口
    output: {
        // 出口名称
        filename: "app.js",
        // 出口路径
        path: resolve(__dirname,"build")
    },
    // 插件
    plugins:[
        /**
         * @HtmlWebpackPlugin 插件
         * @desc 生成HTML模板文件
         * @template 指定生成模板的名称  @type { String }  
         */
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 打包前清理 output.path 指定的目录
// 注意  这个插件返回是一个对象  需要把插件解构出来才能使用
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
module.exports = {
    mode: "development", //模式
    entry: "./src/index.js", //入口文件
    output: { //出口
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    // 开发服务器
    devServer: {
        // host: "",
        port: 3000,
        hot: true,
        // 在跑服务的时候同时打开浏览器
        open:true,
    },
    //模块
    module: {
        // 规则
        rules: [{
                test: /\.(c|sa|sc)ss$/,
                loader: "style-loader!css-loader!sass-loader",
            },
            {
                test: /\.jpg$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/"
                    }
                }]
            },
            // 处理图标
            // eot | svg | woff | woff2 | ttf
            // 使用 file-loader 处理
            {
                test: /\.(eot|svg|woff2?|ttf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/"
                    }
                }]
            },

            // 处理html里面的图片
            // 依赖： 本身html-loader 只是识别html里面的图片，需要借助file-loader处理
            {
                test: /\.html$/,
                loader: "html-loader",
            }
        ]
    }

}
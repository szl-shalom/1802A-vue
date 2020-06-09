const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
module.exports = {
    // 7 要求起一个服务  本机ip  端口8080  配置热跟新
    devServer: {
        host: "0.0.0.0",
        port: "8080",
        hot: true,
    },
    // 1、要求入口配置  src/index.js
    entry: "./src/index.js",
    // 2、要求 出口文件  build/main.js
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
                // 3、要求配置css和 scss 打包
                test: /\.(css|sass|scss)$/,
                loader: "style-loader!css-loader!sass-loader",
                // use: ["style-loader", "css-loader", "sass-loader"]
            },
            // 4 要求 打包js  
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // 5 打包图片
            {
                test: /\.(gif|jpg|png)/,
                loader: "file-loader",
            },
            // 6 打包iconfont
            {
                test: /\.(woff2?|svg|eot)/,
                loader: "file-loader"
            }
        ]
    },

    // 8 要求打包的指定模板文件  src/index.html   html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]

}

// 9 每一次打包之前  清空打包的目录
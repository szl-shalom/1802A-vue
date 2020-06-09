const {
    resolve
} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 模式  
    // 开发 "development"   
    // 生产 "production"     压缩代码     默认
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    /**
     * @module 模块 @type { Object }
     * @rules 规则  @type { Array }
     * @desc rules 是一个数组类型  数组里面包对象  每一个对象就是一个规则
     * 
     * 
     * 
     */
    // 模块
    module: {
        /**
         *  @test 是一个正则表达式  @type { RegExp }
         *  @desc 匹配符合当前规则的模块
         *  @loader 处理当前模块的loader
         */
        // 规则
        rules: [{
                // 正则匹配模块 
                test: /\.jpg$/,
                use: [{
                    // 使用file-loader处理图片
                    loader: "file-loader",
                    // 配置
                    options: {
                        // 生成文件的名称
                        name: "[name].[ext]",
                        // 生成文件的路径
                        outputPath: "images/"
                    }
                }]
            },
            {
                test: /\.(c|sa|sc)ss$/,
                // 注意： 注意引入的顺序
                // NO.1、style-loader 
                // NO.2、css-loader
                // NO.3、sass-loader 

                loader: "style-loader!css-loader!sass-loader", //简写
                // use: ["style-loader", "css-loader", "sass-loader"],//简写
                // 标准写法
                // use: [{
                //     // 将css插入style里面
                //     loader: "style-loader"
                // }, {
                //     // 提取css里面的import内容
                //     loader: "css-loader"
                // }, {
                //     loader: "sass-loader"
                // }]
            },
        ]
    },
    // 开发服务器
    devServer: {
        // 设置ip 
        // 默认值 是locahost
        // 设置 0.0.0.0  可以使用任意ip 访问
        // 设置 localhost ||  127.0.0.1 本地ip
        // 通过网络ip 想要访问  
        // 在终端 ipconfig  看一下你自己的ip  
        host: "0.0.0.0",
        // 配置端口号
        port: 3000,
        // 热跟新
        hot: true,
    }
}
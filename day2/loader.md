# 1、 webpack-loader 

``` javascript
    module.exports = {
        module: {
            rules: [
                // 处理图片
                // 类型： jpg  png  gif  webp jpeg
                // loader : file-loade 处理
                // 1、安装  npm i file-loader -D
                // 2、配置对象  
                {
                    test: /\.(jpe?g|png|gif|webp)/,
                    // loader:"file-loader",// 简写
                    use: [{
                        // 处理的loader
                        loader: "file-loader",
                        // 配置
                        options: {
                            // 文件名称
                            name: "[name].[ext]",
                            // 文件路径
                            outputPath: "images/"
                        }
                    }]
                },
                // 处理css| sass| scss 
                // 安装 npm i style-loader css-loader sass-loader node-sass -D

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
        }
    }
```

# webpack-dev-server

``` javascript
module.exports = {
    devServer: {
        // 设置 0.0.0.0  可以使用任意ip 访问
        // 设置 localhost ||  127.0.0.1 本地ip
        host: "0.0.0.0",
        // 配置端口号
        port: 3000,
        // 热跟新
        hot: true,
    }
}
```

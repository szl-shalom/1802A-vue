# 1、loader 
## 1-1 处理图片
- 安装 npm i file-loader -D 
- 配置
```javascript
    ({
        test:/\.(jpg|png|gif|webp)$/,
        use:[{
            loader:"file-loader",
            options:{
                name:"[name].[ext]",
                outputPath:"images/"
            }
        }]
    })
```

## 1-2 处理html里面的图片
- 安装 npm i html-loader -D
- 注意：html-loader需要和file-loader配合使用
- 因为html-loader本身是做不到打包图片的，只是识别图片
- 配置
```javascript
    ({
        test:/.html$/,
        loader:"html-loader"
    })
```


## 1-3 处理js文件
- 推荐大家去官网看
- 安装 npm i babel-loader @babel/core @babel/preset-env -D
- 配置
```javascript
    ({
        test:/\.js$/,
        // 排除一个目录
        exclude:/node_modules/,
        use:[{
            loader:"babel-loader",
            options:{
                presets:["@babel/preset-env"]
            }
        }]
    })
```

## 1-4 处理icon图标
- 安装  npm i file-loader -D
- 配置
```javascript
    ({
        test:/\.(eot|svg|ttf|woff2?)$/,
        use:[{
            loader:"file-loader",
            options:{
               name:"[name].[ext]",
               outputPath:"fonts/"
            }
        }]
    })
```

## 1-5 处理css | scss 文件

- 安装  npm i style-loader css-loader sass-loader node-sass -D
- 注意：使用loader打包的顺序  1、style-loader 2 css-laoder 3 sass-loader
- 配置
```javascript
    ({
        test:/\.(css|sass|scss)$/,
        loader:"style-loader!css-loader!sass-loader"
    })
```


# 2、plugins

## 2-1 html-webpack-plugin  生成模板文件
- 安装 npm i html-webpack-plugin -D
```javascript
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
        plugins:[
            new HtmlWebpackPlugin({
                template:"模板文件的路径"
            })
        ]
    }
    

```


## 2-2 clean-webpack-plugin 打包前清除打包的目录 output.path
- 安装 npm i clean-webpack-plugin -D
```javascript
    const { CleanWebpackPlugin } = require("clean-webpack-plugin");

    module.exports = {
        plugins:[
            new CleanWebpackPlugin()
        ]
    }
    

```




# 3、 devServer 开发服务器
- npm i webpack-dev-server -D
- 配置
```javascript
    ({
        devServer:{
            host:"0.0.0.0", 
            port:"5000",
            hot:true,
            open:true,
        }
    })
```
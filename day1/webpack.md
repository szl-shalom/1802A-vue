# 1 确定下node没有问题 
```
    <!-- 终端 -->
    node -v
    npm -v
    <!-- 全局安装npm目录 -->
    npm config ls 
```


# 2 安装webpack
- npx 可以执行本地node_modules下bin的命令
```
    <!-- 初始化 -->
    npm init --y
    <!-- 安装 -->
    npm i webpack webpack-cli -D
    <!-- 检测安装成功 -->
    npx webpack -v
```

# 3 打包

```
    <!-- 打包 -->
    npx webpack 入口文件 -o 出口文件

```

# 4 配置
```
    <!-- webpack.json 文件 -->
    scripts:{
        build:"webpack"
    }

    <!-- 在根目录下新建一个文件  webpack.config.js  就是webpack的配置文件-->

    module.exports = {
         // webpack配置对象 
        /**
        *  @param entry  @type { String | Object } 
        *  @desc 这个项目的入口文件 ， 说白了就是打包的文件
        *  */
        entry: "./src/index.js",
        /**
        * @param filename @type { String }  
        * @desc 打包之后生成文件的名字
        * 
        * @param path @type { String }
        * @desc 生成的目录文件夹 
        * @tip 路径必须是绝对路径
        */
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist")
        },
    }
```
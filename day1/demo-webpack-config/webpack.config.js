const path = require("path"); // 引入node核心模块

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
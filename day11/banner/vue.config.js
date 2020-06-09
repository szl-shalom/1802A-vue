const path = require("path");
module.exports = {
    lintOnSave: false,
    // 配置别名
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "@assets": path.resolve(__dirname, "src/assets")
            }
        }
    }
}
const data = require("./mock/data.js");
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            // 监听 获取数据接口
            app.get("/api/list", (req, res) => 
            res.json(data))
        }
    }
}
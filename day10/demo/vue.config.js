const data = require("./mock/data.js");

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            // 监听接口  被访问是 返回数据
            app.get("/api/list", (req, res) => res.json(data))
        }
    }
}
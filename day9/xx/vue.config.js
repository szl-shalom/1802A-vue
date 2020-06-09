module.exports = {
    lintOnSave: false,
    devServer: {
        port: 3000,
        hot: true,
        before(app) {
            app.get("/api/list", (req, res) => res.json([{
                name: "张三"
            }, {
                name: "李四"
            }, {
                name: "王五"
            }, {
                name: "赵柳"
            }]))
        }
    }
}
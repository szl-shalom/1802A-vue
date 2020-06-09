module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json([{
                    title: "item-1",
                    done: false
                }, {
                    title: "item-2",
                    done: false
                }, {
                    title: "item-3",
                    done: true
                }, {
                    title: "item-4",
                    done: true
                }])
            })
        }
    }
}
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json([{
                item: "item-1",
                checked: true
            }, {
                item: "item-2",
                checked: false
            }, {
                item: "item-3",
                checked: true
            }, {
                item: "item-4",
                checked: false
            }, {
                item: "item-5",
                checked: true
            }]))
        }
    }
}
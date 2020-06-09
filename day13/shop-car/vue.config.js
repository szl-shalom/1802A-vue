const Mock = require("mockjs");
const path = require("path");
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(Mock.mock({
                    "list|6-10": [{
                        "url": "@image(200x100)",
                        "title": "@ctitle",
                        "price|100-500": 2,
                        "count|1-5": 55
                    }]
                }))
            })
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        }
    }
}
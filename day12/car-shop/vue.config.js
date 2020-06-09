const data = require("./mock/data.js");
const path = require("path");
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data))
        }
    },

    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set("@assets", path.resolve(__dirname, "src/assets"))
    }

}
/*
 * @Descripttion: 
 * @version: 
 * @Author: 张帅虎
 * @Date: 2020-06-05 09:15:06
 * @LastEditors: 张帅虎
 * @LastEditTime: 2020-06-05 19:36:20
 */
const Mock = require("mockjs");
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            // 轮播
            app.get("/api/banner", (req, res) => {
                let {
                    type
                } = req.query;
                if (type === "recommend") {
                    // 推荐轮播
                    res.json(Mock.mock({
                        "banner|2-3": [{
                            "url": "@image(200x100)"
                        }]
                    }))
                } else if (type === "iphone") {
                    res.json(Mock.mock({
                        "banner|4-5": [{
                            "url": "@image(200x100)"
                        }]
                    }))
                }
            })

            // 商品列表
            app.get("/api/list", (req, res) => {
                res.json(Mock.mock({
                    "list|10": [{
                        "title": "@ctitle",
                        "price|100-1000": 1,
                        "url": "@image(50x50)",
                        "id":"@id"
                    }]
                }))
            })
        }
    }
}
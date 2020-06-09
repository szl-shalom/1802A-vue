const Mock = require("mockjs");

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            // 数据接口
            app.get("/api/list", (req, res) => {
                res.json(Mock.mock({
                    "list|4": [{
                        "title": "@ctitle",
                        "children|8-12": [{
                            "url": "@image(100x120)",
                            "title": "@ctitle",
                            "name": "@cname",
                            "desc": "@cparagraph(5)",
                            "mess|0-3": [{
                                "name": "@cname",
                                "content": "@csentence"
                            }, ],
                            "id": "@id"
                        }]
                    }]
                }))
            })

            // 登录
            app.post("/api/user/login", (req, res) => {
                let str = "";
                req.on("data", chunk => {
                    str += chunk;
                })

                req.on("end", () => {
                    req.body = JSON.parse(str);
                    let {
                        username,
                        password
                    } = req.body;
                    if (username === "admin" && password === "123") {
                        res.json({
                            code: 1,
                            token: username
                        })
                    } else {
                        res.json({
                            code: 0,
                        })
                    }
                })
            })

        }
    }
}
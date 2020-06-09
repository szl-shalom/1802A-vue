const bodyParser = require("body-parser");
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {


            // parse application/x-www-form-urlencoded
            app.use(bodyParser.urlencoded({
                extended: false
            }))
            // parse application/json
            app.use(bodyParser.json())


            app.post("/api/user/login", (req, res) => {
                let {
                    username,
                    password
                } = req.body;
                if (username === "张三" && password === "123") {
                    res.json({
                        code: 1,
                        mess: "登录成功",
                        token: username
                    })
                } else {
                    res.json({
                        code: 0,
                        mess: "登录失败",
                    })
                }
            })
        }
    }
}
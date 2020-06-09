const data = require("./mock/data.js")
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

            // 数据接口
            app.get("/api/list", (req, res) => res.json(data))
            // d根据item_id 返回数据
            app.get("/api/list/item", (req, res) => {
                let {
                    item_id
                } = req.query;
                let result = data.data.find(item => item.item_id === item_id);
                res.json(result)
            })
            // 登录
            app.post("/api/user/login", (req, res) => {
                let { username,password } = req.body;
                if(username==="admin"&&password==="123"){
                    res.json({
                        code:"1",
                        mess:"登录成功"
                    })
                }else{
                    res.json({
                        code:"1",
                        mess:"登录失败"
                    })
                }
            })
        }
    }
}
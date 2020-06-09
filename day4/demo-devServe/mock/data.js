const Mock = require("mockjs");
module.exports = Mock.mock({
    "list|5-10": [{
        "name": "@cname",
        "age|10-30": 1,
        "id":"@id",
        "url":"@image(200x100)",
        "title":"@ctitle"
    }]
})
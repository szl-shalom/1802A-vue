const Mock = require("mockjs");


module.exports = Mock.mock({
    "list|4-6": [{
        "title": "@ctitle",
        "url|+1": Mock.Random.image('150x150',Mock.Random.color(),Mock.Random.ctitle()),
        "price|100-200": 1,
        "id": "@id",
        "checked":true
    }]
})
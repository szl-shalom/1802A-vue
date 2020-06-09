# 事件中心
```javascript
// 1、入口文件 main.js
Vue.prototype.$bus = new Vue();
// 2、注册事件
this.$bus.$on("事件名称",回调函数)

// 3、触发事件
this.$bus.$emit("事件名称",参数1,参数2....)
```
// 引入vue文件
import Vue from 'vue'
// 引入App组件   根组件
import App from './App.vue'
// 
Vue.config.productionTip = false



// 创建vue的实例
new Vue({
  render: h => h(App),
}).$mount('#app')  //挂载的节点是 app根节点

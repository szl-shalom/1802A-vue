import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)


// 路由注册表
const routes = [{
  // 匹配的路径
  path: "/",
  // 重定向
  redirect: "/index"
}, {
  path: "/my",
  component: () => import("@/views/My")
}, {
  path: "/index",
  component: () => import("@/views/Index")
}, {
  path: "*",
  component: () => import("@/views/404")
}]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
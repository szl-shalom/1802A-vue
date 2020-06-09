import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/index"
}, {
  path: "/about",
  name: "About",
  component: () => import("@/views/About.vue")
}, {
  path: "/banner",
  name: "Banner",
  component: () => import("@/views/Banner.vue")
}, {
  path: "/home",
  name: "Home",
  component: () => import("@/views/Home.vue")
}, {
  path: "/index",
  name: "Index",
  component: () => import("@/views/Index.vue"),
  // 二级路由
  children: [{
    path: "/index",
    redirect: "/index/recommend"
  }, {
    path: "/index/recommend",
    name: "Recommend",
    component: () => import("@/views/Recommend")
  }, {
    path: "/index/society",
    name: "Society",
    component: () => import("@/views/Society")
  }]
}, {
  path: "/detail",
  name: "Detail",
  component: () => import("@/views/Detail")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
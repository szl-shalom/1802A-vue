import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home,
    // 导航守卫
    beforeEnter: (to, from, next) => {
      // ...
      // to 要去的路由
      // from 离开的路由
      console.log(to)
      console.log(from)
      if (from.path === "/about") {
        next()
      }
      // localStorage.getItem("user") ? next() : alert("没有登录")
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: "/",
    redirect: "/home"
  }, {
    path: "*",
    component: () => import("@/views/404")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
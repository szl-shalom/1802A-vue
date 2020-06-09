import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import( /* webpackChunkName: "about" */ '../views/Car.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import( /* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.path === "/car") {
  //   localStorage.getItem("token") ? next() : next("/home")
  // } else {
    next();
  // }

})


export default router
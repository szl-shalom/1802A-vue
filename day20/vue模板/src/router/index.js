import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/List',
    name: 'List',
    component: () => import('@/views/List.vue')
  }, {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }, {
    path: '/car',
    name: 'Car',
    component: () => import('@/views/Car.vue')
  }, {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === "/home") {
    localStorage.getItem("token") ? next() :next(false)
  } else {
    next();
  }
})
export default router
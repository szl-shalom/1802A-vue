import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  }, {
    path: '/list',
    name: 'List',
    component: () => import('@/views/List.vue')
  }, {
    path: '/car',
    name: 'Car',
    component: () => import('@/views/Car.vue')
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }, {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  }, {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
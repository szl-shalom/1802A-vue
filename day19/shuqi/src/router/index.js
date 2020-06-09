import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }, {
    path: '/read',
    name: 'Read',
    component: () => import('../views/Read.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
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


router.beforeEach((to, from, next) => {
  if(to.path==="/read"){
      localStorage.getItem("token") ? next() : next("/home")
  }else{
    next();
  }
})
export default router
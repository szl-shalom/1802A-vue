import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home")
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/views/Index"),
    children: [{
        path: "/index",
        redirect: "/index/go"
      }, {
        path: "/index/wheretogo",
        component: () => import("@/views/WhereToGo")
      },
      {
        path: "/index/go",
        component: () => import("@/views/Go"),
        children: [{
            path: "/index/go",
            redirect: "/index/go/gotohandan"
          }, {
            path: "/index/go/gotohandan",
            component: () => import("@/views/GoToHanDan")
          },
          {
            path: "/index/go/gotodongbei",
            component: () => import("@/views/GotoDongbei")
          }
        ]
      }
    ]
  },
  {
    path: "/trip",
    name: "Trip",
    component: () => import("@/views/Trip")
  },
  {
    path:"*",
    component:()=>import("@/views/404")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 路由拦截  关于  行程 页面  必须登录
  if ((to.path === "/about" || to.path === "/trip")) {
    localStorage.getItem("token") ? next() : next("/home")
  } else {
    next();
  }
})

export default router
# 路由 
- 注册路由注册表

``` javascript
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
    },{
        // 404页面
        path:"*"
    }]
```

* 使用插件

``` javascript
    Vue.use(VueRouter)
```

* 实例化

``` javascript
    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
```


# 查询参数 || 动态参数
```
    ?username=张三

    $route.query

    路由注册表 
    path:"/about/:id"

    $route.params
```

# 路由守卫
```
    beforeEnter:进入路由之前 执行 

```
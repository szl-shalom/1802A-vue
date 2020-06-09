<template>
    <div>
        <!-- 切换三级路由 -->
        <div>
            <router-link to="/index/go/gotohandan">去邯郸</router-link>
            <router-link to="/index/go/gotodongbei">去东北</router-link>
        </div>
        <!-- 三级路由出口 -->
        <router-view></router-view>
    </div>
</template>
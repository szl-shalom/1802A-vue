<template>
    <div>
        <!-- 二级路由切换 -->
        <div>
            <router-link to="/index/wheretogo">去哪玩？</router-link>
            <router-link to="/index/go">出发</router-link>
        </div>
        <router-view></router-view>
    </div>  
</template>
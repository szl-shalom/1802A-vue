<template>
    <div id="app">
        <header class="header">
            <span @click="goBack">&lt;</span>
            <span>今日头条</span>
            <span>菜单</span>
        </header>
        <main class="main">
            <!-- 一级路由出口 -->
            <router-view></router-view>
        </main>
        <footer class="footer">
            <router-link tag="b" to="/index">首页</router-link>
            <router-link tag="b" to="/banner">轮播</router-link>
            <router-link tag="b" to="/about">关于</router-link>
            <router-link tag="b" to="/home">我的</router-link>
        </footer>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            console.log(1);
            this.$router.back();
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .main {
        flex-grow: 1;
        overflow: auto;
    }

    .footer,
    .header {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: skyblue;
        color: white;
    }
}
// 高亮类名
.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>

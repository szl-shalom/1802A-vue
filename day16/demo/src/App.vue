<template>
    <div id="app">
        <!-- 一级路由出口 -->
        <main class="main">
            <router-view />
        </main>

        <!-- 一级路由 -->
        <footer class="footer">
            <router-link to="/index" tag="b">首页</router-link>
            <router-link to="/about" tag="b">关于</router-link>
            <router-link to="/trip" tag="b">行程</router-link>
            <router-link to="/home" tag="b">我的</router-link>
        </footer>
    </div>
</template>

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
    .footer {
        height: 46px;
        background: skyblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .main {
        flex: 1;
    }
}

.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>

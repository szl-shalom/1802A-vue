<template>
    <div id="app">
        <!-- 路由出口 -->
        <main class="main">
            <router-view></router-view>
        </main>
        <!-- 跳转路由 -->
        <footer class="footer">
            <router-link to="/index">Index</router-link>
            <router-link to="/my">My</router-link>
        </footer>
    </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    list-style: none;
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
}
a {
    text-decoration: none;
    color: #000;
}

.footer {
    height: 46px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.main {
    flex-grow: 1;
}

/* 高亮类名 */
.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>

<template>
    <div id="app">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/index" tag="b">首页</router-link>
            <router-link to="/list" tag="b">分类</router-link>
            <router-link to="/car" tag="b">购物车
              <AllCount />
            </router-link>
            <router-link to="/home" tag="b">我的</router-link>
        </footer>
    </div>
</template>

<script>
import AllCount from "@/components/AllCount";
export default {
    components: {
        AllCount
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
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
    display: flex;
    flex-direction: column;
    footer {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    main {
        flex: 1;
        overflow: auto;
    }
}

.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>

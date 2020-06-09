<template>
    <div id="app">
        <header class="header">
            <i class="iconfont icon-fanhui"></i>
            购物车
            <i class="iconfont icon-icon-" @click="flag=!flag"></i>
        </header>
        <main class="main">
            <List :list="list" :flag="flag" />
        </main>
        <footer class="footer">总价 {{ allPrice }}</footer>
    </div>
</template>

<script>
import Axios from "axios";
import List from "@/components/List";
export default {
    created() {
        Axios.get("/api/list").then(res => {
            this.list = res.data.list;
            console.log(this.list);
        });

        this.$bus.$on("changeCount", (index, count) => {
            this.list[index].count = count;
        });
    },
    data() {
        return {
            list: [],
            flag: true
        };
    },
    components: {
        List
    },
    computed: {
        allPrice() {
            return this.list.reduce((p, n) => p + n.price * n.count, 0);
        }
    }
};
</script>

<style lang="scss">
@import "./assets/fonts/iconfont.css";
// @import url("@/assets/fonts/iconfont.css");
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
    .header {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: skyblue;
    }
    .footer {
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: tomato;
    }
    .main {
        flex: 1;
        overflow: auto;
    }
}
</style>

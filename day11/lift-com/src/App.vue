<template>
    <div id="app">
        <div class="active">
            <keep-alive>
                <List v-if="flag" />
            </keep-alive>
            <button @click="flag=!flag">切换</button>
        </div>
    </div>
</template>

<script>
import List from "./components/List";
export default {
    components: {
        List
    },
    data() {
        return {
            num: 1,
            flag: true
        };
    }
    // // 实例初始化之前  执行
    // beforeCreate() {
    //     console.log("beforeCreate执行了");
    //     console.log(this.num);
    //     let app = document.querySelector(".active");
    //     console.log(app);
    // },
    // // 初始化之后  数据准备就绪
    // // 一般情况 发起 ajax
    // created() {
    //     console.log("created执行了");
    //     console.log(this.num);
    //     let app = document.querySelector(".active");
    //     console.log(app);
    // },
    // // 挂载之前  render之前
    // beforeMount() {
    //     console.log("beforeMount执行了");
    //     let app = document.querySelector(".active");
    //     console.log(app);
    // },
    // // 挂载之后 render之后
    // // dom操作
    // mounted() {
    //     console.log("mounted执行了");
    //     let app = document.querySelector(".active");
    //     console.log(app);
    // }
    //
    // 监听数据改变之前触发  重新渲染前
    // beforeUpdate() {
    //     console.log("beforeUpdate执行了");
    // },
    // // 监听数据改变之后触发  重新渲染之后
    // updated() {
    //     console.log("updated执行了");
    // },

    // beforeDestroy() {
    //     console.log("beforeDestroy执行了");
    // },
    // destroyed() {
    //     console.log("destroyed执行了");
    // }
};
</script>

<style>
</style>

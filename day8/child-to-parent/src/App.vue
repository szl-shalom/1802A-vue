<template>
    <div id="app">
        <!-- 3、使用 -->
        <!--  1、绑定自定义事件fn -->
        <Children :num="num" @fn="num++"></Children>
    </div>
</template>

<script>
// 1、引入
import Children from "./components/children";
export default {
    name: "App",
    components: {
        // 2、注册
        Children
    },
    data() {
        return {
            num: 100
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

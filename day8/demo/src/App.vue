// Vue的单文件组件  
// template + script  + style


// 写html + vue指令
<template>
    <div id="app">
        123123123
        <ul>
            <li v-for="(item,index) in 10" :key="index">{{ item }}</li>
        </ul>

        <h1>{{ num }}</h1>

        <!-- 3、使用组件 -->
        <my-first-con></my-first-con>
    </div>
</template>


// 写JS
<script>
// 其实呢 也是vue的一个实例
// 之前说过 vue的每一个组件 都是vue的一个实例
// 1、引入组件
import MyFirstCon from "./components/MyFirstCon"
export default {
    // 在组件内部
    // data属性必须是一个函数
    data() {
        return {
            num: 1
        };
    },
    components:{
      // 2、注册组件
        MyFirstCon,
    }
};
</script>


// 写css
<style lang="scss">
html {
    width: 100%;
    height: 100%;
    body {
        width: 100%;
        height: 100%;
        background: red;
    }
}
</style>

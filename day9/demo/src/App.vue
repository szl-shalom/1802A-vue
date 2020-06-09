<template>
    <div id="app">
        <!-- // 3、使用children组件 -->
        <Children @qwe="add" />
    </div>
</template>

<script>
// 1、引入children组件
import Children from "./components/Children";

export default {
    // 2、注册children组件
    components: {
        Children
    },
    data() {
        return {
            num: 10
        };
    },
    methods: {
        add(val){
            console.log(val)
        }
    },
};
</script>

<style>
</style>

// 1、引入children组件
// 2、注册children组件
// 3、使用children组件
// 4、使用自定义属性给children子组件传递数据
// 5、在children子组件当中使用props接受自定义属性
<template>
    <div>
        <div>哈哈 我是children组件</div>
        <div>123123123123</div>
        {{ num }}
        <button @click="add(123)">点我+1</button>
    </div>
</template>

<script>
export default {
    props: {
        num: {
            type: Number, //类型检查
            default: 100 //设置默认值
            // required:true ,//是否是必须传递的参数
        }
    },
    methods: {
        add(val) {
            // 6、触发一下自定义事件
            this.$emit("qwe", val);
        }
    }
};
</script>
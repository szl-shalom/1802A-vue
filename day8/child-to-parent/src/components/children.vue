<template>
    <div>
        这是我的第二个单文件组件
        {{ num }}
        <button @click="add">点我+1</button>
    </div>
</template>

<script>
export default {
    props: ["num"],
    methods: {
        add(){
            // 2、触发自定义事件
            this.$emit("fn")
        }
    },
};
</script>

<style lang="">
</style>
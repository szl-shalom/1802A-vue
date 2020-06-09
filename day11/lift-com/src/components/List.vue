<template>
    <div>12312312</div>
</template>

<script>
export default {
    activated() {
        console.log("我被使用了");
    },
    deactivated() {
        console.log("我不被使用了");
    }

    // beforeDestroy() {
    //     console.log("组件准备销毁了");
    // },
    // destroyed() {
    //     console.log("组件销毁完毕");
    // }
};
</script>

<style>
</style>
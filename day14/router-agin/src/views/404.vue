<template>
    <div>
        {{ $route.path }}页面找不到！！！！！</div>
</template>

<script>
export default {
    created() {
        // 当前路由信息
        console.log(this.$route)
    }
};
</script>
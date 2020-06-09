<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
export default {
    created() {
        // 当前路由信息
        console.log(this.$route);
        // 所有路由
        console.log(this.$router);
    }
};
</script>

<template>
    <dl class="list-item" @click="gotoDetail">
        <dt>
            <img :src="item.url" alt />
        </dt>
        <dd>{{ item.title }}</dd>
    </dl>
</template>


<script>
export default {
    props: {
        item: Object
    },
    methods: {
        gotoDetail() {
            // 保存数据
            this.$store.state.detailObj = this.item;
            // 跳转路由
            this.$router.push("/detail");
        }
    }
};
</script>

<style lang="scss">
.list-item {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
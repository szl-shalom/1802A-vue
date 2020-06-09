<template>
    <div @click="gotoDetail">
        <dl class="item">
            <dt>{{ item.title }}</dt>
            <dd>
                <span v-if="item.label==='置顶'">置顶</span>
                <span>{{ item.media_name }}</span>
                <span>{{ item.comment_count }}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        gotoDetail(){
            this.$router.push(`/detail?item_id=${this.item.item_id}`)
        }
    },
};
</script>
<style lang="scss">
.item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}
</style>
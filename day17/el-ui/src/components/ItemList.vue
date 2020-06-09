<template>
    <div class="item-list" :class="{active:flag}" @click="changeInd">{{ item.categoryName }}</div>
</template>

<script>
export default {
    props: {
        item: Object,
        flag: Boolean,
        index: Number
    },
    methods: {
        changeInd() {
            this.$bus.$emit("changeInd",this.index);
        }
    }
};
</script>

<style lang="css">
.item-list {
    line-height: 40px;
}
.active {
    color: red;
}
</style>
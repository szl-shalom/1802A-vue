<template>
    <span :class="{active:isActive}" 
    @click="$emit('changeInd',index)"
    >{{ title }}</span>
</template>

<script>
export default {
    props: {
        title: String,
        isActive: Boolean,
        index: Number
    }
};
</script>

<style scoped>
span {
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
}
.active {
    color: red;
}
</style>
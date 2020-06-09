<template>
    <div>
        孙子
        <button @click="add">点我+1</button>
    </div>
</template>


<script>
export default {
    methods: {
        add() {
            this.$bus.$emit("add", 1, 2, 3);
        }
    }
};
</script>
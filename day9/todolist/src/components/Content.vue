<template>
    <div>
        <h1>
            <span>{{ title }}</span>
            <b>{{ list.length }}</b>
        </h1>
        <ul>
            <li v-for="item in list" :key="item.id">
                <input type="checkbox" :checked="item.isChecked" @click="item.isChecked=!item.isChecked"/>
                <span>{{ item.title }}</span>
                <b @click="remove(item.id)">X</b>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["list", "title"],
    methods: {
        remove(id) {
            // 触发自定义事件del
            this.$emit("del", id);
        }
    }
};
</script>


<style lang="css">
b {
    float: right;
}
</style>
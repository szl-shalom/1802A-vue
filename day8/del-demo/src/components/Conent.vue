<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{ item.name }}----{{ item.age }}
                <button @click="del(index)">点我删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["list"],
    methods: {
        del(index) {
            // 触发自定义事件del  
            // 注意：第一个参数是自定义的名称，从第二个参数起 是实参
            this.$emit("del", index);
        }
    }
};
</script>

<style>
</style>
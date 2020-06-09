<template>
    <div id="app">
        <!-- input组件 -->
        <Add @add="add" />
        <!-- 正在进行 -->
        <Content :list="process" :title="'正在进行'" @del="del" />
        <!-- 已经完成 -->
        <Content :list="todos" title="已经完成" @del="del" />
    </div>
</template>

<script>
import Axios from "axios";
import Content from "./components/Content";
import Add from "./components/Add";
export default {
    // 数据准备就绪  就执行
    created() {
        Axios.get("/api/list").then(res => {
            // 修改数据
            this.list = res.data;
        });
    },
    data() {
        return {
            // 存储数据
            list: []
        };
    },
    computed: {
        // 使用计算属性  获取对应的数据
        todos() {
            return this.list.filter(item => item.isChecked);
        },
        process() {
            return this.list.filter(item => !item.isChecked);
        }
    },
    components: {
        // 注册组件
        Content,
        Add
    },
    methods: {
        add(obj) {
            this.list.push(obj);
        },
        del(id) {
            // 根据id找下标 
            let index = this.list.findIndex(item => +item.id === +id);
            // 删除
            this.list.splice(index, 1);
        }
    }
};
</script>

<style>
#app {
    width: 500px;
    margin: auto;
}
</style>
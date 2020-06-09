<template>
    <div id="app">
        <Content :list="list" @del="del" />
    </div>
</template>


<script>
import Content from "./components/Conent";

export default {
    name: "App",
    components: {
        Content
    },
    data() {
        return {
            list: [
                {
                    name: "张三",
                    age: 18
                },
                {
                    name: "李四",
                    age: 22
                },
                {
                    name: "王五",
                    age: 30
                },
                {
                    name: "赵柳",
                    age: 12
                }
            ]
        };
    },
    methods: {
        del(index) {
            this.list.splice(index,1)
        }
    }
};
</script>

<style>
</style>

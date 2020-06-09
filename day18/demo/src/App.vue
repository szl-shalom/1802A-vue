<template>
    <div id="app">
        <input type="text" placeholder="请输入标题" v-model="mess" />
        状态
        <input type="checkbox" v-model="status" />
        <button @click="submit">提交</button>

        <ul>
            <li v-for="(item,index) in finish" :key="index">标题：{{ item.title }}</li>
        </ul>

        <ul>
            <li v-for="(item,index) in todo" :key="index">标题：{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
    created() {
        this.getData();
    },
    computed: {
        ...mapState(["todo"]),
        ...mapGetters(["finish"])
    },
    methods: {
        ...mapMutations(["add"]),
        ...mapActions(["getData"]),
        submit() {
            let obj = {
                title: this.mess,
                done: this.status
            };

            this.add(obj);
        }
    },
    data() {
        return {
            mess: "",
            status: false
        };
    }
};
</script>


<style>
</style>

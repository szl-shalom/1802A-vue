<template>
    <div id="app">
        <input type="text" v-model="mess" @keydown.13="add" />
        <h1>所有数据</h1>
        <ul>
            <li v-for="(item,index) in todos" :key="index">{{ item.item }}----{{item.checked}}</li>
        </ul>
        <h1>已经完成数据</h1>
        <ul>
            <li v-for="(item,index) in finish" :key="index">{{ item.item }}----{{item.checked}}</li>
        </ul>

        <h1>未完成数据</h1>
        <ul>
            <li v-for="(item,index) in process" :key="index">{{ item.item }}----{{item.checked}}</li>
        </ul>
    </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    created() {
      this.getData();
    },
    computed: {
        ...mapState(["todos"]),
        ...mapGetters(["finish", "process"])
    },
    data() {
        return {
            mess: ""
        };
    },
    methods: {
        ...mapMutations(["addTodos"]),
        ...mapActions(["getData"]),
        add() {
            this.addTodos({
                item: this.mess,
                checked: Math.random() > 0.5 ? true : false
            });

            this.mess = "";
        }
    }
};
</script>

<style>
</style>

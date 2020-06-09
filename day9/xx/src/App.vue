<template>
    <div id="app">
        <div>
            <span
                v-for="(item,index) in list"
                :key="index"
                :class="{active:index === ind}"
                @click="ind=index"
            >{{ item.name }}</span>
        </div>

        <ul>
            <li v-for="(item,index) in list[ind].children" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    data() {
        return {
            list: [
                {
                    name: "水果",
                    children: ["苹果", "香蕉"]
                },
                {
                    name: "蔬菜",
                    children: ["黄瓜", "土豆"]
                }
            ],
            ind: 1
        };
    },
    created() {
        Axios.get("/api/list").then(res => {
            console.log(res.data);
        });
    }
};
</script>

<style>
.active {
    color: red;
}
span {
    padding: 20px;
}
</style>

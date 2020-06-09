<template>
    <el-container>
        <el-header>首页</el-header>
        <el-container>
            <el-aside width="120px">
                <ItemList
                    v-for="(item,index) in list"
                    :key="index"
                    :item="item"
                    :flag="ind===index"
                    :index="index"
                />
            </el-aside>
            <el-main>
                <template v-if="list[ind]">
                    <ItemSpu v-for="(item,index) in list[ind].spuList" :key="index" 
                        :item="item"
                    /> 
                </template>
            </el-main>
        </el-container>
        <el-footer>
            <router-link to="/index">首页</router-link>
            <router-link to="/car">购物车</router-link>
            <router-link to="/home">我的</router-link>
        </el-footer>
    </el-container>
</template>

<script>
import Axios from "axios";
import ItemList from "@/components/ItemList";
import ItemSpu from "@/components/ItemSpu";
export default {
    created() {
        Axios.get("/api/list").then(res => {
            console.log(res);
            this.list = res.data;
        });

        // 注册一个事件
        this.$bus.$on("changeInd", index => {
            this.ind = index;
        });
    },
    data() {
        return {
            list: [],
            ind: 2 //高亮下表
        };
    },
    components: {
        ItemList,
        ItemSpu
    }
};
</script>
<template>
    <div>
        <!-- 轮播 -->
        <Banner />
        <!-- 商品列表 -->
        <div class="list">
            <ListItem v-for="(item,index) in list" :key="index" :item="item" />
        </div>

        <!-- 弹框 -->
        <Dialog v-if="isDialogShow" @changeIsDialogShow="isDialogShow=false" />
    </div>
</template>

<script>
import Dialog from "@/components/Dialog";
import Banner from "@/components/Banner";
import ListItem from "@/components/ListItem";
import Axios from "axios";
export default {
    components: {
        Dialog,
        Banner,
        ListItem
    },
    data() {
        return {
            isDialogShow: false,
            // 商品列表数据
            list: []
        };
    },
    created() {
        Axios.get("/api/list").then(res => {
            console.log(res);
            this.list = res.data.list;
        });
    }
};
</script>
<style lang="scss">
    .list{
        display: flex;
        flex-wrap: wrap;
    }
</style>
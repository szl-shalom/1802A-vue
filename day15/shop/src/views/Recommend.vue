<template>
    <div class="recommend">
        <Item v-for="(item,index) in list" :key="index" :item="item"></Item>
    </div>
</template>

<script>
import Axios from "axios";
import Item from "@/components/Item";
export default {
    created() {
        Axios.get("/api/list").then(res => {
            this.list = res.data.data;
            console.log(this.list)
        });
    },
    components: {
        Item
    },
    data() {
        return {
            list: []
        };
    }

};
</script>


<style lang="scss">
    .recommend{
        overflow: auto;
        height: 100%;
    }
</style>
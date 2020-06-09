<template>
    <div>
        <h4>{{ obj.title }}</h4>
        <img :src="obj.article_url" alt="">
        来源: <b>{{ obj.media_name }}</b>
        <img :src="obj.url" alt="">
    </div>
</template>

<script>
import Axios from "axios";
export default {
    created() {
        let { item_id } = this.$route.query;
        Axios.get(`/api/list/item?item_id=${item_id}`).then(res => {
            this.obj = res.data;
        });
    },
    data() {
        return {
            obj: {}
        };
    }
};
</script>
<style lang="scss">
    img{
        width:100px
    }
</style>
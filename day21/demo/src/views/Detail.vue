<template>
    <div>
        <img :src="detailObj.url" alt />
        <p>{{ detailObj.title }}</p>
        <p>{{ detailObj.price }}</p>
        <b @click="add">加入购物车</b>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["detailObj", "carList"])
    },
    methods: {
        add() {
            // 根据id找下标
            let index = this.carList.findIndex(
                item => item.id === this.detailObj.id
            );
            // 判断下表是否等于-1 
            if (index === -1) {
                // 数据不存在  推入新数据  数量为1
                this.$store.state.carList.push({
                    ...this.detailObj,
                    count: 1
                });
            } else {
                // 数据存在  数量++
                this.$store.state.carList[index].count++;
            }
        }
    }
};
</script>
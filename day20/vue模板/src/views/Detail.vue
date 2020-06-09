<template>
    <div>
        <p>商品名称 {{ $route.query.title }}</p>
        <p>商品单价 {{ $route.query.price }}</p>
        <button @click="addCar">加入购物车</button>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["carList"])
    },
    methods: {
        addCar() {
            let index = this.carList.findIndex(
                item => item.id === this.$route.query.id
            );
            if (index === -1) {
                this.$store.state.carList.push({
                    price: this.$route.query.price,
                    id: this.$route.query.id,
                    title: this.$route.query.title,
                    count:1
                })
            }else{
                this.$store.state.carList[index].count++;
            }
        }
    }
};
</script>
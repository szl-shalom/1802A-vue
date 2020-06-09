<template>
    <dl>
        <dt>
            <img :src="item.littleImageUrl" alt />
        </dt>
        <dd>
            {{ item.spuName }}
            <el-button @click="add">加入购物车</el-button>
        </dd>
    </dl>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        add() {
            // 验证是否登录
            // if (!localStorage.getItem("token")) {
            //     this.$router.push("/home")
            //     return;
            // }

            // 1、取值
            let car = JSON.parse(localStorage.getItem("car")) || [];
            console.log(car);
            // 2。数据是否存在  通过id
            console.log(this.item.spuId);
            let index = car.findIndex(item => item.spuId === this.item.spuId);
            // 3、判断index  -1 关系
            if (index === -1) {
                // 数据不存在
                car.push({
                    ...this.item,
                    count: 1
                });
            } else {
                // 数据存在
                car[index].count++;
            }
            // 更新本地
            localStorage.setItem("car", JSON.stringify(car));
        }
    }
};
</script>

<style lang="css" scoped>
dl {
    width: 100%;
}
dt {
}
img {
    width: 100%;
}
</style>
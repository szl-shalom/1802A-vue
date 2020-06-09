<template>
    <el-container>
        <el-header>购物车</el-header>
        <el-container>
            <el-main>
                <ul>
                    <li v-for="(item,index) in car" :key="index">
                        <input type="checkbox" v-model="item.checked" />
                        <img :src="item.littleImageUrl" alt />
                        <span>{{ item.spuName }}</span>
                        <span>{{ item.currentPrice }}</span>-----
                        <div>
                            <button @click="item.count--">-</button>
                            <span>{{ item.count }}</span>
                            <button @click="item.count++">+</button>
                        </div>
                    </li>
                </ul>
                <div>
                    全选
                    <input
                        type="checkbox"
                        :checked="allCheck"
                        @click="allCheck=$event.target.checked"
                    />
                    {{ allPrice }}
                </div>
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
export default {
    data() {
        return {
            car: []
        };
    },
    created() {
        this.car = JSON.parse(localStorage.getItem("car")) || [];
    },
    computed: {
        allPrice() {
            return this.car.reduce(
                (p, n) => (n.checked ? p + n.currentPrice * n.count : p),
                0
            );
        },
        allCheck: {
            get() {
                return this.car.some(item => item.checked);
            },
            set(val) {
                this.car.forEach(item => (item.checked = val));
            }
        }
    },
    updated() {
        localStorage.setItem("car", JSON.stringify(this.car));
    }
};
</script>

<style lang="css">
img {
    width: 100px;
}
li {
    margin: 10px 0;
    display: flex;
}
</style>

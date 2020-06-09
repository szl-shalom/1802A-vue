<template>
    <div class="car">
        <!-- 数据存在 -->
        <div v-if="carList.length">
            <button @click="isDel=!isDel">编辑</button>
            <ul>
                <li v-for="(item,index) in carList" :key="index">
                    <input type="checkbox" v-model="item.checked" />
                    <span>{{ item.title }}</span>
                    <button @click="item.count--">-</button>
                    数量：
                    <span>{{ item.count }}</span>
                    <button @click="item.count++">+</button>
                    单价：
                    <span>{{ item.price }}</span>
                </li>
            </ul>
            <div>
                <input
                    type="checkbox"
                    :checked="someCheck"
                    @click="someCheck=$event.target.checked"
                />
                总价：{{ allPrice }}
                <button :disabled="!someCheck" v-if="isDel">现在结算</button>
                <button v-else @click="del">删除所选</button>
            </div>
        </div>
        <!-- 数据不存在 -->
        <div class="btn" v-else>
            <button v-if="!flag">现在登陆</button>
            <button>现在选购</button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    created() {
        this.flag = localStorage.getItem("token") ? true : false;
    },
    data() {
        return {
            flag: false,
            isDel: true
        };
    },
    computed: {
        ...mapState(["carList"]),
        someCheck: {
            get() {
                return this.carList.some(item => item.checked);
            },
            set(val) {
                console.log(val);
                this.carList.forEach(item => (item.checked = val));
                console.log(this.carList)
            }
        },
        allPrice() {
            return this.carList.reduce(
                (p, n) => (n.checked ? p + n.price * n.count : p),
                0
            );
        }
    },
    methods: {
        del() {
            this.$store.state.carList = this.carList.filter(
                item => !item.checked
            );
        }
    }
};
</script>
<style lang="scss">
.car {
    height: 100%;
    .btn {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>

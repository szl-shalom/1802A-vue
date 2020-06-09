<template>
    <div>
        <main>
            <ul>
                <li v-for="(item,index) in carList" :key="index">
                    标题{{ item.title }}
                    <button @click="$store.state.carList[index].count--"
                        :disabled="$store.state.carList[index].count===1?true:false"
                    >-</button>
                    <span>{{ item.count }}</span>
                    <button @click="$store.state.carList[index].count++">+</button>

                    <b @click="$store.state.carList.splice(index,1)">删除</b>
                </li>
            </ul>
        </main>
        <footer>
            {{ allPrice }}
        </footer>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["carList"]),
        allPrice() {
            return this.carList.reduce((p, n) => p + +n.price * +n.count, 0);
        }   
    }
};
</script>

<style lang="scss">
    button{
        padding:6px 12px
    }
</style>
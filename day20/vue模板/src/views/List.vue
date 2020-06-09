<template>
    <div class="about">
        <main>
            <ul>
                <li
                    v-for="(item,index) in list"
                    :key="index"
                    @click="gotoDetail(item.id,item.title,item.price)"
                >
                    <img :src="item.url" alt />
                    {{ item.title }}
                </li>
            </ul>
        </main>
        <footer>
            <router-link to="/index" tag="b">首页</router-link>
            <router-link to="/list" tag="b">分类</router-link>
            <router-link to="/car" tag="b">购物车{{ allCount ? allCount:"" }}</router-link>
            <router-link to="/home" tag="b">我的</router-link>
        </footer>
    </div>
</template>

<script>
import Axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
    created() {
        if (!this.list.length) {
            this.getData();
        }
    },
    computed: {
        ...mapState(["carList", "list"]),
        allCount() {
            return this.carList.reduce((p, n) => p + +n.count, 0);
        }
    },
    methods: {
        ...mapActions(["getData"]),
        gotoDetail(id, title, price) {
            this.$router.push(`/detail?id=${id}&title=${title}&price=${price}`);
        }
    }
};
</script>
<style lang="scss">
.about {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    main {
        flex: 1;

        ul {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li {
                width: 25%;
                height: 100px;
            }
        }
    }
    footer {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: crimson;
    }
}
</style>

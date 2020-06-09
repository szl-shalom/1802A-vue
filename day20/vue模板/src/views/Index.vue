<template>
    <div class="index">
        <header :class="{active:isActive}">
            <ul>
                <li
                    v-for="(item,index) in tab"
                    :key="index"
                    :class="{active:ind===index}"
                    @click="changeInd(index)"
                >{{ item }}</li>
            </ul>
            <b @click="isActive=!isActive" :class="{active:isActive}">^</b>
        </header>
        <main>
            <div class="banner">
                <swiper :options="opts">
                    <swiper-slide v-for="(item,index) in imgs" :key="index">
                        <img :src="item.url" alt />
                    </swiper-slide>
                </swiper>
            </div>
        </main>
        <footer>
            <router-link to="/index" tag="b">首页</router-link>
            <router-link to="/list" tag="b">分类</router-link>
            <router-link to="/car" tag="b">购物车{{  allCount ? allCount:""}}</router-link>
            <router-link to="/home" tag="b">我的</router-link>
        </footer>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    computed: {
        ...mapState(["carList"]),
         allCount() {
            return this.carList.reduce((p, n) => p + +n.count, 0);
        }
    },
    data() {
        return {
            isActive: false,
            opts: {
                autoplay: true,
                loop: true
            },
            imgs: [],
            tab: ["推荐", "手机", "123", "321", "231231","123", "321", "231231","123", "321", "231231"],
            ind: 0
        };
    },
    created() {
        Axios.get("/api/banner?type=recommend").then(res => {
            this.imgs = res.data.banner;
        });
    },
    components: {
        Swiper,
        SwiperSlide
    },
    methods: {
        changeInd(index) {
            this.ind = index;
            // 发请求
            if (index === 0) {
                Axios.get("/api/banner?type=recommend").then(res => {
                    this.imgs = res.data.banner;
                    console.log(this.imgs)
                });
            } else if (index === 1) {
                Axios.get("/api/banner?type=iphone").then(res => {
                    this.imgs = res.data.banner;
                    console.log(this.imgs)
                });
            }
        }
    },
};
</script>
<style lang="scss">
.index {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    footer {
        height: 46px;
        background: brown;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    main {
        flex-grow: 1;
        overflow: auto;
    }
}

header {
    b {
        display: block;
        line-height: 70px;
        &.active {
            transform: rotate(180deg);
        }
    }
    &.active {
        ul {
            flex-wrap: wrap;
            li {
                border: 1px solid #ccc;
                flex-shrink: 1;
            }
        }
    }
    display: flex;
    ul {
        display: flex;
        flex-grow: 1;
        overflow: auto;
        li {
            padding: 6px;
            flex-shrink: 0;
            &.active {
                color: red;
            }
        }
    }
}
.banner {
    width: 100%;
    height: 100px;
    .swiper-container {
        width: 100%;
        height: 100px;
        border: 1px solid #ccc;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
<template>
    <div id="app">
        <header class="header"></header>
        <main class="main">
            <div class="left">
                <span
                    v-for="(item,index) in list"
                    :key="index"
                    :class="{active:index===ind}"
                    @click="ind=index"
                >{{ item.categoryName }}</span>
            </div>
            <div class="right">
                <template v-if="list[ind]">
                    <dl v-for="(item,index) in list[ind].spuList" :key="index">
                        <dt>
                            <img :src="item.littleImageUrl" alt />
                        </dt>
                        <dd>{{ item.spuName }}</dd>
                    </dl>
                </template>
            </div>
        </main>
        <footer class="footer"></footer>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    data() {
        return {
            // 购物车数据
            list: [],
            ind: 0
        };
    },
    created() {
        Axios.get("/api/list").then(res => {
            this.list = res.data;
            console.log(this.list);
        });
    }
};
</script> 

<style lang="scss">
@import "@/assets/scss/common.scss";
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .header {
        height: 46px;
        background: red;
    }
    .main {
        flex: 1;
        display: flex;
        overflow: auto;
        .left {
            width: 100px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid #ccc;
            span {
                height: 46px;
                font-size: 14px;
                line-height: 46px;
                padding-left: 10px;
                &.active {
                    color: red;
                    border-left: 2px solid red;
                }
            }
        }
        .right {
            flex: 1;
            dl {
                dt {
                    img {
                        width: 150px;
                    }
                }
                dd {
                }
            }
        }
    }
    .footer {
        height: 46px;
        background: tomato;
    }
}
</style>

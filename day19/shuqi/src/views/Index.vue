<template>
    <div class="index">
        <!-- d头部 -->
        <header class="header">
            <router-link to="/home" tag="b">登录</router-link>
            <router-link to="/about" tag="b">我的书架</router-link>
        </header>
        <!-- 轮播 -->
        <!-- 菜单 -->
        <div class="menu">
            <dl>
                <dt>logo</dt>
                <dd>排行</dd>
            </dl>
            <dl>
                <dt>logo</dt>
                <dd>女频</dd>
            </dl>
            <dl>
                <dt>logo</dt>
                <dd>男频</dd>
            </dl>
            <dl>
                <dt>logo</dt>
                <dd>书单</dd>
            </dl>
            <dl>
                <dt>logo</dt>
                <dd>分类</dd>
            </dl>
        </div>
        <!-- 列表 -->
        <ul class="list">
            <li v-for="(item,ind) in list" :key="ind">
                <p>{{ item.title }}</p>
                <div class="list-item">
                    <dl
                        v-for="(item,index) in item.children.slice(0,4)"
                        :key="index"
                        @click="gotoDetail(item.id,ind,index)"
                    >
                        <dt>
                            <img :src="item.url" alt />
                        </dt>
                        <dd>
                            <p>{{ item.title }}</p>
                            <p>{{ item.name }}</p>
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    computed: {
        ...mapState(["list"])
    },
    methods: {
        ...mapActions(["getData"]),
        // 进入详情页
        gotoDetail(id, ind, index) {
            // 保存一级下表
            this.$store.state.ind = ind;
            // 保存二级下表
            this.$store.state.index = index;
            this.$router.push(`/detail/${id}`);
        }
    },
    created() {
        // 数据不存在 =>获取数据  
        if (this.list.length === 0) {
            this.getData();
        }
    }
};
</script>

<style lang="scss" scoped>
.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    // flex-wrap: wrap;
    .header {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-shrink: 0;
    }
    .menu {
        display: flex;
        justify-content: space-around;
        text-align: center;
        flex-shrink: 0;
        height: 46px;
        dl {
            width: 20%;
        }
    }
    .list {
        // flex: 1;
        // overflow: auto;
        li {
            > p {
                line-height: 46px;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
            .list-item {
                display: flex;
                dl {
                    width: 25%;
                    padding: 5px;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>
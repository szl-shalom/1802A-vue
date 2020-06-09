<template>
    <div class="detail">
        <header>
            <span @click="$router.go(-1)">返回</span>
            <span>书单详情</span>
            <span>菜单</span>
        </header>
        <main>
            <dl class="book">
                <dt>
                    <img :src="obj.url" alt />
                </dt>
                <dd>
                    <h4>{{ obj.title }}</h4>
                    <p>{{ obj.name }}</p>
                    <p>连载654万字</p>
                    <p>已完结</p>
                </dd>
            </dl>
            <div class="menu">
                <span @click="$router.push('/read')">开始阅读</span>
                <span>离线下载</span>
                <span v-if="isExit()">已加入</span>
                <span @click="addBookList" v-else>加入书架</span>
            </div>
            <h4>描述</h4>
            <p>{{ obj.desc }}</p>
            <h4>精彩评论</h4>
            <ul class="mess">
                <li v-for="(item,index) in obj.mess" :key="index">
                    <p>{{ item.name }}</p>
                    <p>{{ item.content }}</p>
                </li>
            </ul>
        </main>
        <footer>
            <input type="text" placeholder="请输入精彩评论" v-model="val" />
            <b @click="addMess">提交</b>
        </footer>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    created() {
        // 获取 ID
        let id = this.$route.params.id;
        // 查找数据相同的 ID
        this.list.map(item => {
            item.children.map(item => {
                if (item.id === id) {
                    this.obj = item;
                }
            });
        });
        console.log(this.obj);
    },
    computed: {
        ...mapState(["list", "ind", "index", "bookList"])
    },
    data() {
        return {
            obj: {},
            val: ""
        };
    },
    methods: {
        // 评论
        addMess() {
            // 必须登录
            let token = localStorage.getItem("token");
            if (!token) {
                alert("请登录");
                this.$router.push("/home");
                return;
            }
            //  通过 一级下表 和二级下表 找到对应 mess
            this.$store.state.list[this.ind].children[this.index].mess.push({
                name: token,
                content: this.val
            });
            this.obj.push({
                name: token,
                content: this.val
            });
            this.val = "";
        },
        addBookList() {
            // 加入我的书架 必须登录
            if (!localStorage.getItem("token")) {
                this.$router.push("/home");
                return;
            }
            this.$store.state.bookList.push(this.obj);
        },
        isExit() {
            // 获取ID
            let id = this.$route.params.id;
            // 判断 Id是否存在  vueX => bookList
            return this.bookList.some(item => item.id === id);
        }
    }
};
</script>

<style lang="scss" scoped>
.detail {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    header {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    main {
        flex-grow: 1;
        overflow: auto;
        align-items: center;
        .book {
            display: flex;
            justify-content: center;
            dd {
                margin-left: 20px;
            }
        }
        .menu {
            display: flex;
            height: 60px;
            justify-content: space-around;
            align-items: center;
        }
        .mess {
            li {
                border-bottom: 1px solid #ccc;
                padding: 10px;
                p {
                    line-height: 26px;
                }
            }
        }
    }
}
</style>
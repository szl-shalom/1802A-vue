<template>
    <div id="app">
        <input type="text" v-model="val" @keyup.enter="add" />
        切换状态
        <input
            type="checkbox"
            @click="changeState($event.target.checked)"
        />

        <List :list="curlist" @openDialog="openDialog" />
        <!-- 遍历 Btn 组件 -->
        <Btn
            v-for="(item,index) in arr"
            :key="index"
            :title="item"
            :isActive="ind===index"
            :index="index"
            @changeInd="change"
        />
        <!-- 弹框 -->
        <Dialog v-show="isShow" @remove="remove" />
    </div>
</template>

<script>
import Axios from "axios";
import List from "./components/List";
import Btn from "./components/Btn";
import Dialog from "./components/dialog";
export default {
    // 当数据准备就绪时候 就执行了
    created() {
        // 发起请求
        Axios.get("/api/list").then(res => {
            // 修改数据
            this.list = res.data.list;
            console.log(this.list);
        });
    },
    components: {
        List,
        Btn,
        Dialog
    },
    data() {
        return {
            // 存储大数据
            list: [],
            arr: ["所有", "已经完成", "正在进行"],
            ind: 0, //高亮下表
            isShow: false, //是否显示弹框，
            id: "", //准备操作的ID
            val: "", //准备添加的数据
            state: false,//切换isChecked状态
        };
    },
    methods: {
        // 修改下表  Tab切换
        change(index) {
            this.ind = index;
        },
        // 打开弹框 
        openDialog(id) {
            //打开弹框
            this.isShow = true;
            // 保存ID
            this.id = id;
        },
        // 删除
        remove() {
            // 找下标
            let index = this.list.findIndex(item => +item.id === +this.id);
            // 删除
            this.list.splice(index, 1);
            // 关闭弹框
            this.isShow = false;
        },
        // 添加数据
        add() {
            // 推入数据
            this.list.push({
                title: this.val,
                id: Math.random()
                    .toString()
                    .slice(2),
                isChecked: false
            });
            // 清空内容
            this.val = "";
        },
        // 修改isChecked状态
        changeState(state) {
            this.list.forEach(item => (item.isChecked = state));
        }
    },
    computed: {
        // 根据下表  获取数据
        curlist() {
            if (this.ind === 0) {
                return this.list;
            } else if (this.ind === 1) {
                return this.list.filter(item => item.isChecked);
            } else {
                return this.list.filter(item => !item.isChecked);
            }
        }
    }
};
</script>

<style>
html,
body,
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

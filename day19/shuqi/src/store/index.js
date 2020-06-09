import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Axios from "axios";

export default new Vuex.Store({
  state: {
    // 准备存储数据
    list: [],
    // 下标
    ind: -1, //一级下表
    index: -1, //二级下表
    // 我的书架
    bookList:[],
  },
  mutations: {},
  actions: {
    getData(context) {
      Axios.get("/api/list").then(result => {
        // 数据成功 修改vuex的数据
        context.state.list = result.data.list;
        console.log(context.state.list)
      })
    }
  },
  modules: {}
})
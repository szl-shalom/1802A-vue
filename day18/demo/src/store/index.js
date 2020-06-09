import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Axios from "axios";
export default new Vuex.Store({
  // 相当于组件的data
  state: {
    num: 1,
    todo: [],
  },
  // 相当于组件methods
  // 第一个参数必须是state
  mutations: {
    add(state, obj) {
      state.todo.push(obj)
    }
  },
  // 发起请求
  // 支持异步
  actions: {
    getData(context) {
      Axios.get("/api/list").then(res => {
        context.state.todo = res.data
      })
    }
  },
  // 相当于组件的computed
  getters: {
    finish(state) {
      return state.todo.filter(item => item.done)
    }
  },

})
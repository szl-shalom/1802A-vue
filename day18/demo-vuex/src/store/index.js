import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Axios from "axios";
export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodos(state, obj) {
      state.todos.push(obj)
    },
    setData(state, arr) {
      state.todos = arr
    }
  },
  actions: {
    getData(context) {
      Axios.get("/api/list").then(res => {
        context.commit("setData", res.data)
      })
    }
  },
  modules: {},
  getters: {
    finish(state) {
      return state.todos.filter(item => item.checked)
    },
    process(state) {
      return state.todos.filter(item => !item.checked)
    }

  }
})
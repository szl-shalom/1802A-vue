/*
 * @Descripttion: 
 * @version: 
 * @Author: 张帅虎
 * @Date: 2020-06-04 19:53:28
 * @LastEditors: 张帅虎
 * @LastEditTime: 2020-06-05 10:33:30
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Axios from "axios";
export default new Vuex.Store({
  state: {
    carList: [],
    list: [],
  },
  mutations: {

  },
  actions: {
    getData(context) {
      Axios.get("/api/list").then(res => {
        context.state.list = res.data.list;
      });
    }
  },
  modules: {

  }
})
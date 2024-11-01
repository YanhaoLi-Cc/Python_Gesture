import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: ""
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    }
  },
  getters: {
    getUserName(state) {
      return state.userName;
    }
  }
});

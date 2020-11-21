import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPosition:'user'
  },
  mutations: {
    updatePosition(state, position){
      state.currentPosition = position;
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPosition:'user',
    msgNum:3
  },
  mutations: {
    // 更新所处位置
    updatePosition(state, position){
      state.currentPosition = position;
    },
    // 更新信息数量
    updateMsgNum(state, position){
      state.msgNum = position;
    }
  },
  getters:{

  },
  actions: {
  },
  modules: {
  }
})

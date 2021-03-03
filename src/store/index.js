import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPosition:'user',
    msgNum:3,
    userId:10001,
    candId:10000,
    comUserId:10000,
    comName:"人事·老王"
  },
  mutations: {
    // 更新所处位置
    updatePosition(state, position){
      state.currentPosition = position;
    },
    // 更新信息数量
    updateMsgNum(state, position){
      state.msgNum = position;
    },
    // 登录后存储用户id
    updateUserId(state, position){
      state.userId = position;
    },
    updateComId(state, position){
      state.comUserId = position;
    },
  },
  getters:{

  },
  actions: {
  },
  modules: {
  }
})

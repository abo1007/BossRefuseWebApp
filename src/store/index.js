import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPosition:'user',
    msgNum:3,
    userId:null,
    candId:10000,
    comUserId:null,
    // 当前用户登录ID
    ID:null,
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
      state.ID = position;
    },
    updateComId(state, position){
      state.comUserId = position;
      state.ID = position;
    },
  },
  getters:{

  },
  actions: {
  },
  modules: {
  }
})

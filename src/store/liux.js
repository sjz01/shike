import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myTitle:"食客",
  },
  mutations: {
    //修改state中的属性值
    // changeMyTitle:(state,payload)=>{
    //   state.myTitle = payload.title;
    // }
    },
  actions: {

  }
})
import Vue from 'vue'
import Vuex from 'vuex'
import lisha from './lisha'
import mingyu from './mingyu'
import liux from './liux'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lisha,mingyu,liux,
    type:[],
    id:[]
  },
  mutations: {

  },
  actions: {

  },
  
})

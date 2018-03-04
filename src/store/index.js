/**
 *组装模块，并导出store仓库到main.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


import actions from './actions.js'
import mutations from './mutations.js'

console.log(mutations.mutations);
export default new Vuex.Store({
  //mutations本身是模块
  modules:{
    mutations
  },
  actions
});

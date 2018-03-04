//3,接收actions提交的函数，去改变状态值
import {GOINDEX,GOINFORMATION} from './type'
import getters from './getters.js'
console.log(getters);

const state = {
  count:0
};

const mutations = {
  [GOINDEX](state){
    state.count=1;
    console.log("mutations");
    console.log(state.count);
  },
  [GOINFORMATION](state){
    state.count=2;
    console.log(state.count);
  }
}

export default {
  state,
  getters,
  mutations
}

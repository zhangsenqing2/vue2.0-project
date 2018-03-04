//2,提交函数给mutations
import * as types from './type'

export default {
  goIndex:({commit})=>{
    console.log("actions");
    commit(types.GOINDEX);
  },
  goInformation:({commit})=>{
    console.log("旅游资讯");
    commit(types.GOINFORMATION);
  }
}

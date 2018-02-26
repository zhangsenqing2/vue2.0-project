import loadingComponent from './loading.vue'

//定义组件
const Loading = {
  //核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
  install:function(Vue){
    Vue.component('Loading',loadingComponent)
  }
};
//导出loading
export default Loading

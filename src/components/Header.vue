<template>
  <header id="header">
    <div class="center">
      <h1 class="logo">瓢城旅行社</h1>
      <nav class="link">
        <h2 class="none">网站导航</h2>
        <ul class="hea_nav">
          <li class="active index">
            <!--<router-link to="/index">首页</router-link>-->
            <a @click="goIndex">首页</a>
          </li>
          <li class="infor">
            <a @click="goInformation">旅游资讯</a>
            <!--<router-link to="/information" >旅游资讯</router-link>-->
          </li>
          <li>
            <router-link to="/ticket">机票订购</router-link>
          </li>
          <li>
            <router-link to="/scenery">风景欣赏</router-link>
          </li>
          <li>
            <router-link to="/about">公司简介</router-link>
          </li>
        </ul>
      </nav>
      <h1 style="">{{count}}</h1>
    </div>
  </header>
</template>

<script>
  //按需加载vuex的两个方法
  import  {mapGetters,mapActions} from 'vuex'
  console.log(mapGetters);

    export default {
      //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
      computed:mapGetters([
        'count'
      ]),
      //mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：
      // methods:mapActions([
      // 'goIndex',
      // 'goInformation'
      // ])
      methods:{
        //...(对象展开运算符),可以合并
        ...mapActions([
          'goIndex',
          'goInformation'
        ]),
        aa(){}
      },
      //生命周期函数，组件更新完毕
      updated(){
        console.log('组件更新完毕');
        if(this.count ==1 ){
          console.log("首页");
          this.$router.push({path:'/index'});//跳到对应的界面，可以代替router-link的to属性实现功能
          document.querySelector(".active").classList.remove("active");
          document.querySelector(".index").classList.add("active");
        }
        if(this.count==2){
          console.log("旅游资讯");
          this.$router.push({path:'/information'});
          document.querySelector(".active").classList.remove("active");
          document.querySelector(".infor").classList.add("active");
        }
      }
    }
</script>

<style scoped>

</style>

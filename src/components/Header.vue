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
    </div>
  </header>
</template>

<script>
    export default {
      methods:{
        goInformation(){
          console.log("旅游资讯");
          //跳到对应的界面，可以代替router-link的to属性实现功能
          this.$router.push({path:'/information'});
          console.log(document.querySelectorAll(".hea_nav li"));
          document.querySelector(".active").classList.remove("active");
          document.querySelector(".infor").classList.add("active");
        },
        goIndex(){
          console.log("首页");
          this.$router.push({path:'/index'});
          document.querySelector(".active").classList.remove("active");
          document.querySelector(".index").classList.add("active");
        }
      }
    }
</script>

<style scoped>

</style>

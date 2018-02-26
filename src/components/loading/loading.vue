<template>
  <div class="loading-box" v-show="flag">
    Loading...
  </div>
</template>

<script>
    export default {
      name: "loading",
      data(){
        return {
          flag:true
        }
      },
      mounted(){
        console.log("模板编译完成");
        setTimeout(()=>{
          this.flag=false
        },1000);
      }
    }
</script>

<style scoped>
  .loading-box{
    color: red;
    font-size: 40px;
    font-family: 微软雅黑;
    text-shadow: 2px 2px 5px #000;
    text-align: center;
  }
</style>

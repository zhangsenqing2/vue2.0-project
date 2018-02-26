<template>
  <div id="search">
    <div class="center"></div>
    <input type="text" class="search" placeholder="请输入旅游景点或城市">
    <button class="button" @click="searchCity">搜索</button>
  </div>
</template>

<script>
    export default {
        name: "search",
        methods:{
          searchCity(){
            //北京，山东，伊春
            let currentCity = document.querySelector(".search").value;
            console.log(currentCity);
            // static文件对外暴露vue-cli内置外部服务器路径
            this.$http.get("http://localhost:8080/static/city.json").then(function (responese) {
              const cityList = responese.data.city;
              console.log(cityList);
              //for of 遍历数组
              for(let cityName of cityList){
                console.log(cityName);
                if(currentCity==cityName.name){
                  alert(cityName.title);
                }
              }
            }).catch(function (error) {
              console.log(error);
            });
          }
        }
    }
</script>

<style scoped>

</style>

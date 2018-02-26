<template>
  <div id="app">
    <!--自定义组件-->
    <Loading></Loading>

    <headerView></headerView>
    <router-view/>
    <footerView></footerView>
  </div>
</template>

<script>
import headerView from './components/Header'
import footerView from './components/Footer'

console.log(headerView);
export default {
  name: 'App',
  components:{
    headerView,
    footerView
  }
}
</script>

<style>
@import "./assets/css/basic.css";
@import "./assets/css/column.css";
@import "./assets/css/style.css";

</style>

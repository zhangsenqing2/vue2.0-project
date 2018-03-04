<template>
  <div id="app">
    <!--自定义组件-->
    <Loading></Loading>

    <headerView></headerView>
    <!--<h1>{{count}}</h1>-->
    <router-view/>
    <footerView></footerView>
  </div>
</template>

<script>

import headerView from './components/Header'
import footerView from './components/Footer'

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

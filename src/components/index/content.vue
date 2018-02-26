<template>
  <div>
    <searchView></searchView>
    <tourView></tourView>
  </div>

</template>

<script>
  import searchView from './search'
  // console.log()
  import tourView from './tour'
    export default {
        name: "index",
        components:{
          searchView,
          tourView
        }

    }
</script>

<style scoped>

</style>

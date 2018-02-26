<template>
  <div>
    <headlineView></headlineView>
    <ContainerView></ContainerView>
  </div>
</template>

<script>
  import headlineView from './headline'
  import ContainerView from './Container'
  export default {
      name: "index",
      components: {
        headlineView,
        ContainerView
      }
  }
</script>

<style scoped>

</style>

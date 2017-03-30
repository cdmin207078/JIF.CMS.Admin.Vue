<template>
  <div id="app">
    <iNav></iNav>
    <router-view></router-view>
    <!--<iContent></iContent>-->
  </div>
</template>

<script>
  import iNav from './views/layout/Nav'
  import iContent from './views/layout/content'

  export default {
    components: {
      iNav,
      iContent
    },
    data() {
      return {

      }
    },
    methods: {
    }
  }

</script>

<style scope>
  body {
    background-color: #F6F6F3;
  }
</style>
<template>
  <div id="app">
    <iNav></iNav>
    <iContent></iContent>
  </div>
</template>

<script>
  import iNav from './views/layout/Nav'
  import iContent from './views/layout/Content'

  export default {
    components: {
      iNav,
      iContent
    },
    data() {

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
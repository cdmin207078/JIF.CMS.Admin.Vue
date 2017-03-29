<template>
  <div id="app">
    <h1>长者: {{ age }}</h1>
    <button @click="mo">续命</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      age: 1
    }
  },
  methods: {
    mo: function() {
      this.age++
      console.log('呵呵大')
    }
  }
}
</script>
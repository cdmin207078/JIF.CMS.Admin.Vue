<template>
  <div id="app">
    <div class="message">Value is: {{ count }}</div>
    <a href="#" @click="increment">Increment</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  }
  
</script>

<style>
  .message {
    color: #f00;
    font-weight: bolder;
    font-size: 36px;
  }
</style>
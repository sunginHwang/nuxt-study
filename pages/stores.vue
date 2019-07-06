<template>
  <h1>storeTest</h1>
  <p>{{text}}</p>
  <button @click="initTest">init Test</button>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  export default {
    name: "stores",
    methods: {
      ...mapActions('test', [
        'initTest'
      ])
    },
  }
</script>

<style scoped>

</style>

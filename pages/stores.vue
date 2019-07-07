<template>
 <div>
   <h1>storeTest</h1>
   <p>{{storeValue}}</p>
   <button @click="initTest('sungin')">initTest</button>
 </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  export default {
    name: "stores",
    computed: {
      ...mapState('test',
        ['text']
      ),
      storeValue(){
        return this.text === '' ?'empty' : this.text;
      }
    },
    methods: {
      ...mapActions('test', [
        'initTest'
      ])
    },
    data() {
      return {
        storeKey: '12'
      }
    },
    created() {
    }
  }
</script>

<style scoped>

</style>

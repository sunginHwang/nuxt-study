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
      ...mapState('dir/depthStore',
        ['depth']
      ),
      storeValue(){
        console.log(this.depth);
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

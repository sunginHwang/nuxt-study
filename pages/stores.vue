<template>
 <div>
   <h1>storeTest</h1>
   <p>{{storeValue}}</p>
   <button @click="initTest('sungin')">initTest</button>
   <button @click="getJsonPlaceHolder">getJsonPlaceHolder</button>

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
        return this.text === '' ?'empty' : this.text;
      }
    },
    methods: {
      ...mapActions('test', [
        'initTest',
        'getJsonPlaceHolder'
      ])
    },
    data() {
      return {
        storeKey: '12'
      }
    },
    created() {
      console.log(this.$store);
    }
  }
</script>

<style scoped>

</style>

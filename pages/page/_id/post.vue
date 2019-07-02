<template>
 <div>
   <p>post {{this.$route.params.id}}</p>
   <nuxt-link :to="goPostUrl">go post {{updateCount}}</nuxt-link>
     <postDetail :content="isDevideZero ? `짝수` : `홀수`"/>
 </div>
</template>

<script>
  import postDetail from '../../../components/post-detail';
  export default {
    name: "post",
    components:{
      postDetail
    },
    validate({params}) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    created() {
      console.log(`post create ${this.$route.params.id}`);
    },
    updated() {
      console.log(`post update. count:${this.updateCount}`)
    },
    computed: {
      goPostUrl() {
        return `/page/${Number(this.$route.params.id )+ 1}/post`;
      },
      isDevideZero(){
        console.log(Number(this.$route.params.id));
        console.log(Number(this.$route.params.id) % 2);
        return Number(this.$route.params.id) % 2 === 0;
      }
    },
    data() {
      return {
        updateCount: 1
      }
    },
  }
</script>

<style scoped>

</style>

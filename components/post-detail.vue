<template>
  <div>
    {{content}}
  </div>
</template>

<script>
  export default {
    name: "post-detail",
    watch: {
      content() {
        console.log('watch content');
      },
    },
    props: {
      content: {
        type: String,
        default: ''
      },
      created() {
        console.log('post-detail');
      },
      updated() {
        console.log('post-detail updated');
      }
    },
  }
</script>

<style scoped>

</style>

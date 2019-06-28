<template>
  <p>post {{this.$route.params.id}}</p>
</template>

<script>
  export default {
    name: "post",
    validate({params}) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    created() {
      console.log(this.$route.params.id);
    }
  }
</script>

<style scoped>

</style>

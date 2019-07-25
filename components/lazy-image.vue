<template>
  <figure v-lazyload class="image-wrapper">
    <div class="loading">
      <fade-loader/>
    </div>
    <img v-lazyload
         :data-url="imageUrl"/>
  </figure>
</template>

<script>
  import FadeLoader from 'vue-spinner/src/FadeLoader.vue'

  export default {
    name: "lazy-image",
    components: {
      FadeLoader
    },
    props: {
      imageUrl: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style scoped>

  .loaded > .loading {
    display: none;
  }

</style>

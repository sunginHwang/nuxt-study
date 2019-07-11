<template>
  <div>
    <div>
      <p>study</p>
    </div>
    <div>
      <h2>이미지 바인딩 테스트</h2>
      <img :src="testSrc">
    </div>
  </div>
</template>

<script>
  export default {
    name: "study",
    computed: {
      testSrc() {
        return require('../assets/image/btn-my.svg');
      }
    },
  }
</script>

<style scoped>

</style>

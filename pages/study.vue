<template>
  <div>
    <div>
      <p>study</p>
    </div>

    <div>
      <h2>이미지 바인딩 테스트</h2>
      <img :src="testSrc"/>
    </div>

    <div>
      <h2>백그라운드 이미지 테스트</h2>
      <div class="background-image"></div>
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
  .background-image {
    background-image: url("../assets/image/btn-my.svg");
    width: 76px;
    height: 30px;
  }
</style>

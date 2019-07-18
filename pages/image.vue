<template>
  <div>
    <h3>이미지 지연 로딩</h3>
    <!--<div class="image-container" v-for="image in images">
      <lazy-image :image-url="image"/>
    </div>-->
    <io-load/>
  </div>
</template>

<script>
/*
  import LazyImage from '../components/lazy-image';
*/
  import IoLoad from '../components/io-load';

  export default {
    name: "image",
    components: {
      IoLoad
    },
    data() {
      return {
        images: [
          'https://picsum.photos/420/320?image=0',
          'https://lorempixel.com/420/320/abstract/1/Sample',
          'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
          'https://via.placeholder.com/420x320/ff7f7f/333333?text=Sample',
          'https://placeimg.com/420/320/tech/grayscale',
          'https://loremflickr.com/420/320?lock=1',
          'https://placekitten.com/420/320?image=2',
          'https://placebear.com/420/320?image=2',
          'https://www.fillmurray.com/420/320'
        ]
      }
    },
  }
</script>

<style scoped>
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 20rem;
    margin: 2rem 0;
  }
</style>

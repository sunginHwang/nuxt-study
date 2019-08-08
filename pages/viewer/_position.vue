<template>
  <div>
    <kollus-viewer :kollus-url="kollusUrl" :active-position="activePosition"/>
  </div>
</template>

<script>
  import KollusViewer from '../../components/kollus-viewer';

  const video1 = 'https://v.kr.kollus.com/s?jwt=eyJhbGciOiJIUzI1NiJ9.eyJjdWlkIjoiZmFzdGNhbXB1cy10ZXN0IiwiZXhwdCI6IjE1NjUyOTYxNzEyMTEiLCJtYyI6W3sibWNrZXkiOiIzcEFUQ0tBdCJ9XX0.2RO6SqbkgwEjGADgJLkBEBLa4W8kNWUnDGwf2kiDLYA&custom_key=fa0cefd06c15389ef3251ba885c3722d83144d786ca177d5bf7bd8b1e35bee96&s=0';
  const video2 = 'https://v.kr.kollus.com/s?jwt=eyJhbGciOiJIUzI1NiJ9.eyJjdWlkIjoiZmFzdGNhbXAiLCJleHB0IjoiMTU2NTI5NjMyMDk1MyIsIm1jIjpbeyJtY2tleSI6Ik5XNzRSWWp5In1dfQ.HjcqvMnN9YTYhh7yZRTfQu7JAjMj2IrRDjGqu2hz_cw&custom_key=0b50155632326ca34e42550f10d6fca2c42c7b62a47eee4841aabd0cd1a913ea&s=0';

  export default {
    name: 'viewer',
    components: {
      KollusViewer
    },
    computed: {
      kollusUrl() {
        return this.isChange ? video1 : video2;
      },
      activePosition() {
        return this.isChange ? 0 : 40;
      },
      isChange(){
        return this.$route.params.position === 'test'
      }
    },
    created() {
      console.log(this);
    }
  };
</script>

<style scoped>




</style>

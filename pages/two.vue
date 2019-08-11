<template>
  <div class="form">
    <div class="static_area">
      <p>헤더 고정 영역</p>
    </div>
    <div class="dynamic_area">
     <div class="something_content">
       <p>컨텐츠 동적 영역</p>
     </div>
    </div>
    <div class="static_area">
      <p>푸터 고정 영역</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'two',
  };
</script>

<style scoped>

  .form{
    margin: 0 3rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .static_area {
    display: flex;
    align-items: center;
    height: 52px;
    background-color: #00C48D;
  }

  .dynamic_area {
    flex: 1 0 auto;
    /*safari bug see*/
    height: 0;
  }

  .something_content{
    height: 100%;
    background-color: #7f828b;
  }



</style>

<template>
  <div>
    <h1>타이틀</h1>
    <nuxt-link to="/posts">go posts</nuxt-link>
    <ul v-for="(post, index) in posts" :key="index">
      <li>{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "postsSSR",
    data() {
      return {
        posts: []
      }
    },
    async asyncData ({ req, res }) {
      console.log('asyncData');
      const apiRes = await axios.get('https://api-blog.woolta.com/post/categories/new/posts');
      return {posts : apiRes.data.data};
    },
  }
</script>

<style scoped>

</style>

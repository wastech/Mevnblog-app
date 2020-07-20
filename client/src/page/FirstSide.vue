<template>
<div class="main">
  <div v-for="post  in posts .slice(0,1).reverse()" :key="post._id">
    <img :src="post.image">
    <h5>{{post.category}}</h5>
    <h2>{{post.title}}</h2>
    <p class="mt-1 mb-4"> <span v-html="post.description"></span></p>
    <router-link v-bind:to="{ name: 'viewhistory', params: { title:post._id}}" class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit"> Read Story</button></router-link>
  </div>
</div>
</template>

<script>
import History from '@/services/History'
export default {
  data() {
    return {
      posts: []

    }

  },
  async created() {
    const response = await History.fetchPosts(this.posts)
    this.posts = response.data.data
    console.log(response.data.data)
    // this.$router.push({ name: 'posts' })
  }
}
</script>

<style scoped>
h5 {
  color: blue;
  text-align: left;
  margin-top: 1rem;
}

img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
}

h2 {

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 2em;
  margin: .67em 0;
  font-weight: 400 !important;

}

P.mt-1 {

  font-family: Poppins, sans-serif !important;
  letter-spacing: .3px;
  font-size: 30px;
  line-height: 180%;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

button {
  border-radius: 0.7rem;

}

@media screen and (max-width: 750px) {
  img {
    width: 100%;
    height: 10rem;
  }

  button {
    border-radius: 0.7rem;
    margin-top: -1rem;

  }

  h4 {
    font-size: 1.3rem;
    font-weight: bolder;
  }
}
</style>

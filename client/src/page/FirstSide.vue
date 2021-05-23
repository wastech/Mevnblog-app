<template>
  <div class="main">
    <div v-for="post  in posts.slice(0,1).reverse()" :key="post._id">
      <img :src="post.image" />
      <h5>{{post.category}}</h5>
      <h1>{{post.title}}</h1>
      <p class="mt-1 mb-4">
        <span v-html="post.description"></span>
      </p>
      <router-link v-bind:to="{ name: 'viewhistory', params: { title:post._id}}" class="readMore">
        <button class="btn btn-primary my-2 my-sm-0" type="submit">Read Story</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    let uri = "api/history/get_histories";
    axios.get(uri).then((response) => {
      this.posts = response.data.data;
    });
  },
};
</script>

<style scoped>
h5 {
  color: blue;
  text-align: left;
  margin-top: 1rem;
  font-family: Times, Times New Roman, serif;
}

img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
}

h1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 3em;
  margin: 0.67em 0;
  font-weight: 400 !important;
  font-family: Times, Times New Roman, serif;
}

P.mt-1 {
  font-family: Times, Times New Roman, serif;
  letter-spacing: 0.3px;
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

  h1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: medium;
    font-family:Times, Times New Roman, serif;
    font-weight: bolder !important;
  }
  P.mt-1 {
    display: none;
  }
  h5 {
    color: blue;
    text-align: left;
    font-size: small;
    margin-top: 1rem;
    font-family:Times, Times New Roman, serif;
  }
}
</style>

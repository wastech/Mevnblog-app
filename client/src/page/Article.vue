<template>
<div class="container">
  <div class="row">
    <div class="col-sm-3" v-for="article in articles.slice().reverse()" :key="article.id">
      <div class="card mt-3">
        <img :src="article.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">{{article.title}}</h3>
          <router-link v-bind:to="{ name: 'viewpost', params: { title:article._id}}" class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit"> Read Story</button></router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      articles: []
    }
  },
  created() {
    let uri = 'http://localhost:3000/get_articles';
    axios.get(uri).then(response => {
      this.articles = response.data.data;
    })
  },
}
</script>

<style scoped>
.container {
  max-width: 81%;
}

img {
  width: 100%;
  height: 15em;
  border-image: 3rem;
  object-fit: cover;
}

h3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.5em;
  margin: .67em 0;
  font-weight: 400 !important;
}
</style>

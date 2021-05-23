<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="article in articles.slice().reverse()" :key="article.id">
        <div class="card mt-3">
          <img v-lazy="article.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{{article.title}}</h3>
            <router-link
              v-bind:to="{ name: 'viewpost', params: { title:article._id}}"
              class="readMore"
            >
              <button class="btn btn-primary my-2 my-sm-0" type="submit">continue reading...</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    let uri = "api/article/get_articles";
    axios.get(uri).then((response) => {
      this.articles = response.data.data;
    });
  },
};
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
  text-align: center;
  font-size: large;
  font-family: Times, Times New Roman, serif;
  font-weight: bolder !important;
}
.pagination > li > a {
  border-radius: 50% !important;
  margin: 0 auton;
}
nav {
  margin: 0 auto;
}
</style>

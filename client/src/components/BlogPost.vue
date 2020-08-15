<template>
  <div>
    <div class="container">
      <h1 class="mt-5 mb-5">New Blog Posts</h1>
      <div class="row">
        <div class="col-sm-4" v-for="item in items.slice(0,3).reverse()" :key="item._id">
          <img v-lazy="item.image" />
          <h4>{{item.category}}</h4>
          <h5 class="mt-3 mb-3">{{item.title}}</h5>
          <router-link v-bind:to="{ name: 'viewblog', params: { title:item._id}}" class="readMore">
            <button class="btn btn-primary my-2 my-sm-0" type="submit">continue reading...</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    let uri = "api/blogpost/get_blogs";
    axios.get(uri).then((response) => {
      this.items = response.data.data;
    });
  },
};
</script>

<style scoped>
.col-sm-4 {
  height: 25rem;
}

.container {
  max-width: 79%;
}

h4 {
  color: blue;
  font-family: "Kelly Slab", cursive;
  margin-top: 1rem;
}

img {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

h1 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: "Kelly Slab", cursive;
}

h5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.5em;
  margin: 0.67em 0;
  font-weight: 400 !important;
  font-family: "Kelly Slab", cursive;
}

button {
  border-radius: 0.7rem;
}

@media screen and (max-width: 750px) {
  .container {
  max-width: 95%;
}
h4 {
  color: blue;
  font-family: "Kelly Slab", cursive;
  margin-top: 1rem;
  font-size:larger;
}
h5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size:medium;
  margin: 0.67em 0;
  font-weight: 700 !important;
  font-family: "Kelly Slab", cursive;
}
  img {
    width: 100%;
    height: 10rem;
  }

  .col-sm-4 {
    height: 22rem;
  }
}
</style>

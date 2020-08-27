<template>
  <div>
    <div class="container">
      <h1>related post</h1>
      <div class="row">
        <div class="col-sm-4" v-for="item in items .slice(0,3).reverse()" :key="item._id">
          <img v-lazy="item.image" />
          <h4>{{item.category}}</h4>
          <h3>{{item.title}}</h3>
          <router-link v-bind:to="{ name: 'viewevent', params: { title:item._id}}" class="readMore">
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
  props: {
    category: String,
  },
  data() {
    return {
      items: [],
    };
  },
  watch: {
    $props: {
      handler: async function (newProps) {
        console.log("newProps.category", newProps.category);
        const response = await axios.get(
          `/api/eventroute/get_event_by_category/${newProps.category}`
        );
        this.items = response.data.data;
        console.log(response)
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.col-sm-4 {
  height: 25rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.container {
  max-width: 100%;
}

h1 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: Times, Times New Roman, serif;
}

p {
  color: blue;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
}

h4 {
  color: orange;
  font-family: Times, Times New Roman, serif;
}

img {
  width: 100%;
  height: 70%;
  border-image: 3rem;
  object-fit: cover;
}

h3 {
  font-family:Times, Times New Roman, serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.5em;
  margin: 0.67em 0;
  font-weight: 400 !important;
}

button {
  border-radius: 0.7rem;
}

@media screen and (max-width: 750px) {
  img {
    width: 100%;
    height: 10rem;
  }

  .col-sm-4 {
    height: 18rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  h4 {
    color: orange;
    font-family: Times, Times New Roman, serif;
    font-size: large;
  }
  h3 {
    font-family: Times, Times New Roman, serif;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 0.9em;
    margin: 0.67em 0;
    font-weight: 900 !important;
  }
}
</style>

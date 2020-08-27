<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="customer in customers.slice().reverse()" :key="customer._id">
        <div class="card mt-3">
          <img v-lazy="customer.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{{customer.title}}</h3>
            <router-link
              v-bind:to="{ name: 'viewhistory', params: { title:customer._id}}"
              class="readMore"
            >
              <button class="btn btn-primary my-2 my-sm-0" type="submit">continue reading...</button>
            </router-link>
          </div>
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
      customers: [],
    };
  },
  created() {
    let uri = "api/history/get_histories";
    axios.get(uri).then((response) => {
      this.customers = response.data.data;
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
</style>

<template>
<div class="container">
  <div class="row">
    <div class="col-sm-3" v-for="customer in customers.slice().reverse()" :key="customer._id">
      <div class="card mt-3">
        <img :src="customer.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">{{customer.title}}</h3>
          <router-link v-bind:to="{ name: 'viewhistory', params: { title:customer._id}}" class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit"> Read Story</button></router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import History from '@/services/History'
export default {
  data() {
    return {
      customers: []

    }

  },
  async created() {
    const response = await History.fetchPosts(this.customers)
    this.customers = response.data.data
  }
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

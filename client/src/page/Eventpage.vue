<template>
<div class="container">
  <div class="row">
    <div class="col-sm-3" v-for="event in events.slice().reverse()" :key="event.id">
      <div class="card mt-3">
        <img :src="event.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">{{event.title}}</h3>
          <router-link v-bind:to="{ name: 'viewevent', params: { title:event._id}}" class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit"> Read Story</button></router-link>
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
      events: []
    }
  },
  created() {
    let uri = 'api/eventroute/events';
    axios.get(uri).then(response => {
      this.events = response.data.data;
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

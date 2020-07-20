<template>
<div>
  <div class="">
    <div class="row" v-for="item in items.slice(0,5)" :key="item._id">
      <div class="col-6">
        <img class="img2" :src="item.image"></div>
      <div class="col-6">
        <h5> {{item.category}}</h5>
        <h3>{{item.title}}</h3>
        <router-link v-bind:to="{ name: 'viewblog', params: { title:item._id}}" class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit"> Read Story</button></router-link>
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
      items: []
    }
  },
  created() {
    let uri = 'http://localhost:3000/get_blogs';
    axios.get(uri).then(response => {
      this.items = response.data.data;
    })
  },
}
</script>

<style scoped>
.row {
  margin-bottom: 2rem;
}

img.img2 {
  max-height: 100%;
  width: 100%;
  height: 80%;
  object-fit: cover;
}

h5 {
  color: gold;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

h3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 1.5em;
  margin: .67em 0;
  font-weight: 400 !important;
  max-width: 100%;
}

.img2 {
  float: left;
  margin-right: 10px;
  height: 30%;
}
</style>

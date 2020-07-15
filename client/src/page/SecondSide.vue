<template>
<div>
  <div class="">
    <div class="row" v-for="(item,i) in items" :key="i">
      <div class="col-6">
        <img class="img2" :src="item.src"></div>
      <div class="col-6">
        <p> {{item.category}}</p>
        <p>{{item.title}}</p>
        <button class="btn btn-primary my-2 my-sm-0 " type="submit" @click="goTodetail(item.productId)">Read Story</button>
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
      items: [
      ]
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

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
p{
       overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
 font-weight: 700;
 font-size:larger;
 max-width: 100%;
}

.img2 {
  float: left;
  margin-right: 10px;
  height: 30%;
}
</style>

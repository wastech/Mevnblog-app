<template>
<div class="container">
  <h1> Popular Resources</h1>
  <div class="row">
    <div class="col-sm-7">
      <div class="row" v-for="item in items.slice(0,5)" :key="item.id">
        <div class="col-4"><img class="img2" :src="item.image">
        </div>
        <div class="col-8">
          <h4> {{item.category}}</h4>
          <h5 class="mt-4 mb-4">{{item.title}}</h5>
          <router-link v-bind:to="{ name: 'viewpost', params: { title:item._id}}" class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit"> Read Story</button></router-link>
        </div>
      </div>
    </div>
    <div class="col-sm-5">
      <ADS />
    </div>
  </div>
</div>
</template>

<script>
import ADS from '@/components/ADS.vue'
import axios from 'axios'
export default {
  components: {
    ADS
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    let uri = 'http://localhost:3000/get_articles';
    axios.get(uri).then(response => {
      this.items = response.data.data;
    })
  },
}
</script>

<style scoped>
.container {
  max-width: 79%;

}

h1 {

  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-top: 4em;
  margin-bottom: 2em;

}

.row {
  margin-bottom: 2rem;
}

img {
  width: 100%;

}

h5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 1.5em;
  margin: .67em 0;
  font-weight: 400 !important;
  width: 460px;
}

img.img2 {
  height: 100%;
  object-fit: cover;
}

h4 {
  color: blue;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

@media screen and (max-width: 750px) {
  h5 {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: 30%;

  }
}
</style>

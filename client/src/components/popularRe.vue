<template>
<div class="container mt-5">
  <h1 class="mt-5 mb-5"> Popular Resources</h1>
  <div class="row">
    <div class="col-sm-7">

      <div class="row" v-for="item in items" :key="item.id">
        <div class="col-4"><img class="img2" :src="item.image">
        </div>
        <div class="col-8">
          <p> {{item.category}}</p>
          <h5 class="mt-4 mb-4">{{item.title}}</h5>
            <router-link v-bind:to="{ name: 'viewpost', params: { title:item._id}}"  class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit">  Read Story</button></router-link>

        </div>

      </div>
    </div>
    <div class="col-sm-5">
      <!--    <img src="https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg">-->
      <ADS />
    </div>

  </div>
</div>
</template>

<script>
import ADS from '@/components/ADS.vue'
import axios from 'axios'
export default {
  components:{ ADS},
    data() {
        return {
            items:[]
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
h1{
margin-top: 3rem;
}
.row {
  margin-bottom: 2rem;
}

img {
  width: 100%;

}
h5{
     overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 700;
  width: 460px;
}

img.img2 {
  height: 100%;
  object-fit: cover;
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

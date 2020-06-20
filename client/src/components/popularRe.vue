<template>
<div class="container mt-5">
  <h1 class="mt-5 mb-5"> Popular Resources</h1>
  <div class="row">
    <div class="col-sm-7">

      <div class="row" v-for="(item,i) in items" :key="i">
        <div class="col-4"><img class="img2" :src="item.src">
        </div>
        <div class="col-8">
          <p> {{item.category}}</p>
          <h5 class="mt-4 mb-4">{{item.title}}</h5>
          <button class="btn btn-primary my-2 my-sm-0 " type="submit" @click="goTodetail(item.productId)">Read Story</button>
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
export default {
  components: {
    ADS
  },
  data() {
    return {
      items: [{
          productId: 8,
          src: "https://image.freepik.com/free-photo/portrait-beautiful-brunette-woman-model-pink-costume-with-no-makeup-isolated-gray_158538-12804.jpg",
          category: "Blog Post",
          title: "President Buhari's Easter Message To Nssssssssssssssssssigerians Amxxxxxxxxxxxxxxxxidst Coronavirus Pandemic"
        },

        {
          productId: 9,
          src: "https://image.freepik.com/free-photo/portrait-cheerful-young-african-man_171337-8907.jpg",
          category: "Blog Post",
          title: "Horror! Huge Fire Breaks Out, Razes Vehicles Inside Lagos Airport Hotel (Photos)",
        },
        {
          productId: 10,
          src: "https://image.freepik.com/free-photo/smiling-young-businessman-businesswoman-giving-high-five-front-corporate-building_23-2148190731.jpg",
          category: "Blog Post",
          title: "President Buhari's Easter Message To Nigerians Amidst Coronavirus Pandemics"
        }

      ]
    }
  },
  methods: {
    goTodetail(prodId) {
      let proId = prodId
      this.$router.push({
        name: 'viewpost',
        params: {
          Pid: proId
        }
      })
    }
  }
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

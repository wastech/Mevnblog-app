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
export default {
  data() {
    return {
      items: [{
          productId: 4,
          src: "https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg",
          category: "Blog Post",
          title: "NairaMarley, Babatunde Gbadamosi, write apology cccccccccccccccccccccccccccccccccletters to Gov. Sanwo-Olu"
        },
        {
          productId: 5,
          src: "https://image.freepik.com/free-photo/cropped-image-handsome-afro-american-sports-man-rubbing-hands-with-chalk_171337-9260.jpg",
          category: "Blog Post",
          title: "Banky W slams state governments that have suspended the lockdown to celebrate easter"
        },
        {
          productId: 6,
          src: "https://image.freepik.com/free-photo/happy-young-african-man-showing-display-laptop_171337-9686.jpg",
          category: "Blog Post",
          title: "Ekiti state discharges second Coronavirus patient"
        },
        {
          productId: 7,
          src: " https://image.freepik.com/free-photo/confident-beautiful-brunette-girl-looking-camera-smiling-white-wall_176420-565.jpg",
          category: "Blog Post",
          title: "Ekiti state discharges second Coronavirus patient"
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

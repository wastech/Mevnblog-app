<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-sm-7 col-12">
        <FirstSide />
      </div>
      <div class="col-sm-5 col-12">
        <SecondSide />
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import FirstSide from '@/page/FirstSide.vue'
const FirstSide = () => import(/* webpackChunkName: "group-foo" */ '@/page/FirstSide.vue')
//import SecondSide from '@/page/SecondSide.vue'
const SecondSide = () => import(/* webpackChunkName: "group-foo" */ '@/page/SecondSide.vue')
export default {
  components: {
    FirstSide,
    SecondSide
  }

}
</script>

<style scoped>
.container {
  max-width: 79%;
  margin-top: 2rem;

}
@media screen and (max-width: 750px) {
 .container {
  max-width: 95%;
  margin-top: 2rem;

}
}
</style>

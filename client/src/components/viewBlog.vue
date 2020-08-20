<template>
<div>
  <div class="container">
    <div>
      <div>
        <h2>{{ item.title }}</h2>
         <h4> posted by  <span>{{item.author}} </span> <i>on {{item.createdAt}}</i></h4>
        <img v-lazy="item.image">
        <h5>{{ item.category }}</h5>
        <p v-html="item.description"></p>
      </div>
    </div>
    <Related v-bind:category="item.category"/>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Related from "@/components/Related.vue";
import Newsletter from "@/components/Newsletter.vue";
export default {
  name: "viewblog",
  components: {
    Related,
    Newsletter,
  },
  data() {
    return {
      item: {},
      id: this.$route.params.title
    };
  },
  created() {
    let url = `/api/blogpost/get_blog/${this.id}`;
    axios.get(url).then((response) => {
      this.item = response.data.data;
    });

  }
}
</script>

<style scoped>


h2 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  margin: .67em 0;
  font-family: serif;
  line-height: 171.9%;
  letter-spacing: .03em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
   font-family: 'Kelly Slab', cursive;
}

p {

  overflow-wrap: break-word;
  font-family: 'Kelly Slab', cursive;
  padding: 0;
  letter-spacing: .03em !important;
  overflow-x: hidden !important;

}
span{
  color: blue;
}

img {
  width: 100%;
  object-fit: cover;
}

h1 {
  font-size: 2rem;
  font-weight: bolder;
   font-family: 'Kelly Slab', cursive;
}

h5 {
  color: blue;
  margin-top: 1em;
  margin-bottom: 1em;
   font-family: 'Kelly Slab', cursive;
}

button {
  border-radius: 0.7rem;
}

@media screen and (max-width: 750px) {
  img {
    width: 100%;
    height: 10rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 1rem;
    font-weight: bolder;
    font-family: serif;
  }
}
</style>

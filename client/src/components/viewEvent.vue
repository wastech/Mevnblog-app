<template>

  <div class="container">
    <div >
      <div >
        <h2>{{ item.title }}</h2>
         <h4> posted by  <span>{{item.author}} </span> <i>on {{item.createdAt}}</i></h4>
        <img v-lazy="item.image">
        <h5>{{ item.category }}</h5>
        <p v-html="item.description"></p>
      </div>
    </div>

    <Related v-bind:category="item.category"/>
    <comment/>
    <replied/>
  </div>

</template>

<script>
import axios from 'axios'
import Related from "@/components/Related.vue";
import Newsletter from "@/components/Newsletter.vue";
import comment from "@/components/comment.vue"
import replied from "@/components/replied.vue"

export default {
  name: "viewevent",
  components: {
    Related,
    Newsletter,
    comment,
    replied
  },
  data() {
    return {
      item: {},
      id: this.$route.params.title,
    };
  },
  created() {
    let url = `/api/eventroute/getevent/${this.id}`;
    axios.get(url).then(response => {
      this.item = response.data.data;
    });
  }
}
</script>

<style scoped>

h2 {
   font-family: 'Kelly Slab', cursive;
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  margin: .67em 0;
  line-height: 171.9%;
  letter-spacing: .03em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

p {
  font-family: 'Kelly Slab', cursive;
  padding: 0;
  letter-spacing: .03em !important;
  overflow-x: hidden !important;

  overflow-wrap: break-word;

}
span{
  color: blue;
}

img {
  width: 100%;
  object-fit: cover;
}


h5 {
  color: blue;
   font-family: 'Kelly Slab', cursive;
   margin-top: 1em;
   margin-bottom: 1em;
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

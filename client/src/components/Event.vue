<template>
<div>
    <div class="container">
        <h1> Upcomig Events</h1>
        <div class="row">
            <div class="col-sm-4" v-for="item in items.slice().reverse()" :key="item._id">
                <img :src="item.image">
                <p>{{item.category}}</p>
                <h5>{{item.title}}</h5>
                <p>{{item.description}}</p>

               
                    <router-link v-bind:to="{ name: 'viewevent', params: { title:item._id}}"  class="readMore"> <button class="btn btn-primary my-2 my-sm-0 " type="submit">  Read Story</button></router-link>
                  
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
            items:[]
        }
    },
   created() {
      let uri = 'http://localhost:3000/events';
      axios.get(uri).then(response => {
        this.items = response.data.data;
      })
    },
}
</script>

<style scoped>
.col-sm-4 {

    height: 25rem;
    margin-top: 3rem;
    margin-bottom: 2rem;

}
.container {
  max-width: 79%;
}
p {
    color: blue;

     overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  

    margin-top: 1rem;
}

img {
    width: 100%;
    height: 70%;
    border-image: 3rem;
	object-fit: cover;
}

h5 {
   overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 700;
}

button {
    border-radius: 0.7rem;

}

@media screen and (max-width: 750px) {
    img {
        width: 100%;
        height: 10rem;
    }

    .col-sm-4 {

        height: 20rem;
        margin-top: 1rem;
        margin-bottom: 2rem;

    }
}
</style>

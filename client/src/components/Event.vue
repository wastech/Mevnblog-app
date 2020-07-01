<template>
<div>
    <div class="container">
        <h1> Upcomig Events</h1>
        <div class="row">
            <div class="col-sm-4" v-for="(item,index) in items" :key="index">
                <img :src="item.image">
                <p>{{item.category}}</p>
                <h5>{{item.title}}</h5>
                <p>{{item.description}}</p>

                <button class="btn btn-primary my-2 my-sm-0 " type="submit">Read Story</button>
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
    methods: {
        
  fetchData: function () {
      let uri = 'http://localhost:3000/events';
    var self = this
    return axios.get(uri)
      .then(function (response) {
        self.items = response.data.items
      })
      .catch(function (error) {
        self.fetchError = error
      })
  }
}
  
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

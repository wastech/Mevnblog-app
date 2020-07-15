<template>
<div>
    <div class="container">
        <h1 class="mt-5 mb-5"> New Blog Posts</h1>

        <div class="row">
            <div class="col-sm-4" v-for="(item,index) in items" :key="index">
                <img :src="item.src">
                <p>{{item.category}}</p>
                <h5 class="mt-3 mb-3">{{item.title}}</h5>
                <div @click="goTodetail(item.productId)">
                    <button class="btn btn-primary my-2 my-sm-0 mb-5" type="submit">Read Story</button></div>
                <!-- <ul v-if="errors && errors.length">
                    <li v-for="(error,index) of errors" :key="index">
                        {{error.message}}
                    </li>
                </ul>-->
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
            items: []
            // errors: []
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
.col-sm-4 {

    height: 25rem;

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
	object-fit:cover;
}

h1 {
    font-size: 2rem;
    font-weight: bolder;
}
h5{
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

        height: 22rem;

    }
}
</style>

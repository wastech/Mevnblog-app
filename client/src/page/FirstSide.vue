<template>
<div class="main">
    <div v-for="(post,index) in posts" :key="index">
        <img :src="post.image">
        <h5>{{post.category}}</h5>
        <h2>{{post.title}}</h2>
        <p class="mt-4 mb-4">{{posts.description}}.</p>
        <button class="btn btn-primary my-1 my-sm-0" type="submit" @click="goTodetail(post.Id)">Read Story</button>
    </div>
</div>
</template>

<script>
import History from '@/services/History'
export default {
    data() {
        return {
            proId: this.$route.params.Hid,
            posts: []

        }

    },
async created(){
const response =  await History.fetchPosts(this.posts)
      this.posts = response.data.data
     console.log(response.data.data)
    // this.$router.push({ name: 'posts' })
}  }
    

</script>

<style scoped>
h5 {
    color: blue;
    text-align: left;
    margin-top: 1rem;
}

img {
    width: 100%;
    height: 30rem;
	object-fit: cover;
}

h2 {
    
       overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 700;
}

P {

    font-family: courier, Arial, Helvetica, sans-serif;
    font-weight:bolder;
}

button {
    border-radius: 0.7rem;

}

@media screen and (max-width: 750px) {
    img {
        width: 100%;
        height: 10rem;
    }

    button {
        border-radius: 0.7rem;
        margin-top: -1rem;

    }

    h4 {
        font-size: 1.3rem;
        font-weight: bolder;
    }
}
</style>

<template>
<div class="container-fluid">
  <table class="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
       <th scope="col">author</th>
      <th scope="col">title</th>
      <th scope="col">category</th>
      <th scope="col">Status</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="(post, index) in posts" :key="post.id">
      <th scope="row">{{ index }}</th>
      <td>{{post.author}}</td>
      <td>{{post.title}}</td>
      
      <td>{{post.category}}</td>
      <td>published</td>
        <td><router-link :to="{name: 'editEvent', params: { id: post._id }}" class="btn btn-primary">Edit</router-link></td>

          <td>
            <button type="button" class="btn btn-secondary" @click.prevent="deletePost(post._id)">delete</button>
          </td>
        
    </tr>
   
    
  </tbody>
  
</table>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
   posts: [
     {title:'', author:'', category:''}
   ]
    }
  },
   created() {
      let uri = 'http://localhost:3000/events';
      axios.get(uri).then(response => {
        this.posts = response.data.data;
      })
    },
   methods: {
      deletePost(id)
      {
        let uri = `http://localhost:3000/deleteevent/${id}`;
        axios.delete(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    }
}
</script>
<style  scoped>

</style>

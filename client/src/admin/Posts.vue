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
    <tr v-for="post in posts" :key="post._id">
      <th scope="row"></th>
      <td>{{post.title}}</td>
      <td>{{post.author}}</td>
      <td>{{post.category}}</td>
      <td>published</td>
       <td><button type="button" class="btn btn-secondary">edit</button></td>

          <td>
            <button type="button" class="btn btn-secondary">delete</button>
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
      let uri = 'api/article/get_articles';
      axios.get(uri).then(response => {
        this.posts = response.data.data;
      })
    },
  
}
</script>
<style  scoped>

</style>

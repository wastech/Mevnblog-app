<template>
<div class="container-fluid">
  <table class="table table-sm table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">email</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item._id">
        <th scope="row">1</th>
        <td>{{item.email}}</td>
        <td>
          <button type="button" class="btn btn-secondary" @click.prevent="deletePost(item._id)">delete</button>
        </td>
      </tr>

    </tbody>

  </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'subscriber',
  data(){
    return{
   items:[]
    }
  },
   created() {
      let uri = 'api/Newsroute/mails';
      axios.get(uri).then(response => {
        this.items = response.data.data;
      })
    },

   methods: {
      deletePost(id)
      {
        let uri = `http://localhost:3000/deletemail/${id}`;
        axios.delete(uri).then(response => {
          this.items.splice(this.items.indexOf(id), 1);
        });
      }
    }

}
</script

<style  scoped>

</style>

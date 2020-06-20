<template>
  <div class="main">
    <div class="">
  <div class="row">
    <div class="col-sm-2">
      <div class="dropdown" v-for="item in items" :key="item.id">
  <button class="btn  dropdown-toggle mb-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {{item.name}}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" :href="item.link1">{{item.name1}}</a>
    <a class="dropdown-item" :href="item.link2">{{item.name2}}</a>
    <a class="dropdown-item" :href="item.link3">{{item.name3}}</a>
  </div>
</div>
    </div>
    <div class="col-sm">
      <Dasboard/>
    </div>
    
  </div>
</div>
  </div>
</template>
<script>
import Dasboard from '@/admin/Dasboard.vue'
export default {
  components:{
    Dasboard
  },
  data(){
    return{
      items:[
         {name:'blogPost', name1:' Add blogposts',  name2:'blogposts' ,link1:'/addnewpost'},
             {name:' NewBlogPost', name1:'add NewBlogPost',  name2:'NewBlogPosts'},
           {name:'Newsletter', name1:"subsribers" ,link1:'/subscribers'},
           {name:'Upcoming Event', name1:'Events',  name2:'Add NewEvent',link2:'/addNewEvent'},
           {name:'History', name1:'add History',  name2:'histories', link1:'AddHistory'},
           {name:'Popular Resource', name1: 'add  New Popular Resources',  name2:' Popular Resources', link1:'addNewResouce'},

      ]
    }
  }
}
</script>
<style scoped>
button .btn{
  text-align: center;
  align-items: center;
  
}
.dropdown{
margin: 0 auto;
 text-align: center;
}
button:hover{
  border-radius: 20%;
  background-color: white;
  color: black;
  
  
}
.col-sm-2{
  background-color: gray;
  color: white;
  max-height: 100%;
}

</style>

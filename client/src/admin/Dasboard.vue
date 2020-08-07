<template>
<div class="main">
  <div class="">
    <div class="row">
      <div class="col-sm-4" v-for="item in items" :key="item._id">
      
        <div class="card text-white bg-primary mb-3"  >
          <h1 class="card-header">{{item.name}}</h1>
          <div class="card-body">
            <button type=" card button" class="btn btn-warning btn-lg btn-block"> 
          <a :href="item.link">{{item.view}}</a>
        </button>

          </div>
        </div>
      </div>
    
  </div>
</div>
</div>
</template>

<script>
export default {
 
  data() {
    return {
      items: [{
          name: 'Events',
          link: '/addNewEvent',
          view: 'Add Event'
        },
        {
           name: 'Customer Histories',
          link: '/addHistory',
           view:  'Add Customer History'
        },
        {
         name: 'Blog Posts',
          link: '/addnewpost',
          view:  'Add a Blog Post'
        },
        {
          name: 'Articles',
          link: '/addarticle',
          view:  'Add an Article'
        },
        
        

      ]
    }
  }
}
</script>

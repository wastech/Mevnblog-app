<template>
<div class="container">
	<h1> Popular Resources</h1>
  <div class="row">
    <div class="col-sm-8">
    
       <div class="row" v-for="(item,i) in items" :key="i">
            <div class="col-4"><img class="img2" :src="item.src">
		      </div>
                  <div class="col-8"><p> {{item.category}}</p>
                             <h5>{{item.title}}</h5>
                             <button class="btn btn-primary my-2 my-sm-0 " type="submit" >Read Story</button>
                	</div>
  
        </div>
    </div>
    <div class="col-sm-4">
  <!--    <img src="https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg">-->
  <ADS/>
    </div>
  
  </div>
</div>
</template>
<script>
import ADS from '@/components/ADS.vue'
export default{
	components:{
		ADS
	},
	data(){
		return{
			items:[
				{src:"https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",category:"Blog Post", title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"},
				{src:"https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",category:"Blog Post", title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"},
				{src:"https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",category:"Blog Post", title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"}
				
				
			]
		}
	}
}
</script>
<style scoped>
.row{
	margin-bottom:2rem;
}

img{
	width:100%;
	
	
}

img.img2{
height:100%;
}




.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
@media screen and (max-width: 750px) {
  h1 {
    font-size: 2rem;
  }
}


</style>
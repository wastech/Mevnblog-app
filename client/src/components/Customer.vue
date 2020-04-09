<template>
<div class="container">
	<div v-for="(customer,index) in customers" :key="index">
		 <div v-if="proId == customer.Id">
    <img :src="customer.src">
    <h5>{{customer.category}}</h5>
    <h4>{{customer.title}}</h4>
    <p>{{customer.text}}.</p>
    
</div>
</div>
<Newsletter/>

		<Related/>
</div>
</template>
<script>
import Related from '@/components/Related.vue'
import Newsletter from '@/components/Newsletter.vue'
export default {
	name: 'customerc',
	components:{
		Related,
		Newsletter
		
	},
	data(){
		return{
			 proId: this.$route.params.Hid,
			 customers: [{
                    Id: 1,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "customer history",
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus",
					text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when .'
                }]
		}
	}
	
}

</script>
export default {
	
}
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
}

h4 {
    font-size: 2rem;
    font-weight: bolder;
}

P {

    font-family: courier, Arial, Helvetica, sans-serif;
}

button {
    border-radius: 0.7rem;

}
@media screen and (max-width: 750px) {
  img {
    width: 100%;
    height: 10rem;
}
h4 {
    font-size: 1.3rem;
    font-weight: bolder;
}}
</style>

<template>
<div class="main">
	<div v-for="(history,index) in histories" :key="index">
    <img :src="history.src">
    <h5>{{history.category}}</h5>
    <h4>{{history.title}}</h4>
    <p>{{history.text}}.</p>
    <button class="btn btn-primary my-2 my-sm-0" type="submit" @click="goTodetail(history.Id)">Read Story</button>
</div>
</div>
</template>
<script>
export default{
	data(){
		return{
			 histories: [{
                    Id: 1,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus",
					text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when .'
                }]
		}
	},

    methods: {
        goTodetail(prodId) {
            let proId = prodId
            this.$router.push({
                name: 'customer',
                params: {
                    Hid: proId
                }
            })
        }
    }
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

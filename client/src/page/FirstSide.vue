<template>
<div class="main">
    <div v-for="(history,index) in histories" :key="index">
        <img :src="history.src">
        <h5>{{history.category}}</h5>
        <h2>{{history.title}}</h2>
        <p class="mt-4 mb-4">{{history.text}}.</p>
        <button class="btn btn-primary my-1 my-sm-0" type="submit" @click="goTodetail(history.Id)">Read Story</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            histories: [{
                Id: 1,
                src: "https://image.freepik.com/free-vector/man-with-mustache_1308-41559.jpg",
                category: "Customer History",
                title: "David Adedeji Adeleke (born November 21, 1992), who is better known as Davido, is an American-born Nigerian singer, songwriter and record producer....",
                text: "David Adedeji Adeleke (born November 21, 1992), who is better known as Davido, is an American-born Nigerian singer, songwriter and record producer....",


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

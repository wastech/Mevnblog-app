<template>
<div>
    <div class="container">
        <h1> New Blog Posts</h1>
        <div class="row">
            <div class="col-sm-4" v-for="(item,index) in items" :key="index">
                <img :src="item.src">
                <p>{{item.category}}</p>
                <h5>{{item.title}}</h5>
                <div @click="goTodetail(item.productId)">
                    <button class="btn btn-primary my-2 my-sm-0" type="submit">Read Story</button></div>
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
                    productId: 1,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    productId: 2,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    productId: 3,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                }

            ]
        }
    },
    methods: {
        goTodetail(prodId) {
            let proId = prodId
            this.$router.push({
                name: 'viewpost',
                params: {
                    Pid: proId
                }
            })
        }
    }
}
</script>

<style scoped>
.col-sm-4 {

    height: 25rem;

}

.container {
    margin-top: 0.5rem;
}

p {
    color: blue;

    margin-top: 1rem;
}

img {
    width: 100%;
    height: 50%;
}

h1 {
    font-size: 2rem;
    font-weight: bolder;
}

button {
    border-radius: 0.7rem;

}
@media screen and (max-width: 750px) {
  img {
    width: 100%;
    height: 10rem;
}
.col-sm-4 {

    height: 22rem;

}}
</style>

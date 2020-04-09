<template>
<div>
    <div class="container">
        <h1> Related Blog Posts</h1>
        <div class="row">
            <div class="col-sm-4" v-for="(item,i) in items" :key="i">
                <img :src="item.src">
                <p>{{item.category}}</p>
                <h5>{{item.title}}</h5>

                <button class="btn btn-primary my-2 my-sm-0 " type="submit">Read Story</button>
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
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                }

            ]
        }
    }
}
</script>

<style scoped>
.col-sm-4 {

    height: 25rem;
	margin-top: 3rem;
	margin-bottom: 2rem;

}

.container {
    margin-top: 5rem;
}

p {
    color: blue;

    margin-top: 1rem;
}

img {
    width: 100%;
    height: 70%;
	border-image: 3rem;
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

    height: 20rem;
	margin-top: 1rem;
	margin-bottom: 2rem;

}}
</style>

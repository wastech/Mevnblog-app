<template>
<div>
    <div class="container">
        <h1> Upcomig Events</h1>
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
                    src: "https://image.freepik.com/free-vector/colorful-new-year-party-concept_23-2148373938.jpg",
                    category: "event",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    src: "https://image.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
                    category: "event",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    src: "https://image.freepik.com/free-vector/blue-postponed-sign-illustrated_23-2148496126.jpg",
                    category: "event",
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
  max-width: 79%;
}
p {
    color: blue;

    margin-top: 1rem;
}

img {
    width: 100%;
    height: 70%;
    border-image: 3rem;
	object-fit: cover;
}

h5 {
   overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 700;
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

    }
}
</style>

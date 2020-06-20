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
                    src: "https://image.freepik.com/free-photo/portrait-smiling-young-woman-dress_171337-9899.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    src: "https://image.freepik.com/free-photo/blonde-girl-with-flowers-near-face_91497-1995.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
                    src: "https://image.freepik.com/free-photo/portrait-surprised-young-woman-summer-clothes_171337-10724.jpg",
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
h5{
     overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 700;
}

img {
    width: 100%;
    height: 70%;
    border-image: 3rem;
	object-fit: cover;
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
		object-fit: cover;
    }

    .col-sm-4 {

        height: 20rem;
        margin-top: 1rem;
        margin-bottom: 2rem;

    }
}
</style>

<template>
<div>
    <div class="main">
        <div class="row" v-for="(item,i) in items" :key="i">
            <div class="col-6"><img class="img2" :src="item.src"></div>
            <div class="col-6">
                <p> {{item.category}}</p>
                <h5>{{item.title}}</h5>
                <button class="btn btn-primary my-2 my-sm-0 " type="submit" @click="goTodetail(item.productId)">Read Story</button>
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
				productId: 4,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
					productId: 5,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
					productId: 6,
                    src: "https://cdn.dribbble.com/users/1355613/screenshots/10374655/media/6f923827220b3a4eb2082262c692563e.jpg",
                    category: "Blog Post",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus"
                },
                {
				     productId: 7,
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
.row {
    margin-bottom: 2rem;
}

img {
    width: 100%;
}

img.img2 {
    height: 100%;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.img2 {
    float: left;
    margin-right: 15px;
    height: 30%;
}
</style>

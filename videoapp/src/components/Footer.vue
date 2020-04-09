<template>
<div class="main">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 col-md-4" v-for="(item, i) in items" :key="i">
                <h3 style="color:green">{{item.head}}</h3>
                <h5>{{item.p1}}</h5>
                <h5>{{item.p2}}</h5>
                <h5>{{item.p3}}</h5>
                <h5>{{item.p4}}</h5>
                <h4 style="color:red">{{item.last}}</h4>
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
                    head: " Hot categories",
                    p1: "Giveaway",
                    p2: "Production",
                    p3: "talk zone",
                    p4: "Prediction",
                    last: "Sell Bitcoin/Gift card"
                },
                {
                    head: "Information",
                    p1: "About us",
                    p2: "Advertisement",
                    p3: "Promo Music/Video ",
                    p4: "Submit Posts",
                    last: "Contact Us"
                },
                {
                    head: "Helpful Links",
                    p1: "Music Promo Packages",
                    p2: "Tv",
                    p3: "Reviews",
                    p4: "TakeDown",
                    last: "Free On The mic"
                }
            ]
        }
    }
}
</script>
<style scoped>
.main{
	margin-top:0.4rem ;
	padding: 3rem;
	
}
div{
	margin-top:2rem;
}
</style>

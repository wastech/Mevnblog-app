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
    <Newsletter />

    <Related />
</div>
</template>

<script>
import Related from '@/components/Related.vue'
import Newsletter from '@/components/Newsletter.vue'
export default {
    name: 'customerc',
    components: {
        Related,
        Newsletter

    },
    data() {
        return {
            proId: this.$route.params.Hid,
            customers: [{
                Id: 1,
                src: "https://image.freepik.com/free-vector/man-with-mustache_1308-41559.jpg",
                category: "customer history",
                title: "history of Davido",
                text: 'David Adedeji Adeleke (born November 21, 1992), who is better known as Davido, is an American-born Nigerian singer, songwriter and record producer.[1][2] Davido was born in Atlanta, U.S., and raised in Lagos; he made his music debut as a member of the music group KB International. He studied business administration at Oakwood University before dropping out to make beats and record vocal references. Davido rose to fame after releasing "Dami Duro", the second single from his debut studio album Omo Baba Olowo (2012), from which six additional singles—"Back When", "Ekuro", "Overseas", "All of You", "Gbon Gbon", and "Feel Alright"—were taken. In 2012, Davido won the Next Rated award at The Headies. Between 2013 and 2015, he released the hit singles "Gobe", "One of a Kind", "Skelewu", "Aye", "Tchelete (Goodlife)", "Naughty", "Owo Ni Koko", "The Sound" and "The Money".In January 2016, Davido announced on Twitter he had signed a record deal with Sony Music and a few months later founded the record label Davido Music Worldwide (DMW), to which acts Dremo, Mayorkun, Yonda and Peruzzi are currently signed. In July 2016, Davido signed a record deal with Sonys RCA Records. In October 2016, he released the 5-track EP Son of Mercy, which was supported by the singles "Gbagbe Oshi", "How Long" and "Coolest Kid in Africa". In April 2017, Davido re-negotiated his contract with Sony due to creative control issues and later that year he released five singles including "If" and "Fall".[3] "If" generated worldwide social media activity while "Fall" became the longest-charting Nigerian pop song in Billboard history.[3][4] Davido released his second studio album A Good Time in November 2019. It was supported by the previously released singles "If", "Fall", "Assurance", "Blow My Mind" and "Risky".'
            }]

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
    }
}
</style>

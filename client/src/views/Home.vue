<template>
<div class="home">
    <FrontPage />
    <BlogPost />
    <popularRe />
	<Event/>
	<FooterCap/>
</div>
</template>

<script>
// @ is an alias to /src
//import FrontPage from '@/components/FrontPage.vue'
const FrontPage = () => import('@/components/FrontPage.vue')
//import BlogPost from '@/components/BlogPost.vue'
const BlogPost = () => import('@/components/BlogPost.vue')
//import popularRe from '@/components/popularRe.vue'
const popularRe = () => import('@/components/popularRe.vue')
//import Event from '@/components/Event.vue'
const Event = () => import('@/components/Event.vue')
//import FooterCap from '@/components/FooterCap.vue'
const FooterCap = () => import('@/components/FooterCap.vue')

export default {
    name: 'Home',
    components: {
        FrontPage,
        BlogPost,
		popularRe,
		Event,
		FooterCap
    }
}
</script>

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
import FrontPage from '@/components/FrontPage.vue'
import BlogPost from '@/components/BlogPost.vue'
import popularRe from '@/components/popularRe.vue'
import Event from '@/components/Event.vue'
import FooterCap from '@/components/FooterCap.vue'

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

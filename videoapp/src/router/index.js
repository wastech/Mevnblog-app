import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewPost from "@/components/ViewPost.vue"
import Customer from '@/components/Customer.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/post/:Pid',
        name: 'viewpost',
        component: ViewPost
    },
    {
        path: '/customer/:Hid',
        name: 'customer',
        component: Customer
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
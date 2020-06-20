import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewPost from "@/components/ViewPost.vue"
import CustomerViewPage from '@/components/CustomerViewPage.vue'
import addBlogPost from "@/admin/addBlogPost.vue";
import Admin from '@/admin/Admin.vue'
import Posts from '@/admin/Posts.vue';
import Login from "@/admin/Login.vue";
import Register from "@/admin/Register.vue";
import Subscribers from "@/admin/Subscribers.vue";
import AddNewEvent from "@/admin/AddNewEvent.vue";
import AddHistory from "@/admin/AddHistory.vue";
import addNewResouce from "@/admin/addNewResouce.vue";









Vue.use(VueRouter)

const routes = [
	{
		path: "/subscribers",
		name: "subscriber",
		component: Subscribers,
	},
	{
		path: "/addNewResouce",
		name: "addNewResouce",
		component: addNewResouce,
	},
	{
		path: "/addHistory",
		name: "AddHistory",
		component: AddHistory,
	},
	{
		path: "/addNewEvent",
		name: "AddNewEvent",
		component: AddNewEvent,
	},
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
	{
		path: "/post/:Pid",
		name: "viewpost",
		component: ViewPost,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/post",
		name: "posts",
		component: Posts,
	},
	{
		path: "/customer/:Hid",
		name: "customer",
		component: CustomerViewPage,
	},
	{
		path: "/addnewpost",
		name: "addnewpost",
		component: addBlogPost,
	},
	{
		path: "/admin",
		name: "admin",
		component: Admin,
	},
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
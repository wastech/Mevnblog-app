import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CustomerViewPage from '@/components/CustomerViewPage.vue'
import addBlogPost from "@/admin/addBlogPost.vue";
import Admin from '@/admin/Admin.vue'
import Posts from '@/admin/Posts.vue';
import Login from "@/admin/Login.vue";
import Register from "@/admin/Register.vue";
import Subscribers from "@/admin/Subscribers.vue";
import AddNewEvent from "@/admin/AddNewEvent.vue";
import AddHistory from "@/admin/AddHistory.vue";
import addNewArticle from "@/admin/addNewArticle.vue";
import Events from "@/admin/Events.vue";
import editEvent from "@/admin/editEvent.vue";
import viewEvent from "@/components/viewEvent.vue";
import viewHistory from "@/components/viewHistory.vue";
import viewBlog from "@/components/viewBlog.vue";
import viewPost from "@/components/viewPost.vue";


Vue.use(VueRouter)

const routes = [
	{
		path: "/subscribers",
		name: "subscriber",
		component: Subscribers,
	},
	{
		path: "/viewEvent/:title",
		name: "viewevent",
		component: viewEvent,
	},
	{
		path: "/viewpost/:title",
		name: "viewpost",
		component: viewPost,
	},
	{
		path: "/viewblog/:title",
		name: "viewblog",
		component: viewBlog,
	},
	{
		path: "/viewhistory/:title",
		name: "viewhistory",
		component: viewHistory,
	},
	{
		path: "/editEvent/:id",
		name: "editEvent",
		component: editEvent,
	},
	{
		path: "/events",
		name: "event",
		component: Events,
	},
	{
		path: "/addarticle",
		name: "article",
		component: addNewArticle,
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
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/posts",
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

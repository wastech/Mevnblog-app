import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
import viewPost from "@/components/viewPost.vue"
import viewEvent from "@/components/viewEvent.vue";
import viewHistory from "@/components/viewHistory.vue";
import viewBlog from "@/components/viewBlog.vue";
import Article from "@/page/Article.vue"
import Eventpage from "@/page/Eventpage.vue";
import Customerpage from "@/page/Customerpage.vue";

Vue.use(VueRouter)

const routes = [
	{
		path: "/customer-stories",
		name: "viewcustomer",
		component: Customerpage,
	},
	{
		path: "/events",
		name: "events",
		component: Eventpage,
	},
	{
		path: "/articles",
		name: "article",
		component: Article,
	},
	{
		path: "/subscribers",
		name: "subscriber",
		component: Subscribers,
	},
	{
		path: "/:title",
		name: "viewevent",
		component: viewEvent,
	},
	{
		path: "/:title",
		name: "viewblog",
		component: viewBlog,
	},
	{
		path: "/:title",
		name: "viewhistory",
		component: viewHistory,
	},
	{
		path: "/:title",
		name: "viewpost",
		component: viewPost,
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
		name: "addarticle",
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

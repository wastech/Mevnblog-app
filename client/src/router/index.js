import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue');
const addBlogPost = () => import('@/admin/addBlogPost.vue');
const Admin = () => import('@/admin/Admin.vue');
const Posts = () => import('@/admin/Posts.vue');
const Login = () => import('@/admin/Login.vue');
const Register = () => import('@/admin/Register.vue');
const Subscribers = () => import('@/admin/Subscribers.vue');
const AddNewEvent = () => import('@/admin/AddNewEvent.vue');
const AddHistory = () => import('@/admin/AddHistory.vue');
const addNewArticle = () => import('@/admin/addNewArticle.vue');
const Events = () => import('@/admin/Events.vue');
const editEvent = () => import('@/admin/editEvent.vue');
const viewPost = () => import('@/components/viewPost.vue');
const viewEvent = () => import('@/components/viewEvent.vue');
const viewHistory = () => import('@/components/viewHistory.vue');
const viewBlog = () => import('@/components/viewBlog.vue');
const Article = () => import('@/page/Article.vue');
const Eventpage = () => import('@/page/Eventpage.vue');
const Customerpage = () => import('@/page/Customerpage.vue');

Vue.use(VueRouter)

const routes = [
	
	{
		path: "/admin",
		name: "admin",
		component: Admin,
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
		path: "/customer-stories",
		name: "viewcustomer",
		component: Customerpage,
	},
	{
		path: "/eventpage",
		name: "eventpage",
		component: Eventpage,
	},
	{
		path: "/addNewEvent",
		name: "AddNewEvent",
		component: AddNewEvent,
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
		path: "/event/:title",
		name: "viewevent",
		component: viewEvent,
	},
	{
		path: "/blog/:title",
		name: "viewblog",
		component: viewBlog,
	},
	{
		path: "/history/:title",
		name: "viewhistory",
		component: viewHistory,
	},
	{
		path: "/article/:title",
		name: "viewpost",
		component: viewPost,
	},
	
	{
		path: "/editEvent/:id",
		name: "editEvent",
		component: editEvent,
	}
	
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

import Api from "@/services/Api";

export default {
	fetchPosts() {
		return Api().get("get_blogs");
	},
	getPost(params) {
		return Api().get("get_blog/" + params.id);
	},
	addPost(params) {
		return Api().post("save_blog", params);
	},
	updatePost(params) {
		return Api().put("update_blog/" + params.id, params);
	},
	deletePost(id) {
		return Api().delete("delete_blog/" + id);
	},
	getCategory(id) {
		return Api().get("get_blog_by_category/" + id);
	},
};

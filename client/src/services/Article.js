import Api from "@/services/Api";

export default {
	fetchPosts() {
		return Api().get("get_articles");
	},
	getPost(params) {
		return Api().get("get_article/" + params.id);
	},
	addPost(params) {
		return Api().post("save_article", params);
	},
	updatePost(params) {
		return Api().put("update_article/" + params.id, params);
	},
	deletePost(id) {
		return Api().delete("delete_article/" + id);
	},
	getCategory(id) {
		return Api().get("get_article_by_category/" + id);
	},
};

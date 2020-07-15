import Api from "@/services/Api";

export default {
	fetchPosts() {
		return Api().get("get_histories");
	},
	getPost(params) {
		return Api().get("get_history/" + params.id);
	},
	addPost(params) {
		return Api().post("save_history", params);
	},
	updatePost(params) {
		return Api().put("update_history/" + params.id, params);
	},
	deletePost(id) {
		return Api().delete("get_histories/" + id);
	},
	getCategory(id) {
		return Api().get("get_history_by_category/" + id);
	},
};

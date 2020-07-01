import Api from "@/services/Api";

export default {
	fetchPosts() {
		return Api().get("events");
	},
	getPost(params) {
		return Api().get("getevent/" + params.id);
	},
	addPost(params) {
		return Api().post("event", params);
	},
	updatePost(params) {
		return Api().put("updateevent/" + params.id, params);
	},
	deletePost(id) {
		return Api().delete("deleteevent/" + id);
	},
	getCategory(category) {
		return Api().get("get_event_by_category/" + category);
	},
};

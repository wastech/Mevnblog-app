import Api from "@/services/Api";

export default {
	fetchMails() {
		return Api().get("mails");
	},

	addMails(params) {
		return Api().post("mail", params);
	},

	deleteMail(id) {
		return Api().delete("deletemail/" + id);
	},

};

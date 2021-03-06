const Newsletter = require("../models/Newsletter");

module.exports = {
	 saveMail(req, res) {
		console.log("--save email--");
	 Newsletter.create(req.body, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "mail submitted successfully",
					data: data,
				});
				console.log(data)
			}
		});
	},
 getMails(req, res) {
		console.log("--getting mails--");
	 Newsletter.find({})
			.sort("-date")
			.exec((err, data) => {
				if (!err) {
					res.json({
						status: "success",
						message: "mail fetched successfully",
						data: data,
					});
				} else {
					res.json({
						status: "fail",
						message: "something went wrong",
					});
				}
			});
	},

	 deleteMail(req, res) {
		console.log("--deleting mail--");
	 Newsletter.deleteOne({ _id: req.params.id }, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "mail deleted successfully",
				});
			} else {
				res.json({
					status: "fail",
					message: "unable to delete",
				});
			}
		});
	},
}
